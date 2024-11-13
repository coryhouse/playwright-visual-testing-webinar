import React from 'react'
import {
    horizontalLine,
    list,
} from './verticalThumbnailList.module.css'
// container that adds vertical lines inbetween children
export default function ThumbnailGrid({children}) {
    const childrenArray = React.Children.toArray(children);
    return (
        <div className={list}>
            { childrenArray.map((child, index) => (
                <React.Fragment key={index}>
                    {child}
                    {index < childrenArray.length-1 && <div className={horizontalLine}/>}
                </React.Fragment>
            ))}
        </div>
    );
};