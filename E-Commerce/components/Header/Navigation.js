import * as React from 'react';
import styles from "./Navigation.module.css";
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navigation({ className }) {
	const [productTypes, setProductTypes] = React.useState([]);
	const [menuOpen, setMenuOpen] = React.useState(false);
	const navRef = React.useRef(null);
	
	React.useEffect(() => {
		fetchTypes();
	}, []);
	
	const fetchTypes = async () => {
		const req = await fetch('/api/product-types');
		const res = await req.json();
		setProductTypes(res.data);
	};

	const handleClickOutside = (event) => {
		if (navRef.current && !navRef.current.contains(event.target)) {
		  setMenuOpen(false);
		}
	};

	React.useEffect(() => {
		if (menuOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}
	
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [menuOpen]);
	
	return (
		<div style={{position: 'relative'}} ref={navRef}>
			<div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
				<RxHamburgerMenu />
			</div>
			<nav className={`${styles.navStyle} ${className} ${menuOpen ? styles.open : ''}`}>
				<Link key="All" className={styles.navLink} href="/e-commerce" onClick={() => setMenuOpen(false)}>
					All products
				</Link>
				{productTypes?.map((name) => (
					<Link key={name} className={styles.navLink} href={`/e-commerce/type/${name}`} onClick={() => setMenuOpen(false)}>
						{name}
					</Link>
				))}
			</nav>
		</div>
	);
}