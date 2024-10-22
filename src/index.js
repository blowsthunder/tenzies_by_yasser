import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import './style.css'

function seyHello(){
    console.log('heelo');
}

ReactDOM.render(<App Hello={seyHello}/>,document.getElementById('root'))