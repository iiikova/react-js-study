import { Routes, Route, Link } from "react-router-dom";
import Navigator from "./components/Navigator";
import Home from "./pages/Home";
import News from "./pages/News";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=lviv&appid=d7315ac6df6def5485ee1555379ac7d3`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setIsLoaded(true);
        setData(json);
      } catch (error) {
        setIsLoaded(true);
        throw new Error(error, "error");
      }
    };

    fetchData();
  }, []);

  const filterData = (event) => {
    return data.filter((user) => user.name.toLowerCase().includes(event));
  };

  const onChangeValue = (event) => {};

  return (
    <div className="bg-red-400 ">
      <Navigator />
      <Routes>
        <Route path="/home" element={<Home data={data} />} />
        <Route path="/news/" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
