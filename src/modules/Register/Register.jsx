import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Container from "../layout/Container/Container";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import Loader from "../../shared/components/Loader/Loader";
import LoadingError from "../../shared/components/LoadingError/LoadingError";

import RegisterForm from "./RegisterForm/RegisterForm";

import { registerUser } from "../../shared/api/auth-api";

const Register = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const submitForm = async payload => {
        setLoading(true)
        const { error } = await registerUser(payload);
        if (error) {
            return setError(error.response.data.message);
        }
        setLoading(false);
        navigate("/");
        // navigate("/login");
        alert("Register successfully");
    };

    return (
        <section>
            <Container>
                <SectionTitle title="Регистрация" />
                <RegisterForm submitForm={submitForm} />
                <Loader loading={loading} />
                {error && <LoadingError>{error}</LoadingError>}
            </Container>
        </section>
    )
};

export default Register;