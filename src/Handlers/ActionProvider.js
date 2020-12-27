class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage, state) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage
    }

    greet() {
        const greetingMessage = [this.createChatBotMessage("I am here to help you. How old are you?")]
        this.updateChatbotState(greetingMessage)
    }

    ageGreeting(age){
        const ageGreetYoung = [
            this.createChatBotMessage("Yaay another young soldier"),
            this.createChatBotMessage("Are you feeling sick?", {
                delay: 800
            })
        ]
        const ageGreetOld = [
            this.createChatBotMessage("Welcome Boss"),
            this.createChatBotMessage("Are you feeling sick?", {
                delay: 800
            })
        ]
        
        if(age < 18){
            this.updateChatbotState(ageGreetYoung)
            localStorage.setItem("lastMessage", 'Young')
        }else{
            this.updateChatbotState(ageGreetOld)
            localStorage.setItem("lastMessage", 'Adult');
        }
    }

    booleanActionsNegative(){
        const lastMessage = localStorage.getItem("lastMessage");
        if(lastMessage === "Adult"){
            const message = [
                this.createChatBotMessage("In the two weeks before you felt sick, have you been in close contact with someone who has COVID 19? -excluding people who have COVID 19 within the past 3 months"),
                this.createChatBotMessage("You have have been in close contact if have", {
                    delay: 1500
                }),
                this.createChatBotMessage("a. been within 6 feet of someone who has COVID19 for a combined total 15 minutes over 24 hour period or", {
                    delay: 5000
                }),
                this.createChatBotMessage("b. provided care at home to someone who is sick with COVID19 or", {
                    delay: 9000
                }),
                this.createChatBotMessage("c. had direct physical contact with someone who has COVID19 or", {
                    delay: 13000
                }),
                this.createChatBotMessage("d. shared eating or drinking utensils with someone who has COVID19 or", {
                    delay: 17000
                }),
                this.createChatBotMessage("e. been sneezed on or coughed on by someone who has COVID 19", {
                    delay: 21000
                })
            ]

            this.updateChatbotState(message)

            localStorage.setItem("lastMessage", 'Q25');
        }

        if(lastMessage === "Q25"){
            const message = [
                this.createChatBotMessage('Sound like you are feeling okay'),
                this.createChatBotMessage('Learn more about COVID19 and what you can do to stay safe on CDC website', {
                    delay: 1000
                }),
                this.createChatBotMessage('No COVID19 testing needed at this time', {
                    delay: 2500
                })
            ]

            this.updateChatbotState(message)
        }

        if(lastMessage === "Q26"){
            const message = [
                this.createChatBotMessage('In the last two weeks, have you worked, volunteered or been a patient in any healthcare facility or work as a first responder? '
                )
            ]

            this.updateChatbotState(message)
            localStorage.setItem("lastMessage", 'Q27');
        }

        if(lastMessage === "Q27"){
            const message = [
                this.createChatBotMessage('Stay home for 14 days from the day you last had contact.'
                ),
                this.createChatBotMessage('Take your temperature twice a day and watch for symptoms', {
                    delay: 1500
                }
                ),
                this.createChatBotMessage('You need to be tested for COVID19', {
                    delay: 3000
                }
                )
            ]

            this.updateChatbotState(message)
        }
        if(lastMessage === "Q28"){
            const message = [
                this.createChatBotMessage('Contact the occupational health provider at your workplace.'
                ),
                this.createChatBotMessage('You need to be tested for COVID19', {
                    delay: 1500
                }
                )
            ]

            this.updateChatbotState(message)
        }

        //logics for pediatric
        if(lastMessage === "Young"){
            const message = [
                this.createChatBotMessage("In the two weeks before you felt sick, have you been in close contact with someone who has COVID 19? -excluding people who have COVID 19 within the past 3 months"),
                this.createChatBotMessage("You have have been in close contact if have", {
                    delay: 1500
                }),
                this.createChatBotMessage("a. been within 6 feet of someone who has COVID19 for a combined total 15 minutes over 24 hour period or", {
                    delay: 5000
                }),
                this.createChatBotMessage("b. provided care at home to someone who is sick with COVID19 or", {
                    delay: 9000
                }),
                this.createChatBotMessage("c. had direct physical contact with someone who has COVID19 or", {
                    delay: 13000
                }),
                this.createChatBotMessage("d. shared eating or drinking utensils with someone who has COVID19 or", {
                    delay: 17000
                }),
                this.createChatBotMessage("e. been sneezed on or coughed on by someone who has COVID 19", {
                    delay: 21000
                })
            ]

            this.updateChatbotState(message)

            localStorage.setItem("lastMessage", 'Q25-PED');
        }

        if(lastMessage === "Q25-PED"){
            const message = [
                this.createChatBotMessage('Sound like you are feeling okay'),
                this.createChatBotMessage('Learn more about COVID19 and what you can do to stay safe on CDC website', {
                    delay: 1000
                }),
                this.createChatBotMessage('No COVID19 testing needed at this time', {
                    delay: 2500
                })
            ]

            this.updateChatbotState(message)
        }

        if(lastMessage === "Q26-PED"){
            const message = [
                this.createChatBotMessage('In the last two weeks, have you attended or spent time in a group setting(for example school, dormitary, child care or sporting event? '
                )
            ]

            this.updateChatbotState(message)
            localStorage.setItem("lastMessage", 'Q27-PED');
        }

        if(lastMessage === "Q27-PED"){
            const message = [
                this.createChatBotMessage('Stay home for 14 days from the day you last had contact.'
                ),
                this.createChatBotMessage('Take your temperature twice a day and watch for symptoms', {
                    delay: 1500
                }
                ),
                this.createChatBotMessage('You need to be tested for COVID19', {
                    delay: 3000
                }
                )
            ]

            this.updateChatbotState(message)
        }
    }

    booleanActionsPositive(){
        const lastMessage = localStorage.getItem("lastMessage")
        if(lastMessage === "Q25"){
            const message = [
                this.createChatBotMessage('Do you live in a long-term care facility, nursing home or a homeless shelter?'
                )
            ]

            this.updateChatbotState(message)
            localStorage.setItem("lastMessage", 'Q26');
        }

        if(lastMessage === "Q26"){
            const message = [
                this.createChatBotMessage('Contact a medical provider where you live'
                )
            ]

            this.updateChatbotState(message)
        }
        if(lastMessage === "Q27"){
            const message = [
                this.createChatBotMessage('Did you wear personal protective equipment(surgical mask, gown, eye proteection) while working or volunteering at the healthcare facility?'
                )
            ]

            this.updateChatbotState(message)
            localStorage.setItem("lastMessage", 'Q28');
        }

        if(lastMessage === "Q28"){
            const message = [
                this.createChatBotMessage('Stay home for 14 days from the day you last had contact.'
                ),
                this.createChatBotMessage('Take your temperature twice a day and watch for symptoms', {
                    delay: 1500
                }
                ),
                this.createChatBotMessage('You need to be tested for COVID19', {
                    delay: 3000
                }
                )
            ]

            this.updateChatbotState(message)
        }

        //positive logics for pediatric
        if(lastMessage === "Q25-PED"){
            const message = [
                this.createChatBotMessage('Do you live in a group home or other setting with others(pediatric skilled nursing facility, behavorial health center, juvenile detention center or homeless shelter?'
                )
            ]

            this.updateChatbotState(message)
            localStorage.setItem("lastMessage", 'Q26-PED');
        }

        if(lastMessage === "Q26-PED"){
            const message = [
                this.createChatBotMessage('Contact a medical provider in the care center, nursing home, or homeless shcelter where you live.'
                )
            ]

            this.updateChatbotState(message)
        }

        if(lastMessage === "Q27-PED"){
            const message = [
                this.createChatBotMessage('Stay home for 14 days from the day you last had contact.'
                ),
                this.createChatBotMessage('Take your temperature twice a day and watch for symptoms', {
                    delay: 1500
                }
                ),
                this.createChatBotMessage('Contact and administrator or nurse at your school or child care', {
                    delay: 3000
                }
                ),
                this.createChatBotMessage('You need to be tested for COVID19', {
                    delay: 5000
                }
                )
            ]

            this.updateChatbotState(message)
        }
    }

    updateChatbotState(message) {
 
        // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
         
            
        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, ...message]
        }))
    }
}
  
  export default ActionProvider;