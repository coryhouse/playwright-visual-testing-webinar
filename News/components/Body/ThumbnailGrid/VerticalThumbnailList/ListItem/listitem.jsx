import React from 'react';
import {
    listItemWrapper,
    listItemImage,
    listItemSummary,
} from './listitem.module.css';

export default function ListItem({ children, link }) {
    const childrenArray = React.Children.toArray(children);
    return (
        <a href={link} className={listItemWrapper}>
            {React.cloneElement(childrenArray[0], { className: listItemImage })}
            {React.cloneElement(childrenArray[1], { className: listItemSummary })}
        </a>
    );
};