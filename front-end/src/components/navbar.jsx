import { useEffect } from "react"

export default function Navbar(props) {

    useEffect(() => {
        const activeElement = document.getElementById(props.active);
        if (activeElement) {
            activeElement.style.backgroundColor = "#01794E";
        }
    }, [props.active])

    return (
        
        <div id="navbar">
            <ul id="navbar_ul">
                <li id="home"><a href="/">Home</a></li>
                <li id="about_us"><a href="/about">About us</a></li>
                <li id="products"><a href="/products">Products</a></li>
                <li id="login"><a href="/login">Login</a></li>
            </ul>
        </div>
        
    )
}