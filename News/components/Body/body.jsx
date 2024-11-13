import ThumbnailGrid from './ThumbnailGrid/thumbnailGrid.jsx'
import VerticalThumbnailList from './ThumbnailGrid/VerticalThumbnailList/verticalThumbnailList.jsx'
import ListItem from './ThumbnailGrid/VerticalThumbnailList/ListItem/listitem.jsx'
import MainThumbnail from './ThumbnailGrid/MainThumbnail/mainThumbnail.jsx'
import BreakingNewsBanner from './BreakingNews/breakingNewsBanner.jsx'

import bloomsImage from '../../../img/articles/blooms-taxonomy/blooms.png'
import patternImage from '../../../img/articles/design-patterns/pattern.jpg'
import codeImage from '../../../img/articles/testing-philosphy/code.jpg'
import boulderingImage from '../../../img/articles/bouldering/bouldering.jpg'
import spiceImage from '../../../img/articles/spices/spices.jpg'
import olympicsImage from '../../../img/articles/olympics/olympics.jpg'
import phoneImage from '../../../img/articles/attention/phone.jpg'
import mathImage from '../../../img/articles/math/integral.jpg'
import foodImage from '../../../img/articles/food/delicacy.jpg'
import languageImage from '../../../img/articles/language/dictionary.jpg'
import fictionImage from '../../../img/articles/fiction/fiction.jpg'
import gamingImage from '../../../img/articles/ai_gaming/gaming.jpg';
import aiImage from '../../../img/articles/ai/ai.jpg';
import eatingImage from '../../../img/articles/eating/lettuce.jpg';
import exerciseImage from '../../../img/articles/exercise/exercise.jpg';
import fashionImage from '../../../img/articles/fashion/fashion.jpg';
import habitImage from '../../../img/articles/habit/brush.jpg';
import meditationImage from '../../../img/articles/meditation/meditation.jpg';
import sleepImage from '../../../img/articles/sleep/sleep.jpg';

import {
    homepageBody,
    dateText
} from './body.module.css'

export default function Body({ thumbnails, date, config }) {
    let i=0;
    console.log(date);
    return (
        <div className={homepageBody}>
            {config.breakingNews && <BreakingNewsBanner message="This is a test message!"/>}
            <p className={dateText}>{date}</p>
            <ThumbnailGrid width='60vw' height='60vh'>
                <MainThumbnail link={thumbnails[i].link}>
                    <img src={thumbnails[i].image}/>
                    <p>{thumbnails[i++].desc}</p>
                </MainThumbnail>
                
                <VerticalThumbnailList>
                    <ListItem link={thumbnails[i].link}>
                        <img src={thumbnails[i].image}/>
                        <p>{thumbnails[i++].desc}</p>
                    </ListItem>
                    <ListItem link={thumbnails[i].link}>
                        <img src={thumbnails[i].image}/>
                        <p>{thumbnails[i++].desc}</p>
                    </ListItem>
                    <ListItem link={thumbnails[i].link}>
                        <img src={thumbnails[i].image}/>
                        <p>{thumbnails[i++].desc}</p>
                    </ListItem>
                    <ListItem link={thumbnails[i].link}>
                        <img src={thumbnails[i].image}/>
                        <p>{thumbnails[i++].desc}</p>
                    </ListItem>
                </VerticalThumbnailList>
            </ThumbnailGrid>

            <ThumbnailGrid width='60vw' height='40vh'>
                <MainThumbnail link={thumbnails[i].link}>
                    <img src={thumbnails[i].image}/>
                    <p>{thumbnails[i++].desc}</p>
                </MainThumbnail>
                <MainThumbnail link={thumbnails[i].link}>
                    <img src={thumbnails[i].image}/>
                    <p>{thumbnails[i++].desc}</p>
                </MainThumbnail>
            </ThumbnailGrid>

            <ThumbnailGrid>
                <MainThumbnail link={thumbnails[i].link}>
                    <img src={thumbnails[i].image}/>
                    <p>{thumbnails[i++].desc}</p>
                </MainThumbnail>
            </ThumbnailGrid>

            <ThumbnailGrid width='60vw' height='30vh'>
                <VerticalThumbnailList>
                    <ListItem link={thumbnails[i].link}>
                        <img src={thumbnails[i].image}/>
                        <p>{thumbnails[i++].desc}</p>
                    </ListItem>
                    <ListItem link={thumbnails[i].link}>
                        <img src={thumbnails[i].image}/>
                        <p>{thumbnails[i++].desc}</p>
                    </ListItem>
                    <ListItem link={thumbnails[i].link}>
                        <img src={thumbnails[i].image}/>
                        <p>{thumbnails[i++].desc}</p>
                    </ListItem>
                </VerticalThumbnailList>
                
                <VerticalThumbnailList>
                    <ListItem link={thumbnails[i].link}>
                        <img src={thumbnails[i].image}/>
                        <p>{thumbnails[i++].desc}</p>
                    </ListItem>
                    <ListItem link={thumbnails[i].link}>
                        <img src={thumbnails[i].image}/>
                        <p>{thumbnails[i++].desc}</p>
                    </ListItem>
                    <ListItem link={thumbnails[i].link}>
                        <img src={thumbnails[i].image}/>
                        <p>{thumbnails[i++].desc}</p>
                    </ListItem>
                </VerticalThumbnailList>
            </ThumbnailGrid>

            <ThumbnailGrid width='60vw' height='60vh'>
                <MainThumbnail link={thumbnails[i].link}>
                    <img src={thumbnails[i].image}/>
                    <p>{thumbnails[i++].desc}</p>
                </MainThumbnail>
                
                <VerticalThumbnailList>
                    <ListItem link={thumbnails[i].link}>
                        <img src={thumbnails[i].image}/>
                        <p>{thumbnails[i++].desc}</p>
                    </ListItem>
                    <ListItem link={thumbnails[i].link}>
                        <img src={thumbnails[i].image}/>
                        <p>{thumbnails[i++].desc}</p>
                    </ListItem>
                    <ListItem link={thumbnails[i].link}>
                        <img src={thumbnails[i].image}/>
                        <p>{thumbnails[i++].desc}</p>
                    </ListItem>
                    <ListItem link={thumbnails[i].link}>
                        <img src={thumbnails[i].image}/>
                        <p>{thumbnails[i++].desc}</p>
                    </ListItem>
                </VerticalThumbnailList>
            </ThumbnailGrid>
            <br/><br/>
        </div>
    );
};