import './App.css';
import Chatbot from 'react-chatbot-kit'
import ActionProvider from "./Handlers/ActionProvider"
import MessageParser from "./Handlers/MessageParser"
import config from "./Handlers/Config"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Chatbot 
        config={config} 
        actionProvider={ActionProvider}
        messageParser={MessageParser} />
      </header>
    </div>
  );
}

export default App;
