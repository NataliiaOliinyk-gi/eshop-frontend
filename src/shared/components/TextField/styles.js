import { css } from "@emotion/react";

export const textFieldWrapperStyle = css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    flex: 1;
`;

export const textFieldLabelStyle = css`
    font-size: 18px;
    font-weight: 400;
    line-height: 81%;
    width: 100px;
`;

export const textFieldStyle = bgColor => css`
    background-color: ${bgColor};
    padding: 25px 21px;
    border: none;
    outline: none;
    border-radius: 10px;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 5px;
    font-family: "Montserrat", sans-serif;

    ::placeholder {
        font-weight: 400;
        font-size: 18px;
        line-height: 81%;
        color: rgba(0, 0, 0, 0.7);
        opacity: 0.8;
    }
`;

export const textFieldErrorStyle = css`
    width: 100%;
    color: red;
    font-size: 16px;
    margin-bottom: 39px;
`;