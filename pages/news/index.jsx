import * as React from "react";
import Header from "../../News/components/Header/header.jsx"
import Body from "../../News/components/Body/body.jsx"
import Footer from "../../News/components/Footer/footer.jsx"
import ConfigBar from "../../components/ConfigBar/configBar.jsx";

import bloomsImage from '../../img/articles/blooms-taxonomy/blooms.png'
import patternImage from '../../img/articles/design-patterns/pattern.jpg'
import codeImage from '../../img/articles/testing-philosphy/code.jpg'
import boulderingImage from '../../img/articles/bouldering/bouldering.jpg'
import spiceImage from '../../img/articles/spices/spices.jpg'
import olympicsImage from '../../img/articles/olympics/olympics.jpg'
import phoneImage from '../../img/articles/attention/phone.jpg'
import mathImage from '../../img/articles/math/integral.jpg'
import foodImage from '../../img/articles/food/delicacy.jpg'
import languageImage from '../../img/articles/language/dictionary.jpg'
import fictionImage from '../../img/articles/fiction/fiction.jpg'
import gamingImage from '../../img/articles/ai_gaming/gaming.jpg';
import aiImage from '../../img/articles/ai/ai.jpg';
import eatingImage from '../../img/articles/eating/lettuce.jpg';
import exerciseImage from '../../img/articles/exercise/exercise.jpg';
import fashionImage from '../../img/articles/fashion/fashion.jpg';
import habitImage from '../../img/articles/habit/brush.jpg';
import meditationImage from '../../img/articles/meditation/meditation.jpg';
import sleepImage from '../../img/articles/sleep/sleep.jpg';
import { shuffle } from 'lodash'

export default function Index({ thumbnails, date, config }) {
  return (
    <>
        <Header />
        <Body config={config} date={date} thumbnails={thumbnails}/>
        <ConfigBar config={config} app={'news'}/>
        <Footer />
    </>
  );
}

function shuffleArray(array) {
  for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
};

