import React, { useEffect, useState } from "react";
import { dataImage } from "../utilits";

const Modalbox = ({ close, value }) => {
  const data = [
    {
      name: "GA Express",
      tag: "React, Css, Javascript, MongoDB, Express, Mongoose",
      desc: [
        {p:<a href="https://github.com/annadruzhinina/FrontEnd-Shop">Github Link</a> },
        {p:<a href="https://gaexpress.netlify.app/">Deployed Site</a> },
        { p: "An e-commerce site which promotes the sales of the best products available on the market. This project is tied to a back-end that me and my group made." },
      ]

    },
    {
      name: "Cat Gif API",
      tag: "Mongoose, Express, API, CRUD",
      desc: [
        {p:<a href="https://github.com/muhammadwarrad/Cat-Gif-API">Github Link</a> },
        {p:<a href="https://coruscating-rugelach-9c2a94.netlify.app/">Deployed Site</a> },
        { p: "This is a slider Ui i pattern in React. The user sees a random cat gif on the screen with Next and Previous' buttons. When the user clicks on the Previous button the slider shift to show the previous Gif in the list and the Next button shows a new gif." },
        
      ]

    },
    {
      name: "Matching Game JavaScript",
      tag: "JavaScript, CSS, HTML", 
      desc: [
        {p:<a href="https://github.com/muhammadwarrad/Project-01">Github Link</a> },
        {p:<a href="https://muhammadwarrad.github.io/Project-01/">Deployed Site</a> },
        { p: "My very first project I made a matching game. The goal of the matching game is for the player to match all the pictures together"}
      ]

    },
    {
      name: "Mern React",
      tag: "React, CRUD, API",
      desc: [
        {p:<a href="https://github.com/SEI-Grim-Repos/Group-Alpha">Github Link</a> },
        {p:<a href="https://aesthetic-malasada-e5d24c.netlify.app/">Deployed Site</a> },
        { p: "Social media application for food lovers has full CRUD functionality and also user authentication build with python, Django, SQL and React" },
     
      ]

    },
    // {
    //   name: "MERN Stack Group Project",
    //   tag: "react, full crud",
    //   desc: [
    //     { p: "Group project workout application using full stack mongo/express/react/node application." }
    //   ]

    // }
  ];

  const [index, setIndex] = useState(value);
  useEffect(() => {
    dataImage();
  }, [index]);

  return (
    <div className="resumo_fn_modalbox opened">
      <a
        className="extra_closer"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          close(false);
        }}
      />
      <div className="box_inner">
        <a
          className="closer"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            close(false);
          }}
        >
          <span />
        </a>
        <div className="modal_content">
          <div className="modal_in">
            {data.map(
              (d, i) =>
                i + 1 == index && (
                  <div key={i}>
                    <p className="fn__cat">{d.tag}</p>
                    <h3 className="fn__title">{d.name}</h3>
                    <div className="img_holder">
                      <img src="/img/thumb/square.jpg" alt="" />
                      <div
                        className="abs_img"
                        data-bg-img={`/img/portfolio/${index}.jpg`}
                      />
                    </div>
                    {d.desc.map((des,i) => (
                      <p key={i} className="fn__desc">
                        {des.p}
                      </p>
                    ))}
                  </div>
                )
            )}
          </div>

          <div className="fn__nav" data-from="portfolio" data-index="1">
            <a
              href="#"
              className="prev"
              onClick={(e) => {
                e.preventDefault();
                setIndex(index == 1 ? 4 : index - 1);
              }}
            >
              <span className="text">Prev</span>
              <span className="arrow_wrapper">
                <span className="arrow"></span>
              </span>
            </a>
            <a
              href="#"
              className="next"
              onClick={(e) => {
                e.preventDefault();
                setIndex(index == 4 ? 1 : index + 1);
              }}
            >
              <span className="text">Next</span>
              <span className="arrow_wrapper">
                <span className="arrow"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modalbox;