
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/header/Header';
import SearchW from './component/search/SearchW';


function App(props) {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path='/search/*' element={ <SearchW/>}/>
    </Routes>
    </div>
  );
}

export default App;
