import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import "./layout.css"
import {Row, Column} from "../components/grid"
import Stamp from "../images/logo.png"

const Navbar = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  flex-wrap: wrap;
  min-height: 5rem;
  width: 100%;
  position: fixed;
  background-color: rgba(240,240,240,0.9);
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
  @media (min-width: 720px) {
    display: none;
  }
`

const Section = styled(Link)`
  margin-right: 2rem;
  padding: 0;
`

const Text = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-top: 0.9rem;
  margin-left: 0.6rem;
`
const Name = styled.div`
  font-family: "Helvetica Neue", sans-serif;
  font-size: 1.4rem;
  font-weight: bolder;
  -webkit-text-stroke: 1px black;
  background-image: -webkit-linear-gradient(bottom, blue, white, blue);
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
    @media (max-width: 720px) {
      height: 2.8rem;
    }
  }

  ${props =>
    props.hidden
      ? css`
          display: none;
        `
      : css`
          @media (max-width: 720px) {
            display: flex;
          }
        `}

  @media(min-width:720px) {
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
  width: 16rem;
  color: black;
  padding: 0.5rem 0.5rem 0.5rem 0.8rem;
  background-color: rgba(240,240,240,0.9);
  &:hover {
    text-decoration: none;
    background-color: gray;
  }
`

const Page = styled.div`
  display: flex;
  flex-direction: column;
`

const Img =styled.img`
  width: 60px;
  ${props=>props.size && css`width: 40px;`}
`

const Company = (props) => (
    <Section>
      <Img size={props.size} src={Stamp} alt="" />
      <Text>
        <Name>{props.name}</Name>
        <div>Dignity, Sustainability & Capability</div>
      </Text>
    </Section>
  )

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
        <Company name="DSC GLobal LLC"/>
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
                <SubLink to="/product/">Product We Design</SubLink>
              </li>
              <li>
                <SubLink to="/productflow/">Product Design Flow</SubLink>
              </li>
              <li>
                <SubLink to="/productmanage/">Product Project Manager</SubLink>
              </li>
            </Menu>
          </Title>
          <Title>
            <Span>MOLD DESIGN</Span>
            <Menu>
              <li>
                <SubLink to="/injectionmold/">Injection Mold We Design</SubLink>
              </li>
              <li>
                <SubLink to="/injectionflow/">Injection Mold Design Flow</SubLink>
              </li>
              <li>
                <SubLink to="/moldmanufacture/">Injection Mold Manufacture</SubLink>
              </li>
            </Menu>
          </Title>
          <Title>
            <Span>SERVICE</Span>
            <Menu>
              <li>
                <SubLink to="/mechanical/">Mechanical Design & Analysis</SubLink>
              </li>
              <li>
                <SubLink to="/moldflow/">Plastic Injection Simulation</SubLink>
              </li>
              <li>
                <SubLink to="/fluid/">Fluid & Thermal Simulation</SubLink>
              </li>
            </Menu>
          </Title>
          <li>
            <ItemLink to="/blog/">BLOG</ItemLink>
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
  <>
  <div style={{backgroundColor:"#eee"}}>
  <Row style={{ margin:"0 auto",paddingTop:"2rem"}}>
  <Column sm={12} md={12} lg={4} xl={4}>
      <ul style={{listStyle:"none"}}>
        <li >
          <Section>
                  <Img style={{width:"40px"}} src={Stamp} alt="" />
                  <div style={{display:"inline-block",verticalAlign:"top", marginTop:"0.5rem",marginLeft:"0.4rem", fontWeight:"bold"}}>
                    <div>DSC Global LLC</div>
                    <div style={{fontSize: "50%"}}>Dignity, Sustainability & Capability</div>
                  </div>
                </Section></li>
        <li style={{display:"block", color:"gray",width:"90%", padding:"0.3rem",fontSize:"80%",wordBreak: "keep-all"}}><span>Address:</span> Room 7198, Yikang Business Building 33, Huarong Road, Longhua District, Shenzhen, Guangdong province, China</li>
        <li style={{display:"block",color:"gray", padding:"0.3rem",fontSize:"80%"}}><span>Email:</span> <a style={{textDecoration:"none", color:"gray"}} href="mailto:dan.wu@dscgloballlc.com">dan.wu@dscgloballlc.com</a></li>
      </ul>
    </Column>
    <Column sm={12} md={6} lg={4} xl={4} >
      <ul style={{listStyle:"none", fontSize:"90%"}}>
        <li><Link style={{textDecoration:"none", display:"inline-block", color:"gray", padding:"0.3rem"}} to="/">Product customize</Link></li>
        <li><Link style={{textDecoration:"none", display:"inline-block", color:"gray", padding:"0.3rem"}} to="/">Product improvement</Link></li>
        <li><Link style={{textDecoration:"none", display:"inline-block", color:"gray", padding:"0.3rem"}} to="/">Enginnering service</Link></li>
        <li><Link style={{textDecoration:"none", display:"inline-block", color:"gray", padding:"0.3rem"}} to="/">Technical assistant</Link></li>
      </ul>
    </Column>
    <Column sm={12} md={6} lg={4} xl={4} >
      <ul style={{listStyle:"none", fontSize:"90%"}}>
        <li><Link style={{textDecoration:"none", display:"inline-block", color:"gray", padding:"0.3rem"}} to="/">Mold design</Link></li>
        <li><Link style={{textDecoration:"none", display:"inline-block", color:"gray", padding:"0.3rem"}} to="/">Mold manufacture</Link></li>
        <li><Link style={{textDecoration:"none", display:"inline-block", color:"gray", padding:"0.3rem"}} to="/">Moldflow simulation</Link></li>
        <li><Link style={{textDecoration:"none", display:"inline-block", color:"gray", padding:"0.3rem"}} to="/">Mold project manage</Link></li>
      </ul>
    </Column>
  </Row>
  <div style={{textAlign:"center",color:"gray",backgroundColor:"#eee", fontSize:"75%",padding:"1rem"}}>
     © Copyright {new Date().getFullYear()} | Web Designed by DSC Global LLC. All rights reserved. 
  </div>
  </div>
  </>
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
