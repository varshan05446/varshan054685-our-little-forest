"use client";

import dynamic from "next/dynamic";
import { Opening } from "./sections/Opening";
import { AudioControls } from "./components/AudioControls";
import { ScrollProgress } from "./components/ScrollProgress";

// Code-split the story chapters so the initial bundle stays light.
// Each section is still rendered at build time for SEO and first paint.
const Chapter1 = dynamic(() => import("./sections/Chapter1").then((m) => m.Chapter1));
const Chapter2 = dynamic(() => import("./sections/Chapter2").then((m) => m.Chapter2));
const Chapter3 = dynamic(() => import("./sections/Chapter3").then((m) => m.Chapter3));
const Chapter4 = dynamic(() => import("./sections/Chapter4").then((m) => m.Chapter4));
const Chapter5 = dynamic(() => import("./sections/Chapter5").then((m) => m.Chapter5));
const Chapter6 = dynamic(() => import("./sections/Chapter6").then((m) => m.Chapter6));
const Chapter7 = dynamic(() => import("./sections/Chapter7").then((m) => m.Chapter7));
const Chapter8 = dynamic(() => import("./sections/Chapter8").then((m) => m.Chapter8));
const FinalPage = dynamic(() => import("./sections/FinalPage").then((m) => m.FinalPage));

/**
 * The full storybook experience, assembled in order.
 * Every section reads its content from config/site-content.ts.
 */
export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Opening />
      <Chapter1 />
      <Chapter2 />
      <Chapter3 />
      <Chapter4 />
      <Chapter5 />
      <Chapter6 />
      <Chapter7 />
      <Chapter8 />
      <FinalPage />
      <AudioControls />
    </main>
  );
}
