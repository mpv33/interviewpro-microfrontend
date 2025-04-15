// components/SEO.js
import Head from 'next/head';

const SEO = ({ title, description, image, url }) => {
  const siteName ='InterviewPro'; // Update with your site name

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
    </Head>
  );
};

export default SEO;
