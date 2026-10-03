"use client";

import { CONFIG } from "../lib/config";
import { HeartIcon } from "./Icons";

export default function Letter({ onBack }) {
  let i = 0; 
  return (
    <main className="page letter">
      <p className="kicker">{CONFIG.kicker}</p>
      <h1 className="name">{CONFIG.name}</h1>
      <p className="subline">{CONFIG.subline}</p>
      <div className="flourish" aria-hidden="true">
        <HeartIcon />
      </div>

      <div className="body">
        {CONFIG.paragraphs.map((text, k) => (
          <p
            key={"a" + k}
            className={"para" + (k === 0 ? " first" : "")}
            style={{ "--i": i++ }}
          >
            {text}
          </p>
        ))}

        <p className="highlight" style={{ "--i": i++ }}>
          {CONFIG.highlight}
        </p>

        {CONFIG.afterHighlight.map((text, k) => (
          <p key={"b" + k} className="para" style={{ "--i": i++ }}>
            {text}
          </p>
        ))}

        <div className="para closing" style={{ "--i": i++ }}>
          <div className="sign">
            <p style={{ margin: 0 }}>{CONFIG.closing}</p>
            <p className="to">Dans ton coin,</p>
            <p className="who">{CONFIG.signature}</p>
          </div>
        </div>
      </div>

      <button className="btn-quiet" type="button" onClick={onBack}>
        Retour
      </button>
    </main>
  );
}
