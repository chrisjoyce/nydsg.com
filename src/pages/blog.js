import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import dogIllustration from "../images/dog-illustration.svg";

function BlogPage() {
  return (
    <Layout>
      <SEO title="Blog" keywords={[`nydsg`]} />

      <section className="flex flex-col items-center leading-normal">
        <div className="text-2xl">“How We Began”</div>
        <div className="md:w-2/3 md:mr-8">
          <p className="pb-3">
            The idea for the New York diverticulitis support group began with
            immediate past president Michael Scialabba after his experience with
            diverticulitis and with the support of his surgeon, Dr. Roberto
            Bergamaschi. Mike’s story is our first blog.
          </p>
          <p className="pb-3">
            “It all started for me on a Friday afternoon in 2014. It was regular
            day at work that started with a fever and flu symptoms. I hadn’t
            been feeling all that great before but I thought if I could just get
            the day done I would have the weekend to hopefully sleep it off,
            bury myself with over the counter meds and be fine on Monday. Boy
            was I wrong!
          </p>
          <p className="pb-3">
            My career as a commercial pilot is very demanding. I found it hard
            to focus that day and started to really feel sick about ten minutes
            into the flight. I had my co-pilot take over the controls and get me
            to the ground. By the time I got home, I was green, lethargic and
            incoherent. My wife took me to the nearest emergency room.
          </p>
          <p className="pb-3">
            Within 20 minutes I had blood work, a cat scan and was told I needed
            immediate emergency surgery. I never imagined that I could have been
            so sick to the point of needing surgery.
          </p>
          <p className="pb-3">
            I woke up hours later with an open incision and an ostomy bag. I
            thought life was over. How could this be?
          </p>
          <p className="pb-3">
            I began to form a friendship with my surgeon Dr. Roberto
            Bergamaschi. Right from the beginning, he predicted that I was far
            from being done with this disease unless I made some major lifestyle
            changes.
          </p>
          <p className="pb-3">
            He was right. After four more surgeries, he and I began to talk
            about how many people this disease affects. And while considered a
            somewhat manageable disease, diverticulitis can be very difficult to
            live with and can turn life threatening very quickly.
          </p>
          <p className="pb-3">
            For me, it was also a dark time. If anyone reading this has ever had
            an ostomy bag, you know what I mean. It was from that dark place
            that the idea to start a support group began, with the goal of
            sharing experiences and spreading awareness.
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default BlogPage;
