import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout, Home, Login, Register, Account } from "./pages";
import { useSelector } from 'react-redux';

function App() {
  const isLogin = useSelector(state => state.auth.isLogin);
  const cartItems = useSelector(state => state.cart.itemList)

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {isLogin && (
          <Route path="/account" element={<Account />} />
        )}

      </Route>
    </Routes>
  );
}

export default App;
