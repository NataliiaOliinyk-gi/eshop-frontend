/** @jsxImportSource @emotion/react */

import Container from "../layout/Container/Container";

import FooterContacts from "./FooterContacts/FooterContacts";
import FooterSocialLinks from "./FooterSocialLinks/FooterSocialLinks";
import FooterCopyright from "./FooterCopyright/FooterCopyright";
import FooterForm from "./FooterForm/FooterForm";

import { footerStyle, footerContentStyle, footerContainerStyle } from "./styles";

const Footer = () => {
    return (
        <footer css={footerStyle}>
            <Container>
                <div css={footerContentStyle}>
                    <FooterContacts />
                    <FooterSocialLinks />
                </div>
                <div css={footerContainerStyle}>
                    <FooterCopyright />
                    <FooterForm />
                </div>
            </Container>
        </footer>
    )
}

export default Footer;