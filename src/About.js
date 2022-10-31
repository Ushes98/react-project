import React from 'react'
import { Link } from 'react-router-dom'
import bg from './bg-1.png'
import bg1 from "./Group-3.png"
export default function About() {
      return (
            <>
                  <div className='about py-5'>
                        <div className="container-fluid">
                              <div className="d-flex">
                                    <div className="row">
                                          <div className="col-lg-6">
                                                <h6 className='head'>#1 BEST SELLING REAL ESTATE THEME</h6>
                                                <h1 className='real-state-header'>Highly Customizable<br />
                                                      Real Estate WordPress Theme
                                                </h1>
                                                <p className='real-state-p'>Houzez is a powerful WordPress real estate theme for freelancers, realtors and businesses. With extensive customization options and tons of features, Houzez will help you create a website that will impress your potential clients and help you sell more homes.</p>
                                                <div className="a-buy">
                                                      <Link to="/" className="buy">BUY Houzez</Link>
                                                      <Link to="/" className='demo'>View Demos</Link>
                                                </div>
                                          </div>
                                          <div className="col-lg-6 bg">
                                                <figure>
                                                      <img src={bg} alt="" className="w-100" />
                                                </figure>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="features px-3" id="features">
                        <figure>
                              <h6 className='d-inline pe-3 text-secondary'>Featured at </h6>
                              <img src={bg1} alt="" className='img-fluid' />
                        </figure>
                  </div>
                  <div className="reviews py-5">
                        <div className="container-fluid">
                              <div className="row">
                                    <div className="col-lg-6">
                                          <h5>Trusted by companies <br />and business owners worldwide</h5>
                                          <p className='text-black-50'>Certainly, this theme is so widely used, there are so much documentation and support online/youtube, etc. It's one of the top themes for real estate for a reason</p>
                                    </div>
                                    <div className='col-lg-3'>
                                          <h1 className='fw-bold'>31,600+</h1>
                                          <h6 className='fw-semibold'>More Than 31,600 Happy Customers</h6>
                                          <p>Providing high quality and functioning themes is our main focus resulting in thousands of satisfied customers</p>
                                    </div>
                                    <div className="col-lg-3">
                                          <h1 className='fw-bold'>1,700+</h1>
                                          <h6 className='fw-semibold'>Over 1,700 reviews with average 5-Star</h6>
                                          <p>Our satisfied customers rewards us with their positive feedback and this is publicity that can not be bought</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>


      )
}
