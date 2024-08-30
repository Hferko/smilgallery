import { useGlobalContext } from "./AppContext";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import unsplash from '../assets/unsplash.png';

const ThemeToggle = () => {
    const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

    return (
        <section className="toggle-container">
            <a href="https://unsplash.com/developers" target="_blank" rel="noopener noreferrer" className="toggle-link">
                <img src={unsplash} alt="unsplash" />
            </a>
            <button className="dark-toggle" onClick={toggleDarkTheme}>
                {isDarkTheme
                    ? <BsSunFill className="toggle-icon" color="yellow" />
                    : <BsFillMoonFill className="toggle-icon" color="navy" />
                }
            </button>
        </section>
    )
}
export default ThemeToggle;