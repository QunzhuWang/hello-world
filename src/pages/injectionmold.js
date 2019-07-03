import React from "react"
import Layout from "../components/layout"
import { Row, Column} from "../components/grid"

import Automobile01 from "../pics/automobile01.png"
import Automobile02 from "../pics/automobile02.png"
import Automobile03 from "../pics/automobile03.jpg"
import Automobile04 from "../pics/automobile04.jpg"
import Automobile05 from "../pics/automobile05.jpg"
import Automobile06 from "../pics/automobile06.png"
import Injectionmold07 from "../pics/Injectmold07.png"
import Injectionmold08 from "../pics/Injectmold08.png"


const Injectionmold = () =>(
    <Layout>
        <div style={{maxWidth:"1440px", margin:"0 auto", padding:"1rem 2rem"}}>
            <Row>
                <Column sm={12} md={12} lg={12} xl={8}>
                <p style={{fontSize:"1rem"}} >
                DSC Global has the ability to provide our customers with exceptional tooling value and molds that are tailored to each of our customer’s unique needs and demands. 
                Because of our extensive experience, 
                we routinely aid in keeping our customers on budget and on time.
                DSC Global is professional on many kinds of plastic injection mold building from small to large, diverse in automobile, medical, food, consumer electronics plastic parts and so on.
                </p>
                </Column>
            </Row>
            <h2 style={{padding:"0 15px"}}>Automobile parts injection mold</h2>

            <Row>
                    <Column sm={12} md={12} lg={12} xl={8}>
                    <p>
                    For the current car, many parts are made of plastic. 
                    In order to meet the quality and quality requirements of these plastic parts, many of them are injection molded. With the light weight of automobiles, 
                    the development of new line of plastic materials, 
                    there will be more and more metal parts replaced by plastic parts.
                    </p>
                    </Column>
</Row>
<Row>
                    <Column sm={12} md={6} lg={6} xl={4}>
                            <img style={{width:"auto",height:"auto",maxWidth:"100%",maxHeight:"100%"}} src={Automobile01} alt=""/>
                    </Column>
                    <Column sm={12} md={6} lg={6} xl={4}>
                            <img style={{width:"auto",maxWidth:"100%",maxHeight:"100%"}} src={Automobile02} alt=""/>
                    </Column>
<Row>
    <Column  sm={12} md={12} lg={12} xl={8}>
                    <p>
                    DSC Global has been deeply involved in the automotive plastic parts manufacturing industry for many years, and has rich experience and unique understanding of automotive parts including cover parts, 
                    interior parts and functional parts. It also cooperates with many auto suppliers, including first- and second-tier suppliers, 
                    and has a good understanding of the standards of major auto manufacturers, and is familiar with the design and manufacturing requirements of export molds.
                    </p>
                    </Column>
                    </Row>
                    
            </Row>
            <Row>
                <Column sm={12} md={6} lg={6} xl={4}>
                            <img style={{width:"auto",maxWidth:"100%",maxHeight:"100%"}} src={Automobile03} alt=""/>
                    </Column>
                    <Column sm={12} md={6} lg={6} xl={4}>
                            <img style={{width:"auto",maxWidth:"100%",maxHeight:"100%"}} src={Automobile05} alt=""/>
                </Column>
            </Row>
            <Row>
                <Column sm={12} md={6} lg={6} xl={4}>
                            <img style={{width:"auto",height:"auto",maxWidth:"100%",maxHeight:"100%"}} src={Automobile06} alt=""/>
                    </Column>
                    <Column sm={12} md={6} lg={6} xl={4}>
                            <img style={{width:"auto",maxWidth:"100%",maxHeight:"100%"}} src={Automobile04} alt=""/>
                </Column>
            </Row>


            <h2 style={{padding:"0 15px"}}>Other industrial mold</h2>
            <Row>
            <Column sm={12} md={12} lg={12} xl={8}>
                <p style={{fontSize:"1rem"}} >
                    Apart from automobile industrial injection mold design and manufacture. 
                    DSC Global can also help to make many other plastic injection mold like medical device part, food packaing plastics, Tools and so on. 
                </p>
            </Column>
            </Row>
            <Row>
                <Column sm={12} md={6} lg={6} xl={4}>
                            <img style={{width:"auto",height:"auto",maxWidth:"100%",maxHeight:"100%"}} src={Injectionmold07} alt=""/>
                    </Column>
                    <Column sm={12} md={6} lg={6} xl={4}>
                            <img style={{width:"auto",maxWidth:"100%",maxHeight:"100%"}} src={Injectionmold08} alt=""/>
                </Column>
            </Row>


        </div>
    </Layout>
)


export default Injectionmold