import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import styled, { css } from "styled-components"
import { Row, Column } from "../components/grid"

import product from "../images/svg/product.svg"
import tooling from "../images/svg/tooling.svg"
import service from "../images/svg/service.svg"

import Brand from "../components/brands"
import Works from "../components/works"

const ImageSlide = styled.div`
    background-size: cover;
    background-position: center;
    text-align: center;
    background-image: url("${props => props.url}");
    height: 540px;
    transition: background-image .3s ease-out;
    @media(max-width: 568px){
        height:400px;
    } 
`

const Mission = styled.div`
  font-family: "Helvetica Neue", sans-serif;
  margin: 0 auto;
  padding-top: 10rem;
  width: 80%;
  font-weight: bold;
  font-size: 2rem;
  font-weight: normal;
  @media (max-width: 700px) {
    padding-top: 6rem;
    font-weight: normal;
    font-size: 1.5rem;
    width: 85%;
  }
`

const ArrowIcon = styled.div`
  color: black;
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  opacity: 0;
  padding: 100px 20px;
  top: 32%;
  ${props => {
    if (props.direction === "left") {
      return css`
        left: 1rem;
      `
    } else {
      return css`
        right: 1rem;
      `
    }
  }}
  &:hover {
    opacity: 0.3;
    background-color: gray;
  }
`
const Arrow = ({ direction, clickFunction, glyph }) => (
  <ArrowIcon direction={direction} onClick={clickFunction}>
    {glyph}
  </ArrowIcon>
)

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentImageIndex: 0,
    }

    this.nextSlide = this.nextSlide.bind(this)
    this.previousSlide = this.previousSlide.bind(this)
  }

  nextSlide() {
    const lastIndex = this.props.data.allFile.edges.length - 1
    const { currentImageIndex } = this.state
    const shouldResetIndex = currentImageIndex === lastIndex
    const index = shouldResetIndex ? 0 : currentImageIndex + 1

    this.setState({
      currentImageIndex: index,
    })
  }

  previousSlide() {
    const lastIndex = this.props.data.allFile.edges.length - 1
    const { currentImageIndex } = this.state
    const shouldResetIndex = currentImageIndex === 0
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1

    this.setState({
      currentImageIndex: index,
    })
  }

  componentWillMount() {
    this.interval = setInterval(() => this.nextSlide(), 5000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <Layout>
        <Arrow
          direction="left"
          clickFunction={this.previousSlide}
          glyph="&#9664;"
        />
        <ImageSlide
          url={
            this.props.data.allFile.edges[this.state.currentImageIndex].node
              .childImageSharp.fluid.src
          }
        >
          <Mission>
            DSC Global efficiently and innovatively designs and manufactures the
            products by providing our global clients with cutting-edge
            technology, win-win service and true value.
          </Mission>
        </ImageSlide>
        <Arrow
          direction="right"
          clickFunction={this.nextSlide}
          glyph="&#9654;"
        />


        <Row style={{ justifyContent: "center" }}>
          <p
            style={{
              fontSize: "150%",
              margin: "2rem auto",
              textAlign: "center",
            }}
          >
            Product & Engineering service
          </p>
        </Row>
        <Row style={{ justifyContent: "center", width:"90%", margin:"0 auto"}}>
          <Column sm={12} md={6} lg={4} xl={4}>
            <div style={{ margin: "2rem auto" }}>
              <img
                src={product}
                alt=""
                style={{
                  display: "block",
                  height: "60px",
                  margin: "1rem auto",
                }}
              />
              <div
                style={{
                  margin: "0rem auto",
                  fontWeight: "400",
                  fontSize: "100%",
                  width: "300px",
                  textAlign: "center",
                }}
              >
                {" "}
                Product design{" "}
              </div>
              <div
                style={{
                  margin: "0rem auto",
                  fontWeight: "400",
                  fontSize: "80%",
                  width: "300px",
                  textAlign: "center",
                }}
              >
                {" "}
                Professional, Creative & Effcient{" "}
              </div>
              <div
                style={{
                  margin: "1rem auto",
                  padding: "0 1rem .5rem 1rem",
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: "80%", wordBreak: "keep-all" }}>
                  Look at the product as artist. Build the product as engineer.
                  From industrial to consumer, we designed kinds of creative
                  products such as led lighting and led singal light products,
                  luggage trunk, medical device components.
                </p>
              </div>
            </div>
          </Column>

          <Column sm={12} md={6} lg={4} xl={4}>
            <div style={{ margin: "2rem auto" }}>
              <img
                src={tooling}
                alt=""
                style={{
                  display: "block",
                  height: "60px",
                  margin: "1rem auto",
                }}
              />
              <div
                style={{
                  margin: "0rem auto",
                  fontWeight: "400",
                  fontSize: "100%",
                  width: "300px",
                  textAlign: "center",
                }}
              >
                {" "}
                Plastic mold building{" "}
              </div>
              <div
                style={{
                  margin: "0rem auto",
                  fontWeight: "400",
                  fontSize: "80%",
                  width: "300px",
                  textAlign: "center",
                }}
              >
                {" "}
                Quality, Timely & Interactively{" "}
              </div>
              <div
                style={{
                  margin: "1rem auto",
                  padding: "0 1rem .5rem 1rem",
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: "80%", wordBreak: "keep-all" }}>
                  We are excel in plastic products toolings fabrication such as
                  plastic injection mold, plastic extrusion mold. We ensure the
                  quality by envolving us in every build stages: design,
                  manufacture, assembly, trial and shippment.
                </p>
              </div>
            </div>
          </Column>

          <Column sm={12} md={6} lg={4} xl={4}>
            <div style={{ margin: "2rem auto" }}>
              <img
                src={service}
                alt=""
                style={{
                  display: "block",
                  height: "60px",
                  margin: "1rem auto",
                }}
              />
              <div
                style={{
                  margin: "0rem auto",
                  fontWeight: "400",
                  fontSize: "100%",
                  width: "300px",
                  textAlign: "center",
                }}
              >
                {" "}
                Engineering service{" "}
              </div>
              <div
                style={{
                  margin: "0rem auto",
                  fontWeight: "400",
                  fontSize: "80%",
                  width: "300px",
                  textAlign: "center",
                }}
              >
                {" "}
                Reliable, Sustainable & Considerate{" "}
              </div>
              <div
                style={{
                  margin: "1rem auto",
                  padding: "0 1rem .5rem 1rem",
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: "80%", wordBreak: "keep-all" }}>
                  We serves our clients globally in three time zones (USA,
                  China, Europe). A multi-functional team is ready to provide
                  highly tailored engineering service and to fully support and
                  manage manufacturing projects in China.
                </p>
              </div>
            </div>
          </Column>
        </Row>

        <Row style={{backgroundColor:"#eee"}}>
          <p
            style={{
              fontSize: "150%",
              margin: "0.5rem auto",
              textAlign: "center",
            }}
          >
            Our works
          </p>
        </Row>

<Works />

        <Row style={{ justifyContent: "center",backgroundColor: "#eee" }}>
          <p
            style={{
              fontSize: "150%",
              margin: "2rem auto",
              textAlign: "center",
              
            }}
          >
            About DSC Global
          </p>
        </Row>
        <Row style={{ justifyContent: "center",backgroundColor: "#eee" }} >
          <p
            style={{
              fontSize: "100%",
              margin: "1rem auto 4rem auto",
              width: "90%",
              textAlign: "center",
            }}
          >
            DSC Global LLC was first founded in Chicago, USA in the year of
            2009, focusing on providing our clients with professionprofessional
            product design, plastic mold development and project management
            services. DSC Global strives to ensure professional engineer
            services to our worldwide clients by utilizing complete and low cost
            industrial chain in Asia countries like China, Vietnam. Our
            outstanding strengths are innovative and comprehensive designs,
            frequent customer interactions, quickly responses, on-time delivery,
            and engineering culture.
          </p>
        </Row>

        <Row>
          <p
            style={{
              fontSize: "150%",
              margin: "2rem auto",
              textAlign: "center",
            }}
          >
            Cooperate Parteners
          </p>
        </Row>

        <Brand />

      </Layout>
    )
  }
}

export default Index

export const query = graphql`
  query {
    allFile(filter: { extension: { eq: "jpg" } }) {
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
