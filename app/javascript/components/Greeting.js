import axios from "axios";
import React, { useEffect, useState } from "react";

const getData= async ()=>{
    const result= await axios.get('/api/v1/greetings');

};

const Greeting=()=>{
    useEffect(()=>{
        getData();
    },[]);

    return(
        <h1>Greeting</h1>
    )
};

export default Greeting;