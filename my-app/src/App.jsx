
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './routes/PrivateRoute';
import Navbar from './components/Navbar';
function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoute/>}>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
