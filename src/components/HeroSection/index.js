import React, {useState} from 'react';
import Video from '../../videos/vide.mp4';
import {Button} from '../ButtonElement';
import {HeroContainer,HeroBg,VideoBg , HeroContent,HeroH1,HeroP
    ,HeroBtnWrapper,ArrowForward, ArrowRight } from './HeroElement';


const HeroSection = () => {
    const [hover, setHover]= useState(false)
    const onHover = () =>{
        setHover(!hover)
    }
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Lorsque vous ne trouvez pas l'aide, soyez l'aide.</HeroH1>
                <HeroP>Inscrivez-vous pour bénéficier de nos services.
                    Trouver un médicament ou des donneurs de sang facilement,
                    et prenez un rendez-vous chez un médecin en un seul click.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='inscrire'onMouseEnter ={onHover} onMouseLeave={onHover}
                    primary ='true' 
                    dark ='true'
                    smooth ={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80} >
                        Commencer {hover ? <ArrowForward/> : <ArrowRight/> }</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
