import { pricing } from "../constants";
import { Button } from ".";
import { check } from "../assets";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map(({ id, title, description, price, features }) => (
        <div
          key={id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:m-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
          id={id}
        >
          <h4 className="h4 mb-4">{title}</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">{description}</p>

          <div className="flex items-center h-[5.5rem] mb-6">
            {price && (
              <>
                <h3 className="h3">$</h3>
                <span className="text-[5.5rem] leading-none font-bold">
                  {price}
                </span>
              </>
            )}
          </div>

          <Button
            className="w-full mb-6"
            href={price ? "/pricing" : "mailto:felixasejunior@gmail.com"}
            white={!!price}
          >
            {price ? "Get started" : "Contact us"}
          </Button>

          <ul className="">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start pt-5 border-t border-n-6"
              >
                <img src={check} alt="check" width={24} height={24} />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
