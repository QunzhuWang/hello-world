import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "./layout.css"

const Navbar = styled.ul`
    list-style: none;
    >li{
        display: inline-block;
    }
    box-shadow: 0 2px 2px #abcdef;
    padding: 0.5rem 0 0.5rem 0;
`

const ItemLink = styled(Link)`
    text-decoration: none;
    padding: 1rem 1rem 0.5rem 0.5rem;
    :hover{
        background-color: gray;
    }
`

const ItemLinkDrop = styled(ItemLink)`
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
    box-shadow: 2px 2px 2px #eeeeee;
`

const SubLink = styled(Link)`
    display:inline-block;
    text-decoration:none;
    padding: 0.5rem;
    border-bottom: 1px dotted gray;
    width:10rem;
    color:black;
    background-color:white;
    &:hover{
        text-decoration: none;
        background-color: gray;
    };
`

const Layout = ({ children }) =>(
    <div>
    <Navbar>
        <li><ItemLink to="/">HOME</ItemLink></li>
        <Title>
            <ItemLinkDrop>PRODUCT</ItemLinkDrop>
            <Menu>
                <li><SubLink>Lighting</SubLink></li>
                <li><SubLink>Tools</SubLink></li>
                <li><SubLink>others</SubLink></li>
            </Menu>
        </Title>
        <Title>
            <ItemLinkDrop>MOLD</ItemLinkDrop>
            <Menu>
                <li><SubLink>Mold design</SubLink></li>
                <li><SubLink>Mold manufacture</SubLink></li>
            </Menu>
        </Title>
        <Title>
            <ItemLinkDrop>SERVICE</ItemLinkDrop>
            <Menu>
                <li><SubLink>product development</SubLink></li>
                <li><SubLink>plastic injection mold</SubLink></li>
                <li><SubLink>project management</SubLink></li>
            </Menu>
        </Title>
        <li><ItemLink>BLOG</ItemLink></li>
        <li><ItemLink>CONTACT</ItemLink></li>
    </Navbar>
    {children}
    </div>
)

export default Layout