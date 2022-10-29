import React from 'react'
import img from "./group.png"
import img1 from "./group55.png"
import img2 from "./Group-53.png"
import img3 from "./Group-57.png"
import img4 from "./scw.svg"
import img5 from "./san.svg"
import img6 from "./north.svg"
import img7 from "./treb.svg"
import img8 from "./MRED.webp"
import img9 from "./realtors.svg"
import img10 from "./canopymls.svg"
import img11 from "./heartlandmls.webp"
import img12 from "./stellar.svg"
export default function Mls() {
  return (
    <>
      <div className="mls-top my-5 py-5">
        <div className="container">
          <div className="mls-head text-center py-5">
            <h1>Integrate Your IDX/MLS Data Into Your Houzez Listings</h1>
            <h5 className='py-3'>Houzez integrates with IDX/MLS data to offer the best user experience possible.</h5>
            <ul className='mls-list py-3 d-flex justify-content-around'>
              <li><a href="#support">Supported MLS Providers</a></li>
              <li><a href="#work">How It Works</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
            </ul>
          </div>
          <div className="mls-box-wrapper d-flex">
            <div className="row">
              <div className="col-lg-4">
                <div className="mls-box text-center bg-white p-5 shadow">
                  <div className="icon-wrapper">
                    <i class="bi bi-arrow-repeat"></i>
                  </div>
                  <div className="mls-box-about">
                    <h4>IDX / MLS Integration</h4>
                    <p>Partnering with Realtyna we provide custom real estate MLS solutions for all real estate professionals</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mls-box text-center bg-white p-5 shadow">
                  <div className="icon-wrapper">
                    <i class="bi bi-hand-thumbs-up"></i>
                  </div>
                  <div className="mls-box-about">
                    <h4>IDX / MLS Integration</h4>
                    <p>Partnering with Realtyna we provide custom real estate MLS solutions for all real estate professionals</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mls-box text-center bg-white p-5 shadow">
                  <div className="icon-wrapper">
                    <i class="bi bi-tag"></i>
                  </div>
                  <div className="mls-box-about">
                    <h4>IDX / MLS Integration</h4>
                    <p>Partnering with Realtyna we provide custom real estate MLS solutions for all real estate professionals</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="mls-about py-5">
        <div className="container">
          <div className="mls-abt-top text-center">
            <div className="mls-icons py-3">
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
            </div>
            <div className="mls-abt-head">
              <h1 className='fs-3 fw-semibold py-3'>All-in-one real estate management software with IDX/MLS Sync</h1>
              <ul className='d-flex justify-content-around py-3'>
                <li><i class="bi bi-check2 text-success"></i> Customizable listings</li>
                <li><i class="bi bi-check2"></i> Integrate with your website</li>
                <li><i class="bi bi-check2"></i> Time-saving tool for listings</li>
              </ul>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-lg-6">
              <div className="article py-5">
                <h6 className='text-uppercase text-primary fw-normal'>fully customizable</h6>
                <h4 className='fw-semibold py-4'>Benefits from the use of Houzez's design and functionality</h4>
                <p className='text-black-50'>With the use of Houzez’s features, real estate listing are now more appealing to potential home buyers. With its real estate design, the site makes it easy for sellers to create professional listings that won’t give you away to your competition.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <figure>
                <img src={img} alt="" className='img-fluid' />
              </figure>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-lg-6">
              <figure>
                <img src={img1} alt="" className='img-fluid' />
              </figure>
            </div>
            <div className="col-lg-6">
              <div className="article py-5">
                <h6 className='text-uppercase text-primary fw-normal'>fully customizable</h6>
                <h4 className='fw-semibold py-4'>Benefits from the use of Houzez's design and functionality</h4>
                <p className='text-black-50'>With the use of Houzez’s features, real estate listing are now more appealing to potential home buyers. With its real estate design, the site makes it easy for sellers to create professional listings that won’t give you away to your competition.</p>
              </div>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-lg-6">
              <div className="article py-5">
                <h6 className='text-uppercase text-primary fw-normal'>fully customizable</h6>
                <h4 className='fw-semibold py-4'>Benefits from the use of Houzez's design and functionality</h4>
                <p className='text-black-50'>With the use of Houzez’s features, real estate listing are now more appealing to potential home buyers. With its real estate design, the site makes it easy for sellers to create professional listings that won’t give you away to your competition.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <figure>
                <img src={img2} alt="" className='img-fluid' />
              </figure>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-lg-6">
              <figure>
                <img src={img3} alt="" className='img-fluid' />
              </figure>
            </div>
            <div className="col-lg-6">
              <div className="article py-5">
                <h6 className='text-uppercase text-primary fw-normal'>fully customizable</h6>
                <h4 className='fw-semibold py-4'>Benefits from the use of Houzez's design and functionality</h4>
                <p className='text-black-50'>With the use of Houzez’s features, real estate listing are now more appealing to potential home buyers. With its real estate design, the site makes it easy for sellers to create professional listings that won’t give you away to your competition.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="support" id="support">
        <div className="container">
          <h1 className='text-center pb-5'>Supported MLS Providers</h1>
          <div className="row py-5 text-center">
            <div className="col-lg-4">
              <img src={img4} alt="" className='img-fluid' />
            </div>
            <div className="col-lg-4">
              <img src={img5} alt="" className='img-fluid' />
            </div>
            <div className="col-lg-4">
              <img src={img6} alt="" className='img-fluid' />
            </div>
          </div>
          <div className="row py-5 text-center">
            <div className="col-lg-4 px-4">
              <img src={img7} alt="" className='img-fluid' />
            </div>
            <div className="col-lg-4 px-4">
              <img src={img8} alt="" className='img-fluid' />
            </div>
            <div className="col-lg-4 px-4">
              <img src={img9} alt="" className='img-fluid' />
            </div>
          </div>
          <div className="row py-5 text-center">
            <div className="col-lg-4">
              <img src={img10} alt="" className='img-fluid' />
            </div>
            <div className="col-lg-4">
              <img src={img11} alt="" className='img-fluid' />
            </div>
            <div className="col-lg-4">
              <img src={img12} alt="" className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
      <div className="work py-5" id="work">
        <div className="container">
          <h2 className='text-center'>How it works</h2>
          <div className="work-about text-center">
            <video src='https://sync.realtyna.com/files/video/mls-sync-preview.mp4' controls autoplay className='w-100'>
            </video>
            <div className="note py-5">
              <p><strong>Please note: </strong>When you purchase Houzez the MLS/IDX data is not included.</p>
              <p className='py-3'>The MLS/IDX data feed starts from $99 per month plus MLS data fees. There is an activation <br />fee of $950 which is waived for the MLSs which are already support.</p>
              <button className='text-capitalize border-0 mls-btn fw-bold text-white px-5 py-3'>download plugin</button>
            </div>  
          </div>
        </div>
      </div>
      <div className="faq py-5" id="faq">
        <div className="container">
          <h2 className='text-center py-4'>Frequently Asked Questions</h2>
          <div className="questions">
            <ul className='fw-semibold faq-list'>
              <li>How the MLS Sync work?</li>
              <li>I have  a website built with WordPress. Can I integrate MLS Sync on my website?</li>
              <li>What are my MLS Sync fees?</li>
              <li>Can I install MLS Sync on a third party WordPress theme?</li>
              <li>Can I use MLS Sync on multiple websites or on a child website or franchise?</li>
              <li>What are third party issues that could result in a delay?</li>
              <li>Can I have more than one MLS integration on my website?</li>
              <li>How will the listings be shown and filtered on our website and a franchise website?</li>
              <li>Can I use my own hosting?</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
