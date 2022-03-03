import { Route, Routes } from "react-router-dom";

import { Layout } from "./components";
import { FAQ, Main } from "./pages";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Layout>
  );
};

export default App;