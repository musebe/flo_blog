import React from 'react';
import Layout from '../containers/layout';
import SEO from '../components/seo';
import About from '../containers/about';

type AboutPageProps = {};

const AboutPage: React.FunctionComponent<AboutPageProps> = () => {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="We enable business to build USSD, WhatsApp, programmable SMS and IVR solutions, without requiring any technical expertise."
      />

      <About />
    </Layout>
  );
};

export default AboutPage;
