import React, { useEffect } from "react";
import "./index.css";
import Navbar from "./Components/NavBar/Navbar";
import ButtonGradiant from "./Components/Buttons/ButtonGradiant";
import npcPlay from "./assets/NPC-IMG.png";
import iconServiceMobile from "./assets/smartphone (2) 1.svg";
import iconServicePC from "./assets/pc 1.svg";
import iconServiceModeling from "./assets/3d-cube 1.svg";
import iconService2DModeling from "./assets/graphic-tablet_2098254 1.svg";
import projectIMG1 from "./assets/Rectangle 15.png";
import projectIMG2 from "./assets/Rectangle 16.png";
import projectIMG3 from "./assets/Rectangle 17.png";
import ProjectCard from "./Components/Cards/ProjectCard";
import sponsor1 from "./assets/272672677_117059944195726_7238875184865727520_n.svg";
import sponsor2 from "./assets/326474618_1046594523398177_490547605697347288_n.svg";
import sponsor3 from "./assets/352734072_965225178155190_5491755799496241752_n.svg";
import Footer from "./Components/Footer/Footer";
import ScrollAnimation from "react-animate-on-scroll";
import Najla from "./assets/najla.png";
import Salem from "./assets/salem.png";
import Zied from "./assets/Zied.jpg";
import Yassine from "./assets/Yassine.jpg";
import linkedin from "./assets/linkdin.svg";

const projectData = [
  {
    img: projectIMG1,
    title: "Kayotica",
    discriptions: "Ai powered Visual Novel with unique story and artsyle",
  },
  {
    img: projectIMG2,
    title: "BasketBall Manager",
    discriptions: "offline basketball manager with captivating design",
  },
  {
    img: projectIMG3,
    title: "Finance World",
    discriptions: "Third person open map trading objects and crafting",
  },
];

const App = () => {
  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleScrollToTop);

    return () => {
      window.removeEventListener("beforeunload", handleScrollToTop);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <header id="home">
        <h1>
          Step into the realm of Kicksoft, where innovation meets hard work.
        </h1>
        <h3>Game Development Startup</h3>
        <ButtonGradiant herf={"contact"} text="Get more details" />
      </header>
      <ScrollAnimation animateOnce animateIn="fadeIn" style={{ zIndex: 20 }}>
        <div className="section" id="about">
          <h2>WE USE GAMES TO MAKE IMPACT</h2>
          <div className="content">
            <p>
              Born from a passion for innovation and storytelling, Kicksoft
              stands as a pioneer in Tunisia, redefining the visual novel
              landscape. we shape worlds, evoke emotions, and redefine the art
              of storytelling.
              <br />
              we strongly believe that creativity has no boundaries and we are
              excited to work with clients who share our vision of making a
              difference in the world,
            </p>
            <img src={npcPlay} alt="npcPlay" />
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateOnce animateIn="fadeIn" style={{ zIndex: 20 }}>
        <div className="section" id="service">
          <h2>WE OFFER VARIOUS SERVICES</h2>
          <div className="services-box">
            <div className="service">
              <div className="icon-service">
                <img src={iconServiceMobile} alt="iconServiceMobile" />
              </div>
              <h5>Mobile Game Development</h5>
            </div>
            <div className="service">
              <div className="icon-service">
                <img src={iconServicePC} alt="iconServicePC" />
              </div>
              <h5>PC Game Development</h5>
            </div>
            <div className="service">
              <div className="icon-service">
                <img src={iconServiceModeling} alt="iconServiceModeling" />
              </div>
              <h5>3D Modelings</h5>
            </div>
            <div className="service">
              <div className="icon-service">
                <img src={iconService2DModeling} alt="iconService2DModeling" />
              </div>
              <h5>
                2D
                <br />
                Art
              </h5>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateOnce animateIn="fadeIn" style={{ zIndex: 20 }}>
        <div className="section" id="projects" style={{ height: "95vh" }}>
          <h2>Projects</h2>
          <div className="projects-box">
            {projectData.map((e, i) => (
              <ProjectCard key={i} data={e} />
            ))}
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateOnce animateIn="fadeIn" style={{ zIndex: 20 }}>
        <div className="section" style={{ marginTop: "5em" }}>
          <div className="kayotica-discription">
            <p>
              Visual Novel with AI powered Chatbots. Captivating story, unique
              art syle, animated characters, challanges and gameplay along the
              story. you’ll never get the same ending as anyone else !
            </p>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateOnce animateIn="fadeIn" style={{ zIndex: 20 }}>
        <div className="section">
          <div className="head-section">
            <h2>OUR TEAM</h2>
            <h3
              style={{
                marginBlock: "0.2em",
                color: "#fff",
                fontWeight: "normal",
              }}
            >
              Meet the creative minds behind our startup
            </h3>
          </div>
          <div className="team">
            <div className="member">
              <img width={200} src={Zied} alt="Zied" />
              <div className="info">
                <div className="head">
                  <h5>Zied Ben slimen</h5>

                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      width="50px"
                      height="50px"
                    >
                      {" "}
                      <path d="M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z" />
                    </svg>
                  </a>
                </div>
                <h3>Project manager</h3>
              </div>
            </div>
            <div className="member">
              <img width={200} src={Najla} alt="Najla" />
              <div className="info">
                <div className="head">
                  <h5>Najla Hamza</h5>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      width="50px"
                      height="50px"
                    >
                      {" "}
                      <path d="M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z" />
                    </svg>
                  </a>
                </div>
                <h3>Art Director</h3>
              </div>
            </div>
            <div className="member">
              <img width={200} src={Salem} alt="salem" />
              <div className="info">
                <div className="head">
                  <h5>Selem Menssi</h5>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      width="50px"
                      height="50px"
                    >
                      {" "}
                      <path d="M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z" />
                    </svg>
                  </a>
                </div>
                <h3>Tech Lead</h3>
              </div>
            </div>
            <div className="member">
              <img width={200} src={Yassine} alt="Yassine" />
              <div className="info">
                <div className="head">
                  <h5>Yassine Jday</h5>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      width="50px"
                      height="50px"
                    >
                      {" "}
                      <path d="M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z" />
                    </svg>
                  </a>
                </div>
                <h3>Director & Writer</h3>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateOnce animateIn="fadeIn" style={{ zIndex: 20 }}>
        <div className="section" id="trust">
          <h2>TRUSTED US</h2>
          <div className="sponsor-box">
            <img src={sponsor1} alt="sponsor" />
            <img src={sponsor2} alt="sponsor" />
            <img src={sponsor3} alt="sponsor" />
          </div>
        </div>
      </ScrollAnimation>
      <Footer />
    </div>
  );
};

export default App;
