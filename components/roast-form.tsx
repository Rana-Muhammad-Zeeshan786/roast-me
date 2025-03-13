"use client";


import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";

// Define form schema
const formSchema = z.object({
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long")
    .max(500, "Description must be less than 500 characters"),
  intensity: z.number().min(0).max(100),
  modelProvider: z.enum(["deepseek", "openai"]).default("deepseek"),
});

type RoastFormProps = {
  onRoastGenerated: (roast: string) => void;
  setIsLoading: (loading: boolean) => void;
  setModelProvider: Dispatch<SetStateAction<string>>;
};

export function RoastForm({ onRoastGenerated, setIsLoading, setModelProvider }: RoastFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      intensity: 50,
      modelProvider: "deepseek",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      // Map intensity to categorical values
      let intensityLevel = "low";
      if (values.intensity > 33 && values.intensity <= 66) {
        intensityLevel = "medium";
      } else if (values.intensity > 66) {
        intensityLevel = "high";
      }

      // Update the model provider in the parent component
      setModelProvider(values.modelProvider);

      const response = await fetch("/api/roast", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          description: values.description,
          intensity: intensityLevel,
          modelProvider: values.modelProvider,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate roast");
      }

      const data = await response.json();
      onRoastGenerated(data.roast);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to generate roast. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Describe Yourself</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about yourself, your hobbies, quirks, or anything you'd like to be 'roasted' about..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                The more details you provide, the funnier the roast will be!
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="modelProvider"
            render={({ field }) => (
              <FormItem>
                <FormLabel>AI Model</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select AI Model" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="deepseek">DeepSeek Chat</SelectItem>
                    {/* <SelectItem value="openai">OpenAI GPT</SelectItem> */}
                  </SelectContent>
                </Select>
                <FormDescription>
                  Choose which AI model will generate your roast.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="intensity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Roast Intensity</FormLabel>
                <FormControl>
                  <div className="space-y-2">
                    <Slider
                      value={[field.value]}
                      onValueChange={(values) => field.onChange(values[0])}
                      max={100}
                      step={1}
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Friendly Burn</span>
                      <span>Medium Heat</span>
                      <span>Savage Mode</span>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full">
          Roast Me!
        </Button>
      </form>
    </Form>
  );
} 