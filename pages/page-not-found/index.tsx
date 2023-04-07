import type { NextPage } from 'next';
// import PageUnderConstruction from '../coming-soon';
import Styles from './styles/not-found.module.css';
import StylesMain from '../../styles/Home.module.css';
import ViewCard from '../cards/components/ViewCard';
import { PageNotFound1, PageNotFound2 } from '../../components/page-not-found';
const PageNotFound: NextPage = () => {
	return (
		<div className="page-conatiner">
			<h1 className="page-heading">404 Page Templates</h1>
			<div className={Styles.not_found_card_container}>
				<div>
					<ViewCard
						component={PageNotFound1}
						isPreview={true}
						path={`/page-not-found/pages/0`}
					/>
				</div>
				<div>
					<ViewCard
						component={PageNotFound2}
						isPreview={true}
						path={`/page-not-found/pages/404-page-2`}
					/>
				</div>
			</div>
		</div>
	);
};

export default PageNotFound;
