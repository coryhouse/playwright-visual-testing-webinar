import Header from "../../../News/components/Header/header.jsx"
import Footer from "../../../News/components/Footer/footer.jsx";
import {
    articleBody,
    articleHeader,
    articleFooter,
    articleP,
    articleH1,
    articleH2,
    articleH3,
    articleUl,
} from './article.module.css';
import covidImage from '../../../img/articles/covid/covid.jpg'
import brainImage from '../../../img/articles/covid/brain.jpg'


const CovidArticle = () => {
    return (
        <>
            <Header/>
            <div className={articleBody}>
                <header className={articleHeader}>
                    <h1 className={articleH1}>COVID-19 and Its Unforeseen Effects on IQ, Health, and the Brain</h1>
                </header>
                <img src={covidImage.src}/>
                <section>
                    <h2 className={articleH2}>Introduction</h2>
                    <p className={articleP}>
                        COVID-19, a global pandemic that began in late 2019, has had a profound impact on nearly every aspect of life. While much attention has been focused on the immediate effects of the virus, such as respiratory illness and the strain on healthcare systems, emerging research is shedding light on its long-term effects, particularly on IQ, brain health, and overall cognitive function. In this article, we explore these unforeseen consequences and their implications for public health.
                    </p>
                </section>
                <section>
                    <h2 className={articleH2}>The Impact of COVID-19 on Cognitive Function</h2>
                    <h3 className={articleH3}>Cognitive Decline and IQ</h3>
                    <p className={articleP}>
                        One of the most alarming findings related to COVID-19 is its potential impact on cognitive function, including IQ. Studies have shown that individuals who have recovered from COVID-19, especially those who experienced severe symptoms, may suffer from cognitive impairments. These impairments can manifest as difficulties in concentration, memory, and problem-solving, leading to a measurable decline in IQ. The exact mechanisms behind this decline are still being investigated, but it is believed to be linked to inflammation, oxygen deprivation, and the virus's impact on brain cells.
                    </p>
                    <h3 className={articleH3}>Brain Fog and Long COVID</h3>
                    <p className={articleP}>
                        "Brain fog" has become a common term used to describe the mental confusion and cognitive sluggishness that many COVID-19 survivors experience. This condition is particularly prevalent among those suffering from "Long COVID," a term used to describe the persistence of symptoms long after the initial infection has cleared. Brain fog can severely impact daily functioning, making it difficult for individuals to return to their normal routines and work. The cause of brain fog is not entirely understood, but it is thought to be related to lingering inflammation, disrupted brain signaling, and fatigue.
                    </p>
                </section>
                <img src={brainImage.src}/>
                <section>
                    <h2 className={articleH2}>Neurological Effects of COVID-19</h2>
                    <h3 className={articleH3}>Direct Viral Impact on the Brain</h3>
                    <p className={articleP}>
                        COVID-19 has been found to directly affect the brain and nervous system. The virus can enter the brain through the olfactory nerve or the bloodstream, leading to a range of neurological symptoms. These can include headaches, dizziness, loss of taste and smell, and even seizures. In severe cases, COVID-19 can cause encephalitis, a life-threatening inflammation of the brain. The long-term impact of these neurological effects is still being studied, but there is concern that they could contribute to lasting brain damage.
                    </p>
                    <h3 className={articleH3}>Mental Health Consequences</h3>
                    <p className={articleP}>
                        The psychological impact of COVID-19 cannot be overlooked. The pandemic has led to widespread anxiety, depression, and post-traumatic stress disorder (PTSD), exacerbated by the stress of illness, isolation, and uncertainty. For those who have experienced severe COVID-19, the mental health effects are even more pronounced. The combination of physical symptoms, cognitive decline, and emotional distress creates a complex health challenge that requires comprehensive care and support.
                    </p>
                </section>
                <section>
                    <h2 className={articleH2}>COVID-19 and Physical Health</h2>
                    <h3 className={articleH3}>Impact on Cardiovascular Health</h3>
                    <p className={articleP}>
                        COVID-19 is not just a respiratory virus; it can also have significant effects on cardiovascular health. The virus has been linked to heart inflammation, blood clots, and other cardiovascular issues. These complications can lead to long-term health problems, including an increased risk of heart attacks and strokes. For some individuals, these cardiovascular effects persist even after recovering from the initial infection, highlighting the need for ongoing monitoring and care.
                    </p>
                    <h3 className={articleH3}>Respiratory and Immune System Effects</h3>
                    <p className={articleP}>
                        The respiratory system is the primary target of COVID-19, and many survivors experience lingering lung issues, such as reduced lung capacity and chronic shortness of breath. Additionally, COVID-19 can weaken the immune system, making individuals more susceptible to other infections. The long-term impact on the immune system is still being studied, but there is concern that survivors may face ongoing health challenges related to immune dysregulation.
                    </p>
                </section>
                <section>
                    <h2 className={articleH2}>Long-Term Implications and Recovery</h2>
                    <h3 className={articleH3}>Rehabilitation and Cognitive Therapy</h3>
                    <p className={articleP}>
                        For individuals experiencing cognitive decline and brain fog after COVID-19, rehabilitation and cognitive therapy may offer some relief. These therapies can help retrain the brain and improve cognitive function over time. Additionally, mental health support is crucial for addressing the psychological impact of the virus. A holistic approach to recovery, addressing both the physical and mental health consequences of COVID-19, is essential for improving quality of life.
                    </p>
                    <h3 className={articleH3}>The Importance of Ongoing Research</h3>
                    <p className={articleP}>
                        The long-term effects of COVID-19 are still not fully understood, and ongoing research is crucial for uncovering the full scope of the virus's impact. Continued studies on the neurological, cognitive, and physical effects of COVID-19 will help inform treatment strategies and support services for survivors. Public health initiatives must also adapt to address the emerging needs of those affected by long-term COVID-19 symptoms.
                    </p>
                </section>
                <section>
                    <h2 className={articleH2}>Conclusion</h2>
                    <p className={articleP}>
                        COVID-19 has proven to be far more than just a respiratory illness. Its unforeseen effects on IQ, brain health, and overall cognitive function have raised significant concerns about the long-term impact on individuals and public health. As we continue to navigate the aftermath of the pandemic, it is crucial to prioritize research, rehabilitation, and support for those affected by these lingering symptoms. By doing so, we can better understand the true impact of COVID-19 and develop strategies to mitigate its long-term consequences.
                    </p>
                    <p className={articleP}>
                        The fight against COVID-19 is far from over, and addressing its unforeseen effects will be a key part of the ongoing response to the pandemic. With continued research and a commitment to comprehensive care, we can help those affected by COVID-19 reclaim their health and well-being.
                    </p>
                </section>
                <footer className={articleFooter}>
                    <p>&copy; 2024 Health and Wellness Journal</p>
                </footer>
            </div>
            <Footer/>
        </>
    );
};

export default CovidArticle;