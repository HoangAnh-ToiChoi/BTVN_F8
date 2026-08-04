import { BrowserRouter, HashRouter, Routes, Route, Outlet, Navigate } from "react-router";

// Layout
import DefaultLayout from "../../Layout/DefaultLayout";
import AuthLayout from "../../Layout/AuthLayout";
import AdminLayout from "../../Layout/AdminLayout";

// Pages
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Posts from "../../Pages/Posts";
import PostDetail from "../../Pages/PostDetail";
import Contact from "../../Pages/Contact";
import Privacy from "../../Pages/Privacy";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import Dashboard from "../../Pages/Dashboard";
import Users from "../../Pages/Users";
import Settings from "../../Pages/Settings";
import NotFound from "../../Pages/NotFound";
import ForgotPassword from "../../Pages/ForgotPassword";

// Components
import ScrollToTop from "../ScrollToTop";

function AppRouter() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="about" element={<About />}></Route>
                    <Route path="posts" element={<Posts />}></Route>
                    <Route path="post/:id" element={<PostDetail />}></Route>
                    <Route path="contact" element={<Contact />}></Route>
                    <Route path="privacy" element={<Privacy />}></Route>
                </Route>

                <Route path="/auth" element={<AuthLayout />}>
                    <Route index element={<Navigate to="login" replace />}></Route>
                    <Route path="login" element={<Login />}></Route>
                    <Route path="register" element={<Register />}></Route>
                    <Route
                        path="forgot-password"
                        element={<ForgotPassword />}
                    ></Route>
                </Route>

                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Dashboard />}></Route>
                    <Route path="users" element={<Users />}></Route>
                    <Route path="settings" element={<Settings />}></Route>
                </Route>

                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
