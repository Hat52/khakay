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
import {PageNotFound1} from '../../components'
const PageNotFound: NextPage = () => {
    return(
        <div className="page-conatiner">
            <h1 className="page-heading" >
                404 Page Templates
            </h1>
            <div className={Styles.not_found_card_container}>
                {
                    [0,1,2,3,4].map((value,index)=>{
                        return(
                            <div key={index}>
                                <ViewCard component={PageNotFound1} isPreview={true} path="/page-not-found/pages"/>
                            </div>
                        )

                    })
                }
            </div>
        </div>
    )
}

export default PageNotFound