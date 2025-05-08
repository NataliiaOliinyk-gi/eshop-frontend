const fields = {
    email: {
        type: "email",
        placeholder: "Ваш email",
        name: "email",
        rules: {
            required: "Email must be exist"
        }
    },
    username: {
        type: "text",
        placeholder: "Ваше имя",
        name: "username",
        rules: {
            required: "Username must be exist"
        }
    },
    message: {
        type: "text",
        placeholder: "Введите сообщение",
        name: "message",
        rules: {
            required: "Message must be exist"
        }
    },
};

export default fields;