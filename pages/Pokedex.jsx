import { ThemeContext } from '../src/context/ThemeContext';
import Toggle from '../src/Toggle';
import pokedexImg from '../src/assets/Pokedex_logo.png'
import {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom';
import '../src/App.css'
import { SearchBar } from '../src/SearchBar';


function Pokedex() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [offset, setOffset] = useState(0);
    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonCount, setPokemonCount] = useState(0)
    const [filteredList, setFilteredList] = useState([]);
    const [input, setInput] = useState('');
    const [allPokemonList, setAllPokemonList] = useState([]);
    const showList = input.length > 0 ? filteredList: pokemonList


    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon?limit=16&offset=${offset}`

    useEffect(() => {
      async function fetchPokemonList() {

        try {
          setError(null)
          const response = await fetch(pokemonUrl);

          if (!response.ok) {
            throw new Error ('Error fetching pokemon list')
          }

          const allPokemon = await response.json()
          setPokemonList(allPokemon.results)
          setPokemonCount(allPokemon.count)
          setLoading(false)



        }

        catch (error) {
          setError(error)

        }

      }
      fetchPokemonList()
    }, [offset])

    useEffect(()=> {
        async function fetchData() {
            const response = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=1&offset=0')
            const data = await response.json()
            const totalCount = data.count


            const allPokemon = await fetch (`https://pokeapi.co/api/v2/pokemon?limit=${totalCount}&offset=0`)
            const allPokemonData = await allPokemon.json()

            const pokeList = allPokemonData.results
            setAllPokemonList(pokeList)


        }
        fetchData()
        }, [])



    useEffect(() => {
        if (!input) {
            setFilteredList([]);
            return;
          }
        const filtered = allPokemonList.filter((pokemon) => {
        if (!pokemon || !pokemon.name) return false;
        return pokemon.name.toLowerCase().includes(input.toLowerCase());
         })

        setFilteredList(filtered);
        console.log(filteredList)


    }, [input])





    if (loading) {
        return <div>Loading...</div>
      }
    if (error) {
        return <div>Something went wrong...</div>
      }



      return (
        <Toggle>
        <>

        <br></br>
        <Link to="/"><img className = 'pokedex-logo' src = {pokedexImg}/></Link>
        <div className = 'search-bar-container'>
        <SearchBar
        input = {input}
        setInput = {setInput}
        />

        </div>
        <div className = "page-buttons">
                <button onClick={()=>setOffset(offset-12)} disabled ={offset===0}>⬅️</button>
                <button onClick={()=>setOffset(offset+12)} disabled = {offset===pokemonCount-16}>➡️</button>
        </div>

        <div className="card-grid">
          {
            showList.map((pokemon) => {
              const ending = pokemon.url.split('/');
              const id = ending[ending.length - 2];

              return (
                <div className='card' key={id}>
                  <h3><Link to={`/pokemon/${id}`}>{pokemon.name}</Link></h3>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
                </div>

              );
            })
          }
        </div>


         </>
         </Toggle>

        )

}

export default Pokedex
