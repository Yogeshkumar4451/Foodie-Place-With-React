import { use } from "react";
import { useRouteError } from "react-router";

const Error = () => {

    const Err = useRouteError();
    

    return(
    <div className="Error-Page">
        <h1> Ooopsss...</h1>
        <h3> Something Went Wrong ☹️☹️</h3>
        <h4> {Err.status }: {Err.statusText} </h4>
    </div>
    ) }

    export default Error;