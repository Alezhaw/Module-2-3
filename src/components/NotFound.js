import React from "react";
import { Navigate } from "react-router-dom";

function NotFound({storeName}) {
    return <>
    {(storeName == null) ? <Navigate to='/login'/>: ''}
    {<h2>Can't found the page.</h2>}
    </>
}

export default NotFound;