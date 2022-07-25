import Link from 'next/link'
import Image from 'next/image'
import Styles from './styles/not-found.module.css'
interface pageNotFound { 
    isPreview:Boolean
}
const PageNotFound1 = ({isPreview}:pageNotFound) => {
    if(isPreview){
        return (
            <div style={{width: '100%', height: '100%', position: 'relative'}}>
                <Image className="preview-image" src="/img/preview/404 - 1.svg" layout="fill" alt="me"/> 
            </div>
            
        )
    }
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