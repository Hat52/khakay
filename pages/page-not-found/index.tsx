// import type { NextPage } from 'next'
// import Link from 'next/link'
// import Image from 'next/image'
// // import PageUnderConstruction from '../coming-soon'
// import Styles from './styles/not-found.module.css'
// const PageNotFound: NextPage = () => {
//     return(
//         // <PageUnderConstruction/>
//         <div className={Styles.page_one_container}>
//             <Link href="/">Back To Home</Link>
//             <h3>
//                 404<br/>
//                 Lost directions
//             </h3>
//             <div className={Styles.image_container}>
//                 <Image src="/img/lost-direction.svg" alt="me"  layout='fill' objectFit='contain' /> 
//             </div>
//         </div>
//     )
// }

// export default PageNotFound

import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
// import PageUnderConstruction from '../coming-soon'
import Styles from './styles/not-found.module.css'
import StylesMain from '../../styles/Home.module.css'
import ViewCard from '../cards/components/ViewCard'
import {PageNotFound1} from './components'
const PageNotFound: NextPage = () => {
    return(
        // <div className={StylesMain.container}>
            <div className={StylesMain.main}>
                <ViewCard component={PageNotFound1}/>
            </div>
        // </div>
    )
}

export default PageNotFound