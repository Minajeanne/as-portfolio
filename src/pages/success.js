import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

const Success = props => (
  <Layout>
    <Helmet>
      <title>Success Page</title>
      <meta name="description" content="Success Page" />
    </Helmet>
        <div>
            <p>Thank you for reaching out!</p>
        </div>
  </Layout>
);

export default Success