function randomDateRange(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

export const getServerSideProps= async ({ query }) => {
  const randomDate = query.randomDate === 'true';
  const breakingNews = query.breakingNews || null;
  const abTest = query.abTest === 'true';
  const randomizeArticles = query.randomizeArticles === 'true';
  let thumbnails = [
    { link: '/news/articles/testing-philosophy', image: codeImage.src, desc: "Learn about the philosophy behind testing and a comprehensive approach to testing by highlighting various methodologies." },
    { link: '/news/articles/design-patterns', image: patternImage.src, desc: "Jump into the world of software design patterns and enhance your testing by making it more structured, scalable, and maintained." },
    { link: '/news/articles/attention', image: phoneImage.src, desc: "Find out the effect that the internet has on our attention span and how to improve your attention span!" },
    { link: '/news/articles/bouldering', image: boulderingImage.src, desc: "Beginners guide to bouldering: An introduction into the sport of bouldering and its surging popularity in recent times." },
    { link: '/news/articles/spices', image: spiceImage.src, desc: "The hidden benefits of spices: A deep dive into the health benefits, complex flavor, and cooking techniques of various spices." },
    { link: '/news/articles/food', image: foodImage.src, desc: "How globalization is opening the newer generation's palate to diverse cuisines. Social media has changed the game for fusion food." },
    { link: '/news/articles/language', image: languageImage.src, desc: "The different benefits between learning a language and being bilingual. How language learning and bilingualism improve the mind in their own ways." },
    { link: '/news/articles/fiction', image: fictionImage.src, desc: "Many people see fiction as an unhealthy escape mechanism; learn how reading and writing fiction can help you." },
    { link: '/news/articles/ai_gaming', image: gamingImage.src, desc: "Exploring the Evolution of Artificial Intelligence in Gaming: How AI Has Transformed Game Design, Player Experience, and Future Innovations." },
    { link: '/news/articles/ai', image: aiImage.src, desc: "Navigating the Future of Work: How AI and Automation Are Redefining Job Roles, Economic Structures, and Opportunities in the Modern Workforce." },
    { link: '/news/articles/eating', image: eatingImage.src, desc: "Transforming Your Eating Habits: How Mindful Eating Can Improve Digestion, Portion Control, and Your Relationship with Food." },
    { link: '/news/articles/exercise', image: exerciseImage.src, desc: "Unlocking Brain Power: How Regular Physical Exercise Enhances Cognitive Function and Emotional Well-Being." },
    { link: '/news/articles/olympics', image: olympicsImage.src, desc: "Explore the history, significance, and impact of the Olympics, celebrating the spirit of global unity and athletic excellence." },
    { link: '/news/articles/blooms-taxonomy', image: bloomsImage.src, desc: "Learn how to learn by using Bloom's Taxonomy, a theory of human understanding. Leverage it to gain a deeper understanding of anything you learn." },
    { link: '/news/articles/fashion', image: fashionImage.src, desc: "The Rise of Sustainable Fashion: How Eco-Friendly Practices Are Transforming the Apparel Industry and Influencing Consumer Choices." },
    { link: '/news/articles/habit', image: habitImage.src, desc: "Harnessing the Power of Habits: How Small Changes Drive Long-Term Success." },
    { link: '/news/articles/meditation', image: meditationImage.src, desc: "Unlocking the Benefits of Meditation: Cultivating Mindfulness for a Balanced and Fulfilling Life." },
    { link: '/news/articles/math', image: mathImage.src, desc: "Find out the benefits of learning mathematics and how to incorporate it into your life as a hobby. Improve your problem-solving and logic capabilities." },
    { link: '/news/articles/sleep', image: sleepImage.src, desc: "Understanding Sleep: Essential Insights for Achieving Restful and Restorative Nights." }
  ];

  if (abTest) {
    thumbnails[0].desc = "Discover the core principles of testing, exploring various methodologies to enhance software quality and reliability.";
    thumbnails[1].desc = "Master software design patterns to build scalable, maintainable, and testable applications for long-term success.";
    thumbnails[2].desc = "Uncover how the digital world affects focus and attention, and learn practical strategies to improve concentration.";
    thumbnails[3].desc = "A beginner\'s dive into bouldering, exploring the fundamentals of this climbing sport and why it's growing in popularity.";
    thumbnails[4].desc = "Explore the untapped potential of spices for health, flavor, and cooking mastery in this in-depth guide.";
    thumbnails[5].desc = "See how global trends and social media are reshaping modern cuisine, introducing a new wave of fusion food.";
    thumbnails[6].desc = "Compare the unique cognitive and social benefits of learning a new language and becoming bilingual.";
    thumbnails[7].desc = "Discover how fiction can serve as a tool for growth, creativity, and emotional well-being.";
    thumbnails[8].desc = "Delve into the revolutionary role of AI in gaming, shaping new player experiences and pushing the boundaries of design.";
    thumbnails[9].desc = "Understand how AI and automation are reshaping the future of work, transforming industries, and creating new opportunities.";
    thumbnails[10].desc = "Learn how mindful eating can help you take control of your diet, improve digestion, and foster a better relationship with food.";
    thumbnails[11].desc = "Discover how regular exercise can sharpen your mind, boost your emotional health, and improve overall well-being.";
    thumbnails[12].desc = "Dive into the rich history and global significance of the Olympics, highlighting the unifying power of sports and competition.";
    thumbnails[13].desc = "Master the art of learning with Bloom's Taxonomy, a powerful framework to deepen your understanding and improve retention.";
    thumbnails[14].desc = "Discover how sustainable fashion is revolutionizing the apparel industry, leading the shift toward eco-friendly and ethical consumer choices.";
    thumbnails[15].desc = "Unlock the secret to lasting success by cultivating small, powerful habits that shape your future.";
    thumbnails[16].desc = "Experience the transformative power of meditation, helping you achieve mindfulness, balance, and a more fulfilling life.";
    thumbnails[17].desc = "Discover the joy of learning mathematics as a hobby and boost your problem-solving skills and logical thinking.";
    thumbnails[18].desc = "Learn the science behind sleep and gain valuable insights for achieving deeper, more restorative rest.";
  }

  // Shuffle the thumbnails if randomizeArticles is true
  if (randomizeArticles)
    shuffleArray(thumbnails);

  let date = new Date('Septemeber 19, 2024');
  if (randomDate)
    date = randomDateRange(date, new Date(date.getTime()+365*24*60*60*1000));
  return {
    props: {
      thumbnails,
      date: date.toDateString(),
      config: {
        randomizeArticles,
        randomDate,
        breakingNews,
        abTest
      }
    }
  }
}