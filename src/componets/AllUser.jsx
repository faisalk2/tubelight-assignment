import React from "react";
import axios from "axios"
import {Grid} from "@chakra-ui/react"
import Card from "./Card";
class AllUser extends React.Component{

    render(){
        const {allUserData}=this.props
        console.log(this.props)
        return<>
       <Grid templateColumns={['repeat(1, 1fr)',"repeat(3,1fr)","repeat(5,1fr)"]} gap={6} >
       {allUserData?.map((ele,i)=>{
            return <div key={i} >
           <Card data={ele} />
            </div>
            
        })}
       </Grid>
        </>
    }
}

export default AllUser