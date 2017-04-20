import React, {Component} from 'react';
import {Parent, SubNav, Link} from './Styled-menu';
import './Menu.css';

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isMenuActive : false
		}
	};
	render() {
		const ActiveMenu = (e) => {
			e.preventDefault();
			this.setState({
				isMenuActive: this.state.isMenuActive === true ? false : true
			});
		};



		const ActiveSection = (e) => {
			e.preventDefault();
			console.log(this.props.className);
			console.log("clicked");
		};

		let displayed = this.state.isMenuActive === true ? 'none' : 'block';

		return(
			<div className='Menu-container'>
				<a
					href="#"
					className='Menu-mobile'
					onClick={(e) => ActiveMenu(e)}
				>
					Menu
				</a>

				<nav
					className='Menu-desktop'
					style={{display : displayed}}
					>
					<Parent className='level-1' style={{display:'flex'}}>
						<SubNav
							className="has-subnav"
							onClick={(e) => ActiveSection(e)}
						>
							<Link
								href="#"
								className='section-title'
								>Parent 1</Link>
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
			</div>
		)
	}
}





export default Menu;
