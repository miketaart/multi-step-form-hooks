import logo from './assets//plantsome_logo.svg';
import './stylesheets/App.scss';
//import FormContainer from "./components/FormContainer"
import FormContainerHooks from "./components/FormContainerHooks"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <FormContainerHooks />
        </div>
    );
}

export default App;
