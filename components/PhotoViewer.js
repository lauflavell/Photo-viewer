
import React from "react";  // import React (to provide access to JSX)
import './PhotoViewer.css';


export function PhotoViewer(props) {    // declare and export new function called 'PhotoViewer'
   const isImageSelected = props.currentImgUrl === props.source;

    let className;
    if (isImageSelected) {
        className = "image-border"
    } else {
        className = "image-no-border"
        }
        return (  
            <li className="item">             
             <img 
             key={props.indexKey} 
             className={className} 
             src={props.source} 
             alt= "Thumbnail" 
             onClick={props.setUrl}/> 
            </li>             
        );
}




