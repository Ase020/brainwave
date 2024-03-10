import { Section } from ".";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          ©️ {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map(({ id, title, iconUrl, url }) => (
            <a
              key={id}
              href={url}
              className="flex items-center justify-center size-10 rounded-full bg-n-7 transition-colors hover:bg-n-6"
              target="_blank"
            >
              <img src={iconUrl} alt={title} width={16} height={16} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
