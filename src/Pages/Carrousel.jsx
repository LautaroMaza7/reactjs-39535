import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Cards.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default function Carousel({ salones, loading }) {
  const settings = {
    className: "center",
    centerMode: false,
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          className: "center",
          centerMode: true,
          slidesToShow: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          speed: 150,
        },
      },
    ],
  };

  return (
    <>
      {!loading ? (
        <div className="container">
          <div className="p-5 m-5 d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="App">
          <Slider {...settings}>
            {salones.map((item) => (
              <div className="cards">
                <div key={item.id} className="cards-top">
                  <img src={item.imagen_salon} alt="salones" />

                  <h3 className="title-cards">{item.titulo}</h3>
                  <h3 className="iconPersona">
                    {" "}
                    <span className="cadaUno">Por persona</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    </svg>
                  </h3>
                  <h3 className="porPersona">${item.precio}</h3>
                </div>
                <div className="cards-bottom">
                  <h3 className="descrip">{item.direccion}</h3>
                  <span className="category">{item.category}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </>
  );
}
