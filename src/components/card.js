import React from "react"
import styled from "styled-components"
import {Row, Column} from "./grid"
import {Link} from "gatsby"

import Lighting from "../pics/lighting.png"
import Mold from "../pics/mold.png"

const Wrapper = styled.div`
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    background-color:white;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
`
const CardImageHeader = styled.img`
    width: 100%;
    border-radius: 3px;
`

const CardBody = styled.div`
padding: 0 1rem 1rem 1rem;
    flex: 1 1 auto;
    & > a{
        &:hover{
            text-decoration: none;
        };
        & + a{
            margin-left: 1.25rem;
        }
    }
`
const CardTitle = styled.p`
font-weight: 600;

`

const CardText = styled.p`
    margin-top: 0;
    &:last-child{
        margin-bottom: 0;
    }
`

const Card = ()=>(
    <>
        <Row style={{width:"90%",margin:"0 auto"}}>
            <Column sm={12} md={6} lg={4} xl={3}>
                <Wrapper>
                    <CardImageHeader src={Lighting} alt=""/>
                    <CardBody>
                        <CardTitle>LED lighting</CardTitle>
                        <CardText>DSC Global is experienced in LED lighting and has professional engineers on shape and strcture design, 
                            electrical design and optical analysis. </CardText>
                        <Link style={{textDecoration:"none", padding:"0 0.2rem"}} to="/led/">More>></Link>
                    </CardBody>
                </Wrapper>
            </Column>
            <Column sm={12} md={6} lg={4} xl={3}>
                <Wrapper>
                    <CardImageHeader src={Mold} alt=""/>
                    <CardBody>
                        <CardTitle>Injection mold</CardTitle>
                        <CardText>Plastic Injection mold design and manufacture, as one of the key businesses of DSC GLobal. Keep growing with high speed in recent year. </CardText>
                        <Link to="">More>></Link>
                    </CardBody>
                </Wrapper>
            </Column>
            <Column sm={12} md={6} lg={4} xl={3}>
                <Wrapper>
                    <CardImageHeader src={Lighting} alt=""/>
                    <CardBody>
                        <CardTitle>Tools and equipment</CardTitle>
                        <CardText>DSC Global helped client in developing kinds of tools and equipment. It represents DSC Global's innovation and technology integration ability.</CardText>
                        <Link to="">More>></Link>
                    </CardBody>
                </Wrapper>
            </Column>
            <Column sm={12} md={6} lg={4} xl={3}>
                <Wrapper>
                    <CardImageHeader src={Lighting} alt=""/>
                    <CardBody>
                        <CardTitle>Consumer Goods</CardTitle>
                        <CardText>DSC Global is trying to extend its design ability from industrial to consumer goods. We are designing living goods and consumer electronics.    </CardText>
                        <Link to="">More>></Link>
                    </CardBody>
                </Wrapper>
            </Column>
            <Column sm={12} md={6} lg={4} xl={3}>
                <Wrapper>
                    <CardImageHeader src={Lighting} alt=""/>
                    <CardBody>
                        <CardTitle>Mechanical desing & analysis</CardTitle>
                        <CardText>More than just draft drawings. We ensure the design quality and functions implementation by structure analysis and mechanism simulation.   </CardText>
                        <Link to="">More>></Link>
                    </CardBody>
                </Wrapper>
            </Column>

            <Column sm={12} md={6} lg={4} xl={3}>
                <Wrapper>
                    <CardImageHeader src={Lighting} alt=""/>
                    <CardBody>
                        <CardTitle>Fluid & thermal simulation</CardTitle>
                        <CardText>To solve the potential problem for LED lighting and injection mold. We developed fluid and thermal simualtion technology. </CardText>
                        <Link to="">More>></Link>
                    </CardBody>
                </Wrapper>
            </Column>

            <Column sm={12} md={6} lg={4} xl={3}>
                <Wrapper>
                    <CardImageHeader src={Lighting} alt=""/>
                    <CardBody>
                        <CardTitle>Moldflow simulation</CardTitle>
                        <CardText>To provide our cilents with high quality plastic parts. We use Moldflow simulation to come up with optimized injection plan with low cost.   </CardText>
                        <Link to="">More>></Link>
                    </CardBody>
                </Wrapper>
            </Column>

            <Column sm={12} md={6} lg={4} xl={3}>
                <Wrapper>
                    <CardImageHeader src={Lighting} alt=""/>
                    <CardBody>
                        <CardTitle>Project management</CardTitle>
                        <CardText>For both product and mold project, DSC Global is ready and capable to solve problem efficiently to ensure the delivery.    </CardText>
                        <Link to="">More>></Link>
                    </CardBody>
                </Wrapper>
            </Column>

        </Row>
    </>
)


export default Card