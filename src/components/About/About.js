import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Sricharan Chakravarthula</strong>  and I am a passionate and dedicated Full-Stack Developer with a strong foundation in programming, DSA and web development. Currently pursuing my Bachelor of Technology in Computer Science at SR University, I have consistently demonstrated academic excellence with a GPA of 9.06/10.
            </ScrollAnimation>

            <br></br>
            
            <ScrollAnimation animateIn="fadeInLeft">
            My journey in technology began with a fascination for problem-solving, which has fueled my passion for creating innovative solutions. Over the years, I have honed my skills in front-end and back-end development, working with languages like C, CPP, Python, and Java and frameworks like AngularJS, React.
            </ScrollAnimation>

            <br></br>
            <ScrollAnimation animateIn="fadeInLeft">
            I’ve had the privilege of contributing to impactful projects such as the Chatting App, where I implemented features to facilitate real-time communication, and the Amazon Clone, showcasing my ability to develop user-centric designs. These experiences have sharpened my technical expertise and enhanced my ability to collaborate effectively in a team.
            </ScrollAnimation>
            <br></br>
            <ScrollAnimation animateIn="fadeInLeft">
            What excites me most about technology is its ever-evolving nature. I am eager to explore more opportunities in web development and cross-platform mobile development, delivering solutions that make a difference.
            </ScrollAnimation>
            <br></br>
            <ScrollAnimation animateIn="fadeInLeft">
              Working collaboratively within a team towards a shared objective has been an incredibly rewarding and unique experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in web development and cross-platform mobile development.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
