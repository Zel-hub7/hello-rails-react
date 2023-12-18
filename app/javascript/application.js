// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from "react"
import ReactDOM from 'react-dom';s
import Home from "./components/Home";


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Home />
);