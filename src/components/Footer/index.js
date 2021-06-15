import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube, FaLinkedin} from 'react-icons/fa';
import {animatescroll as scroll} from 'react-scroll';
import {FooterContainer, FooterWrap, FooterLink, FooterLinkItems, FooterLinkTitle
,FooterLinksContainer, FooterWrapper, SocialMedia, SocialIconLink, SocialIcons, SocialLogo,SocialMediaWrap, WebsiteRights}from './FooterElements';
 
const Footer = () => {
    const toggleHome = ()  =>{
        scroll.scrollToTop();
    };
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Medicaid</FooterLinkTitle>
                                <FooterLink to="/singin">Á propos</FooterLink>
                                <FooterLink to="/singin">Comment ca marche?</FooterLink>
                                <FooterLink to="/singin">Témoignages</FooterLink>
                                <FooterLink to="/singin">Services</FooterLink>

                                <FooterLinkTitle>Á propos</FooterLinkTitle>
                                <FooterLink to="/singin">Comment ca marche?</FooterLink>
                                <FooterLink to="/singin">Témoignages</FooterLink>
                                <FooterLink to="/singin">Services</FooterLink>

                        </FooterLinkItems>
                    </FooterWrapper>

                    <FooterWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Medicaid</FooterLinkTitle>
                                <FooterLink to="/singin">Á propos</FooterLink>
                                <FooterLink to="/singin">Comment ca marche?</FooterLink>
                                <FooterLink to="/singin">Témoignages</FooterLink>
                                <FooterLink to="/singin">Services</FooterLink>

                                <FooterLinkTitle>Medicaid</FooterLinkTitle>
                                <FooterLink to="/singin">Á propos</FooterLink>
                                <FooterLink to="/singin">Comment ca marche?</FooterLink>
                                <FooterLink to="/singin">Témoignages</FooterLink>
                                <FooterLink to="/singin">Services</FooterLink>
                                
                        </FooterLinkItems>
                    </FooterWrapper>

                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to ='/' onClick={toggleHome}>Mediciad</SocialLogo>
                        <WebsiteRights>Medicaid © {new Date().getFullYear()} tous les droits sont réservés.</WebsiteRights>
                        <SocialIcons>

                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>

            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
