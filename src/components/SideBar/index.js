import React from 'react';
import {SideBarcontainer, Icon, CloseIcon ,SidebarWrapper, SidebarMenu, SideBtnWrap,SidebarLink,SidebarRoute } from './SidebarElement' ;

const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarcontainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to ='accueil' onClick={toggle}>Accueil</SidebarLink>
                    <SidebarLink to='Services' onClick={toggle} >Services</SidebarLink>
                    <SidebarLink to='contacte' onClick={toggle} >Contactez-nous</SidebarLink>
                    <SidebarLink to='inscrire' onClick={toggle}>Inscrire</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/connecter'>Connecter</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
            
        </SideBarcontainer>
    )
}

export default SideBar
