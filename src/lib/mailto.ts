import { CONTACT_INFO } from "@/lib/constants";
import type { Product } from "@/types";

type Message = { subject: string; body: string };

// URLSearchParams encodes spaces as "+", which some mail clients (notably
// Gmail's web compose) render literally instead of as spaces — swap to %20.
export function messageToMailto(to: string, { subject, body }: Message): string {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${to}?${params.toString().replace(/\+/g, "%20")}`;
}

export function productEnquiryMessage(product: Product): Message {
  const subject =
    product.enquiryEmailSubject ??
    `RETROMELT Product Enquiry — ${product.name}`;
  const body = `Hi RETROMELT,\n\nI'm interested in ${product.name}.\n\nPlease let me know about availability and ordering.\n\nThank you.`;
  return { subject, body };
}

export function buildProductEnquiryMailto(product: Product): string {
  return messageToMailto(CONTACT_INFO.email, productEnquiryMessage(product));
}

export type EventFormFields = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  guestCount: string;
  lookingFor: string;
  message: string;
};

export function eventEnquiryMessage(fields: EventFormFields): Message {
  const subject = "RETROMELT Event Enquiry";
  const body = [
    "Hi RETROMELT,",
    "",
    "I'd like to enquire about having RETROMELT at my event.",
    "",
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Phone: ${fields.phone}`,
    `Event type: ${fields.eventType}`,
    `Event date: ${fields.eventDate}`,
    `Location: ${fields.location}`,
    `Approximate number of guests: ${fields.guestCount}`,
    `Looking for: ${fields.lookingFor}`,
    "",
    fields.message ? `Additional message:\n${fields.message}` : "",
    "",
    "Thank you.",
  ]
    .filter((line) => line !== "")
    .join("\n");
  return { subject, body };
}

export function buildEventEnquiryMailto(fields: EventFormFields): string {
  return messageToMailto(CONTACT_INFO.email, eventEnquiryMessage(fields));
}

export type ContactFormFields = {
  name: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
};

export function contactMessage(fields: ContactFormFields): Message {
  const subject = `RETROMELT Contact — ${fields.reason}`;
  const body = [
    "Hi RETROMELT,",
    "",
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Phone: ${fields.phone}`,
    `Reason: ${fields.reason}`,
    "",
    fields.message,
  ].join("\n");
  return { subject, body };
}

export function buildContactMailto(fields: ContactFormFields): string {
  return messageToMailto(CONTACT_INFO.email, contactMessage(fields));
}

export type MemoryFormFields = {
  name: string;
  email: string;
  memoryText: string;
};

export function memoryMessage(fields: MemoryFormFields): Message {
  const subject = "RETROMELT Memory Wall Submission";
  const body = [
    "Hi RETROMELT,",
    "",
    "I'd like to share a memory for the Memory Wall.",
    "",
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    "",
    `My memory:\n${fields.memoryText}`,
    "",
    "(If you'd like to share a photo, please attach it to this email before sending.)",
  ].join("\n");
  return { subject, body };
}

export function buildMemoryMailto(fields: MemoryFormFields): string {
  return messageToMailto(CONTACT_INFO.email, memoryMessage(fields));
}
