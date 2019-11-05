import React from "react";
import "./styles.css";
// import { Fade } from "react-slideshow-image";

// const fadeImages = [
//   "https://i.pinimg.com/originals/90/32/19/9032190be664c1f4c73b418a72bbcda7.png",
//   "https://i.pinimg.com/originals/1f/14/f2/1f14f2cb3eb3446c68c9aed9a4c2076f.png"    ,
//   "https://cdn140.picsart.com/292366727016211.png?r1024x1024"
// ];

// const fadeProperties = {
//   duration: 5000,
//   transitionDuration: 500,
//   infinite: false,
//   indicators: true,
//   onChange: (oldIndex, newIndex) => {
//     console.log(`fade transition from ${oldIndex} to ${newIndex}`);
//   }
// };
const Slideshow = () => {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="/data/img/slide4.jpg"
            alt="First slide"
          />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="/data/img/slide5.png" alt="Second slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="/data/img/slide3.jpg" alt="Third slide" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    // <div className="slide-container">
    //   <Fade {...fadeProperties}>
    //     <div className="each-fade">
    //       <div className="image-container">
    //         <img src={fadeImages[0]} />
    //       </div>
    //       <h2></h2>
    //     </div>
    //     <div className="each-fade">
    //       <div className="image-container">
    //         <img src={fadeImages[1]} />
    //       </div>
    //       <h2></h2>
    //     </div>
    //     <div className="each-fade">
    //       <div className="image-container">
    //         <img src={fadeImages[2]} />
    //       </div>
    //       <h2></h2>
    //     </div>
    //   </Fade>
    // </div>
  );
};

class Index extends React.Component {
  render() {
    return (
      <>
      
        <Slideshow />
        <section id="who">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h2>Sailor Merch</h2>

                <hr align="left" width="50%" />
                <p class="lead">
                  A collection of the latest Sailor Moon gifts and merchandise
                  you can buy online! Includes products such as clothes, jewelry
                  and accessories inspired by your favorite Sailor Scouts and
                  guardian cats. You won’t believe some of the Sailor Moon merch
                  we find online that will have you reaching for your wallet.
                </p>
                <button type="button" class="btn btn-who">
                  Check it Out
                </button>
              </div>

              <div class="col-md-6">
                <img
                  class="img-fluid"
                  src="/data/img/merchside.png" alt="fashion"
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Index;
// export default Slideshow;
