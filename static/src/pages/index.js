import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";
import logo from '../images/logo.png';

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <section className="leading-loose">
        <img className="float-left mr-4 my-2 h-48" src={logo} />


        <p className="leading-normal pb-3 text-sm">
          <div>NEWS/NYDSG.com</div>
          <div>October 12, 2019</div>
        </p>

        <p className="leading-normal pb-5">
        I want to say thank you to everybody who attended the very first meeting of the New York Diverticulitis Support Group Saturday, October 12 and a thank you to those that tried to make it and could not.
        </p>
        <p className="leading-normal pb-5">
        We shared pumpkin cake, fresh fruit, website ideas, and our personal diverticulitis stories. What we learned was that, even within the small group of us, there were four different levels of diverticulitis experiences.
        </p>
        <p className="leading-normal pb-5">
        And a big thank you to Dr. Roberto Bergamaschi for his time, support and encouragement of our group. He also gave a great explanation of this disease, complete with drawings on the white board!
        </p>
        
        <p className="leading-normal pb-5">
        We look forward to seeing you at our next meeting November 16 (click below for directions).  Please email or call me if you have any questions.
        </p>
       
        <p className="leading-normal pb-5">
          <div pb-2>Christine Joyce</div>
          <div>Acting President</div>
        </p>

        <p className="text-center text-2xl">
          <div><span className="text-yellow-800">**</span> We welcome you to join us for a meeting Saturday November 16th</div>
          <div>from 12 - 1:30pm at the <a target="_blank" href="https://www.google.com/maps/dir//150%20Holbrook%20Rd,%20Holbrook,%20NY%2011741">Sachem Public Library 150 Holbrook Rd, Holbrook, NY 11741 <span className="text-yellow-800">**</span></a></div>
        </p>

        <p className="text-center text-4xl pt-10">
          <Link to="members">Please feel free to contact us.</Link>
        </p>
      </section>
    </Layout>
  );
}

export default IndexPage;
