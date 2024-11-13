import Header from "../../News/components/Header/header.jsx"
import Footer from "../../News/components/Footer/footer.jsx"
import React from 'react';
import portrait from '../../img/avatar1.jpg'
import {
    aboutBody,
    aboutHeader,
    aboutImage,
    aboutText,
    aboutQuote,
} from './about.module.css';

const AboutMe = () => {
    return (
        <>
            <Header />
            <div className={aboutBody}>
                <h1 className={aboutHeader}>About Me</h1>
                <img src={portrait.src} className={aboutImage} alt="Portrait of Charles Whitman"/>
                <div className={aboutText}>
                    <p>
                        Hello there! My name is Charles Whitman, and I'm delighted to welcome you to my corner of the internet. With over six decades of life experience under my belt, I've had the privilege of witnessing the world change in extraordinary ways. From the dawn of the digital age to the rise of global cultures, my journey has been one of curiosity, learning, and a deep appreciation for the stories that shape our lives.
                    </p>
                    <p>
                        I was born and raised in the heart of America, in a small town where everyone knew each other's names, and life moved at a slower, more deliberate pace. My early years were spent surrounded by the stories of my grandparents, who sparked in me a love for history, literature, and the simple yet profound joys of life. It was in these formative years that I developed a deep-seated passion for writing, a passion that has stayed with me throughout my life.
                    </p>
                    <p>
                        My professional career has been a patchwork of experiences—I've worked as a journalist, a teacher, a storyteller, and a lifelong learner. These roles have given me a unique perspective on the world, one that I aim to share with my readers through thoughtful articles that explore a wide range of topics, from technology to culture, and everything in between. Writing has always been my way of making sense of the world, and I believe that every word we write brings us one step closer to understanding the human experience.
                    </p>
                    <p>
                        Now in my golden years, I've taken a step back from the hustle and bustle of city life to focus on what truly matters: sharing wisdom, fostering creativity, and connecting with people from all walks of life. This website is my humble attempt to do just that. Here, you'll find a collection of articles that reflect my interests, musings, and the many lessons I've learned along the way. Whether it's a deep dive into the benefits of reading fiction, an exploration of the impact of technology on our lives, or simply a reflection on the beauty of a well-cooked meal, my goal is to provide content that not only informs but also inspires.
                    </p>
                    <blockquote className={aboutQuote}>
                        "The more you know, the more you realize how much you don't know." — A saying that has guided me through life.
                    </blockquote>
                    <p>
                        Thank you for taking the time to visit my site. I hope you find something here that resonates with you, sparks a new idea, or simply brings a smile to your face. Let's continue to learn, explore, and grow together—one story at a time.
                    </p>
                    <p>
                        Warm regards,
                        <br />
                        Charles Whitman
                        <br />
                        PS. This is a fake person.
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default AboutMe;