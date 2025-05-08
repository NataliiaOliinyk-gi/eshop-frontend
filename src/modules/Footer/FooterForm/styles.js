import { css } from "@emotion/react";

export const formInputsStyle = color => css`
    background: #232425;
    font-weight: 400;
    font-size: 20px;
    line-height: 81%;
    color: ${color};
    opacity: 0.8;
    border: none;
    outline: none;
    font-family: "Montserrat", sans-serif;
    width: 100%;
`;

export const formInputHrStyle = color => css`
    border: 1px solid ${color};
    width: 407px;
    height: 0px;
`;