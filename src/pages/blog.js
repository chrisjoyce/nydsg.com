import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import dogIllustration from "../images/dog-illustration.svg";

function BlogPage() {
  return (
    <Layout>
      <SEO title="Blog" keywords={[`nydsg`]} />

      <section className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 md:mr-8">
          <p>Coming Soon!</p>
        </div>
      </section>
    </Layout>
  );
}

export default BlogPage;
