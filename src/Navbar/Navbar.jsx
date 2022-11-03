import React from "react";
import { Link } from "react-router-dom";
import {Box} from "@chakra-ui/react"
class Navbar extends React.Component{
    render(){
        return<Box display="flex" justifyContent="center" gap="20px" backgroundColor="skyblur" fontSize="30px" >
        <Link to="/">Counter</Link>
        <Link to="/form">Form</Link>
        </Box>
    }
}

export {Navbar}