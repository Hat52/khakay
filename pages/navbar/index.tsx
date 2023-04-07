import type { NextPage } from 'next';
import Styles from '../page-not-found/styles/not-found.module.css';
import ViewCard from '../cards/components/ViewCard';
import Navbar1 from './pages/navbar1';
const NavBar: NextPage = () => {
	return (
		<div className="page-conatiner">
			<h1 className="page-heading">404 Page Templates</h1>
			<div className={Styles.not_found_card_container}>
				<div>
					<ViewCard component={Navbar1} isPreview={true} path={`/navbar/pages/navbar1`} />
				</div>
			</div>
		</div>
	);
};

export default NavBar;
