import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom"
import Homepage from './components/Homepage';
import ListBeers from './components/ListBeers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import SingleBeer from './components/SingleBeer';

function App() {



  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/beers' element={<ListBeers />}></Route>
      <Route path='/beers/:id' element={<SingleBeer />}></Route>
      <Route path='/new-beer' element={<NewBeer />}></Route>
      <Route path='/random-beer' element={<RandomBeer />}></Route>
    </Routes>
    </div>
  );
}

export default App;
