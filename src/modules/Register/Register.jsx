import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Container from "../layout/Container/Container";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import Loader from "../../shared/components/Loader/Loader";
import LoadingError from "../../shared/components/LoadingError/LoadingError";

import RegisterForm from "./RegisterForm/RegisterForm";

import { registerUser } from "../../redux/auth/auth-thunks";
import { selectAuthRequestData } from "../../redux/auth/auth-selectors";

const Register = () => {

    const dispatch = useDispatch();
    const { loading, error, success } = useSelector(selectAuthRequestData);

    const submitForm = async payload => {
        dispatch(registerUser(payload))
    }
    
    if (success) return <Navigate to="/login" />

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