import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Pokedex from '../pages/Pokedex';
import PokemonDetail from '../pages/PokemonDetail';
import NotFound from '../pages/NotFound';
import Toggle from './Toggle';

const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokedex" element={<Pokedex />} />
      <Route path="/pokemon/:id" element={<PokemonDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

  );
};

export default App;


// import { useState, useEffect, useContext } from 'react'
// import './App.css'
// import Modal from './Modal';
// import { ThemeContext } from './context/ThemeContext';
// import Toggle from './Toggle';
// import pokedexImg from './assets/pokedex.png'

// function App() {
//   const {theme, toggleTheme} = useContext(ThemeContext)
//   const [count, setCount] = useState(0)
//   const [currentPokemonImg, setCurrentPokemonImg] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [offset, setOffset] = useState(0);
//   const [pokemonList, setPokemonList] = useState([]);
//   const [selectedUrl, setSelectedUrl] = useState('')
//   const [isVisible, setVisible] = useState(false)
//   const [ability, setAbility] = useState([])
//   const [height, setHeight] = useState('')
//   const [types, setTypes] = useState([])
//   const [weight, setWeight] = useState('')
//   const [showModal, setShowModal] = useState(false);
//   const [currentPokemonImgBack,  setCurrentPokemonImgBack] = useState(null)

//   const pokemonUrl = `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`

//   useEffect(() => {
//     async function fetchPokemonList() {

//       try {
//         setError(null)
//         const response = await fetch(pokemonUrl);

//         if (!response.ok) {
//           throw new Error ('Error fetching pokemon list')
//         }

//         const allPokemon = await response.json()
//         setPokemonList(allPokemon.results)
//         setLoading(false)
//         console.log(offset)


//       }

//       catch (error) {
//         setError(error)

//       }

//     }
//     fetchPokemonList()
//   }, [offset])


//     async function fetchPokemon() {
//     try {
//       setError(null)
//       const response = await fetch(selectedUrl);
//       if(!response.ok) {
//         throw new Error ('Error fetching pokemon')
//       }

//       const pokemonSprite = await response.json()
//       setCurrentPokemonImg(pokemonSprite.sprites.front_shiny)
//       setCurrentPokemonImgBack(pokemonSprite.sprites.back_shiny)
//       setHeight(pokemonSprite.height)
//       setAbility(pokemonSprite.abilities.map((a)=> a.ability.name).join(', '))
//       setTypes(pokemonSprite.types.map((t)=> t.type.name).join(', '))
//       setWeight(pokemonSprite.weight)
//       setLoading(false)



//     }
//     catch (error) {
//       setError(error)

//     }
//   }
//   useEffect(() => {fetchPokemon()


//   }, [selectedUrl])





//   if (loading) {
//     return <div>Loading...</div>
//   }




//   return (

//     <Toggle>
//     <img className = 'pokedex-logo' src = {pokedexImg}/>
//      <div className = "page-buttons">
//             <button onClick={()=>setOffset(offset-12)} disabled ={offset===0}>⬅️</button>
//             <button onClick={()=>setOffset(offset+12)} disabled = {offset===1300}>➡️</button>
//           </div>

//         <div className="pokemon-grid">
//       {
//         pokemonList.map((pokemon) => {
//           const ending = pokemon.url.split('/');
//           const id = ending[ending.length - 2];

//           return (
//             <div className='card' key={id} onClick ={() => setSelectedUrl(pokemon.url) }>
//               <h3>{pokemon.name}</h3>
//               <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
//             </div>
//           );
//         })
//       }
//     </div>




//       <div>

//         <>

//         {selectedUrl && (
//         <Modal onClose={() => setSelectedUrl(null)}>
//           <img src = {currentPokemonImg}/>
//           <img src = {currentPokemonImgBack}/>
//           <div className='pokemon-details'>
//             <div>Height: {height/10}m</div>
//             <div>Weight: {weight/10}kg</div>
//             <div>Abilities: {ability}</div>
//             <div>Type(s): {types}</div>
//   </div>
//         </Modal>
//       )}
//       </>


//         </div>
//       </Toggle>


//   )
// }

// export default App
