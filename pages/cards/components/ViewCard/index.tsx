import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Styles from './view-card.module.css'
import PageUnderConstruction from '../../../coming-soon'
import Link from 'next/link'
const ViewCard: NextPage<any> = ({component:Component,isPreview,path}) => {
    return(
        <Link href={path}>
            <div className={Styles.container}>
                <Component isPreview={isPreview}/> 
            </div>
        </Link>
    )
}

export default ViewCard