import type { Metadata } from "next";
import PageBanner from "@/components/shared/PageBanner";
import TeamMemberCard from "@/components/shared/TeamMemberCard";
import { ourCaregivers, pageBanners, siteConfig, teamMembers } from "@/lib/site-config";
import { personSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Our Team",
  description: `Meet the caregivers behind ${siteConfig.name}.`,
};

export default function OurTeamPage() {
  return (
    <>
      {teamMembers.map((member) => (
        <script
          key={member.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema(member)) }}
        />
      ))}
      <PageBanner title="Our Team" image={pageBanners.ourTeam} tall />
      <section className="relative overflow-hidden bg-secondary/25 py-16">
        <div className="bg-dot-texture-dark pointer-events-none absolute inset-0 opacity-15" aria-hidden="true" />
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
          <div className="mt-8 rounded-2xl border border-secondary/30 bg-white p-6 text-center shadow-sm">
            <h2 className="text-lg font-semibold text-primary">{ourCaregivers.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">{ourCaregivers.description}</p>
          </div>
        </div>
      </section>
    </>
  );
}
