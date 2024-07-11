import React from "react";
import hello from "./assets/images/4.webp";
import arzoo from "./assets/images/5.webp";
function Deals(){
    return(
        <div className="container text-center deals-main">
        <h2 style={{marginBottom:'50px'}}>The Real Deals By Slopper</h2>
            <div className="row deals-sec">
                <div className="col deal-con">
                    <img src={hello} className="deals"/>
                    <div style={{padding:'1rem', textAlign:'left'}}>
                    <h3>Sales</h3>
                    <p>All the Best Fourth of July Sales to Shop</p>

                    </div>
                </div>
                    <div className="col " style={{width: '100%'}}>
                    <div className="col deals-inner">
                        <div className="imge">
                        <img src={arzoo}/>
                        

                        </div>
                    <div style={{padding:'1rem', textAlign:'left'}}>
                    <h3>Sales</h3>
                    <p>All the Best Fourth of July Sales to Shop</p>

                    </div>
                    
                    </div>
                    <div className="col deals-inner">
                        <div className="imge">
                        <img src={arzoo}/>
                        

                        </div>
                    <div style={{padding:'1rem', textAlign:'left'}}>
                    <h3>Sales</h3>
                    <p>All the Best Fourth of July Sales to Shop</p>

                    </div>
                    
                    </div>
                    <div className="col deals-inner">
                        <div className="imge">
                        <img src={arzoo}/>
                        

                        </div>
                    <div style={{padding:'1rem', textAlign:'left'}}>
                    <h3>Sales</h3>
                    <p>All the Best Fourth of July Sales to Shop</p>

                    </div>
                    
                    </div>
                    
                    </div>

            </div>
        </div>
    );
}
export default Deals;
