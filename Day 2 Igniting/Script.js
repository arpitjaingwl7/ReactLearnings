import React from "react";
import  ReactDOM  from "react-dom/client";

const heading1=React.createElement("h1",{id:"lalal",className:"twinkle",style:{color:"red",height:"20vh",backgroundColor:"pink"}},"Heading1")
const heading2=React.createElement("h2",{id:"lalal",className:"twinkl",style:{color:"red",height:"20vh",backgroundColor:"pink"}},"Headinguguyu2")
const root=ReactDOM.createRoot(document.querySelector("#root"))
const container=React.createElement("div",[],[heading1,heading2])

root.render(container)
