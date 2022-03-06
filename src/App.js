import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchedData, setLoading } from "./actions";
import "./App.css";
import Layout from "./components/Layout";
import Cart from "./pages/Cart";
import Main from "./pages/Main";

function App() {
  const dispatch = useDispatch();
  const recievedData = useSelector((state) => state.data);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      const response = await fetch(
        "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68"
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not fetch data from server!");
      }
      dispatch(fetchedData(data));
      dispatch(setLoading(false));
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
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
