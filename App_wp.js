import './App.css';
import { PhotoViewer } from './components/PhotoViewer';
import { ImageContext } from './components/ImageContext';
import { useState } from "react";
import React from 'react';

function App() {
  const [imgUrl, setUrl] = useState("https://picsum.photos/id/600/1600/900.jpg");

  return (
    <ImageContext.Provider value={{ imgUrl: imgUrl, setUrl: setUrl }}>
      <div>
          <h1 className="heading">React Photo Viewer</h1>

          <div className="large-img">
            <img src={imgUrl} alt=""/>
          </div>

          <h2>Select your photo</h2>

          <div className="container">
            
            <PhotoViewer/>
            
          </div>

        </div>
      </ImageContext.Provider>
  );
}

export default App;
