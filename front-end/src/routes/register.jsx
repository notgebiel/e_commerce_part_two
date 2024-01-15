import { useState } from "react";
import Navbar from "../components/navbar";

export default function Register() {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(inputs));
    }
    return (
        <div>
            <Navbar active='login' />
            <form onSubmit={handleSubmit}>
                
                
            </form>
        </div>
    )
}