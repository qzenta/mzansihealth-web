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
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <p className="mx-auto max-w-2xl text-center text-foreground/80">
          Meet the team behind {siteConfig.name} — the people who&rsquo;ll be caring for you and
          your family.
        </p>
        <div className="mx-auto mt-10 grid max-w-2xl gap-6 sm:grid-cols-2">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </section>
    </>
  );
}
