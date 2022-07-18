import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Styles from '../styles/not-found.module.css'
const PageNotFound1: NextPage = () => {
    return(
        <div className={Styles.page_one_container}>
            <Link href="/">Back To Home</Link>
            <h3>
                404<br/>
                Lost directions
            </h3>
            <div className={Styles.image_container}>
                <Image src="/img/lost-direction.svg" alt="me"  layout='fill' objectFit='contain' /> 
            </div>
        </div>
    )
}

export default PageNotFound1