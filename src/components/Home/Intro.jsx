import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Section as _Section, SecondaryText, MainText } from '../../styles/AppStyles';
import tecnologiasSVG from '../../assets/icons/tecnologia.svg';
import domicilioSVG from '../../assets/icons/domicilio.svg';
import ubicacionSVG from '../../assets/icons/ubicacion.svg';

const Section = styled(_Section)`
  display: flex;
  flex-direction: column;
`;

const Compromise = styled.div`
  display: flex;
  flex: 4;
`;

const TextBlock = styled(NavLink)`
  color: white;
  background: ${props => props.backgroundcolor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-grow: 1;
  text-decoration: none;
  font-size: 1.8em;
  text-align: center;
`;

const Healthcare = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  align-items: center;
  justify-content: center;
`;

const SectionHeader = MainText(styled.h1`
  color: #959698;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.2em;
  padding-bottom: 0.5em;
`);

const SectionSubheader = SecondaryText(styled.h3`
  color: #959698;
  font-weight: 1.5em;
  line-height: 1.5em;
  width: 60%;
  font-style: italic;
  text-align: center;
`);

const ValueProposition = styled.div`
  width: 39em;
  display: flex;
  justify-content: space-between;
  margin-top: 2em;
`;

const ValueCard = styled.div`
  width: 11em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ValueCardIcon = styled.img`
  width: 100%;
  max-width: 120px;
`;

const ValueCardSupportText = styled.div`
  color: #1995c9;
  font-size: 1.2em;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  padding-top: 1em;
`;

const Intro = () => (
  <Section>
    <Compromise>
      <TextBlock to="/" backgroundcolor="#2c4486">Compromiso con<br/>nuestros pacientes</TextBlock>
      <TextBlock to="/" backgroundcolor="#1995c9">Cashlab &amp;<br/>cupones del mes</TextBlock>
      <TextBlock to="/" backgroundcolor="#2c4486">Consulta de<br/>resultados</TextBlock>
    </Compromise>
    <Healthcare>
      <SectionHeader>Cuidándonos siempre juntos</SectionHeader>
      <SectionSubheader>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eum sint placeat libero quae maiores vitae labore natus. Possimus, sit ipsam. Omnis vel nulla voluptate consectetur perspiciatis optio, mollitia aliquid?</SectionSubheader>
      <ValueProposition>
        <ValueCard>
          <ValueCardIcon src={tecnologiasSVG}/>
          <ValueCardSupportText>Tecnología<br />de Vanguardia</ValueCardSupportText>
        </ValueCard>
        <ValueCard>
          <ValueCardIcon src={domicilioSVG}/>
          <ValueCardSupportText>Servicio<br/>a domicilio</ValueCardSupportText>
        </ValueCard>
        <ValueCard>
          <ValueCardIcon src={ubicacionSVG}/>
          <ValueCardSupportText>Siempre<br/>cerca de ti</ValueCardSupportText>
        </ValueCard>
      </ValueProposition>
    </Healthcare>
  </Section>
);

export default Intro;