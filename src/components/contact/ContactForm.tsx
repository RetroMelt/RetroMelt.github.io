"use client";

import { useState } from "react";
import FormField from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import RetroCard from "@/components/ui/RetroCard";
import { CONTACT_INFO } from "@/lib/constants";
import { contactMessage, messageToMailto, type ContactFormFields } from "@/lib/mailto";

const REASONS = [
  "Product enquiry",
  "Event enquiry",
  "Custom order",
  "Collaboration",
  "General question",
  "I remember a chocolate!",
  "Other",
];

const EMPTY: ContactFormFields = {
  name: "",
  email: "",
  phone: "",
  reason: REASONS[0],
  message: "",
};

export default function ContactForm() {
  const [fields, setFields] = useState<ContactFormFields>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  function update<K extends keyof ContactFormFields>(key: K, value: string) {
    setFields((prev) => ({ ...prev, [key]: value }));
  }

  const message = contactMessage(fields);

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
          Thank you for reaching out!
        </h3>
        <p className="mt-3 text-chocolate/80">
          Your email app should now be open with your message ready to send —
          hit send there and we&apos;ll get back to you soon.
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
          id="contact-name"
          label="Name"
          required
          value={fields.name}
          onChange={(e) => update("name", e.target.value)}
        />
        <FormField
          id="contact-email"
          label="Email"
          type="email"
          required
          value={fields.email}
          onChange={(e) => update("email", e.target.value)}
        />
        <FormField
          id="contact-phone"
          label="Phone"
          type="tel"
          value={fields.phone}
          onChange={(e) => update("phone", e.target.value)}
        />
        <FormField
          id="contact-reason"
          label="Reason For Contacting"
          as="select"
          required
          value={fields.reason}
          onChange={(e) => update("reason", e.target.value)}
          options={REASONS.map((r) => ({ value: r, label: r }))}
        />
      </div>

      <FormField
        id="contact-message"
        label="Message"
        as="textarea"
        required
        value={fields.message}
        onChange={(e) => update("message", e.target.value)}
      />

      <Button type="submit" className="self-center">
        Send Message
      </Button>
    </form>
  );
}
