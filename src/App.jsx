import ButtonGradient from "./assets/svg/ButtonGradient";
import {
  Benefits,
  Collaboration,
  Header,
  Hero,
  Pricing,
  Services,
} from "./components";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
      </div>

      <ButtonGradient />
    </>
  );
}

export default App;
