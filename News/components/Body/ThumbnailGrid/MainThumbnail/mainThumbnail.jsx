import React from 'react';
import {
    mainThumbnailWrapper,
    mainThumbnailImage,
    mainThumbnailSummary,
} from './mainThumbnail.module.css';

export default function MainThumbnail({ children, link }) {
    const childrenArray = React.Children.toArray(children);
    return (
        <a href={link} className={mainThumbnailWrapper}>
            {React.cloneElement(childrenArray[0], { className: mainThumbnailImage })}
            {React.cloneElement(childrenArray[1], { className: mainThumbnailSummary })}
        </a>
    );
}