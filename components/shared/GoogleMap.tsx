import { siteConfig } from "@/lib/site-config";

export default function GoogleMap() {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.mapQuery)}&output=embed`;

  return (
    <iframe
      src={src}
      title={`Map of ${siteConfig.address}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="h-56 w-full border-0 sm:h-72 lg:h-80"
    />
  );
}
