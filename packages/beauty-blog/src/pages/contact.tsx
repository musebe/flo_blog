import React from 'react';
import Layout from '../containers/layout';
import SEO from '../components/seo';
import Contact from '../containers/contact';

type ContactPageProps = {};

const ContactPage: React.FunctionComponent<ContactPageProps> = () => {
  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="We enable business to build USSD, WhatsApp, programmable SMS and IVR solutions, without requiring any technical expertise.."
      />

      <Contact />
    </Layout>
  );
};

export default ContactPage;
