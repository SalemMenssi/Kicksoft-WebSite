import React, { useEffect } from "react";
import Navbar from "./Components/NavBar/Navbar";
import ButtonGradiant from "./Components/Buttons/ButtonGradiant";
import npcPlay from "./assets/NPC-IMG.png";
import iconServiceMobile from "./assets/smartphone (2) 1.svg";
import iconServicePC from "./assets/pc 1.svg";
import iconServiceModeling from "./assets/3d-cube 1.svg";
import projectIMG1 from "./assets/Rectangle 15.png";
import projectIMG2 from "./assets/Rectangle 16.png";
import projectIMG3 from "./assets/Rectangle 17.png";
import ProjectCard from "./Components/Cards/ProjectCard";
import sponsor1 from "./assets/dragon.png";
import sponsor2 from "./assets/level1.png";
import sponsor3 from "./assets/makerFactory.png";
import Footer from "./Components/Footer/Footer";
import ScrollAnimation from "react-animate-on-scroll";

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
          Step into the realm of
          <br />
          Kicksoft, where innovation
          <br />
          meets hard work.
        </h1>
        <h3>Game Development Startup</h3>
        <ButtonGradiant herf={"contact"} text="Get more details" />
      </header>
      <ScrollAnimation animateOnce animateIn="fadeIn">
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
      <ScrollAnimation animateOnce animateIn="fadeIn">
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
                <img src={iconServiceModeling} alt="iconServiceModeling" />
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
      <ScrollAnimation animateOnce animateIn="fadeIn">
        <div className="section">
          <h2>Kayotica</h2>
          <div className="kayotica-discription">
            <p>
              Visual Novel with AI powered Chatbots.
              <br />
              Captivating story, unique art syle animated characters cchallanges
              and gameplay along the story you’ll never get the same ending as
              anyone else !
            </p>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateOnce animateIn="fadeIn">
        <div className="section" id="projects" style={{ height: "95vh" }}>
          <h2>Projects</h2>
          <div className="projects-box">
            {projectData.map((e, i) => (
              <ProjectCard key={i} data={e} />
            ))}
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateOnce animateIn="fadeIn">
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
