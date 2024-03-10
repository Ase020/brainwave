import { Button, Heading, Section, Tagline } from ".";
import { check2, grid, loading1 } from "../assets";
import { roadmap } from "../constants";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading tag="Ready to get started" title="What we're working on" />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb[7rem]">
          {roadmap.map(
            ({ id, title, text, date, status, imageUrl, colorful }) => {
              const itemStatus = status === "done" ? "Done" : "In progress";
              return (
                <div
                  className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                    colorful ? "bg-conic-gradient" : "bg-n-6"
                  }`}
                  key={id}
                >
                  <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                    <div className="absolute top-0 left-0 max-w-full">
                      <img
                        src={grid}
                        alt="grid"
                        className="w-full"
                        width={550}
                        height={550}
                      />
                    </div>

                    <div className="relative z-1">
                      <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                        <Tagline>{date}</Tagline>

                        <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                          <img
                            src={status === "done" ? check2 : loading1}
                            alt={itemStatus}
                            className="mr-2.5"
                            width={16}
                            height={16}
                          />

                          <div className="tagline">{itemStatus}</div>
                        </div>
                      </div>

                      <div className="mb-10 -my-10 -mx-15">
                        <img
                          src={imageUrl}
                          alt={title}
                          className="w-full"
                          width={630}
                          height={420}
                        />
                      </div>

                      <h4 className="h4 mb-4">{title}</h4>

                      <p className="body-2 text-n-4">{text}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}

          <Gradient />
        </div>

        <div className="flex justify-center mt-12 md:mt-32 xl:mt-40">
          <Button href="/roadmap">Our roadmap</Button>
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
