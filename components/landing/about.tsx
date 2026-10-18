import { aboutGreetings, aboutItems, siteConfig } from "@/config/site";
import { AboutGreeting } from "./about-greeting";
import { AboutIllustration } from "./about-illustration";

export const About = () => {
  return (
    <section className="no-js-visible border-t border-dashed pt-4">
      <h2 className="section-heading mb-2 px-[21px] py-px font-serif text-[25px] leading-7 font-medium italic">
        <AboutGreeting
          fallback={siteConfig.about.title}
          greetings={aboutGreetings}
        />
      </h2>
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
