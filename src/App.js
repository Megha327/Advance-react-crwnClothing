import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import NavigationBar from "./routes/navigation/Navigation.component";

export const Shop = () => {
  return ( <h1>I am Shop Component</h1>)
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element = {<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;