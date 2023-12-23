import React, {useState} from "react";
import './App.css';
import sanitizeData from "./utils/sanitizeData";
import {isInvalidData} from "./utils/validateData";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Features from "./components/Features/Features/Features";

function App() {
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState("initial");
    const [data, setData] = useState([]);
    const [errors, setErrors] = useState([]);


    function handleFileUpload(e) {
        e.preventDefault();

        setStatus("initial");
        setFile(null)

        const file = e.target.files[0];

        const reader = new FileReader();
        setStatus("uploading");

        if (file !== null && file.size > 0) {

            setErrors([])
            reader.readAsText(file);

            reader.onload = function () {
                const dataString = reader.result;
                const sanitizedData = sanitizeData(dataString);

                if (!isInvalidData(sanitizedData).length) {
                    setFile(file)
                    setData(sanitizedData);
                    setStatus("success");
                } else {
                    setErrors(isInvalidData(sanitizedData));
                    setStatus("fail");
                    e.target.value = null;
                }

            }
        }
    }

    function handleFileDelete() {
        setData([])
        setStatus("initial")
        setFile(null)
    }

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
