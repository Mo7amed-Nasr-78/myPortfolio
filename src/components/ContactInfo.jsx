import { useRef, useState } from "react";
import Button from "./Button.jsx";
import Eyebrow from "./Eyebrow.jsx";
import { contact, profile } from "../data/portfolio.js";

export default function ContactInfo() {
  const mailRef = useRef(null);
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      // Clipboard blocked: select the address so the visitor can copy it.
      const range = document.createRange();
      range.selectNodeContents(mailRef.current);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex min-w-0 flex-col gap-6">
      <Eyebrow>db.contact</Eyebrow>
      <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold">{contact.title}</h2>
      <p className="max-w-[44ch] text-muted">{contact.text}</p>

      <div className="flex flex-wrap items-center gap-2.5">
        <code ref={mailRef} className="select-all break-all rounded-lg border border-line bg-surface px-3.5 py-2.5 font-mono font-medium">
          {profile.email}
        </code>
        <Button variant="ghost" onClick={copyEmail}>
          {copied ? "Copied" : "Copy email"}
        </Button>
      </div>

      <div className="flex flex-wrap gap-[18px] font-semibold">
        <a className="underline underline-offset-4" href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a className="underline underline-offset-4" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  );
}
