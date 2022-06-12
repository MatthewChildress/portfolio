import { NavContainer } from './Navbar.styled.js'

const Navbar = () => {
    return(
        <NavContainer>
            <ul className="navigation">
            <li className="navigation__item">
                    <a href="/" className="navigation__link">About Me</a>
                </li>
                <hr></hr>
                <li className="navigation__item">
                    <a href="/" className="navigation__link">My Skills</a>
                </li>
                <hr></hr>
                <li className="navigation__item">
                    <a href="/" className="navigation__link">My Projects</a>
                </li>
                <hr></hr>
                <li className="navigation__item">
                    <a href="/" className="navigation__link">Contact Me</a>
                </li>
                <hr></hr>
                <li className="navigation__item">
                    <a href="/" className="navigation__link">Extra?</a>
                </li>
            </ul>
        </NavContainer>
    );
}

export default Navbar;