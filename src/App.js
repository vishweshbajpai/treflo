import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchedData } from "./actions";
import "./App.css";
import Layout from "./components/Layout";
import Main from "./components/Main";

function App() {
  const dispatch = useDispatch();
  const recievedData = useSelector((state) => state.data);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68"
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not fetch data from server!");
      }
      dispatch(fetchedData(data));
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    console.log(recievedData);
  }, [recievedData]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
