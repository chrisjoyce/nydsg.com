import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default function InfoPage() {
  return (
    <Layout>
      <h1 className="text-center text-3xl text-red-800">The following links will open a new tab on PUBMED.com</h1>
      <ul id="research" className="text-center text-xl">
        <li>
          <a
            href="https://www.ncbi.nlm.nih.gov/pubmed/?term=perforated+diverticulitis"
            target="_blank"
          >Perforated diverticulitis disease</a>
        </li>
        <li>
          <a
            href="https://www.ncbi.nlm.nih.gov/pubmed/?term=diverticulitis+elective+surgery"
            target="_blank"
          >Elective surgery for diverticulitis</a
          >
        </li>

        <li>
          <a
            href="https://www.ncbi.nlm.nih.gov/pubmed/?term=diverticulitis+resection"
            target="_blank"
          >Surgery for diverticulitis disease</a
          >
        </li>
        <li>
          <a
            href="https://www.ncbi.nlm.nih.gov/pubmed/?term=complicated+diverticulitis"
            target="_blank>"
          >Complicated diverticulitis disease</a
          >
        </li>

        <li>
          <a
            href="https://www.ncbi.nlm.nih.gov/pubmed/?term=diverticular+epidemiology"
            target="_blank"
          >Epidemiology of diverticular disease</a
          >
        </li>

        <li><a href="https://www.ncbi.nlm.nih.gov/pubmed/12626916"
          target="_blank"
        >Surgery for uncomplicated diverticulitis</a></li>
        <li><a href="https://www.ncbi.nlm.nih.gov/pubmed/?term=ostomy+acute+diverticulitis"
          target="_blank"
        >Ostomy in patients with acute diverticulitis</a></li>
        <li><a href="https://www.ncbi.nlm.nih.gov/pubmed/29683483"
          target="_blank"
        >Acute diverticulitis complicated by abscess:</a></li>
        <li><a href="https://www.ncbi.nlm.nih.gov/pubmed/28875302"
          target="_blank"
        >Laparoscopic approaches to complicated diverticulitis</a></li>
        <li><a href="https://www.ncbi.nlm.nih.gov/pubmed/28797339"
          target="_blank"
        >Management of the first episode of complicated diverticulitis</a></li>

      </ul>
    </Layout>
  )
}