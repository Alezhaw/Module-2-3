import React from "react";
import {Form} from "react-bootstrap"

function SearchProduct({processSearch})
{
    return <Form.Control
    className={'mb-3'}
    placeholder={'Search'}
    type="text"
    onKeyUp={processSearch}
    aria-describedby="passwordHelpBlock"
/>
}

export default SearchProduct;