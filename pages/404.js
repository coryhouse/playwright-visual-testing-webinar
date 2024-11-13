import Link from 'next/link';
import { Header } from '../E-Commerce/components/Header/header';
import { Footer } from '../E-Commerce/components/footer';
import SampleButton from '../components/SampleComponents/SampleButton/sampleButton';

export default function Custom404() {
	return (
		<>
			<Header />
			<div style={{ textAlign: 'center', marginTop: '50px' }}>
				<h1>404 - Page Not Found</h1>
				<p>Oops! The page you are looking for does not exist.</p>
				<SampleButton
					style={{backgroundColor: '#00a399', fontWeight: 'bold', padding: '5px 20px', boxShadow: '2px 2px 3px #e1e1e1', marginTop: "30px"}}
				>
					<Link href="/e-commerce">
						Go back to Home
					</Link>
				</SampleButton>
			</div>

			<Footer />
		</>
	);
}