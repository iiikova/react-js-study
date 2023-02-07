import { Outlet, Route, Routes } from "react-router-dom";
import Navigator from "./components/Navigator";
import Home from "./pages/Home/Index";
import News from "./pages/News";
import HOCS from "./pages/HOCS";
import TypeScriptPractice from "./pages/TypeScriptPractice.tsx";
import { useState } from "react";
import { NameContext } from "./Context";
import { ContextProvider } from "./Context";

function App() {
  const [name, setName] = useState("ihor");

  const init = {
    count: 0,
  };

  return (
    <ContextProvider>
      <div>
        <Navigator />
        <Routes>
          <Route path="home" element={
          
          <Home init={init} />} />
          <Route path="news" element={<News />} />
          <Route path="hocs" element={<HOCS />} />
          <Route path="ts" element={<TypeScriptPractice />} />
        </Routes>
        <Outlet />
      </div>
    </ContextProvider>
  );
}

export default App;
