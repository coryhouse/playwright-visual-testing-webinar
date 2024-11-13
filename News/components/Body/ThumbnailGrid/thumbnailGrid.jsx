import React from 'react';
import {
    grid,
    verticalLine
} from './thumbnailGrid.module.css';

export default function ThumbnailGrid({ children }) {
    return (
        <div className={grid}>
            {children}
        </div>
    );
}