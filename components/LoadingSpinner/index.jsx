import React from 'react';
import style from './index.module.css';

const LoadingSpinner = ({ size = 30, borderColor = '#00a399', borderWidth = 4 }) => {
	const spinnerStyle = {
		width: size,
		height: size,
		border: `${borderWidth}px solid ${borderColor}`,
		borderTop: `${borderWidth}px solid transparent`
	};

	return <div className={style.loadingSpinner} style={spinnerStyle}></div>;
};

export default LoadingSpinner;