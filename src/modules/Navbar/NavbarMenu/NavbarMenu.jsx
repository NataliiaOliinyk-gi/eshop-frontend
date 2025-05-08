/** @jsxImportSource @emotion/react */

import { NavLink } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { useSelector } from "react-redux";

// import navbarMenuItems from "./navbarMenuItems";
import { selectIsLogin, selectAuthRequestData } from "../../../redux/auth/auth-selectors";

import { navbarMenuStyle, navbarMenuLinkStyle } from "./styles";

const NavbarMenu = () => {

    const { colors } = useTheme();

    const isLogin = useSelector(selectIsLogin);
    const { success } = useSelector(selectAuthRequestData);

    return (

        <ul css={navbarMenuStyle}>
            <li>
                <NavLink to="/" css={navbarMenuLinkStyle(colors.lightDark)}>Главная</NavLink>
            </li>
            {isLogin && <li>
                <NavLink to="/cart" css={navbarMenuLinkStyle(colors.lightDark)}>Корзина</NavLink>
            </li>}
            {/* {!isLogin && <li>
                <NavLink to="/login" css={navbarMenuLinkStyle(colors.lightDark)}>Вход</NavLink>
            </li>}
            {!isLogin && <li>
                <NavLink to="/register" css={navbarMenuLinkStyle(colors.lightDark)}>Регистрация</NavLink>
            </li>} */}

            {isLogin && <li>
                <NavLink to="/logout" css={navbarMenuLinkStyle(colors.lightDark)}>Выход</NavLink>
            </li>}
            {!isLogin && success && <li>
                <NavLink to="/login" css={navbarMenuLinkStyle(colors.lightDark)}>Вход</NavLink>
            </li>}

            {!isLogin && !success && <li>
                <NavLink to="/register" css={navbarMenuLinkStyle(colors.lightDark)}>Регистрация</NavLink>
            </li>}
            <li>
                <NavLink to="/contacts" css={navbarMenuLinkStyle(colors.lightDark)}>Контакты</NavLink>
            </li>
        </ul>

    )

    // const elements = navbarMenuItems.map(({ href, text }) => (
    //     <li key={text}>
    //         <NavLink to={href} css={navbarMenuLinkStyle(colors.lightDark)}>
    //             {text}
    //         </NavLink>
    //     </li>
    // ));

    // return (
    //     <ul css={navbarMenuStyle}>{elements}</ul>
    // )
};

export default NavbarMenu;