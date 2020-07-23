import React from 'react';
import './college.css';
import Promotion from '../Promotion/promotion';
const College = ({ c }) => {



    return (

        <div className="college">
            
            <div className="imgContainer" style={{ backgroundImage: `url(${c.image})` }}>

            <Promotion />
            </div>
            <div className="contentDiv">
                <div className="content">
                    <div className="cName">{c.college_name}</div>
                    <div className="nearest">{c.nearest_place[0] + " | "} <span className="span"> {c.nearest_place[1]}</span></div>
                    <div style={{ fontSize: '13.5px' }}><span style={{ color: '#37b396', fontFamily: 'DINPro Bold' }}>93% Match:</span><span className="span">{c.famous_nearest_places}</span></div>
                </div>
                <div className="price">
                    <div>
                        <span style={{ fontSize: '11px', textAlign: "center", textDecoration: "line-through", color: '#444444' }}>&#8377;{c.original_fees}</span></div>
                    <div><span style={{ fontSize: '28.5px', color: '#dd1c26', fontFamily: 'DINPro Bold' }}>&#8377;{c.discounted_fees} </span></div>
                    <div style={{ fontSize: '11px' }}><span className="span">{c.fees_cycle}</span></div>
                </div>
            </div>
        </div>
    )
}

export default College;