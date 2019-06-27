import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

import styled, { css } from "styled-components"


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

class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentImageIndex:0,
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    nextSlide(){
        const lastIndex = this.props.data.allFile.edges.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0: currentImageIndex+1;

        this.setState({
            currentImageIndex: index,
        })
    }

    previousSlide(){
        const lastIndex = this.props.data.allFile.edges.length -1;
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
            <Layout>
                <Arrow direction="left" clickFunction={this.previousSlide} glyph="&#9664;" />
                <ImageSlide url={this.props.data.allFile.edges[this.state.currentImageIndex].node.childImageSharp.fluid.src} ></ImageSlide>
                <Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
                <Link to="/contact/">Contact page</Link>
            </Layout>
        )
    }
}

export default Index


export const query = graphql`
  query {
    allFile(filter: {extension: {eq: "jpg"}}) {
        edges {
          node {
            childImageSharp {
              fluid {
                    src
              }
            }
          }
        }
      }
  }
`