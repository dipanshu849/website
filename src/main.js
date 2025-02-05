import "../styles/modern-normalize.css";
import "../styles/style.css";
import "../styles/components/header.css";
import "../styles/components/hero.css";
import "../styles/components/hero-description.css";
import "../styles/components/hero-downArrow.css";
import "../styles/components/about-description.css";
import "../styles/components/featured.css";
import "../styles/components/team.css";
import "../styles/utils/team__card.css";
import "../styles/components/project.css";
import "../styles/components/achievements.css";
import "../styles/components/conclusion/conclusion.css";
import "../styles/components/conclusion/sunSet.css";
import "../styles/components/contact.css";
import "../styles/components/mobile-nav.css";
import "../styles/utils.css";

import "./vanilla-tilt.js";

import Three from "./three/three";
import oceanEffect from "./components/oceanEffect.js";
import mobileNav from "./components/mobile-nav.js";
// import ripple from "./components/ripple";
import slider from "./components/imageSlider";
Three();
oceanEffect();
slider();
mobileNav();
