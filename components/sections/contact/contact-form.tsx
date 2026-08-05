"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contact } from "@/lib/content/contact";

type FormState = {
  name: string;
  email: string;
  message: string;
  company: string;
};
type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
  company: "",
};

function validate(state: FormState): Errors {
  const errors: Errors = {};
  if (!state.name.trim()) errors.name = "Enter your name.";
  if (!state.email.trim()) {
    errors.email = "Enter your email.";
  } else if (!/^\S+@\S+\.\S+$/.test(state.email)) {
    errors.email = "Enter a valid email.";
  }
  if (!state.message.trim()) errors.message = "Enter a message.";
  return errors;
}

/**
 * Contact form — §9.11/§29. No email-delivery backend is wired up yet, so
 * submission opens a pre-filled mailto: as the working delivery mechanism
 * (never a dead end) rather than faking a "message sent" success state.
 * Swap for a real server action (Resend, etc.) once that's set up.
 */
export function ContactForm() {
  const [state, setState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot — real users never fill this in.
    if (state.company) return;

    const validationErrors = validate(state);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const subject = encodeURIComponent(`Portfolio contact from ${state.name}`);
    const body = encodeURIComponent(
      `${state.message}\n\n— ${state.name} (${state.email})`,
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={state.name}
          onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-destructive text-sm">
            {errors.name}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={state.email}
          onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-destructive text-sm">
            {errors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={5}
          value={state.message}
          onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-destructive text-sm">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot — hidden from sighted users and screen readers */}
      <div aria-hidden className="absolute left-[-9999px]">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          tabIndex={-1}
          autoComplete="off"
          value={state.company}
          onChange={(e) => setState((s) => ({ ...s, company: e.target.value }))}
        />
      </div>

      <Button type="submit" size="lg" className="mt-2 self-start">
        Send message
      </Button>

      {submitted && (
        <p role="status" className="text-text-secondary text-sm">
          Opening your email client with the message pre-filled — if nothing
          happened, email me directly at {contact.email}.
        </p>
      )}
    </form>
  );
}
