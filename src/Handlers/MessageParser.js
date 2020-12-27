class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
      const age = parseInt(message)
      const bool = message.toLowerCase()
      
      if(lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")){
          this.actionProvider.greet()
      }

      if(age){
          this.actionProvider.ageGreeting(age)
      }

      if(bool.includes("no")){
          this.actionProvider.booleanActionsNegative()
      }

      if(bool.includes("yes") || bool.includes("don't") || bool.includes("don't know")){
          this.actionProvider.booleanActionsPositive()
      }
    }
  }
  
  export default MessageParser;