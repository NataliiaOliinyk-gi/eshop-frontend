/** @jsxImportSource @emotion/react */

import contactsSocialLinksItems from "./contactsSocialLinksItems";

import { contactsWrapperStyle, contactsTitleStyle, contactsSocialLinksListStyle, iconStyle } from "./styles";

const ContactsSocialLinks = () => {

    const elements = contactsSocialLinksItems.map(({ href, icon }) => (
        <li key={href} css={iconStyle}>
            <a href={href} target="_blank">{icon}</a>
        </li>
    ));

    return (
        <div css={contactsWrapperStyle}>
            <h3 css={contactsTitleStyle}>Найдите нас:</h3>
            <ul css={contactsSocialLinksListStyle}>
                {elements}
            </ul>
        </div>
    )
};

export default ContactsSocialLinks;