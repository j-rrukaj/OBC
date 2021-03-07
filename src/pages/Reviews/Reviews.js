import React from 'react'
import "./Reviews.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Fa from "react-icons/fa"


function Reviews() {
    return (

<div id="Reviews">

        <div className="reviewsBackground">

        <div className="heading-reviews">
            <h1>Reviews </h1>
        </div>




<div className="container-fluid">
  <div className="row">
    <div className="feature-box col-lg-4">
    <Fa.FaTools className="reviews-icons"/>
      <h3 className="feature-title">Fantastic Service. Done efficiently with a high standard</h3>
      <p>John R</p>
    </div>


    <div className="feature-box col-lg-4">
    <Fa.FaTools className="reviews-icons"/>
        <h3 className="feature-title">Fantastic Service. Done efficiently with a high standard</h3>
      <p>John R</p>
    </div>

    <div className="feature-box col-lg-4">
    <Fa.FaTools className="reviews-icons"/>
    <h3 className="feature-title">Fantastic Service. Done efficiently with a high standard</h3>
      <p>John R</p>
    </div>
  </div>
</div>







        </div>
        </div>
    )
}

export default Reviews
