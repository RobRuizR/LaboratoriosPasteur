import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

const Title = styled.p`
	text-transform: uppercase;
	line-height: 2.5rem;
	font-size: 2rem;
	font-weight: bold;
	text-align: left;
	color: #989898;
`;

const SucursalName = styled.p`
	font-size: 1.2rem;
	font-weight: bold;
	color: #989898;
`;

const Direccion = styled.p`
	font-size: 1.2rem;
	color: #989898;
	line-height: 1.2rem;
`;

const Sucursal = styled.div`
	width: 25%;
	box-sizing: border-box;
	padding-bottom: 20px;

	&:not(:nth-child(4n + 0)) {
		padding-right: 50px;
	}
`;

/**
 * En DIRECCION Separar en avenida y CP, colonia, ciudad
 */

const Locations = (props) => {
	let Sucursales = '';
	if(props.sucursales) {
		Sucursales = props.sucursales.map(sucursal => {
			return (
				<Sucursal key={sucursal.id}>
					<SucursalName> {sucursal.nombre} </SucursalName>
					<Direccion> {sucursal.direccion} </Direccion>
				</Sucursal>
			);
		});
	}
	return (
		<div className={props.className}>
			<Title> Sucursales </Title>
			<Container>
				{Sucursales}
			</Container>
		</div>
	);
}

export default Locations;