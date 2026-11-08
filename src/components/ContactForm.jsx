import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button.jsx";

const fieldClass =
  "w-full rounded-lg border border-line bg-bg px-3.5 py-3 font-body text-base text-fg focus:border-accent focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-accent";
const labelClass = "flex flex-col gap-1.5 font-mono text-[.8rem] font-medium text-muted";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [note, setNote] = useState("");

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  function onSubmit(e) {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      setNote("Fill in your name, a valid email and a message.");
      return;
    }
    // Connect your Express route here, for example:
    // await fetch("/api/contact", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });
    setNote("This preview form does not send anything yet. Connect it to your Express route to receive messages.");
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex min-w-0 flex-col gap-4 rounded-xl border border-line bg-surface p-[26px]">
      <label htmlFor="f-name" className={labelClass}>
        Name
        <input id="f-name" name="name" type="text" autoComplete="name" required value={form.name} onChange={update} className={fieldClass} />
      </label>
      <label htmlFor="f-email" className={labelClass}>
        Email
        <input id="f-email" name="email" type="email" autoComplete="email" required value={form.email} onChange={update} className={fieldClass} />
      </label>
      <label htmlFor="f-message" className={labelClass}>
        Message
        <textarea id="f-message" name="message" required value={form.message} onChange={update} className={`${fieldClass} min-h-[130px] resize-y`} />
      </label>
      <Button type="submit">Send message</Button>
      <div className="min-h-[1.4em]" role="status">
        <AnimatePresence mode="wait">
          {note && (
            <motion.p
              key={note}
              className="text-[.88rem] text-muted"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {note}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
