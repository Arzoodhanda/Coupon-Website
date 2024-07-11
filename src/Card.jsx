import React from "react";


function Card(props){
    return(
        <>

                <div className="card-section" style={{marginBottom: '20px'}}>
            <div className="image">
                <img src={props.srcimg} className="card-img-top" alt="..." />
            </div>
            <div className="content">
                <p className="text-1">{props.tittle}
                </p>

                <div className="text-2">
                <span>
                    Get 35% off
                </span>
                <span>{props.subtittle}</span>
                </div>

                <a className="action" href="">
                Get Discount
                </a>

                <p className="date">
                Offer valid until 29th April, 2023 *
                </p>
            </div>
            </div>


        

        </>
    );
}

export default Card;
