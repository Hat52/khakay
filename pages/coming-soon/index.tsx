import type { NextPage } from 'next'
import Image from 'next/image'
import Styles from '../../styles/page-not-found/page-not-found.module.css'
const PageNotFound: NextPage = () => {
    return(
        <div className={Styles.page_not_found}>
            <Image className="under-construction-image" src="/construction.svg" alt="me" width="640" height="465"/>
            <h1>Coming Soon...</h1>
        </div>
    )
}

export default PageNotFound