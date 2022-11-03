import React from 'react'
import {Button,Box} from "@chakra-ui/react"
import { BsPlusLg } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
class CounterBtn extends React.Component{
     
        render(){
            const {increment,decrement,count}=this.props
            console.log(count)
          return  <Box  width="40%" display="flex" justifyContent="space-evenly" >
            <Button  onClick={increment} ><BsPlusLg/></Button>
            <Button  disabled={count==0} onClick={decrement} ><BiMinus/></Button>
            </Box>
        }
}

export {CounterBtn}