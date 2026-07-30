import { NavLink } from "react-router";
function Home() {
    return (
        <ul>
            <li>
                <NavLink to="/Counter">Counter App</NavLink>
            </li>
            <li>
                <NavLink to="/Todo">Todo App</NavLink>
            </li>
            <li>
                <NavLink to="/Profile">Profile App</NavLink>
            </li>
            <li>
                <NavLink to="/Products">Product App</NavLink>
            </li>
            <li>
                <NavLink to="/Comments">Comments App</NavLink>
            </li>
            <li>
                <NavLink to="/Weather">Weather App</NavLink>
            </li>
            <li>
                <NavLink to="/Buttons">Buttons</NavLink>
            </li>
        </ul>
    );
}

export default Home;
