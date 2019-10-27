import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";
import logo from '../images/logo.png';

function MissionPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <section className="leading-loose">
        <img className="float-left mr-4 my-2 h-48" src={logo} />


        <p className="leading-normal pb-5">
        The goal of the New York Diverticulitis Support Group is to bring awareness about this disease and offer help to those who have it as well as support for their family members. They are also affected.
        </p>

        <p className="leading-normal pb-5">
        Family members often have to deal with the type of care and lifestyle changes that may be required. Having a positive support system helps the diverticulitis patient deal with not only current healing but also helps them prevent future attacks by focusing on proper diet and education. This support is a crucial part of managing this disease.
        </p>
        <p className="leading-normal pb-5">
        Our focus is also on identifying and matching people in your family tree that might be at risk. Addressing early symptoms can often prevent the need for future surgery or permanent colostomy or ileostomy.
        </p>
        <p className="leading-normal pb-5">
          This disease is an equal opportunity disease…it affects young and old, male and female, rich and poor. Our members here have all had different experiences with diverticulitis but share one common belief: we can learn so much from each other about living with this disease.
        </p>
       
        <p className="text-center text-2xl">
          <div><span className="text-yellow-800">**</span> We welcome you to join us for a meeting Saturday November 16th</div>
          <div>from 12 - 1:30pm at the <a target="_blank" href="https://www.google.com/maps/dir//150%20Holbrook%20Rd,%20Holbrook,%20NY%2011741">Sachem Public Library 150 Holbrook Rd, Holbrook, NY 11741 <span className="text-yellow-800">**</span></a></div>
        </p>
        <p className="text-center text-2xl">
        
        </p>

        <p className="text-center text-4xl pt-10">
          <Link to="members">Please feel free to contact us.</Link>
        </p>
      </section>
    </Layout>
  );
}

export default MissionPage;
