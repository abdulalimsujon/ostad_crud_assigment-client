
import './App.css';
import From from './pages/From';
import View from './pages/View';
import { Route, Routes } from 'react-router-dom';
import Update from './pages/Update';
// import From from './pages/From'

function App() {
  return (
    <div className='gap-96'>

      <From>

      </From>
      <View></View>

      <Routes>
        <Route path='user/:id' element={<Update></Update>}></Route>

      </Routes>
    </div>
  );
}

export default App;
