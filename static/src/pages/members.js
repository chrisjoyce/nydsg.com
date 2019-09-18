import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

function MembersPage() {
  return (
    <Layout>
      <SEO
        title="Members"
        keywords={[`diverticullitis`]}
      />
    <div className="text-center">
      <h2 className="text-red-700 font-bold text-4xl">Member Hotline</h2>

      <p>
      The members listed are willing to help you and your family.
      You may contact them with any questions or just to talk and get that much needed support.
      </p>
    </div>
    </Layout>
  );
}

export default MembersPage;