import { useDispatch, useSelector } from "react-redux";

import Container from "../layout/Container/Container";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import Loader from "../../shared/components/Loader/Loader";
import LoadingError from "../../shared/components/LoadingError/LoadingError";

import LoginForm from "./LoginForm/LoginForm"

import { loginUser } from "../../redux/auth/auth-thunks";
import { selectAuthRequestData } from "../../redux/auth/auth-selectors";

const Login = () => {

    const dispatch = useDispatch();
    const { loading, error } = useSelector(selectAuthRequestData);

    const submitForm = async payload => {
        dispatch(loginUser(payload))
    }

    return (
        <section>
            <Container>
                <SectionTitle title="Вход" />
                <LoginForm submitForm={submitForm} />
                <Loader loading={loading} />
                {error && <LoadingError>{error}</LoadingError>}
            </Container>
        </section>
    )
};

export default Login;