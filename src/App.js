import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from './Pages/Main';
import { GarbageProvider } from './Providers/GarbageProvider';




function App() {
  return (
    <>
    <GarbageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}> </Route>


        </Routes> 
      </BrowserRouter>
    </GarbageProvider>
    </>
  );
}

export default App;
