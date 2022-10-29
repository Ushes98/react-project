import React from 'react'
import bg from "./screen.jpg"
import img from "./agent.jpg"
import img2 from "./closeup.jpg"
import img3 from "./strategy.jpg"
import img4 from "./wordpress.jpg"
import chatbot from "./chatbot.jpg"
import blog from "./blog.jpg"
import monetize from "./monetize.jpg"
import improve from "./improve.jpg"
import guide from "./guide.jpg"
import announce from "./announce.jpg"
import mistakes from "./mistakes.jpg"
export default function Blog() {
  return (
    <>
      <div className="blog">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 py-5 ">
              <figure>
                <img src={bg} alt="" className='img-fluid' />
              </figure>
              <h1>Houzez Helps With Designing Websites For All Types Of Real Estate Industry</h1>
              <p>You’re probably familiar with Houzez as a powerful WordPress theme for real estate agents. But did you know that Houzez can also help you to design websites for all types of real estate industry such as residential real estate, commercial real estate, industrial real estate and farmland? In this article,</p>
              <a href="/" alt="" className="text-primary p-0">Read More</a>
            </div>
            <div className="col-lg-4 py-5">
              <h6>Latest Post</h6>
              <div className="post-box my-5">
                <h4>5 Tools Needed in Real Estate Website</h4>
                <p>When you’re looking for a new home, the real estate website that you use has the potential to make or break your search. If your</p>
              </div>
              <div className="post-box my-5">
                <h4>How to get more traffic from google</h4>
                <p>Getting traffic from Google is one of the most important things you can do to grow your business. After all, if people can’t find you</p>
              </div>
              <div className="post-box my-5">
                <h4>Why content marketing is important for real estate agents</h4>
                <p>Real estate is a fast-paced and ever-changing industry, which means that it can be difficult to keep up with the latest trends. However, one trend</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="trend py-5">
        <div className="container-fluid">
          <h1 className='pb-5'>Real Estate</h1>
          <div className="row py-5">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <h5>Why content marketing is important for real state agents</h5>
                  <p className='text-black-50'>June 22, 2022</p>
                  <p>Real estate is a fast-paced and ever-changing industry, which means that it can be difficult to keep up with the latest trends. However, one trend</p>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <img src={img} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <h5>8 Strategies for Getting More Real Estate Referrals</h5>
                  <p className='text-black-50'>January 31, 2022</p>
                  <p>A great way to generate more real estate referrals is to be proactive when it comes to your marketing efforts. One of the best ways</p>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <img src={img3} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-lg-6 col-sm-6">
              <div className="row">
                <div className="col-lg-6">
                  <h5>5 Ways to grow your real estate local business through WordPress</h5>
                  <p className='text-black-50'>January 24, 2022</p>
                  <p>There are a number of steps that small business owners can take to increase the visibility and reach of their businesses. One way to do</p>
                </div>
                <div className="col-lg-6">
                  <img src={img2} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="row">
                <div className="col-lg-6">
                  <h5>WordPress and the Real Estate Industry</h5>
                  <p className='text-black-50'>January 17, 2022</p>
                  <p>WordPress has definitely changed the real estate industry in many ways. WordPress is a free, open-source content management system that was originally designed for blogging.</p>
                </div>
                <div className="col-lg-6">
                  <img src={img4} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tips">
        <div className="container-fluid">
          <h1 className='pb-5'>How To Improve Your Business</h1>
          <div className="row py-3">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <h5>How to generate more real estate leads using a chatbot</h5>
                  <p className='text-black-50'>May 23, 2022</p>
                  <p>In the business of real estate, generating leads is essential to your success. However, manually generating leads can be time-consuming and expensive. Luckily, there is</p>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <img src={chatbot} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <h5>How To Use Your Blog To Increase Conversions In Real Estate</h5>
                  <p className='text-black-50'>April 25, 2022</p>
                  <p>Increasing conversions on your website is not always easy. People are often hesitant to buy a product sight unseen, and in the real estate industry</p>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <img src={blog} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-3 pb-5">
            <div className="col-lg-6 col-sm-6">
              <div className="row">
                <div className="col-lg-6">
                  <h5>How to start and monetize a real estate directory website</h5>
                  <p className='text-black-50'>March 21, 2022</p>
                  <p>Starting a real estate directory website might seem overwhelming – but with the right information, it can be a lot easier. If you want to</p>
                </div>
                <div className="col-lg-6">
                  <img src={monetize} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="row">
                <div className="col-lg-6">
                  <h5>How to Improve Your Landing Page Conversions</h5>
                  <p className='text-black-50'>February 9, 2022</p>
                  <p>A landing page is the first page that a visitor sees when they come to your site and it can often be the difference between</p>
                </div>
                <div className="col-lg-6">
                  <img src={improve} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="seo">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-sm-4">
              <div className="img-wrapper">
                <img src={guide} alt="" className='img-fluid' />
              </div>
              <div className="content-wrapper">
                <h5>A Comprehensive Guide To Writing Real Estate Property Descriptions</h5>
                <p className='text-black-50'>April 11, 2022</p>
                <p className='text-black-50'>If you’re a real estate agent or broker, then you’ll be responsible for listing properties and describing them to prospective buyers. A property description is</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4">
              <div className="img-wrapper">
                <img src={announce} alt="" className='img-fluid' />
              </div>
              <div className="content-wrapper">
                <h5>What You Need To Do To Announce A Real Estate Website Launch</h5>
                <p className='text-black-50'>April 4, 2022</p>
                <p className='text-black-50'>Successful real estate websites are more than just pretty pictures. They’re a reflection of the savvy businessperson behind it. When you’re ready to launch your</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4">
              <div className="img-wrapper">
                <img src={mistakes} alt="" className='img-fluid' />
              </div>
              <div className="content-wrapper">
                <h5>Why you should take the time to review the common mistakes of real estate SEO</h5>
                <p className='text-black-50'>March 28, 2022</p>
                <p className='text-black-50'>If you want the best results in your real estate SEO campaign, then you need to pay attention to all of the details. There are</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
