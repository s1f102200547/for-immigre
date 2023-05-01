import Start from '../routes/Start';
import Ready from '../routes/Ready';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Start />}/>
        <Route path='ready' element={<Ready />}/>
      </Routes>
    </>
  );
}

export default App;
