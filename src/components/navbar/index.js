import React,{useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import { Nav, NavbarContainer,NavLogo, MobileIcon,NavMenu, NavItem,NavLinks,NavBtn,NavBtnLink} from './navbarElement';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav =() =>{
        if (window.scrollY >= 80){
            setScrollNav(true);
        }else {
            setScrollNav(false);
        }
    };
    useEffect(() =>{
        window.addEventListener('scroll', changeNav);
    }, []);
    const toggleHome = ()  =>{
        scroll.scrollToTop();
    };
    return (
            <>
          <IconContext.Provider value= {{color: '#fff'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick= {toggleHome}>Medicaid</NavLogo>
                        <MobileIcon  onClick= {toggle}>
                            <FaBars />
                            </MobileIcon>
                            <NavMenu>
                                <NavItem>
                                    <NavLinks to ='about'
                                    smooth ={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                   >Á propos</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to ='Services'
                                     smooth ={true}
                                     duration={500}
                                     spy={true}
                                     exact='true'
                                     offset={-80}>Services</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to ='Blogs'
                                     smooth ={true}
                                     duration={500}
                                     spy={true}
                                     exact='true'
                                     offset={-80}>Blogs</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to ='contacte'
                                     smooth ={true}
                                     duration={500}
                                     spy={true}
                                     exact='true'
                                     offset={-80}>Contactez-nous</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to ='inscrire'
                                     smooth ={true}
                                     duration={500}
                                     spy={true}
                                     exact='true'
                                     offset={-80}>S'inscrire</NavLinks>
                                </NavItem>
                            </NavMenu>
                       <NavBtn>
                           <NavBtnLink to ='/connecter'>Connecter</NavBtnLink>
                       </NavBtn>
                    </NavbarContainer>
                </Nav>
                </IconContext.Provider>
            </>
                           
    );
};

export default Navbar;
