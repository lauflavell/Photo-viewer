import React from "react";

export function HelloWorld({ name }) {    // declare and export new function called 'PhotoViewer'  
        if (name)  {
            return (
            <div>
                <p>Hello, {name} </p>
            </div>)
        }
        return (
            <div>          
                <p> Hello, world</p> 
            </div>
        )
}