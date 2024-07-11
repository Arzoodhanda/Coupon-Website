import React from 'react';
import reactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import coupon from "./assets/images/7.webp";
import Card from './Card';
import Sdata from './Sdata';
import Deals from './deals';
import Cashback from './Cashback';
import Cashbackdata from './Cashbackdata';
import Footer from './Footer/Footer';


reactDOM.render(
  <>

<div className="container upper-sec">
            <h4>CHA-CHING</h4>
        </div>
        <div className='container upper-top'>

            <span class="start-text">Cash Back At Stores We Love</span>
            <span class="end-text">All CashBack</span>
          
        </div>

<div className='container text-center' style={{marginBottom: '30px', marginTop: '30px'}}>
              <div className="row">
              <div className="col">
              <Cashback
                key={Cashbackdata[0].id}
        cimgsrcimg= {Cashbackdata[0].cimg}
        csubtittle = {Cashbackdata[0].csubtittle}
              />
              </div>
              <div className="col">
              <Cashback
                key={Cashbackdata[0].id}
        cimgsrcimg= {Cashbackdata[0].cimg}
        csubtittle = {Cashbackdata[0].csubtittle}
              />
              </div>
              <div className="col">
              <Cashback
                key={Cashbackdata[0].id}
        cimgsrcimg= {Cashbackdata[0].cimg}
        csubtittle = {Cashbackdata[0].csubtittle}
              />
              </div>
              <div className="col">
              <Cashback
                key={Cashbackdata[0].id}
        cimgsrcimg= {Cashbackdata[0].cimg}
        csubtittle = {Cashbackdata[0].csubtittle}
              />
              </div>
              <div className="col">
              <Cashback
                key={Cashbackdata[0].id}
        cimgsrcimg= {Cashbackdata[0].cimg}
        csubtittle = {Cashbackdata[0].csubtittle}
              />
              </div>
              <div className="col">
              <Cashback
                key={Cashbackdata[0].id}
        cimgsrcimg= {Cashbackdata[0].cimg}
        csubtittle = {Cashbackdata[0].csubtittle}
              />
              </div>
              <div className="col">
              <Cashback
                key={Cashbackdata[0].id}
        cimgsrcimg= {Cashbackdata[0].cimg}
        csubtittle = {Cashbackdata[0].csubtittle}
              />
              </div>
              <div className="col">
              <Cashback
                key={Cashbackdata[0].id}
        cimgsrcimg= {Cashbackdata[0].cimg}
        csubtittle = {Cashbackdata[0].csubtittle}
              />
              </div>
              </div>
              </div>

              <div className='container cashback-image'>
                <img src={coupon}/>
              </div>




        
        <div className='container upper-top'>

            <span class="start-text">July 4th Deals</span>
            <span class="end-text">ALL JULY 4TH DEALS</span>
          
        </div>
  <div className='container text-center' style={{marginBottom: '20px'}}>
              <div className="row">
              <div className="col">
        <Card 
        key={Sdata[0].id}
        srcimg= {Sdata[0].srcimg}
        tittle= {Sdata[0].tittle}
        subtittle = {Sdata[0].subtittle}/>
        </div>
        <div className="col">
        <Card 
        key={Sdata[1].id}
        srcimg= {Sdata[1].srcimg}
        tittle= {Sdata[1].tittle}
        subtittle = {Sdata[1].subtittle}/>
        </div>
        <div className="col">
        <Card 
        key={Sdata[2].id}
        srcimg= {Sdata[2].srcimg}
        tittle= {Sdata[2].tittle}
        subtittle = {Sdata[2].subtittle}/>
        </div>
        <div className="col">
        <Card 
        key={Sdata[3].id}
        srcimg= {Sdata[3].srcimg}
        tittle= {Sdata[3].tittle}
        subtittle = {Sdata[3].subtittle}/>
        </div>
        
        
      </div>
    </div>

    <div className="container upper-sec">
            <h4>CHA-CHING</h4>
        </div>
        
    <div className='container text-center'>
              <div className="row">
              <div className="col">
        <Card 
        key={Sdata[0].id}
        srcimg= {Sdata[0].srcimg}
        tittle= {Sdata[0].tittle}
        subtittle = {Sdata[0].subtittle}/>
        </div>
        <div className="col">
        <Card 
        key={Sdata[1].id}
        srcimg= {Sdata[1].srcimg}
        tittle= {Sdata[1].tittle}
        subtittle = {Sdata[1].subtittle}/>
        </div>
        <div className="col">
        <Card 
        key={Sdata[2].id}
        srcimg= {Sdata[2].srcimg}
        tittle= {Sdata[2].tittle}
        subtittle = {Sdata[2].subtittle}/>
        </div>
        <div className="col">
        <Card 
        key={Sdata[3].id}
        srcimg= {Sdata[3].srcimg}
        tittle= {Sdata[3].tittle}
        subtittle = {Sdata[3].subtittle}/>
        </div>
        
        
      </div>
    </div>
    
              <Deals/>
              



              <div className="container upper-sec" style={{marginTop:'40px'}}>
            <h4>Top Deals</h4>
        </div>
  <div className='container text-center' style={{marginBottom: '40px', marginTop:'10px'}}>
              <div className="row">
              <div className="col">
        <Card 
        key={Sdata[0].id}
        srcimg= {Sdata[0].srcimg}
        tittle= {Sdata[0].tittle}
        subtittle = {Sdata[0].subtittle}/>
        </div>
        <div className="col">
        <Card 
        key={Sdata[1].id}
        srcimg= {Sdata[1].srcimg}
        tittle= {Sdata[1].tittle}
        subtittle = {Sdata[1].subtittle}/>
        </div>
        <div className="col">
        <Card 
        key={Sdata[2].id}
        srcimg= {Sdata[2].srcimg}
        tittle= {Sdata[2].tittle}
        subtittle = {Sdata[2].subtittle}/>
        </div>
        <div className="col">
        <Card 
        key={Sdata[3].id}
        srcimg= {Sdata[3].srcimg}
        tittle= {Sdata[3].tittle}
        subtittle = {Sdata[3].subtittle}/>
        </div>
        
        
      </div>
    </div>




          <Footer/>
        
  </>,
  document.getElementById("root")
);

