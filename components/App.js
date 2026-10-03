"use client";

import { useEffect, useState } from "react";
import Welcome from "./Welcome";
import Letter from "./Letter";
import Petals from "./Petals";

export default function App() {
  const [unlocked, setUnlocked] = useState(false);

  // Le thème romantique s'applique à tout le <body> une fois la date trouvée
  useEffect(() => {
    document.body.classList.toggle("romance", unlocked);
    window.scrollTo(0, 0);
    return () => document.body.classList.remove("romance");
  }, [unlocked]);

  if (!unlocked) {
    return <Welcome onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <>
      <div className="haze" aria-hidden="true" />
      <Petals />
      <Letter onBack={() => setUnlocked(false)} />
    </>
  );
}
