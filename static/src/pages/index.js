import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <section className="leading-loose">


        <p className="leading-normal">
        The goal of the New York Diverticulitis Support Group is to bring awareness about this disease and offer help to those who have it as well as support for their family members. They are also affected.
        </p>

        <p className="leading-normal">
        Family members often have to deal with the type of care and lifestyle changes that may be required. Having a positive support system helps the diverticulitis patient deal with not only current healing but also helps them prevent future attacks by focusing on proper diet and education. This support is a crucial part of managing this disease.
        </p>
        <p className="leading-normal">
        Our focus is also on identifying and matching people in your family tree that might be at risk. Addressing early symptoms can often prevent the need for future surgery or permanent colostomy or ileostomy.
        </p>
        <p className="leading-normal">
          This disease is an equal opportunity disease…it affects young and old, male and female, rich and poor. Our members here have all had different experiences with diverticulitis but share one common belief: we can learn so much from each other about living with this disease.

          We invite you to join us.
        </p>
        <p className="leading-loose">
          This is a barebones starter for Gatsby styled using{" "}
          <a
            href="https://tailwindcss.com/"
            className="font-bold no-underline text-gray-900"
          >
            Tailwind
          </a>
          , a utility-first CSS framework.
        </p>
      </section>
    </Layout>
  );
}

export default IndexPage;
