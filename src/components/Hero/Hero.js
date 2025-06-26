import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn" >
              <TypeAnimation
                cursor={false}
                sequence={[
                  'Hi, I\'m Sricharan Chakravarthula.',
                  () => setShowSubtitle(true)
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle &&
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    'A Full-Stack Developer.',
                    1000,
                    'A SRU graduate.',
                    // 'I design and code beautifully simple things, and I love what I do.',
                    1000,
                    'A problem solver.',
                    1000,
                    'An innovative thinker.',
                    1000,
                    'A....',
                    1000,
                    'A.... cool guy?',
                    1000,
                    "Ok...",
                    1000,
                    "Ok...  I'm running out of ideas...",
                    1000,
                    "Uhh...",
                    1000,
                    "Uhh... you can scroll down to see my projects now...",
                    300,
                    () => setShowScrollDown(true),
                    1000,
                    "Seriously, my projects are really cool, go check them out!",
                    1000,
                    "You're uh...",
                    1000,
                    "You're uh... still here?",
                    1000,
                    "Ok, this has been fun, but I'm gonna restart the loop now...",
                    // 1000,
                    // "Or...",
                    // 1000,
                    // "Or... I could scroll you by force! Muahaha!",
                    1000,
                    "See ya! :)",
                    500,
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              }
            </ScrollAnimation>

          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              <Image
  src="/pic.png"
  alt="profile-photo"
  style={{
    height: '300px',
    width: '300px',
    borderRadius: '50%', // makes it circular
    objectFit: 'cover', // zooms and fills the circle
    objectPosition: 'center top', // adjust position if face is toward top
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)', // soft shadow
    border: '4px solid rgba(255, 255, 255, 0.3)', // light border
    backgroundColor: '#1e1e1e' // fallback background
  }}
/>

            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
        {showScrollDown &&<ScrollAnimation animateIn="flipInX" offset={0}>
        <ScrollDown to="projects" id="scrollDown">
          <ScrollLink>
            Scroll down
            <img
              src="/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
        </ScrollAnimation>}
      </HeroContainer>
    </main>
  );
}

export default Hero;
