import { ThemeContext } from '../src/context/ThemeContext';
import { useState, useEffect, useContext } from 'react'
import '../src/App.css'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Toggle from '../src/Toggle';

function PokemonDetail () {
    // const [selectedUrl, setSelectedUrl] = useState('')
    const [ability, setAbility] = useState([])
    const [height, setHeight] = useState('')
    const [types, setTypes] = useState([])
    const [weight, setWeight] = useState('')
    const [currentPokemonImg, setCurrentPokemonImg] = useState(null);
    const [currentPokemonImgBack,  setCurrentPokemonImgBack] = useState(null)
    const { id } = useParams();
    const [error, setError] = useState(null);
    const [pokemon, setPokemon] = useState(null)
    const [pokemonName, setPokemonName] = useState('')
    const [loading, setLoading] = useState(true)





useEffect(() => {
async function fetchPokemon() {
    try {
      setError(null)
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if(!response.ok) {
        throw new Error ('Error fetching pokemon')
      }

      const pokemonSprite = await response.json()

      setCurrentPokemonImg(pokemonSprite.sprites.front_shiny)
      setCurrentPokemonImgBack(pokemonSprite.sprites.back_shiny)
      setHeight(pokemonSprite.height)
      setAbility(pokemonSprite.abilities.map((a)=> a.ability.name).join(', '))
      setTypes(pokemonSprite.types.map((t)=> t.type.name).join(', '))
      setWeight(pokemonSprite.weight)
      setLoading(false)
      setPokemonName(pokemonSprite.name)




    }
    catch (error) {
      setError(error)

    }
  }
 fetchPokemon()


  }, [])


  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Something went wrong...</div>
  }


return (
<Toggle>
<>
<div>
<Link to="/">Go Home</Link>
<br></br>
<NavLink to="/pokedex">View Pokédex</NavLink>


</div>


<div className = 'pokemon-container'>
<>
    <img src = {currentPokemonImg}/>
    <img src = {currentPokemonImgBack}/>
        <div className='pokemon-details'>

            <div>Name: {pokemonName}</div>
            <div>Height: {height/10}m</div>
            <div>Weight: {weight/10}kg</div>
            <div>Abilities: {ability}</div>
            <div>Type(s): {types}</div>
        </div>
</>

</div>
</>
</Toggle>
)


}

export default PokemonDetail
