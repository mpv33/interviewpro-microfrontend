import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Head from 'next/head';

const LandingPage = () => {
  const router = useRouter();

  const handleGetStarted = (path) => {
    router.push(path);
  };

  return (
    <>
      <Head>
        <title>InterviewPro - Ace Your Technical Interviews</title>
        <meta
          name="description"
          content="InterviewPro provides curated content for mastering Data Structures, Algorithms, JavaScript, ReactJS, NodeJs, NextJs, and MongoDB, helping you ace your technical interviews."
        />
        <meta
          name="keywords"
          content="DSA, JavaScript, ReactJS, NodeJs, NextJs, MongoDB, technical interview preparation, coding interview"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="bg-gradient-to-r from-blue-50 to-indigo-100 dark:bg-gradient-to-r dark:from-gray-900 dark:to-black min-h-screen py-16">
        <section className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-white mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Level Up Your Interview Skills
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            InterviewPro offers expert-curated content to help you excel in Problem solving, JavaScript, ReactJS, Node.js, Next.js, and MongoDB. Prepare for your technical interviews with confidence and efficiency.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {cardsData.map((card) => (
              <Card key={card.title} {...card} onClick={() => handleGetStarted(card.path)} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

const Card = ({ title, description, onClick }) => {
  return (
    <motion.div
      className="relative flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
    >
      <div className="flex-1 p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-md text-gray-600 dark:text-gray-300 mt-2">{description}</p>
      </div>
      <button
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-center transition duration-300"
        onClick={onClick}
      >
        Get Started
      </button>
    </motion.div>
  );
};


const cardsData = [
  {
    title: 'Problem Solving',
    description: 'Master essential Data Structures and Algorithms to solve complex problems efficiently, a must-have for coding interviews.',
    path: '/dsa'
  },
  {
    title: 'JavaScript',
    description: 'Explore core JavaScript concepts and patterns to tackle the most common challenges in technical interviews.',
    path: '/javascript'
  },
  {
    title: 'ReactJS',
    description: 'Understand ReactJS fundamentals and hooks, frequently asked in frontend interviews.',
    path: '/reactjs'
  },
  {
    title: 'NextJs',
    description: 'Get familiar with Next.js features like server-side rendering, a frequent topic in full-stack interviews.',
    path: '/nextjs'
  },
  {
    title: 'NodeJs',
    description: 'Enhance your Node.js knowledge for handling server-side logic, a critical topic in backend interviews.',
    path: '/nodejs'
  },
  {
    title: 'MongoDB',
    description: 'Learn key MongoDB concepts for designing scalable databases, often asked in backend and full-stack interviews.',
    path: '/mongodb'
  }
];


export default LandingPage;
