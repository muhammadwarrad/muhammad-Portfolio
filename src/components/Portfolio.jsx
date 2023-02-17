import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSliderProps } from "../sliderProps";
import Modalbox from "./Modalbox";
const Portfolio = () => {
  const [modal, setModal] = useState(false);
  const [modalValue, setModalValue] = useState(null);
  return (
    <section id="portfolio">
      {modal && <Modalbox close={setModal} value={modalValue} />}
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <div className="my__nav">
              <a href="#" className="prev">
                <span />
              </a>
              <a href="#" className="next">
                <span />
              </a>
            </div>
            <h3 className="subtitle">Portfolio</h3>
            <h3 className="title">Featured Projects</h3>
          </div>
          {/* /Main Title */}
        </div>
      </div>
      <div className="container noright">
        <div className="roww">
          <Swiper
            {...portfolioSliderProps}
            className="owl-carousel modal_items"
            data-from="portfolio"
          >
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(1);
              }}
              data-index={1}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/portfolio/1.jpg" />
              </div>
              <div className="title_holder">
                <p>React, Css, Javascript, MongoDB, Express, Mongoose</p>
                <h3>
                  <a href="#">GA Express </a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">React, Css, Javascript, MongoDB, Express, Mongoose</p>
                <h3 className="fn__title">GA Express Group Project</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  <div className="abs_img" data-bg-img="img/portfolio/1.jpg" />
                </div>
                <p className="fn__desc">
                | An e-commerce site which promotes the sales of the best products available on the market. This project is tied to a back-end that me and my group made.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(2);
              }}
              data-index={2}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/portfolio/2.jpg" />
              </div>
              <div className="title_holder">
                <p>Mongoose, Express, API, CRUD</p>
                <h3>
                  <a href="#">Cat Gif API</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">Express, Mongoose</p>
                <h3 className="fn__title">JSON API</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  <div className="abs_img" data-bg-img="img/portfolio/2.jpg" />
                </div>
                <p className="fn__desc">
                This is a slider Ui i pattern in React. The user sees a random cat gif on the screen with Next and Previous' buttons. When the user clicks on the Previous button the slider shift to show the previous Gif in the list and the Next button shows a new gif.
                </p>
        
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(3);
              }}
              data-index={3}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/portfolio/3.jpg" />
              </div>
              <div className="title_holder">
                <p>Tab & Modal, Axios, Node-Fetch</p>
                <h3>
                  <a href="#">Matching Game JavaScript</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">JavaScript</p>
                <h3 className="fn__title">Matching Game</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  <div className="abs_img" data-bg-img="img/portfolio/3.jpg" />
                </div>
                <p className="fn__desc">
                For my first project I made a matching game. The goal of the matching game is for the player to match all the pictures together
                </p>
           
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(4);
              }}
              data-index={4}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/portfolio/4.jpg" />
              </div>
              <div className="title_holder">
                <p>python, Django, SQL and React</p>
                <h3>
                  <a href="#">Gourmet Gather</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat"></p>
                <h3 className="fn__title">Python, Django, SQL and React</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  <div className="abs_img" data-bg-img="img/portfolio/4.jpg" />
                </div>
                <p className="fn__desc">
                Social media application for food lovers has full CRUD functionality and also user authentication build with python, Django, SQL and React
                </p>
              
      
              </div>
            </SwiperSlide>
        
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
