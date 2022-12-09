import React, { useState, useEffect } from "react";
import ImageCard from "./component/imagecard";
import ImageSearch from "./component/imageSearch";
import NavBar from "./component/navBar";


function App() {
  const [image, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXAPABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <NavBar />
      <ImageSearch setText/>
      <div className="flex justify-center flex-row">
        {isLoading ? (
          <h1 className="text-6xl text-center mx-auto mt-35">Loading....</h1>
        ) : (
          <div className="grid md:grid-cols-3 gap-4 max-h-lg">
            {image.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
