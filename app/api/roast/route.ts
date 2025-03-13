import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/chat";

// OpenAI client for standard GPT models
const openaiClient = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// DeepSeek client using OpenAI compatibility layer
const deepseekClient = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY || process.env.OPENAI_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function POST(req: NextRequest) {
  try {
    const { description, intensity, modelProvider = "deepseek" } = await req.json();

    if (!description) {
      return NextResponse.json(
        { error: "Description is required" },
        { status: 400 }
      );
    }

    let intensityPrompt = "mild and lighthearted";
    if (intensity === "medium") {
      intensityPrompt = "moderately spicy but still friendly";
    } else if (intensity === "high") {
      intensityPrompt = "savage but still in good fun";
    }

    const messages: ChatCompletionMessageParam[] = [
      {
        role: "system",
        content: `You are a hilarious roast comedian. Your job is to create a ${intensityPrompt} roast based on the self-description provided. Keep it funny but not mean-spirited or offensive. Focus on light teasing rather than deeply personal attacks. The roast should be between 3-5 sentences.`,
      },
      {
        role: "user",
        content: `Please roast me based on this description: ${description}`,
      },
    ];

    // Determine which client and model to use
    let client, model;
    if (modelProvider === "openai") {
      client = openaiClient;
      model = "gpt-3.5-turbo";
    } else {
      client = deepseekClient;
      model = "deepseek/deepseek-chat:free";
    }

    const response = await client.chat.completions.create({
      model,
      messages,
      temperature: 0.7,
      max_tokens: 250,
    });

    const roast = response.choices[0]?.message.content || "Sorry, couldn't generate a roast at this time.";

    return NextResponse.json({ roast });
  } catch (error) {
    console.error("Error generating roast:", error);
    return NextResponse.json(
      { error: "Failed to generate roast" },
      { status: 500 }
    );
  }
} 