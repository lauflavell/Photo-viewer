
import React, { useContext } from "react";  // import React (to provide access to JSX)
import './PhotoViewer.css';
import { ImageUrls } from './components/ImageSelector';
import { ImageContext } from "./ImageContext";

export function PhotoViewer(props) {    // declare and export new function called 'PhotoViewer'
    let { imgUrl, setUrl } = useContext(ImageContext);

    return (  
            <li className="item">
                {ImageUrls.map(url =>              
             <img src={url} alt= "" onClick={() => setUrl(url)} />
             )}
            </li>             
    );
}

