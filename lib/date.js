import { CONFIG } from "./config";

const MONTHS = {
  janvier: 1, fevrier: 2, mars: 3, avril: 4, mai: 5, juin: 6,
  juillet: 7, aout: 8, septembre: 9, octobre: 10, novembre: 11, decembre: 12,
};

// Comprend 07/07/2009, 7-7-2009, 7 juillet 2009, 07072009 et 2009-07-07
export function parseDate(input) {
  const s = String(input)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim();
  let m;

  if ((m = s.match(/^(\d{1,2})(?:er)?\s+([a-z]+)\s+(\d{4})$/))) {
    const mo = MONTHS[m[2]];
    return mo ? { d: +m[1], m: mo, y: +m[3] } : null;
  }
  if ((m = s.match(/^(\d{4})\D+(\d{1,2})\D+(\d{1,2})$/))) {
    return { d: +m[3], m: +m[2], y: +m[1] };
  }
  if ((m = s.match(/^(\d{1,2})\D+(\d{1,2})\D+(\d{4})$/))) {
    return { d: +m[1], m: +m[2], y: +m[3] };
  }
  if ((m = s.match(/^(\d{2})(\d{2})(\d{4})$/))) {
    return { d: +m[1], m: +m[2], y: +m[3] };
  }
  return null;
}

export function isSecret(input) {
  const p = parseDate(input);
  const k = CONFIG.secret;
  return !!p && p.d === k.d && p.m === k.m && p.y === k.y;
}
