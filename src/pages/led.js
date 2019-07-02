import React from "react"
import Layout from "../components/layout"
import { Row, Column} from "../components/grid"

import led01 from "../pics/led01.png"
import led02 from "../pics/led02.png"
import led05 from "../pics/led05.png"
import led07 from "../pics/led07.png"
import led09 from "../pics/led09.png"
import led10 from "../pics/led10.png"
import led11 from "../pics/led11.png"
import led14 from "../pics/led14.png"
import led15 from "../pics/led15.png"

const Led = () =>(
    <Layout>
        <div style={{maxWidth:"1440px", margin:"0 auto", padding:"0 2rem"}}>
            
            <Row>
                <Column sm={12} md={12} lg={12} xl={8}>
                <p style={{fontSize:"1rem"}} >The light-emitting diode (LED) is one of today's most energy-efficient and rapidly-developing lighting technologies. Quality LED light last longer, are more durable, and offer comparable or better light quality than other types of lighting. 
                DSC Global offers a full range of services from design to production to delivery. </p>
                <img style={{maxWidth:"100%", margin:"0 auto"}} src={led01} alt=""/>
                </Column>
            </Row>


                <h2 style={{padding:"0 15px"}}>Mechanical design</h2>
            <Row>
                    <Column sm={12} md={6} lg={6} xl={4}>
                    <div>
                        The shape and structure are crucial for a light, especially for portable light. 
                        The shape determines the popularity and belongs to the category of aesthetics. 
                        As an industrial manufactured product, it must satisfy people's needs in certain aspects and have functions. 
                    </div>
                    <div>
                        DSC is good at design and structural design. Starting from the most basic functional requirements, 
                        we gradually enrich the details and features, and give customers a variety of options to complete product design.
                    </div>
                    </Column>
                    <Column sm={12} md={6} lg={6} xl={4}>
                        <img style={{width:"auto",height:"auto",maxWidth:"100%",maxHeight:"100%"}} src={led02} alt=""/>
                    </Column>
                    <Column sm={11} md={6} lg={6} xl={4}>
                        
                    </Column>
            </Row>

            <h2 style={{padding:"0 15px"}}>Electrical design</h2>
            <Row>
            <Column sm={12} md={6} lg={6} xl={4}>
                            <div>
                                LED lights are actually an electrical product. 
                                Therefore, it is unavoidable to consider the design of electricity.
                                From fixed lighting circuit change drivers to mobile lighting battery pack designs, 
                                the DSC team and its partners can provide complete circuit solutions. 
                                DSC can complete PCB design, boarding, testing and so on. And for different markets, 
                                it also provides certification services for electrical products, including UL, CE, FCC, etc.
                            </div>
                    </Column>

                        <Column sm={12} md={6} lg={6} xl={4}>
                            <img style={{width:"auto",height:"auto",maxWidth:"100%",maxHeight:"100%"}} src={led05} alt=""/>
                        </Column>
                        <Column sm={12} md={6} lg={6} xl={4}>
                           
                        </Column>

                </Row>


                <h2 style={{padding:"0 15px"}}>Optical design & analysis</h2>
                <Row>
                    <Column sm={12} md={12} lg={12} xl={8}>
                        <div>
                                As a lighting device, the optical requirements of LED lamps are not as high as those of optical components, 
                                but it is also necessary to consider the occasions where necessary, and some optical components are used to improve efficiency and meet the requirements. 
                                In some applications, there are certain requirements for the lumens and light distribution curves of the lamps, 
                                and there are also requirements for optics in applications such as signal lamps. DSC can design and analyze the secondary optical characteristics of LED lamps to better meet and meet customer needs.
                        </div>
                    </Column>
                </Row>


                <Row>
                    <Column sm={12} md={6} lg={6} xl={4}>
                            <img style={{width:"auto",height:"auto",maxWidth:"100%",maxHeight:"100%"}} src={led07} alt=""/>
                    </Column>
                    <Column sm={12} md={6} lg={6} xl={4}>
                            <img style={{width:"auto",paddingTop:"1rem",maxWidth:"100%",maxHeight:"100%"}} src={led09} alt=""/>
                    </Column>

                </Row>

                <h2 style={{padding:"0 15px"}}>Testing & equipment</h2>
            <Row>
            <Column sm={12} md={12} lg={12} xl={8}>
                            <div>
                            To measure the optical parameters like luminous flux, 
                            Light distribution curve and chromaticity diagram of the design led lighting device, 
                            we use integration sphere or Distribution photometer.
                            </div>
                            <div style={{paddingTop:"1rem"}}>
                            Sometimes, we have to use instruments to test the waterproof class (IPXX) for outdoor lightings.
                            </div>
                            <div style={{paddingTop:"1rem"}}>
                            Do the temperature test to ensure the LED lighting device work well in -30℃~40℃.
                            </div>
                    </Column>
                </Row>

                <Row>
                <Column sm={12} md={6} lg={6} xl={4}>
                            <img style={{width:"auto",height:"auto",maxWidth:"100%",maxHeight:"100%"}} src={led11} alt=""/>
                        </Column>
                    <Column sm={12} md={6} lg={6} xl={4}>
                            <img style={{width:"auto",height:"auto",maxWidth:"100%",maxHeight:"100%"}} src={led10} alt=""/>
                        </Column>

                </Row>


                <h2 style={{padding:"0 15px"}}>Manufacture</h2>
            <Row>
            <Column sm={12} md={12} lg={12} xl={8}>
                            <div>
                                DSC have many reliale partners on the product manufacture. These manufacturers are very standardized, with a variety of corresponding certification systems to ensure the quality of supply and cycle stability. Every time a production is produced, DSC will assign engineers to work on site to deal with problems in the production process. Close communication with customers and suppliers is also one of the key factors for DSC to be trusted.
                            </div>
                    </Column>

                </Row>
                <Row>
                <Column sm={12} md={6} lg={6} xl={4}>
                            <img style={{width:"auto",height:"auto",maxWidth:"100%",maxHeight:"100%"}} src={led14} alt=""/>
                        </Column>
                    <Column sm={12} md={6} lg={6} xl={4}>
                            <img style={{width:"auto",height:"auto",maxWidth:"100%",maxHeight:"100%"}} src={led15} alt=""/>
                        </Column>
                    </Row>


        </div>
    </Layout>
)


export default Led
