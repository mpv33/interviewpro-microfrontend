import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes'; // Make sure this is the latest version


const defaultDescription =
  'InterviewPro offers high-quality free technical content on Data Structures and Algorithms (DSA), JavaScript, ReactJS, NodeJs, and NextJs, catering to last-minute preparation for the most commonly asked interview questions.';

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <Head>
        <title>InterviewPro</title>
        <meta name="description" content={defaultDescription} />
        <meta property="og:title" content="InterviewPro" />
        <meta name="apple-mobile-web-app-title" content="InterviewPro" />
        <meta property="og:image" content="/card/c1.png" />
        <meta
          name="keywords"
          content="InterviewPro, Data Structures, Algorithms, JavaScript, ReactJS, NodeJs, NextJs, interview questions"
        />
        <meta name="author" content="Mateshwari Verma" />
      </Head>

      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </>
  );
}
