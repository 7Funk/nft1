import { Route, Routes } from "react-router-dom";

import { Layout } from "./components";
import { FAQ, Main, Contacts } from "./pages";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Layout>
  );
};

export default App;