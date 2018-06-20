import React from 'react';
import styled from 'styled-components';
import {MainText, SecondaryText} from './../../../styles/AppStyles';

const Title = MainText(styled.p`
	color: #eee;
	font-size: 1.5em;
	font-weight: bold;
	line-height: 2em;
	text-align: left;
`);

const Message = SecondaryText(styled.p`
	color: #fff;
	font-size: 1em;
	padding-left: 1em;
	line-height: 1.3em;
`);

const InfoP = (props) => {
	let title = '';
	if(props.title) {
		title = (
			<Title>{props.title}</Title>
		);
	}
	return (
		<div>
			{title}
			<Message>{props.message}</Message>
		</div>
	);
};

export default InfoP;