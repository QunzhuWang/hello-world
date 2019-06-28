import React from "react"
import styled, { css } from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./layout.css"

import Img from "gatsby-image"

const Navbar = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  flex-wrap: wrap;
  min-height: 5rem;
  width: 100%;
  position: fixed;
  background-color: white;
`

const Button = styled.button`
  line-height: 2rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover,
  &:focus {
    text-decoration: none;
    border: 1px solid #dae0e5;
    cursor: pointer;
  }
  border: 1px solid #dae0e5;
  background-color: transparent;
  @media (min-width: 700px) {
    display: none;
  }
`

const Section = styled(Link)`
  margin-right: 2rem;
  padding: 0;
`

const Logo = styled(Img)`
  display: inline-block;
  margin: 0.5rem 0 0 2rem;
`
const Text = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-top: 1.4rem;
  margin-left: 0.6rem;
`
const Name = styled.div`
  font-family: "Helvetica Neue", sans-serif;
  font-size: 1.4rem;
  font-weight: bolder;
  -webkit-text-stroke: 1px black;
  background-image: -webkit-linear-gradient(bottom, blue, white, #abcdef);
  -webkit-background-clip: text;
  color: transparent;
  + div {
    font-size: 0.9rem;
    font-style: italic;
    margin: 0;
    padding: 0;
    :hover {
      color: red;
    }
  }
`

const Nav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  > li {
    display: block;
    @media (max-width: 700px) {
      height: 2.8rem;
    }
  }

  ${props =>
    props.hidden
      ? css`
          display: none;
        `
      : css`
          @media (max-width: 700px) {
            display: flex;
          }
        `}

  @media(min-width:700px) {
    display: flex;
  }

  padding: 1rem 2rem 0.5rem 0.8rem;
  margin: 0;
`

const ItemLink = styled(Link)`
color: black ;
  text-decoration: none;
  padding: 1rem 2rem 0.5rem 0.8rem;
  :hover {
    background-color: gray;
  }
`

const Span = styled.span`
  padding: 1rem 2rem 0.5rem 0.8rem;
  :hover {
    background-color: gray;
  }
  &::after {
    display: inline-block;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
  }
`

const Title = styled.li`
  :hover ul {
    display: block;
  }
`

const Menu = styled.ul`
  display: none;
  list-style: none;
  position: absolute;
  margin-top: 0.49rem;
  padding: 0;
  width: 11rem;
`

const SubLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  border-bottom: 1px dotted gray;
  width: 15rem;
  color: black;
  padding: 0.5rem 0.5rem 0.5rem 0.8rem;
  background-color: white;
  &:hover {
    text-decoration: none;
    background-color: gray;
  }
`

const Page = styled.div`
  display: flex;
  flex-direction: column;
`

const Company = () => {
  const { imageSharp } = useStaticQuery(
    graphql`
      query {
        imageSharp {
          fixed(width: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    `
  )
  return (
    <Section>
      <Logo fixed={imageSharp.fixed} />
      <Text>
        <Name>DSC GLOBAL LLC</Name>
        <div>Dignity, Sustainability & Capability</div>
      </Text>
    </Section>
  )
}

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: true,
    }
    this.updateDimension = this.updateDimension.bind(this)
  }

  updateDimension() {
    if (window.innerWidth < "700") {
      this.setState({
        hidden: true,
      })
    }
  }

  handleOpenCloseNavbar() {
    this.setState({
      hidden: !this.state.hidden,
    })
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimension)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimension)
  }

  render() {
    const { hidden } = this.state
    return (
      <Navbar>
        <Company />
        <Button onClick={() => this.handleOpenCloseNavbar()}>
          <span>&#9776;</span>
        </Button>
        <Nav hidden={hidden}>
          <li>
            <ItemLink>HOME</ItemLink>
          </li>
          <Title>
            <Span>PRODUCT</Span>
            <Menu>
              <li>
                <SubLink>LED Lighting</SubLink>
              </li>
              <li>
                <SubLink>Tools & Equipment</SubLink>
              </li>
              <li>
                <SubLink>Automobile Parts</SubLink>
              </li>
              <li>
                <SubLink>Consumer Goods</SubLink>
              </li>
            </Menu>
          </Title>
          <Title>
            <Span>MOLD</Span>
            <Menu>
              <li>
                <SubLink>Automobile Injection Mold</SubLink>
              </li>
              <li>
                <SubLink>Consumer Plastic Injection Mold</SubLink>
              </li>
              <li>
                <SubLink>Plastic Blowing Mold</SubLink>
              </li>
              <li>
                <SubLink>Plastic Extrusion Mold</SubLink>
              </li>
            </Menu>
          </Title>
          <Title>
            <Span>SERVICE</Span>
            <Menu>
              <li>
                <SubLink>Structure Design & Analysis</SubLink>
              </li>
              <li>
                <SubLink>Plastic Injection Simulation</SubLink>
              </li>
              <li>
                <SubLink>Fluid & Thermal Simulation</SubLink>
              </li>
              <li>
                <SubLink>Optical Analysis and Optimization</SubLink>
              </li>
              <li>
                <SubLink>Outsourcing & Project Management</SubLink>
              </li>
            </Menu>
          </Title>
          <li>
            <ItemLink>BLOG</ItemLink>
          </li>
          <li>
            <ItemLink to="/contact/">CONTACT</ItemLink>
          </li>
        </Nav>
      </Navbar>
    )
  }
}

const Footer = ()=>(
  <div style={{textAlign:"center",backgroundColor:"#eee", fontSize:"90%"}}>
     © Copyright {new Date().getFullYear()} | Web Designed by DSC Global LLC. All rights reserved. 
  </div>
)

const Layout = ({ children }) => {
  return (
    <Page>
      <NavBar />
      <main style={{ marginTop: "5rem" }}>{children}</main>
      <Footer />
    </Page>
  )
}

export default Layout
