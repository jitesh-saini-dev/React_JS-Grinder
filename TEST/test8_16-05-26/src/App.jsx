import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Component/Header";
import Newuser from "./Component/Newuser";

const App = () => {
  return (
    <>
     
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Newuser />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
