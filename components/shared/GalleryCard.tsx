interface GalleryCardProps {
  title: string;
  tag: string;
}

export default function GalleryCard({ title, tag }: GalleryCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-neutral bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div
        className="flex aspect-video items-center justify-center bg-gradient-to-br from-primary to-secondary text-white"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-10 w-10 fill-current opacity-80 transition-transform duration-300 group-hover:scale-110"
        >
          <path d="M4 6h3.17l1.42-1.6A2 2 0 0 1 10.11 3.6h3.78a2 2 0 0 1 1.52.8L16.83 6H20a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm8 4a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z" />
        </svg>
      </div>
      <div className="p-4">
        <p className="text-sm font-semibold text-primary">{tag}</p>
        <p className="mt-1 text-sm text-foreground/80">{title}</p>
        <p className="mt-1 text-xs text-foreground/50">Photo coming soon</p>
      </div>
    </div>
  );
}
