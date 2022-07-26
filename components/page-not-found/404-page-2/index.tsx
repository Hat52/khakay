import Link from 'next/link'
import Image from 'next/image'
import Styles from './index.module.css'
interface pageNotFound { 
    isPreview:Boolean
}
const PageNotFound1 = ({isPreview}:pageNotFound) => {
    if(isPreview){
        return (
            <div style={{width: '100%', height: '100%', position: 'relative'}}>
                <Image className="preview-image" src="/img/preview/404 - 2.svg" layout="fill" alt="me"/> 
            </div>
            
        )
    }
    return(
        <div className={Styles.container_404_2}>
            <div className={Styles.image_container}>
                <Image src="/img/404-1.svg" alt="404" aria-label="404 page not found"  width='620' height='620' /> 
            </div>
            <div className={Styles.text_container}>
                <h3>404 not found</h3>
                <p>Looking something we don’t serve?</p>
                <div className={Styles.links_container}>
                    <Link href="/"> Back to home</Link>
                    <Link href="/">Contact us</Link>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound1