import React from "react"
import { createBrowserRouter, createRoutesFromElements, Route, Routes } from "react-router-dom";
import './App.css';
import { Counter } from "./componets/Count";
import { Navbar } from "./Navbar/Navbar";
import {Form } from "./componets/Form"
import { ChakraProvider } from '@chakra-ui/react'

const router = createBrowserRouter(
  createRoutesFromElements(
<>
<Route path="/" element={<ChakraProvider><Navbar/><Counter /></ChakraProvider>}/>
<Route path="/form" element={<ChakraProvider><Navbar/><Form /></ChakraProvider>} />
</>
  ))


export default router;
