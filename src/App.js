import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";

import { FAQ, Main } from "./pages";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Layout>
  );
};

export default App;
