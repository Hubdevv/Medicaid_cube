import React from 'react'
import Icon1 from '../../images/search.svg';
import Icon2 from '../../images/post.svg';
import Icon3 from '../../images/booking.svg';
import { ServicesContainer , ServicesWrapper,ServicesIcon, ServicesCard, ServicesH1, ServicesH2
,ServicesP} from './ServiceElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Nos Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                     <ServicesH2>Don de Sang</ServicesH2>
                     <ServicesP>Trouver facilement des donneurs de sang prés de chez vous!</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                     <ServicesH2>Médicaments</ServicesH2>
                     <ServicesP>Offrez des médicaments en publiant sur le blog de don des médicaments.
                     </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                     <ServicesH2>Rendez-vous</ServicesH2>
                     <ServicesP>Prendre un Rendez-vous facilement chez un médecin! en un seul clic!!</ServicesP>
                </ServicesCard>

            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
