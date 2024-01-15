import "../stylesheets/navbar.css";
import Navbar from "../components/navbar";
import React, { useEffect, useState } from "react";


export default function Root() {
    
        const [message, setMessage] = useState("");
      
        useEffect(() => { 
          fetch('http://localhost:8000/message')
          .then((res) => res.json())
          .then((data) => setMessage(data.message));
        }, [])
      
        const [dataToSend, setDataToSend] = useState({
            key1: "value1",
            key2: "value2"
        });

        const sendDataToServer = async () => {
            try {
                const response = await fetch("http://localhost:8000/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(dataToSend),
                });

                if(!response.ok) {
                    throw new Error('Network response was not ok.');
                }
            } catch (error) {
                console.error("Error sending data to the server!" + error.message);
            }
        }
        
        
    return (
        <div>
        <Navbar active="home" />
        <h1>Home</h1>
        <h1>{message}</h1>
        <button onClick={sendDataToServer}>send data to server</button>
        </div>
    )
}