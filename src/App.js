import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout, Home, Login, Register, Account } from "./pages";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();

  const isLogin = useSelector(state => state.auth.isLogin);
  const cartItems = useSelector(state => state.cart.itemList)
console.log("isLogin", isLogin);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [isLogin]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
         <Route path="/account" element={<Account />} />

        <Route path="/login" element={<Login />} />

      </Route>

    </Routes>
  );
}

export default App;
