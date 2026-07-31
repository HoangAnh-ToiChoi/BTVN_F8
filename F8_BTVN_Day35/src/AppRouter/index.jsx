import { HashRouter, Routes, Route, Outlet, Link } from "react-router";

import Home from "../Pages/Home";
import CounterApp from "../Pages/Counter";
import TodoApp from "../Pages/Todo";
import Products from "../Pages/Products";
import Comments from "../Pages/Comments";
import Profile from "../Pages/Profile";
import WeatherApp from "../Pages/Weather";
import Buttons from "../Pages/Buttons";

function SubPageLayout() {
    return (
        <div className="subpage-layout">
            <Link to="/" className="back-home-link">
                ← Quay lại Trang chủ
            </Link>
            <div className="subpage-content">
                <Outlet />
            </div>
        </div>
    );
}

function AppRoute() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route element={<SubPageLayout />}>
                    <Route path="/Counter" element={<CounterApp />} />
                    <Route path="/Todo" element={<TodoApp />} />
                    <Route path="/Products" element={<Products />} />
                    <Route path="/Comments" element={<Comments />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="/Weather" element={<WeatherApp />} />
                    <Route path="/Buttons" element={<Buttons />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default AppRoute;
