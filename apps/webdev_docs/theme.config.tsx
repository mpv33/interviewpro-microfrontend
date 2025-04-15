import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import AnimatedLogo from './components/AnimatedLogo';
import "@feelback/react/styles/feelback.css";

function CustomFooter() {
  return (
    <footer className=" py-4 w-full">
      <div className="container mx-auto text-center">
        <p className="text-md  mx-auto font-bold">Powered By Mateshwari</p>
        <p className="text-sm">
          <a href="mailto:mateshwari33@gmail.com" className="hover:underline">mateshwari33@gmail.com</a>
        </p>
        <p className="text-xs mt-2">© {new Date().getFullYear()} InterviewPro.info All rights reserved.</p>
      </div>
    </footer>
  );
}

const config: DocsThemeConfig = {
  logo: <AnimatedLogo />,

  head: (
    <React.Fragment>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <link rel="icon" href="/images/favicon.ico" />
      <title>InterviewPro</title>
      <meta name="description"
        content="InterviewPro info offers high-quality free technical content on DSA,JavaScript, ReactJS, NodeJs, and NextJs, catering to last-minute preparation for the most commonly asked interview questions." />
      <meta property="og:title" content="InterviewPro" />
      <meta property="og:description" content="InterviewPro info offers high-quality free technical content on DSA,JavaScript, ReactJS, NodeJs, and NextJs, catering to last-minute preparation for the most commonly asked interview questions." />
      <meta name="apple-mobile-web-app-title" content="InterviewPro" />
      <meta property="og:image" content="/card/c1.png" />
      <meta name="keywords" content="InterviewPro info, Data Structures, Algorithms, JavaScript, ReactJS, NodeJs, NextJs, interview questions" />
      <meta name="author" content="Mateshwari verma" />
    </React.Fragment>
  ),
  banner: {
    key: '2.0.0-release ',
    text: (
      <a href="/release" target="_blank">
        🎉 InterviewPro Info v2.0.0: Stay Informed about the Upcoming Release →
      </a>
    ),
  },
  editLink: {
    text: '',
  },
  feedback: {
    useLink: () => {
      return 'https://github.com/mpv33/InterviewPro-feedback/issues'
    }
  },

  themeSwitch: {
    useOptions() {
      return {
        system: 'System',
        dark: 'Dark',
        light: 'Light',
      }
    }
  },
  // project: {
  //   link: 'https://github.com/mpv33'
  // },
  footer: {
    text: <CustomFooter />,
  },
  navbar: {
    component: null
  },
};

export default config;
