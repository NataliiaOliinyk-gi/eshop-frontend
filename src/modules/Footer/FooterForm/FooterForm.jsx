/** @jsxImportSource @emotion/react */
import { useForm } from "react-hook-form";
import { useTheme } from "@emotion/react";

import { formInputsStyle, formInputHrStyle } from "./styles";

const FooterForm = () => {

    const { colors } = useTheme();

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = values => {
        // submitForm(values);
        console.log(values);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("email")}
                type="email" placeholder="Введите свой email:"
                css={formInputsStyle(colors.lightDark)}
            />
            <hr css={formInputHrStyle(colors.lightDark)} />
        </form>
    )
};

export default FooterForm;