import "../stylesheets/navbar.css"
import Navbar from "../components/navbar"

export default function Root() {
    return (
        <div>
        <Navbar active="home" />
        <h1>home</h1>
        </div>
    )
}