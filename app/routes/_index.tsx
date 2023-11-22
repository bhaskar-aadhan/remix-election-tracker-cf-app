import { useState, useEffect } from "react";
import type { MetaFunction } from "@remix-run/cloudflare";
import { Election } from '../components/ElectionTracker';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [viewportWidth, setViewportWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const handleResize = () => {
    setViewportWidth(window.innerWidth);
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setViewportWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }
  }, [])
  return (
    <Election viewportWidth = {viewportWidth} />
  );
}
