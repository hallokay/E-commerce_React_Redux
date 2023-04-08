import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Layout,Home } from './pages';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index path="/" element={<Home/>}/>
      </Route>
    </Routes>
  );
}

export default App;
