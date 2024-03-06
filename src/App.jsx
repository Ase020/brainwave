import ButtonGradient from "./assets/svg/ButtonGradient";
import { Header } from "./components";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden border">
        <Header />
      </div>

      <ButtonGradient />
    </>
  );
}

export default App;