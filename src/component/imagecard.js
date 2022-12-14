import React from "react";
// credit : Traversy Media (Youtube)
const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");
  return ( 
      <div className="max-w-sm rounded  border-r-8 overeflow-hidden shadow-lg">
        <img src={image.webformatURL} alt="random" className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            photo by {image.user}
          </div>
          <ul>
            <li>
              <strong>views: </strong>
              {image.views}
            </li>
            <li>
              <strong>Likes: </strong>
              {image.likes}
            </li>
            <li>
              <strong>Downloads: </strong>
              {image.downloads}
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
  
  );
};

export default ImageCard;
