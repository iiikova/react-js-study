import { Routes, Route, Outlet } from "react-router-dom";
import Navigator from "./components/Navigator";
import HOCS from "./pages/HOCS";
import Home from "./pages/Home";
import News from "./pages/News";
import UseReducerHook from "./hooks/useReducerHook";
import UseMemoHook from "./hooks/UseMemoHook";
import Hooks from "./pages/Hooks";
import CustomHooks from "./hooks/CustomHooks";
import UseContext from "./hooks/UseContext/UseContext";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className=" h-screen">
      <Navigator />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news/" element={<News />} />
        <Route path="/hocs/" element={<HOCS />} />
        <Route path="/hooks/" element={<Hooks />}>
          <Route path="usereducer/" element={<UseReducerHook />} />
          <Route path="usememo/" element={<UseMemoHook />} />
          <Route path="customHooks/" element={<CustomHooks />} />
          <Route path="useContext/" element={<UseContext />} />
        </Route>
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
