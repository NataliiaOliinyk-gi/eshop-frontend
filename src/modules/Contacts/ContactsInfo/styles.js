import { css } from "@emotion/react";

export const contactsInfoItemStyle = color => css`
    position: relative;
    font-weight: 400;
    font-size: 18px;
    line-height: 81%;
    color: ${color};
    opacity: 0.8;
    margin-bottom: 13px;
    padding-left: 15px;

    ::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%); 
    width: 3px;
    height: 3px;
    background-color: ${color};
    border-radius: 50%;
    }   
`;