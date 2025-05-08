import { Routes, Route } from "react-router-dom";

import MainPage from "./MainPage/MainPage";
import CartPage from "./CartPage/CartPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import LoginPage from "./LoginPage/LoginPage";
import LogoutPage from "./LogoutPage/LogoutPage";
import ContactsPage from "./ContactsPage/ContactsPage";

import ProtectedRoute from "../shared/components/ProtectedRoute/ProtectedRoute";
import PublicRoute from "../shared/components/PublicRoute/PublicRoute";

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route element={<PublicRoute />}>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route element={<ProtectedRoute />}>
                <Route path="/cart" element={<CartPage />} />
                <Route path="/logout" element={<LogoutPage />} />
            </Route>
        </Routes>
    )
};

export default Navigation;