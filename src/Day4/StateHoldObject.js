import React,{useState} from "react";
export default function StateHoldObject()
{
    const [biodata,setBioData]=useState({name:"Archana",RegNo:19,Year:2023})
    const changeBioData=()=>{
        setBioData((prevYear)=>{return {...prevYear,Year:2024}})
    };
    return(
        <div>
            <h1>Name: {biodata.name}</h1>
            <h1>Register no: {biodata.RegNo}</h1>
            <h1>Year: {biodata.Year}</h1>
            <button onClick={changeBioData}>Change Year</button>
        </div>
    )
}