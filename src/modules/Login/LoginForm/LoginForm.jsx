/** @jsxImportSource @emotion/react */
import { useForm } from "react-hook-form";

import TextField from "../../../shared/components/TextField/TextField";
import Button from "../../../shared/components/Button/Button";

import fields from "./fields";

import { formWrapperStyle, inputFormStyle } from "./styles"


const LoginForm = ({ submitForm }) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = values => {
        submitForm(values);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} css={formWrapperStyle}>
            <TextField css={inputFormStyle}
                {...fields.email}
                register={register}
                error={errors.email}
            />
            <TextField css={inputFormStyle}
                {...fields.password}
                register={register}
                error={errors.password}
            />

            <div>
                <Button>Войти</Button>
            </div>
        </form>
    )
};

export default LoginForm;