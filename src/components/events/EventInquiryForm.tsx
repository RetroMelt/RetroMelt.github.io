"use client";

import { useState } from "react";
import FormField from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import RetroCard from "@/components/ui/RetroCard";
import { CONTACT_INFO } from "@/lib/constants";
import { eventEnquiryMessage, messageToMailto, type EventFormFields } from "@/lib/mailto";

const EMPTY: EventFormFields = {
  name: "",
  email: "",
  phone: "",
  eventType: "",
  eventDate: "",
  location: "",
  guestCount: "",
  lookingFor: "",
  message: "",
};

export default function EventInquiryForm() {
  const [fields, setFields] = useState<EventFormFields>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  function update<K extends keyof EventFormFields>(key: K, value: string) {
    setFields((prev) => ({ ...prev, [key]: value }));
  }

  const message = eventEnquiryMessage(fields);

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
          Thank you! Your event enquiry has been received.
        </h3>
        <p className="mt-3 text-chocolate/80">
          Your email app should now be open with your enquiry ready to send —
          hit send there and we&apos;ll be in touch soon.
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
          id="event-name"
          label="Name"
          required
          value={fields.name}
          onChange={(e) => update("name", e.target.value)}
        />
        <FormField
          id="event-email"
          label="Email"
          type="email"
          required
          value={fields.email}
          onChange={(e) => update("email", e.target.value)}
        />
        <FormField
          id="event-phone"
          label="Phone"
          type="tel"
          value={fields.phone}
          onChange={(e) => update("phone", e.target.value)}
        />
        <FormField
          id="event-type"
          label="Event Type"
          required
          placeholder="Birthday, wedding, corporate..."
          value={fields.eventType}
          onChange={(e) => update("eventType", e.target.value)}
        />
        <FormField
          id="event-date"
          label="Event Date"
          type="date"
          value={fields.eventDate}
          onChange={(e) => update("eventDate", e.target.value)}
        />
        <FormField
          id="event-location"
          label="Location"
          value={fields.location}
          onChange={(e) => update("location", e.target.value)}
        />
        <FormField
          id="event-guests"
          label="Approximate Number of Guests"
          value={fields.guestCount}
          onChange={(e) => update("guestCount", e.target.value)}
        />
        <FormField
          id="event-looking-for"
          label="What Are You Looking For?"
          placeholder="Candy table, return gifts, bulk treats..."
          value={fields.lookingFor}
          onChange={(e) => update("lookingFor", e.target.value)}
        />
      </div>

      <FormField
        id="event-message"
        label="Additional Message"
        as="textarea"
        value={fields.message}
        onChange={(e) => update("message", e.target.value)}
      />

      <Button type="submit" className="self-center">
        Send Event Enquiry
      </Button>
    </form>
  );
}
