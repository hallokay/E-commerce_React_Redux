import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Layout,Home, Login, Register } from './pages';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
