import React from "react";
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About LitLookUp</h2>
            <p className="fs-17">
              Welcome to LitLookUp, your ultimate destination for all things
              books! We are a passionate community of book lovers dedicated to
              sharing our love for reading and helping readers discover their
              next great read.
            </p>
            <p className="fs-17">
              At LitLookUp, you will find a vast collection of books covering a
              wide range of genres, from classic literature to the latest
              bestsellers. We believe that reading is not only a source of
              knowledge and entertainment, but also a way to connect with others
              and explore new worlds. That's why we have curated a diverse
              collection of books that caters to all tastes and preferences. Our
              platform is designed to make your reading experience as enjoyable
              as possible. You can easily browse our collection so you can
              discover new books that you are sure to love. Whether you're a
              seasoned bookworm or just starting your reading journey, LitLookUp
              is the perfect place to discover new books, and explore the world
              of literature. So join us today and let's get lost in the pages of
              a good book together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
/*import React from 'react';
import "./about.css";
import aboutImg from "../../images/about-img.jpg";


const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>

        </div>
        <div className='about-content grid'>
          <div className='about-img'>
            <img src ={aboutImg} alt=" "/>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About*/
