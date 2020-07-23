import React from 'react';
import './college.css';
import Promotion from '../Promotion/promotion';
import ImageContent from '../ImageContent/imageContent';
import RatingContent from '../RatingContent/ratingContent';
import FooterContainer from '../FooterContainer/footerContainer';
import StarRating from '../Rating/ratingStars';
const College = ({ c }) => {



    return (

        <div className="college">

            <div className="imgContainer" style={{ backgroundImage: `linear-gradient(to right bottom, rgba(68,68,68,0.7) , rgba(68,68,68,0.7)),url(../../${c.image})` }}>

                {c.promoted ? <Promotion /> : ""}
                <ImageContent tags={c.tags} ranking={c.ranking} />
                <RatingContent />
            </div>
            <div className="contentDiv">
                <div className="content">
                    <div className="cName">{c.college_name}<div style={{ display: "inline-block" }}><StarRating rating={c.rating} /></div></div>
                    <div className="nearest">{c.nearest_place[0] + " | "} <span className="span"> {c.nearest_place[1]}</span></div>
                    <div style={{ fontSize: '13.5px' }}><span style={{ color: '#37b396', fontFamily: 'DINPro Bold' }}>93% Match:</span><span className="span">{c.famous_nearest_places}</span></div>
                </div>
                <div className="price">
                    <div>
                        <span style={{ fontSize: '11px', textAlign: "center", textDecoration: "line-through", color: '#444444' }}>
                            
                            &#8377;{c.original_fees}
                        
                        </span>
                        <div className="discount">
                            {c.discount}
                        </div>
                        
                        </div>
                    <div><span style={{ fontSize: '28.5px', color: '#dd1c26', fontFamily: 'DINPro Bold' }}>&#8377;{c.discounted_fees} </span></div>
                    <div style={{ fontSize: '11px' }}><span className="span">{c.fees_cycle}</span></div>
                </div>
            </div>
            <FooterContainer offerText={c.offertext} amenities={c.amenties} />
        </div>
    )
}

export default College;