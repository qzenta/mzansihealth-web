import type { Metadata } from "next";
import PageBanner from "@/components/shared/PageBanner";
import TeamMemberCard from "@/components/shared/TeamMemberCard";
import { pageBanners, siteConfig, teamMembers } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Our Team",
  description: `Meet the caregivers behind ${siteConfig.name}.`,
};

export default function OurTeamPage() {
  return (
    <>
      <PageBanner title="Our Team" image={pageBanners.ourTeam} />
      <section className="relative overflow-hidden bg-neutral/40 py-16">
        <div className="bg-dot-texture-dark pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <p className="mx-auto max-w-2xl text-center text-foreground/80">
            Meet the team behind {siteConfig.name} — the people who&rsquo;ll be caring for you and
            your family.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
