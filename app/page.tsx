"use client";

import { Opening } from "./sections/Opening";
import { Chapter1 } from "./sections/Chapter1";
import { Chapter2 } from "./sections/Chapter2";
import { Chapter3 } from "./sections/Chapter3";
import { Chapter4 } from "./sections/Chapter4";
import { Chapter5 } from "./sections/Chapter5";
import { Chapter6 } from "./sections/Chapter6";
import { Chapter7 } from "./sections/Chapter7";
import { Chapter8 } from "./sections/Chapter8";
import { FinalPage } from "./sections/FinalPage";
import { AudioControls } from "./components/AudioControls";
import { ScrollProgress } from "./components/ScrollProgress";

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
