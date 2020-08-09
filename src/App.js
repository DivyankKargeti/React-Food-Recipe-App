import React , {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Axios from "axios";

function App() {
  //state for Search Input
  const [search, setSearch] = useState("cake");//Initially search for 'cake' recipe
  //state for Recipe Search API
  const [recipes, setRecipes] = useState([]); //initially empty array

  const onInputChange = (e) =>{
    setSearch(e.target.value);
  }

  const App_ID = "5680468e";
  const App_KEY = "cb0643115cbdb9545440c963289597cc";
  
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${App_ID}&app_key=${App_KEY}`
    );
    setRecipes(res.data.hits);
  };

  const onSearchClick = () =>{
    getRecipes();
  };
  return (
    <div className="App">
      <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick}/>
      <div className="container">
        <Recipes recipes={recipes}/>
      </div>
    </div>
  );
}

export default App;
