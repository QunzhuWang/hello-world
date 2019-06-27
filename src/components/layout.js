import React from "react"
import styled, {css} from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./layout.css"

import Img from "gatsby-image"

const Navbar = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    flex-wrap: wrap;
`

const Button = styled.button`
    line-height: 2rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:hover,
    &:focus{
      text-decoration:none;
      border: 1px solid #dae0e5;
      cursor: pointer;
    }
    border: 1px solid #dae0e5;
    background-color: transparent;
    @media (min-width: 710px){
      display: none;
    }
`

const Section = styled(Link)`
    margin-right: 2rem;
    padding: 0;
`

const Logo = styled(Img)`
    display: inline-block;
    margin: .5rem 0 0 2rem;
`
const Text = styled.div`
    display: inline-block;
    vertical-align: top;
    margin-top: 1.4rem;
    margin-left: .6rem;
`
const Name = styled.div`
    font-family:'Helvetica Neue', sans-serif; ;
    font-size:1.4rem;
    font-weight: bolder;
    -webkit-text-stroke:1px black;
    background-image:-webkit-linear-gradient(bottom,blue,white,blue); 
    -webkit-background-clip:text;
    color: transparent;
    + div {
        font-size:.9rem;
        font-style:italic;
        margin: 0;
        padding: 0;
        :hover{
            color: red;
        }
    }
`


const Nav = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    >li{
        display: block;
        @media (max-width: 710px){
            height: 2.8rem;
        } 
    }

    ${(props)=>(
        props.hidden?css`display:none;`:
        css`
        @media (max-width:710px){
            display:block;
        }
        
        `
    )}

    @media(min-width:710px){
        display:flex;
    }


    padding: 1rem 2rem 0.5rem 0.8rem;
    margin: 0;
`

const ItemLink = styled(Link)`
    text-decoration: none;
    color: black;
    padding: 1rem 2rem 0.5rem 0.8rem;
    :hover{
        background-color: gray;
    }
`

const Span = styled.span`
    padding: 1rem 2rem 0.5rem 0.8rem;
    :hover{
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
    };

`

const Title = styled.li`
    :hover ul{
        display: block;
    }
`

const Menu = styled.ul`
    display: none;
    list-style: none;
    position: absolute;
    margin-top: 0.5rem;
    padding: 0;
    width: 11rem;
`

const SubLink = styled(Link)`
    display:inline-block;
    text-decoration:none;
    border-bottom: 1px dotted gray;
    width:10rem;
    color:black;
    padding: 0.5rem 0.5rem 0.5rem 0.8rem;
    background-color:white;
    &:hover{
        text-decoration: none;
        background-color: gray;
    };
`

const Company = ()=>{
    const { imageSharp } = useStaticQuery(
        graphql`
        query {
            imageSharp {
                fixed (width: 60){
                    ...GatsbyImageSharpFixed
                }
            }
        }  
        `
    )
    return(
        <Section>
        <Logo fixed={imageSharp.fixed} />
        <Text>
            <Name>DSC GLOBAL LLC</Name>
            <div>Dignity, Sustainability & Capability</div>
        </Text>
        </Section>
    )
}


class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hidden: true,
        }
    }

    handleOpenCloseNavbar(){
        this.setState({
            hidden: !this.state.hidden,
        });
    }

    render(){
        const {hidden} = this.state
        console.log(hidden)
        return(
            <Navbar>
            <Company />
            <Button onClick ={()=>this.handleOpenCloseNavbar()}><span>&#9776;</span></Button>
            <Nav hidden={hidden}>
                <li><ItemLink>HOME</ItemLink></li>
                <Title>
                    <Span>PRODUCT</Span>
                    <Menu>
                        <li><SubLink>Lighting</SubLink></li>
                        <li><SubLink>Tools</SubLink></li>
                        <li><SubLink>Others</SubLink></li>
                    </Menu>
                </Title>
                <Title>
                    <Span>MOLD</Span>
                    <Menu>
                        <li><SubLink>Mold design</SubLink></li>
                        <li><SubLink>Mold manufacture</SubLink></li>
                    </Menu>
                </Title>
                <Title>
                    <Span>SERVICE</Span>
                    <Menu>
                        <li><SubLink>Product development</SubLink></li>
                        <li><SubLink>Plastic injection mold</SubLink></li>
                        <li><SubLink>Project management</SubLink></li>
                    </Menu>
                </Title>
                <li><ItemLink>BLOG</ItemLink></li>
                <li><ItemLink>CONTACT</ItemLink></li>
            </Nav>
        </Navbar>
        )
    }
}


const Layout = ({ children }) =>{

return(
    <>
    <NavBar />
    {children}
    </>
)
}

export default Layout