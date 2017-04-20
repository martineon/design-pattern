import React from 'react';
import {Parent, SubNav, Link} from './Styled-menu';
import './Menu.css';

const Menu = (props) =>
	<div className='Menu-container'>
		<a href="#" className='Menu-mobile'>Menu</a>

		<nav className='Menu-desktop'>
			<Parent className='level-1' style={{display: 'flex'}}>
				<SubNav className="has-subnav">
					<Link href="#" className='section-title'>Parent 1</Link>
					<Parent className="level-2">
						<SubNav>
							<Link href="#">Child 1</Link>
						</SubNav>
						<SubNav>
							<Link href="#">Child 2</Link>
						</SubNav>
						<SubNav className='has-subnav'>
							<Link href="#">Child 3</Link>
							<Parent className='level-3'>
								<SubNav>
									<Link href="#">Grand-child 1</Link>
								</SubNav>
								<SubNav>
									<Link href="#">Grand-child 2</Link>
								</SubNav>
							</Parent>
						</SubNav>
					</Parent>
				</SubNav>

				<SubNav className="has-subnav">
					<Link href="#" className='section-title'>Parent 1</Link>
					<Parent className="level-2">
						<SubNav>
							<Link href="#">Child 1</Link>
						</SubNav>
						<SubNav>
							<Link href="#">Child 2</Link>
						</SubNav>
						<SubNav className='has-subnav'>
							<Link href="#">Child 3</Link>
							<Parent className='level-3'>
								<SubNav>
									<Link href="#">Grand-child 1</Link>
								</SubNav>
								<SubNav>
									<Link href="#">Grand-child 2</Link>
								</SubNav>
							</Parent>
						</SubNav>
					</Parent>
				</SubNav>

				<SubNav className="has-subnav">
					<Link href="#" className='section-title'>Parent 1</Link>
					<Parent className="level-2">
						<SubNav>
							<Link href="#">Child 1</Link>
						</SubNav>
						<SubNav>
							<Link href="#">Child 2</Link>
						</SubNav>
						<SubNav className='has-subnav'>
							<Link href="#">Child 3</Link>
							<Parent className='level-3'>
								<SubNav>
									<Link href="#">Grand-child 1</Link>
								</SubNav>
								<SubNav>
									<Link href="#">Grand-child 2</Link>
								</SubNav>
							</Parent>
						</SubNav>
					</Parent>
				</SubNav>

				<SubNav className="has-subnav">
					<Link href="#" className='section-title'>Parent 1</Link>
					<Parent className="level-2">
						<SubNav>
							<Link href="#">Child 1</Link>
						</SubNav>
						<SubNav>
							<Link href="#">Child 2</Link>
						</SubNav>
						<SubNav className='has-subnav'>
							<Link href="#">Child 3</Link>
							<Parent className='level-3'>
								<SubNav>
									<Link href="#">Grand-child 1</Link>
								</SubNav>
								<SubNav>
									<Link href="#">Grand-child 2</Link>
								</SubNav>
							</Parent>
						</SubNav>
					</Parent>
				</SubNav>



			</Parent>

		</nav>
	</div>;

export default Menu;
