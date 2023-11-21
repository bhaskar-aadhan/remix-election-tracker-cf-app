import type { MetaFunction } from "@remix-run/cloudflare";
import { Dropdown } from '../components/ElectionTracker';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-center text-[5rem] text-orange-500">Jai Vinayaka</h1>
      <Dropdown />
    </div>
  );
}
