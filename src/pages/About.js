import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        BVC Engineering College, an Autonomous Institution is one of the Leading Engineering colleges in Andhra Pradesh. 
        Established in the year 1997, Accredited by NAAC, Permanently affiliated to JNTU Kakinada. Imparting value-added 
        Technical education to the budding engineers, transformed 26000+ more students to top performing engineers and we 
        can find BVC alumni in most of the corporate companies in India and abroad. BVC is one of the COE College for VIRTUSA 
        & CSS Corp. It is an approved R&D Centre from JNTUK and had MOUs with various research Organizations
        </p>
        <p>It is located in the eastern part of Konaseema and famous for traditional food, PIZZA was invented in India 10,000 years ago and was known as podapitha.
          that time pure ghee, pure cheese were used and it was completely vegetarion. But in other part of the world it lost its originality still it is preserved
          in BVC Canteen with reasonable price.<br />
          Welcome to BVC Pizza.<br /><br />
          Head R&D
        </p>
      </div>
    </div>
  );
}

export default About;
