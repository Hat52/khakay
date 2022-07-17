import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Styles from './view-card.module.css'
import PageUnderConstruction from '../../../coming-soon'
const ViewCard: NextPage<AppProps> = ({Component}) => {
    return(
        <div className={Styles.container}>
            <Component/>
        </div>
    )
}

export default ViewCard