import React from 'react'
import { CounterBtn } from './CounterBtn'
import {VStack,Heading} from "@chakra-ui/react"
// import {} from ""
class Counter extends React.Component{
        constructor(){
            super()
            this.state={
                count:0
            }
        }
        handleIncreamen=()=>{
            this.setState({...this.state,count:this.state.count+1})
        }
        handleDecrement=()=>{
            this.setState({...this.state,count:this.state.count-1})
        }
        // box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        render(){
          return  <VStack margin="auto" marginTop="200px"  borderRadius="15px" boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px " width="30%" p={12}  >
            <Heading margin="30px" >count:- {this.state.count}</Heading>
            <CounterBtn increment={this.handleIncreamen} decrement={this.handleDecrement}  count={this.state.count} />
            </VStack>
        }
}

export {Counter}