import React, { useState, useEffect } from 'react';
import { dsaQuestionList } from '../data';

interface Topic {
  id: string;
  tags: string;
  title: string;
  yt_link: string;
  p2_link: string;
  // Add other properties as needed
}

interface DataItem {
  sl_no: number;
  title: string;
  description: string;
  topics: Topic[];
  // Add other properties as needed
}

interface QuestionListProps {
  category: string;
  newData?:Topic[];
}

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256); // Random value between 0 and 255 for red component
  const g = Math.floor(Math.random() * 256); // Random value between 0 and 255 for green component
  const b = Math.floor(Math.random() * 256); // Random value between 0 and 255 for blue component

  // Convert RGB components to hexadecimal string
  const randomColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  return randomColor;
};

function getTextColor(bgColor: string) {
  // Convert the hexadecimal color to RGB components
  const r = parseInt(bgColor.substr(1, 2), 16);
  const g = parseInt(bgColor.substr(3, 2), 16);
  const b = parseInt(bgColor.substr(5, 2), 16);

  // Calculate the relative luminance of the color
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // If the color is dark, return white; otherwise, return black
  return luminance > 0.6 ? '#000000' : '#ffffff';
}

function QuestionList({ category, newData}: QuestionListProps) {
  const [mergedTopics, setMergedTopics] = useState<Topic[]>([]);
  useEffect(() => {
    if(newData?.length>0){
      setMergedTopics(newData)   
    }
    else{
      fetchFilterDataByCategory();
    }

  }, []);

  const fetchFilterDataByCategory = () => {
    const filteredQuestions = dsaQuestionList?.data.filter((item: DataItem) =>
      item.title.includes(category)
    );

    const mergedTopicsArray: Topic[] = [];
    filteredQuestions?.forEach((item) => {
      mergedTopicsArray.push(...item.topics);
    });
    if (category === 'Linked List') {
      setMergedTopics(mergedTopicsArray.slice(0, mergedTopicsArray.length - 6));
    } else if (category === 'Binary Search') {
      setMergedTopics(mergedTopicsArray.slice(0, 8));
    } else {
      setMergedTopics(mergedTopicsArray);
    }
    // console.log('data::;',mergedTopicsArray)
  };

  const companyTag = (tag: string) => {
    const companyList = tag.split(',');
    return (
      <div className='flex gap-2 w-full flex-wrap'>
        <p className='font-bold'>Company: </p>
        {companyList.map((item: string, i: number) => {
          return (
            <div key={i} className='border rounded-md px-2 text-sm'>
              {item}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <h2
        id='animated-text'
        className='text-1xl md:text-2xl font-bold my-6 text-center'
      >
        Most Asked Question from {category}
      </h2>
      <ul>
        {mergedTopics.map((topic: Topic, i: any) => {
          const bgColor = getRandomColor();
          const textColor = getTextColor(bgColor);
          const bgColor1 = getRandomColor();
          const textColor1 = getTextColor(bgColor1);
          return (
            <li key={topic.id} className='mb-4'>
              <div className='flex items-center flex-wrap gap-4 md:gap-6 pb-4'>
                <p className='text-1xl md:text-xl font-bold text-blue-500 w-full md:w-[73%]'>
                  <span className=''>{i + 1}- </span>
                  <a
                    href={topic.p2_link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='underline'
                  >
                    {topic.title}
                  </a>
                </p>
                <a
                  href={topic.yt_link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='border flex justify-center items-center rounded-md px-3 py-1 text-sm cursor-pointer bg-slate-100 hover:bg-slate-200 text-gray-700'
                  //style={{ backgroundColor: bgColor, color: textColor }}
                >
                  YouTube
                </a>
                <a
                  href={topic.p2_link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex justify-center items-center border rounded-md px-3 py-1 text-sm cursor-pointer bg-slate-100 hover:bg-slate-200 text-gray-700'
                 // style={{ backgroundColor: bgColor1, color: textColor1 }}
                >
                  Leetcode
                </a>
              </div>
              <div className='border-b pb-3'>
                {topic.tags && companyTag(topic.tags)}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default QuestionList;
