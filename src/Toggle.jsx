import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"
import lightImg from "../src/assets/pikachu-blossom.png"
import darkImg from "../src/assets/forest.png"



export default function Toggle({children}) {

const {theme, toggleTheme} = useContext(ThemeContext)

return (
<div className={theme === 'light' ? 'light-mode' : 'dark-mode'} style={{
    backgroundImage: `url(${theme === 'light' ? lightImg : darkImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    width: '100%',
    zIndex: 0,
    position: 'fixed',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(247, 186, 186, 0.4)',
    backgroundBlendMode: theme === 'light'? 'screen' : 'darken',

  }}>


{children}

<button id = 'theme-button' onClick={() => toggleTheme()}>Switch to {theme==='light'? 'dark' : 'light'} mode</button>
</div>)

}
