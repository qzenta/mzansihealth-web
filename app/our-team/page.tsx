import type { Metadata } from "next";
import TeamMemberCard from "@/components/shared/TeamMemberCard";
import { siteConfig, teamMembers } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Our Team",
  description: `Meet the caregivers behind ${siteConfig.name}.`,
};

export default function OurTeamPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="text-center text-3xl font-bold text-primary sm:text-4xl">Our Team</h1>
      <p className="mx-auto mt-4 max-w-2xl text-center text-foreground/80">
        {/* Placeholder note per PRD-001 §6 — real photos/bios pending client content */}
        Meet the caregivers of {siteConfig.name}. Photos and full bios are being finalised — this
        page will be updated once the client supplies profile images and details.
      </p>
      <div className="mx-auto mt-10 grid max-w-2xl gap-6 sm:grid-cols-2">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
}
