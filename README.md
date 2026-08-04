# Mzansi HealthCare — Website

Marketing website for Mzansi HealthCare (www.mzansihealth.co.za), built against PRD-001.

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

## Site status

**Live** — the holding-page pause (`middleware.ts`, added 13 Jul 2026 per Lizzy's request) was lifted 4 Aug 2026 for go-live. DNS, email routing, Brevo, and the contact form were unaffected throughout.

## Content status

Real address, contact details, About Us narrative, and team names/roles/bios/photos are all in from the client's Website Draft. Still pending real client material:

- Hero, service-card, and Gallery photos are free-license stock (Pexels), marked with `TODO` comments in `lib/site-config.ts` — swap for real client/patient photos once received
- Privacy Policy, Terms, POPIA, and Consent pages carry template-based generic legal text (SA SMB/healthcare pattern) — not a final lawyer-reviewed policy
- Social links are placeholder (`#`) hrefs — Daniel confirmed no real Mzansi social accounts exist yet
- Nav/footer use a text wordmark instead of a logo image (no logo supplied)

Swap in real content via `lib/site-config.ts` (site copy, services, team members) once it lands — no structural changes needed.

## Deployment

Deploy to Vercel, point Cloudflare DNS at it (A record `76.76.21.21` + CNAME `cname.vercel-dns.com`, or NS delegation), then set the environment variables above in the Vercel project settings.

## Notes

- CSP in `next.config.ts` allows `'unsafe-eval'` only outside production — Next's dev-mode HMR needs it, and a strict CSP silently breaks hydration without a console error if this is missed (bit the BKGL build).
- Contact form includes a hidden honeypot field (`website`) for basic spam protection.
