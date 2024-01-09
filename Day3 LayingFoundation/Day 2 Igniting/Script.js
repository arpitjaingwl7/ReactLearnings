import React from "react";
import  ReactDOM  from "react-dom/client";

const heading1=React.createElement("h1",{id:"lalal",className:"twinkle",style:{color:"red",height:"20vh",backgroundColor:"pink"}},"Heading1")
const heading2=React.createElement("h2",{id:"lalal",className:"twinkl",style:{color:"red",height:"20vh",backgroundColor:"pink"}},"Headinguguyu2")
const root=ReactDOM.createRoot(document.querySelector("#root"))
const container=React.createElement("div",[],[heading1,heading2])

let s='{"type":"div","key":null,"ref":null,"props":{"children":[{"type":"h1","key":null,"ref":null,"props":{"id":"lalal","className":"twinkle","style":{"color":"red","height":"20vh","backgroundColor":"pink"},"children":"Heading1"},"_owner":null,"_store":{}},{"type":"h2","key":null,"ref":null,"props":{"id":"lalal","className":"twinkl","style":{"color":"red","height":"20vh","backgroundColor":"pink"},"children":"Headinguguyu2"},"_owner":null,"_store":{}}]},"_owner":null,"_store":{}}'
// console.log(container)
root.render(JSON.parse(JSON.stringify(container)))
