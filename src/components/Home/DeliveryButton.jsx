import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import {MainText, SecondaryText} from './../../styles/AppStyles';


const ButtonCont = styled.div`
	color: #2c4486;
	width: 55%;
	height: 70px;
	border: red 1px solid;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

const Title = MainText(styled.p`
	text-transform: uppercase;
	font-weight: bold;
	font-size: 1.75em;
	padding: 3px;
	margin: auto 0px;
`);

const Text = SecondaryText(styled.p`
	font-style: italic;
	font-size: 1.15em;
	padding: 3px;
	margin: auto 0px;

`);

const Button = styled(NavLink)`
	background-color: #2c4486;
	color: white;
	text-transform: uppercase;
	text-align: center;
	font-size: 0.75em;
	padding: 25px;
	border: none;
	text-decoration: none;
	
	&:hover{
		background-color: #405496;
		cursor: pointer;
	}
`;

const Div = styled.div`
	display: flex;
	height: inherit;
	flex-direction: column;
	line-height: 1.25em;
`;

const DeliveryButton = () => (
	<ButtonCont>
		<Div>
			<Title>Lorem ipsum dolor sit </Title>
			<Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</Text>
		</Div>
		<Div>
			<Button to="/">Servicio a Domicilio</Button>
		</Div>
	</ButtonCont>
);

export default DeliveryButton;