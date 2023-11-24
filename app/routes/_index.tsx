import { useState, useEffect } from "react";
import type { MetaFunction } from "@remix-run/cloudflare";
import { Election } from '../components/ElectionTracker';
import { WebscoketContext } from "~/services/context";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  //viewport finder logic
  // const [viewportWidth, setViewportWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  // const handleResize = () => {
  //   setViewportWidth(window.innerWidth);
  // };
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     setViewportWidth(window.innerWidth);
  //     window.addEventListener('resize', handleResize);

  //     return () => {
  //       window.removeEventListener('resize', handleResize);
  //     }
  //   }
  // }, [])

  if (!mounted) {
    return null; // return this null to avoid hydration errors
  }
  return (
    <WebscoketContext>
      <Election />
    </WebscoketContext>
  );
}
