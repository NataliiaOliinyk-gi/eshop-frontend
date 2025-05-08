import backendInstance from "./backendInstance";

import requestDecorator from "./requestDecorator";

export const registerUser = requestDecorator(async payload => {
    const { data } = await backendInstance.post("/auth/register", payload);
    return data;
});


// Иммитация отправки сообщения на сервер
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const messageUser = requestDecorator(async payload => {
    await sleep(1500); 
    return { answerMessage: "Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.", payload };
});