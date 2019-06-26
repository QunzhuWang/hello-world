import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import styled, { css } from "styled-components"

const imgUrls =[
    "https://gm.capitalone.com/static/hero.29e74461.jpg", 
    "https://res.cloudinary.com/dscglobal/image/upload/c_scale,h_500/v1553960500/NEW%20WEB%20PIC/plsatic.jpg",
    "https://res.cloudinary.com/dscglobal/image/upload/c_scale,h_500/v1553961226/NEW%20WEB%20PIC/trunkss.png",
    "https://res.cloudinary.com/dscglobal/image/upload/c_scale,h_500/v1553954491/NEW%20WEB%20PIC/design.jpg",
];

const ImageSlide = styled.div`
    background-size: cover;
    background-position: center;
    text-align: center;
    background-image: url("${props=>props.url}");
    height: 540px;
    transition: background-image .3s ease-out;
    @media(max-width: 568px){
        height:400px;
    } 
`

const ArrowIcon = styled.div`
    color: black;
    cursor: pointer;
    font-size: 2rem;
    position:absolute;
    opacity: 0;
    padding: 100px 20px;
    top: 32%;
    ${(props)=>{
        if(props.direction==="left"){ 
            return css`left:1rem;`;
        }else{
            return css`right:1rem;`;
        }
    }}
    &:hover{
        opacity: 0.3;
        background-color: gray;
    }
`

const Arrow = ({direction, clickFunction, glyph}) => (
    <ArrowIcon direction={direction} onClick={clickFunction}>
        {glyph}
    </ArrowIcon>
)

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentImageIndex:0,
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    nextSlide(){
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0: currentImageIndex+1;

        this.setState({
            currentImageIndex: index,
        })
    }

    previousSlide(){
        const lastIndex = imgUrls.length -1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex: currentImageIndex -1;

        this.setState({
            currentImageIndex: index,
        })
    }

    componentWillMount(){
        this.interval = setInterval(()=>this.nextSlide(), 5000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        return(
            <div>
                <Arrow direction="left" clickFunction={this.previousSlide} glyph="&#9664;" />
                <ImageSlide url={imgUrls[this.state.currentImageIndex]} ></ImageSlide>
                <Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
            </div>
        )
    }
}


export default () =>(
     <Layout>
         <Carousel/>
         <Link to="/contact/">Contact page</Link>
     </Layout>
)
