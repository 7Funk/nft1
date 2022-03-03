import { Route, Routes } from "react-router-dom";

import { Layout } from "./components";
import { Contacts, FAQ, Main } from "./pages";

function App() {
  return (
    <Layout>
      <Routes>
        <Route  path="/" element={<Main />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Layout>
  );
};

export default App;