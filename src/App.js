
import { Routes,Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { NotFound } from './Components/NotFound/NotFound';
import { PrivateRoute } from './Components/PrivateRoute';
import { Welcome } from './Components/Welcome/Welcome';
import { useAuth } from './context';
import { DashBoard } from './Pages/DashBoard/DashBoard';

function App() {
  const {user} =useAuth()
  return (
   <div>
       <Navbar/>
     <div className='flex-container'> 
      <Routes>
      <Route path="/home" element={<PrivateRoute><DashBoard/></PrivateRoute>}/>
        <Route path="/signin" element={!user?<Welcome/>:<PrivateRoute><DashBoard/></PrivateRoute>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
     </div>
   </div>
  );
}

export default App;
