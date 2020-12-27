import { createChatBotMessage } from "react-chatbot-kit";

const config = {
    botName: 'Kojo',
    initialMessages: [
        createChatBotMessage(`Hi, I'm Kojo. Your Covid19 chatbot`),
        createChatBotMessage(`Won't you say Hello?`, {
            delay: 1000
        })
    ],
    customStyles: {
        botMessageBox:{
            backgroundColor: 'green'
        },
        chatButton:{
            backgroundColor: 'green'
        },
        userMessageBox: 'brown'
    }
}

export default config