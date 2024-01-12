import { useRouteError } from "react-router-dom";

export default function errorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <div id="errorPage">
                <p>test error page</p>
                <i>{error.statusText || error.message}</i>
            </div>
        </>
    )
}