"use client";

import { useEffect, useRef, useState } from "react";
import { CONFIG } from "../lib/config";
import { isSecret } from "../lib/date";
import { chime } from "../lib/chime";
import { LockIcon } from "./Icons";

export default function Welcome({ onUnlock }) {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState("idle"); 
  const [shake, setShake] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function submit(e) {
    e.preventDefault();
    if (status === "ok") return;
    if (isSecret(value)) {
      setStatus("ok");
      chime();
      setTimeout(onUnlock, 1000);
    } else {
      setStatus("wrong");
      setShake((n) => n + 1);
    }
  }

  const message =
    status === "ok"
      ? "Bienvenue."
      : status === "wrong"
        ? "Ce n'est pas la bonne date. Réessaie."
        : "";

  return (
    <main className="page">
      <LockIcon />
      <p className="eyebrow">Page privée</p>
      <h1 className="gate-title">Accès protégé</h1>
      <p className="lede">Pour continuer, entre la date demandée.</p>

      <form className="gate-form" onSubmit={submit} noValidate>
        <label htmlFor="date-secrete">Date</label>
        <div className={"gate-row" + (status === "wrong" ? " jab" : "")} key={shake}>
          <input
            id="date-secrete"
            ref={inputRef}
            type="text"
            autoComplete="off"
            placeholder="jj/mm/aaaa"
            value={value}
            aria-invalid={status === "wrong" ? "true" : "false"}
            aria-describedby="gate-msg"
            onChange={(e) => {
              setValue(e.target.value);
              if (status === "wrong") setStatus("idle");
            }}
          />
          <button className="btn" type="submit" disabled={status === "ok"}>
            Continuer
          </button>
        </div>
        <p id="gate-msg" className={"msg " + status} role="status" aria-live="polite">
          {message}
        </p>
        {CONFIG.hint ? <p className="hint">{CONFIG.hint}</p> : null}
      </form>
    </main>
  );
}
