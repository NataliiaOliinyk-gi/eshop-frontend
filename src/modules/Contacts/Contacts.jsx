/** @jsxImportSource @emotion/react */
import { useState } from "react";

import Container from "../layout/Container/Container";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import Loader from "../../shared/components/Loader/Loader";
import LoadingError from "../../shared/components/LoadingError/LoadingError";

import ContactsInfo from "./ContactsInfo/ContactsInfo";
import ContactsForm from "./ContactsForm/ContactsForm";
import ContactsSocialLinks from "./ContactsSocialLinks/ContactsSocialLinks";

import { messageUser } from "../../shared/api/auth-api";

import { contactsWrapperStyle, contactsContainerStyle, errorBoxStyle, successStyle } from "./styles"

const Contacts = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [answer, setAnswer] = useState('');
    const [success, setSuccess] = useState(false);

    const submitForm = async payload => {
        setLoading(true)
        const { data, error } = await messageUser(payload);
        setLoading(false);
        if (error) {
            return setError(error.response.data.message);
        }
        setAnswer(data.answerMessage)
        setSuccess(true);
    };

    return (
        <section css={contactsWrapperStyle}>
            <Container>
                <SectionTitle title="Контакты" />
                <div>
                    <ContactsInfo />
                </div>
                <Loader loading={loading} />
                {error && <div css={errorBoxStyle}><LoadingError >{error}</LoadingError></div>}
                {success && <p css={successStyle}>{answer}</p>}
                <div css={contactsContainerStyle}>
                    <ContactsForm submitForm={submitForm} />
                    <ContactsSocialLinks />
                </div>
            </Container>
        </section>
    )
};

export default Contacts;