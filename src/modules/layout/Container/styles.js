import { css } from "@emotion/react";

export const containerStyle = css`
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;

    @media(min-width: 600px) {
        max-width: 540px;
    }

    @media(min-width: 900px) {
        max-width: 840px;
    }

    @media(min-width: 1200px) {
        max-width: 1200px;
    }

    @media(min-width: 1536px) {
        max-width: 1420px;
    }
`;