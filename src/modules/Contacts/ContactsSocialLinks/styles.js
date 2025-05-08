import { css } from "@emotion/react";

export const contactsWrapperStyle = css`
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 39px;
    padding: 18px 65px 72px;
`;

export const contactsTitleStyle = css`
    font-weight: 600;
    font-size: 20px;
    line-height: 81%;
    color: rgba(0, 0, 0, 0.7);
    white-space: nowrap; 
`;

export const contactsSocialLinksListStyle = css`
    display: flex;
    gap: 50px;
`;

export const iconStyle = css`
    display: inline-block;
    transition: 5s cubic-bezier(0, 1, 0.5, 1);
    transform-origin: center center;

    :hover {
        scale: 1.1
    }
`;