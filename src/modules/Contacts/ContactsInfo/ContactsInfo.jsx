/** @jsxImportSource @emotion/react */
import { useTheme } from "@emotion/react";

import infoItems from "./info";

import { contactsInfoItemStyle } from "./styles"

const ContactsInfo = () => {

    const { colors } = useTheme();

    const elements = infoItems.map(item => (
        <li key={item.title} css={contactsInfoItemStyle(colors.darkLight)}>{item.text}</li>
    ));

    return (
        <ul>{elements}</ul>
    )
};

export default ContactsInfo;