"use client";

import { useRef, useState } from "react";
import { services } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const hasStarted = useRef(false);

  function handleFormFocus() {
    if (hasStarted.current) return;
    hasStarted.current = true;
    trackEvent("care_assessment_start");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          location: formData.get("location"),
          service: formData.get("service"),
          startDate: formData.get("startDate"),
          careArrangement: formData.get("careArrangement"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      trackEvent("care_assessment_submit");
      trackEvent("contact_submit");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} onFocus={handleFormFocus} className="max-w-xl space-y-4">
      <label className="block text-sm font-medium text-foreground">
        Name
        <input
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-lg border border-foreground/15 bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </label>

      <label className="block text-sm font-medium text-foreground">
        Phone
        <input
          name="phone"
          type="tel"
          required
          className="mt-1 w-full rounded-lg border border-foreground/15 bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </label>

      <label className="block text-sm font-medium text-foreground">
        Email
        <input
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-lg border border-foreground/15 bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </label>

      <label className="block text-sm font-medium text-foreground">
        Location
        <input
          name="location"
          type="text"
          placeholder="Suburb / town"
          required
          className="mt-1 w-full rounded-lg border border-foreground/15 bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </label>

      <label className="block text-sm font-medium text-foreground">
        Service Required
        <select
          name="service"
          required
          defaultValue=""
          className="mt-1 w-full rounded-lg border border-foreground/15 bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.name}>
              {service.name}
            </option>
          ))}
          <option value="General enquiry">General enquiry</option>
        </select>
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-foreground">
          Preferred Start Date
          <input
            name="startDate"
            type="date"
            className="mt-1 w-full rounded-lg border border-foreground/15 bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </label>

        <label className="block text-sm font-medium text-foreground">
          Preferred Care Arrangement
          <select
            name="careArrangement"
            defaultValue=""
            className="mt-1 w-full rounded-lg border border-foreground/15 bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="">Not sure yet</option>
            <option value="A few hours a day">A few hours a day</option>
            <option value="Daily visits">Daily visits</option>
            <option value="24-hour live-in">24-hour live-in</option>
          </select>
        </label>
      </div>

      <label className="block text-sm font-medium text-foreground">
        Additional Information
        <textarea
          name="message"
          rows={4}
          className="mt-1 w-full rounded-lg border border-foreground/15 bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </label>

      {/* Honeypot field — hidden from real users via CSS, bots tend to fill every field */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Request a Care Assessment"}
      </button>

      {status === "success" && (
        <p className="text-sm text-primary">
          Thanks — we&rsquo;ve received your message and will be in touch shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong — please try WhatsApp instead.
        </p>
      )}
    </form>
  );
}
