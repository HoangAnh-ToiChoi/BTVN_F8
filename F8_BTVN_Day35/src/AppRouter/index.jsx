import { BrowserRouter, Routes, Route } from "react-router";

import Home from "../Pages/Home";
import CounterApp from "../Pages/Counter";
import TodoApp from "../Pages/Todo";
import Products from "../Pages/Products";
import Comments from "../Pages/Comments";
import Profile from "../Pages/Profile";
import WeatherApp from "../Pages/Weather";
import Buttons from "../Pages/Buttons";
function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Counter" element={<CounterApp />} />
                <Route path="/Todo" element={<TodoApp />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/Comments" element={<Comments />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Weather" element={<WeatherApp />} />
                <Route path="/Buttons" element={<Buttons />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoute;
