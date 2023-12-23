import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Features from "./components/Features/Features/Features";

function App() {
    return (
        <div className="app-container">
            <Header/>
            <main>
                <div className="main-container">
                    <Features/>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
