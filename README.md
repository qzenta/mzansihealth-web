# Mzansi Healthcare — Website

Marketing website for Mzansi Healthcare (www.mzansihealth.co.za), built against PRD-001.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Vercel · Cloudflare DNS · Brevo (contact form email) · Google Analytics · Google Search Console.

## Local development

```bash
npm install
cp .env.example .env.local   # fill in real values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

See `.env.example`. `BREVO_API_KEY` is required for the contact form to send email — without it, `POST /api/contact` returns a 502.

## Content status

Real logo, service copy, About Us narrative, team photos/bios, and final contact-hours confirmation are **pending client content** (requested 10 July 2026). Until then:

- Team section uses initial-avatar placeholders (sanctioned by PRD-001 §6)
- Services/About copy is placeholder text, structured to match the final content shape
- Nav/footer use a text wordmark instead of a logo image

Swap in real content via `lib/site-config.ts` (site copy, services, team members) once it lands — no structural changes needed.

## Deployment

Deploy to Vercel, point Cloudflare DNS at it (A record `76.76.21.21` + CNAME `cname.vercel-dns.com`, or NS delegation), then set the environment variables above in the Vercel project settings.

## Notes

- CSP in `next.config.ts` allows `'unsafe-eval'` only outside production — Next's dev-mode HMR needs it, and a strict CSP silently breaks hydration without a console error if this is missed (bit the BKGL build).
- Contact form includes a hidden honeypot field (`website`) for basic spam protection.
