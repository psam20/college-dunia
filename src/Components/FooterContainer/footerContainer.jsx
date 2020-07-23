import React from 'react';
import './footerContainer.css'
const FooterContainer = ({offerText,amenities})=> {

    return (
        <div className="footerContainer">

            <div className="offer">
                   {offerText}
            </div>

            <div className="amen">
               <span> {amenities[0]+ "." }</span>
             <span>{amenities[1]}</span>

            </div>

        </div>
    )
}

export default FooterContainer;