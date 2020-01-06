import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";
import logo from "../images/logo.png";

function IndexPage() {
  const data = useStaticQuery(graphql`
    query NewsQuery {
      site {
        siteMetadata {
          news {
            title
            body {
              p1
              p2
            }
            meeting {
              date
              time
            }
          }
        }
      }
    }
  `);

  console.log(data);
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <section className="leading-loose">
        <img className="float-left mr-4 my-2 h-48" src={logo} />
        <div class="news">
          <p className="leading-normal pb-3 text-md">
            <div>Happy New Year from NYSDG.com!</div>
            {data.site.siteMetadata.news.title}
          </p>

          <p className="leading-normal pb-5">
            <span span="leading-normal">
              {data.site.siteMetadata.news.body.p1}
            </span>
            <div class="pt-2 pb-2">{data.site.siteMetadata.news.body.p2}</div>
          </p>

          <p className="leading-normal pb-5">
            <div>Christine Joyce</div>
            <div>President</div>
            <div>516-429-2644</div>
          </p>
        </div>
        <p className="text-center text-xl pt-4">
          <div>
            <span className="text-yellow-800">**</span> We welcome you to join
            us for a meeting {data.site.siteMetadata.news.meeting.date}
          </div>
          <div>
            {data.site.siteMetadata.news.meeting.time} at the{" "}
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
