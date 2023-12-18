// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from "react"
import ReactDOM from 'react-dom';


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <h1>Hello react</h1>
);