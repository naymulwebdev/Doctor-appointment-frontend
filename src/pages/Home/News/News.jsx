import React from 'react';
import news1 from '../../../assets/news1.png'
import news2 from '../../../assets/news2.png'
import news3 from '../../../assets/news3.png'
import Sectiontitle from '../../../components/Sectiontitle/Sectiontitle';
import Artical from './Artical';

const News = () => {
  const newsData = [
    {
      img: news1,
      name: "Breaking stereotypes: Female basketball stars",
      des: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC "
    },
    {
      img: news2,
      name: "Ratarugul and rain: A monsoon tale in motion",
      des: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC "
    },
    {
      img: news3,
      name: "The agencies had information , but not about the violence",
      des: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC "
    },
  ];
    return (
        <div className="px-4 md:px-29 py-10 md:pb-20">
      <Sectiontitle
        title="News & Events"
        des="Stay updated with our latest news and upcoming events, featuring important announcements, activities, achievements, and moments that keep our community informed and connected. "
      ></Sectiontitle>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {newsData?.map((news, i) => (
          <Artical key={i} news={news} />
        ))}
      </div>
    </div>
    );
};

export default News;