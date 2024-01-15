import Navbar from "../components/navbar";

export default function Login() {
    return(
        <div>
            <Navbar active="login" />
            <h1>login</h1>
            <a id='register' href='/register'>register</a>
        </div>
    )
}