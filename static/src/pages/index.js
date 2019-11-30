import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";
import logo from "../images/logo.png";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <section className="leading-loose">
        <img className="float-left mr-4 my-2 h-48" src={logo} />

        <p className="leading-normal pb-3 text-md">
          <div>Welcome to NYDSG</div>
        </p>

        <p className="leading-normal pb-5">
          We look forward to seeing you at our next meeting on December 14 at
          the Sachem Library. Check back here for more information.
        </p>

        <p className="leading-normal pb-5">
          <div pb-2>Christine Joyce</div>
          <div>Acting President</div>
        </p>

        <p className="text-center text-xl">
          <div>
            <span className="text-yellow-800">**</span> We welcome you to join
            us for a meeting December 14th
          </div>
          <div>
            from 12 - 1:30pm at the{" "}
            <a
              target="_blank"
              href="https://www.google.com/maps/dir//150%20Holbrook%20Rd,%20Holbrook,%20NY%2011741"
            >
              Sachem Public Library 150 Holbrook Rd, Holbrook, NY 11741{" "}
              <span className="text-yellow-800">**</span>
            </a>
          </div>
        </p>

        <p className="text-center text-4xl pt-10">
          <Link to="members">Please feel free to contact us.</Link>
        </p>
      </section>
    </Layout>
  );
}

export default IndexPage;
