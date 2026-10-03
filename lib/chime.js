// Petite note de cristal quand la porte s'ouvre (le navigateur exige un clic avant de jouer un son)
export function chime() {
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = new AC();
    [659.25, 830.61, 987.77, 1318.51].forEach((f, i) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "sine";
      o.frequency.value = f;
      const t0 = ctx.currentTime + i * 0.16;
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(0.09, t0 + 0.03);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + 1.8);
      o.connect(g);
      g.connect(ctx.destination);
      o.start(t0);
      o.stop(t0 + 1.9);
    });
  } catch {
    // le son est un bonus
  }
}
