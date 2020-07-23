import React from 'react';
import './imageContent.css';
const ImageContent = ({tags,ranking})=>{

    return (
        <div className="contentContaier"> 
           <div className="tagsContainer">
                    
                        <button type="button" className="tag">
                        {tags[0].toUpperCase()}
                        </button>
                   
                  
                        <button type="button" className="tag tag1">
                        {tags[1]}
                        </button>

                    
           </div>
           <div className="ranking">
               #{ranking}
           </div>

        </div>
    )

}

export default ImageContent;