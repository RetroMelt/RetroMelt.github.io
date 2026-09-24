"use client";

import { useState } from "react";
import FormField from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import RetroCard from "@/components/ui/RetroCard";
import { CONTACT_INFO } from "@/lib/constants";
import { memoryMessage, messageToMailto, type MemoryFormFields } from "@/lib/mailto";

const EMPTY: MemoryFormFields = { name: "", email: "", memoryText: "" };

export default function MemoryForm() {
  const [fields, setFields] = useState<MemoryFormFields>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  function update<K extends keyof MemoryFormFields>(key: K, value: string) {
    setFields((prev) => ({ ...prev, [key]: value }));
  }

  const message = memoryMessage(fields);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.location.href = messageToMailto(CONTACT_INFO.email, message);
    setSubmitted(true);
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(
        `To: ${CONTACT_INFO.email}\nSubject: ${message.subject}\n\n${message.body}`
      );
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  if (submitted) {
    return (
      <RetroCard className="p-8 text-center">
        <h3 className="font-display text-2xl text-chocolate">
          Your memory is now part of RETROMELT. ❤️
        </h3>
        <p className="mt-3 text-chocolate/80">
          Your email app should now be open with your memory ready to send —
          hit send there to share it with us.
        </p>
        <button
          type="button"
          onClick={handleCopy}
          className="mt-4 text-sm underline text-caramel hover:text-chocolate"
        >
          {copied ? "Copied!" : "Didn't open? Copy details instead"}
        </button>
      </RetroCard>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="retro-card flex flex-col gap-5 p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField
          id="memory-name"
          label="Name"
          required
          value={fields.name}
          onChange={(e) => update("name", e.target.value)}
        />
        <FormField
          id="memory-email"
          label="Email"
          type="email"
          required
          value={fields.email}
          onChange={(e) => update("email", e.target.value)}
        />
      </div>

      <FormField
        id="memory-text"
        label="Your Memory"
        as="textarea"
        required
        placeholder="I haven't seen this since I was 10!"
        value={fields.memoryText}
        onChange={(e) => update("memoryText", e.target.value)}
      />

      <p className="text-sm text-chocolate/60">
        Have a photo? Attach it directly to the email once it opens.
      </p>

      <Button type="submit" className="self-center">
        Send A Memory ❤️
      </Button>
    </form>
  );
}
