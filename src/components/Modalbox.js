import { useEffect, useState } from "react";
import { dataImage } from "../utilits";

const Modalbox = ({ close, value }) => {
  const data = [
    {
      name: "Connect Four",
      tag: "Javascript, HMTL",
      desc: [
        { p: "A Connect Four game with built-in CSS animation that allows a user to reset after a game has been won. Built with Javascript, HTML, CSS, Flexbox" }
    
      ]

    },
    {
      name: "JSON API Project",
      tag: "express, mongoose",
      desc: [
        { p: "   A JSON API built from the ground up using mongoose and express. This JSON API has complete CRUD functionality with RESTful routes. Deployed to Railway." },
      
      ]

    },
    {
      name: "React Application",
      tag: "react, axios", 
      desc: [
        { p: "Built a Tab and Modal UI pattern application in React and integrated two separate APIS. Built with React, Axios, CSS, JavaScript, Node-fetch."}
      ]

    },
    {
      name: "Mern React",
      tag: "crud, react",
      desc: [
        { p: "This project was built with React and is a front end to one of my classmates deployed API and has partial CRUD functionality that gives a user the ability to create, read, and delete." },
     
      ]

    },
    {
      name: "MERN Stack Group Project",
      tag: "react, full crud",
      desc: [
        { p: "Group project workout application using full stack mongo/express/react/node application." }
      ]

    }
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
                setIndex(index == 1 ? 5 : index - 1);
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
                setIndex(index == 5 ? 1 : index + 1);
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