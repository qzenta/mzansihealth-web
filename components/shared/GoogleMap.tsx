import { siteConfig } from "@/lib/site-config";

export default function GoogleMap() {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.mapQuery)}&output=embed`;

  return (
    <div className="overflow-hidden rounded-2xl border border-neutral shadow-sm">
      <iframe
        src={src}
        title={`Map of ${siteConfig.address}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-64 w-full border-0 sm:h-96 lg:h-[480px]"
      />
    </div>
  );
}
