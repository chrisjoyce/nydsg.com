import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";

import Header from "./header";

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900">
      <Header siteTitle={data.site.siteMetadata.title} />

      <main className="flex flex-col flex-1 max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
        {children}
      </main>

      <footer className="bg-blue-700">
        <nav className="flex justify-center max-w-4xl mx-auto p-4 md:p-8 text-sm">
          <p className="text-white">
            © Copyright 2019 NY Diverticulitis Support Group
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
