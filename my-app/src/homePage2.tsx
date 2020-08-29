import React from 'react';

class HomePage2 extends React.Component {
	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<div className="homepage2_body">
				<header>
					<ul className="navigation-list">
						<li className="navigation-item">
							<a href="#">Posts</a>
						</li>
						<li className="navigation-item">
							<a href="#">Products</a>
						</li>
						<li className="navigation-item">
							<a href="#">About Us</a>
						</li>
					</ul>
				</header>
				<aside>
					<p>sidebar</p>
				</aside>
				<main>
					<h1>CSS Grid used for layout and flexbox used inside header and footer</h1>
					<p>When should you use which?</p>
				</main>
				<footer>
					<div className="navigation-list">
						<div className="navigation-item1">
							<p>
								Tickertape Tickertape provides data, information & content for Indian stocks, ETFs &
								indices. Prices shown are delayed by 15 minutes © Tickertape 2020
							</p>
						</div>
						<div className="navigation-item2">
							<ul className="nav-list-ul">
								<li className="nav-list">
									<a className="nav-list" href="#">
										Screener
									</a>
								</li>
								<li className="nav-list">
									<a className="nav-list" href="#">
										MMI
									</a>
								</li>
								<li className="nav-list">
									<a href="https://www.temp.in" className="nav-list">
										Stocks
									</a>
								</li>
								<li className="nav-list">
									<a
										href="http://learn.temp.in/"
										target="_blank"
										rel="noopener noreferrer"
										className="nav-list"
									>
										Learn
									</a>
								</li>
								<li className="nav-list">
									<a
										href="https://blog.temp.in/"
										target="_blank"
										rel="noopener noreferrer"
										className="nav-list"
									>
										Blog
									</a>
								</li>
							</ul>
							<ul className="nav-list-ul">
								<li className="nav-list">
									<a className="nav-list" href="#">
										Screener
									</a>
								</li>
								<li className="nav-list">
									<a className="nav-list" href="#">
										MMI
									</a>
								</li>
								<li className="nav-list">
									<a href="https://www.temp.in" className="nav-list">
										Stocks
									</a>
								</li>
								<li className="nav-list">
									<a
										href="http://learn.temp.in/"
										target="_blank"
										rel="noopener noreferrer"
										className="nav-list"
									>
										Learn
									</a>
								</li>
								<li className="nav-list">
									<a
										href="https://blog.temp.in/"
										target="_blank"
										rel="noopener noreferrer"
										className="nav-list"
									>
										Blog
									</a>
								</li>
							</ul>
							<ul className="nav-list-ul">
								<li className="nav-list">
									<a className="nav-list" href="#">
										Screener
									</a>
								</li>
								<li className="nav-list">
									<a className="nav-list" href="#">
										MMI
									</a>
								</li>
								<li className="nav-list">
									<a href="https://www.temp.in" className="nav-list">
										Stocks
									</a>
								</li>
								<li className="nav-list">
									<a
										href="http://learn.temp.in/"
										target="_blank"
										rel="noopener noreferrer"
										className="nav-list"
									>
										Learn
									</a>
								</li>
								<li className="nav-list">
									<a
										href="https://blog.temp.in/"
										target="_blank"
										rel="noopener noreferrer"
										className="nav-list"
									>
										Blog
									</a>
								</li>
							</ul>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default HomePage2;
