// import React from 'react';
import styled from 'styled-components';

const Parent = styled.ul`
	list-style: none;
	padding-left: 15px;

	@media (max-width: 500px) {
		padding-left: 0px;
	}
`;

const SubNav = styled.li`
	padding: 0px;
`;

const Link = styled.a`
	color: #fff;
	padding: 10px;
	max-width: 20vw;
	text-align: center;
	display: inline-block;
	text-decoration: none;
	background: rgb(39, 179, 132);
	margin: 2px 0;
	transition: 0.3s;

	&:hover {
		background: rgb(21, 149, 106);
	}

	@media (max-width: 500px) {
		max-width: 100%;
		width: 100%;
		background: rgb(74, 200, 159);
	}
`;

export {Parent, SubNav, Link};
