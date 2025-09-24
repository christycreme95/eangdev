"use client";
import { useState, useEffect } from "react";
import IntroText from "./intro-text";

export default function Site() {

  return (
    <main className="flex-grow flex items-center justify-center text-xl">
      <IntroText/>
    </main>
  );
}
