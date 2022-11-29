import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./routes/home/home.component";
import ItemPage from "./components/item-page/item-page.component";
import Header from "./components/header/header.component";
import Root from "./routes/root/root.component";
import Auth from "./routes/auth/auth.component";
import Login from "./components/login/login.component";
import Signup from "./components/signup/signup.component";
import CategoryPage from "./components/category-page/category-page.component";
import { useDispatch } from "react-redux";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="/item-page/:product_id" element={<ItemPage />} />
          <Route path="/category/:category_name" element={<CategoryPage />} />
        </Route>
        <Route path="/auth" element={<Auth />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
