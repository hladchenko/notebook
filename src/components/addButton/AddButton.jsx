import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const AddButton = () => {
    return (
        <Link to={"/add"} style={{textDecoration: "none"}}>
            <Button variant="contained" style={{ marginBottom: "20px"}}>Add note</Button>
        </Link>
    )
}

export default AddButton;