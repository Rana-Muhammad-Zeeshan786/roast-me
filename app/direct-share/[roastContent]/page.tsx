
import { Redirect } from './redirect-client';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function DirectSharePage({ params }: { params: any }) {
  return <Redirect roastContent={params.roastContent} />;
} 