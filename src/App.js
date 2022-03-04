import { Route, Routes } from "react-router-dom";

import { Layout } from "./components";
import { Auction, Contacts, FAQ, Main } from "./pages";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/auction" element={<Auction />} />
      </Routes>
    </Layout>
  );
};

export default App;