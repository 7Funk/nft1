<<<<<<< HEAD
import { Benefits, Header } from "./components";
import { Eco } from "./components/Eco/Eco";
import { Team } from "./components/Team/Team";
import { Main, Story } from "./pages";
=======
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";

import { FAQ, Main } from "./pages";
>>>>>>> main

function App() {
  return (
<<<<<<< HEAD
    <div>
      <Header />
      <Main />
      <Story />
      <Benefits />
      <Eco />
      <Team />
    </div>
=======
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Layout>
>>>>>>> main
  );
};

export default App;