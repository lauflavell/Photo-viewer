import React from "react";

export const ImageContext = React.createContext({
    imgUrl: "https://picsum.photos/id/600/1600/900.jpg",
    setUrl: () => {},
})