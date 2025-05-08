/** @jsxImportSource @emotion/react */
import { useForm } from "react-hook-form";

import TextField from "../../../shared/components/TextField/TextField";
import Button from "../../../shared/components/Button/Button";

import fields from "./fields";

import { formWrapperStyle, formInputBoxsStyle, formInputsStyle, inputFormStyle, textareaFormStyle, bntBoxStyle } from "./styles";

const ContactsForm = ({ submitForm }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = values => {
        submitForm(values);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} css={formWrapperStyle}>
            <div css={formInputBoxsStyle}>
                <div css={formInputsStyle}>
                    <TextField css={inputFormStyle}
                        {...fields.email}
                        register={register}
                        error={errors.email}
                    />
                    <TextField css={inputFormStyle}
                        {...fields.username}
                        register={register}
                        error={errors.username}
                    />
                </div>

                <TextField css={textareaFormStyle}
                    as="textarea"
                    {...fields.message}
                    register={register}
                    error={errors.message}
                />
            </div>
            <div css={bntBoxStyle}>
                <Button>Отправить</Button>
            </div>
        </form>
    )
};

export default ContactsForm;