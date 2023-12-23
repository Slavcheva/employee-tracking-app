import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="app-container">
            <Header/>
            <main>
                <div className="main-container">
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
