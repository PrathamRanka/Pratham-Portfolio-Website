import { aboutGreetings, aboutItems, siteConfig } from "@/config/site";
import { AboutGreeting } from "./about-greeting";
import { AboutIllustration } from "./about-illustration";
import Link from "next/link";

export const About = () => {
  return (
    <section className="no-js-visible border-t border-dashed pt-4">
      <h2 className="section-heading mb-2 px-[21px] py-px font-serif text-[25px] leading-7 font-medium italic">
        <AboutGreeting
          fallback={siteConfig.about.title}
          greetings={aboutGreetings}
        />
      </h2>
      <p className="px-6 pb-2 text-sm leading-7 text-muted-foreground">
        Pratham Ranka is a Computer Engineering student at Thapar Institute of
        Engineering &amp; Technology and a software engineer focused on
        backend engineering, distributed systems, infrastructure, and
        full-stack development. He is open to software engineering internships,
        backend and infrastructure roles, and technical collaborations.
        <Link
          href="/resume"
          className="ml-1 text-foreground underline decoration-border/60 underline-offset-4"
        >
          View the resume.
        </Link>
      </p>
      <ul className="list-disc space-y-1.5 px-6 pb-2 pl-10 marker:text-muted-foreground/40">
        {aboutItems.map((item) => (
          <li
            key={item.id}
            className="pl-1 text-sm leading-7 text-muted-foreground"
          >
            <span className="font-medium text-foreground">{item.lead}</span>{" "}
            <AboutIllustration kind={item.illustration} /> {item.body}
          </li>
        ))}
      </ul>
    </section>
  );
};
