import React from 'react'
import img from "./houzez-default-demo.png"
export default function Demo() {
  return (
    <>
      <div className="demo1 py-5 my-5">
        <div className="container-fluid">
          <div className="top">
            <p className='text-center text-primary head'>PRE-BUILT WEBSITES INCLUDED</p>
            <h1 className='text-center'>Get ready to launch your real estate website in minutes with a large choice of pre-built websites</h1>
          </div>
          <div className="row py-4">
            <div className="col-lg-4">
              <figure>
                <img src={img} alt="" className='img-fluid demo-img'/>
              </figure>
            </div>
            <div className="col-lg-4">
              <figure>
              <img src={img} alt="" className='img-fluid demo-img'/>
              </figure>
            </div>
            <div className="col-lg-4">
              <figure>
              <img src={img} alt="" className='img-fluid demo-img'/>
              </figure>
            </div>
          </div>
          <div className="row py-4">
            <div className="col-lg-4">
              <figure>
              <img src={img} alt="" className='img-fluid demo-img'/>
              </figure>
            </div>
            <div className="col-lg-4">
              <figure>
              <img src={img} alt="" className='img-fluid demo-img'/>
              </figure>
            </div>
            <div className="col-lg-4">
              <figure>
              <img src={img} alt="" className='img-fluid demo-img'/>
              </figure>
            </div>
          </div>
          <div className="row py-4">
            <div className="col-lg-4">
              <figure>
              <img src={img} alt="" className='img-fluid demo-img'/>
              </figure>
            </div>
            <div className="col-lg-4">
              <figure>
              <img src={img} alt="" className='img-fluid demo-img'/>
              </figure>
            </div>
            <div className="col-lg-4">
              <figure>
              <img src={img} alt="" className='img-fluid demo-img'/>
              </figure>
            </div>
          </div>
          <div className="row py-4">
            <div className="col-lg-4">
              <figure>
              <img src={img} alt="" className='img-fluid demo-img'/>
              </figure>
            </div>
            <div className="col-lg-4">
              <figure>
              <img src={img} alt="" className='img-fluid demo-img'/>
              </figure>
            </div>
            <div className="col-lg-4">
              <figure>
              <img src={img} alt="" className='img-fluid demo-img'/>
                </figure>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
