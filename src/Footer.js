import React from 'react';
import './App.css'
export default function Footer() {
      return (
            <>
                  <div className='footer py-5'>
                        <div className="container-fluid">
                              <div className="row text-center">
                                    <div className="col-lg-8">
                                          <h1>Get Houzez and create <br />the real estate website <br /> you always wanted</h1>
                                          <p>Houzez is equipped with every tool you’d need to deliver a <br />product that any realtor or real estate agency would be <br />delighted to have providing a powerful, engaging, and <br />attractive online presence.</p>
                                    </div>
                                    <div className="col-lg-4">
                                          <div className="box">
                                                <h1><sup>$</sup>69<sup>00</sup></h1>
                                                <p>No Monthly Fees</p>
                                                <ul className='my-5 lh-lg'>
                                                      <li><i class="bi bi-patch-check"></i> All Features Included</li>
                                                      <li><i class="bi bi-patch-check"></i> All Pre-Built Demos Included</li>
                                                      <li><i class="bi bi-patch-check"></i> Houzez CRM</li>
                                                      <li><i class="bi bi-patch-check"></i> Free Lifetime Updates</li>
                                                      <li><i class="bi bi-patch-check"></i> Top Notch Customer Support</li>
                                                </ul>
                                                <span className="buy">Buy Housez</span>
                                                <p className='my-5'>Buy with confidence, no asterisks</p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="copy">
                        <p className='text-center'>Houzez.co © All right reserved</p>
                  </div>

            </>
      )
}
