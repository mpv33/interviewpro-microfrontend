import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Define page descriptions for specific pages
  const pageDescriptions: Record<string, string> = {
    '/javascript': 'Ace JavaScript Interview Questions: Dive into essential concepts and ace your JavaScript interviews!',
    '/react': 'Master ReactJS Interview Questions: Explore React concepts and excel in ReactJS interviews!',
    '/dsa': 'Crack DSA Interviews: Dive into Data Structures and Algorithms to crack technical interviews!',
    // Add more pages and their descriptions as needed
  };

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const path = url.split('?')[0]; // Remove query parameters
      const pageDescription = pageDescriptions[path] || defaultDescription;

      document.title = generatePageTitle(path) || 'InterviewPro';

      const metaDescriptionTag = document.querySelector('meta[name="description"]');
      if (metaDescriptionTag) {
        metaDescriptionTag.setAttribute('content', pageDescription);
      }
    };
    const generatePageTitle = (path: string): string | null => {
      const segments = path.split('/').filter(Boolean);
      if (segments.length === 1) {
        return `InterviewPro-${capitalizeFirstLetter(segments[0])}`;
      } else if (segments.length > 1) {
        return segments.map(segment => capitalizeFirstLetter(segment)).join('-');
      }
      return null;
    };

    const capitalizeFirstLetter = (str: string): string => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // Default description for the entire site
  const defaultDescription =
    'InterviewPro offers high-quality free technical content on Data Structures and Algorithms (DSA), JavaScript, ReactJS, NodeJs, and NextJs, catering to last-minute preparation for the most commonly asked interview questions.';

  return (
    <>
      <Head>
        {/* Meta tags */}
        <title>InterviewPro</title>
        <meta name="description" content={defaultDescription} />
        {/* Other meta tags and SEO-related content */}
        <meta property="og:title" content="InterviewPro" />
        <meta name="apple-mobile-web-app-title" content="InterviewPro" />
        <meta property="og:image" content="/card/c1.png" />
        <meta name="keywords" content="InterviewPro, Data Structures, Algorithms, JavaScript, ReactJS, NodeJs, NextJs, interview questions" />
        <meta name="author" content="Mateshwari verma" />
        {/* Add other default meta tags for SEO */}
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
