import React from "react";
import wallpaper from "../images/wallpaper.jpg";

function Home() {
  return (
    <main>
      <div className="container-word">
          <div className="container_content">
            <div className="container_content_inner">
              <div className="title">
                <p>Hello!</p>
                <h1 className="name">I'm Zainab Ghadiyali</h1>
              </div>
              <div className="par">
                <p className="developer">
                  Aspiring Front-End Developer |<br />
                  Passionate About Creating Engaging <br />
                  User Experiences
                </p>
              </div>
              <div className="btns">
                <a href="https://www.linkedin.com/in/zainab-ghadiyali-671665282">
                  <button className="btns_more">Linkedin</button>
                </a>
              </div>
            </div>
          </div>
          <div className="container_outer_img">
            <div className="img-inner">
              <img
                src={wallpaper}
                width={500}
                height={500}
                alt=""
                className="container_img"
              />
            </div>
          </div>
        </div>
        <div className="overlay"></div>
    </main>
  );
}

export default Home;
