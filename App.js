import './App.css';
import { PhotoViewer } from './components/PhotoViewer';
import { ImageUrls } from './components/ImageSelector';
import { useState } from "react";
import React from 'react';
import { MainImage } from './components/MainImage';


function App() {
  const [imgUrl, setUrl] = useState("https://picsum.photos/id/600/1600/900.jpg");

  return (
   
      <main>
          <h1 className="heading">React Photo Viewer</h1>

          <MainImage source={imgUrl}/>

          <h2>Select your photo</h2>

          <div className="container">
            {ImageUrls.map((url,index )=> 
            <PhotoViewer 
            indexKey={index}  
            source= {url} 
            setUrl= {() => setUrl(url)}
            currentImgUrl={imgUrl} />
            )}
          </div>

        </main>
      
  );
}

export default App;
