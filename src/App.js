import { Benefits, Header } from "./components";
import { Eco } from "./components/Eco/Eco";
import { Team } from "./components/Team/Team";
import { Main, Story } from "./pages";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Story />
      <Benefits />
      <Eco />
      <Team />
    </div>
  );
}

export default App;