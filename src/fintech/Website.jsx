import './style.css';
export function Website(){
    return(
        		<>
			<header>
				<nav>
					<div className="logo">
						<h1>Technorizen</h1>
					</div>
					<ul>
						<li><a href="#Home">Home</a></li>
						<li><a href="#about">About</a></li>
						<li><a href="#process">Process</a></li>
						<li><a href="#testimony">testimony</a></li>
						<li><a href="#contact">Contact</a></li>
					</ul>
					<box-icon id="menu" name="menu" color="whitesmoke" n size="lg"></box-icon>
				</nav>

				<div className="header-content" id="Home">
					<h1>Technorizen Provide Solutions To Your Business Needs Whatever They Maybe.</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Culpa, autem.Dolores, voluptatibus. Maiores nobis sequi magnam.</p>
					<form>
						<input type="text" placeholder="Enter your Name" />
						<input type="email" placeholder="Enter your email" />
						<input type="submit" value="Subscribe" />
					</form>
				</div>
			</header>


			{/*  ----ABOUT section-----*/}
			<section className="about" id="about">
				<div className="row">
					<div className="about-left">
						<h2>Technorizen is all about excellence in the world of business</h2>
						<img src="https://image.freepik.com/free-photo/successful-meeting-business-people-discussing-new-business-ideas-using-diagrams-sitting-together-modern-office-background-meeting-business-partners-conference-business-development_173815-1155.jpg" alt=""></img>
					</div>


					<div className="about-middle">
						<h2>Our History</h2>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum officiis quis omnis, cum culpa nisi!
						</p>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum officiis quis omm officiis quis
							omnis, cum culpa nisi!</p>
						<a href="/#" className="btn">Read More</a>
					</div>
					<div className="about-right">
						<h2>Vision & Mission</h2>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum officiis quis omnis, cum culpa nisi!
						</p>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum officiis quis omm officiis quis
							omnis, cum culpa nisi!</p>
						<a href="/#" className="btn">Read More</a>
					</div>
				</div>
			</section>

			<section className="about2">
				<div className="row">
					<div className="about2-left">
						<h2>What we can do for you</h2>
						<h1>About Us</h1>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, aliquid?</p>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quisquam, est, saepe molestias aut
							deleniti dicta et enim consequatur explicabo at nulla reiciendis corporis culpa minus nam alias, id
							repellat dolores quod!</p>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, odit?</p>

					</div>
					<div className="about2-right">
						<div className="row">
							<div className="card">
								<box-icon type="logo" name="apple" color="#4CAF50" size="60px"></box-icon>
								<h2>IOS Development</h2>
							</div>
							<div className="card">
								<box-icon type="logo" name="android" color="#4CAF50" size="60px"></box-icon>
								<h2>Android Development</h2>
							</div>
						</div>
						<div className="row">
							<div className="card">
								<box-icon name="data" color="#4CAF50" size="60px"></box-icon>
								<h2>Database Management</h2>
							</div>
							<div className="card">
								<box-icon name="line-chart-down" color="#4CAF50" size="60px"></box-icon>
								<h2>Data Visualizations</h2>
							</div>
						</div>
					</div>
				</div>
			</section>


			{/*-- process --*/}
			<section className="process" id="process">
				<div className="row">
					<h1>What is our Process</h1>
				</div>
				<div className="row">
					<div className="process-content">
						<div className="progress-bar">
							<div className="c1"></div>
							<div className="c2"></div>
							<div className="c3"></div>
						</div>
						<div className="row">
							<div className="box1">
								<h2>One</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iure saepe. Ducimus quae tempore enim alias, esse rem assumenda impedit!</p>
							</div>
							<div className="box2">
								<h2>Two</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iure saepe. Ducimus quae tempore enim alias, esse rem assumenda impedit!</p>
							</div>
							<div className="box3">
								<h2>Three</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iure saepe. Ducimus quae tempore enim alias, esse rem assumenda impedit!</p>
							</div>
						</div>
					</div>
				</div>
			</section>



			{/*-- Testimony --*/}

			<section className="testimony" id="testimony">
				<div className="row">
					<h1 >Our Testimonial</h1>
				</div>
				<div className="row">
					<div className="test">
						<div className="image">
							<img src="https://avatars.githubusercontent.com/u/42931974?v=4" alt="" />
						</div>
						<div className="test-content">
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus sint error aperiam maiores nisi cupiditate, ullam quo qui necessitatibus odio!</p>
							<h2>Anil Patidar</h2>
							<div className="icons">
								<box-icon name='star' type='solid' color='whitesmoke'></box-icon>
								<box-icon name='star' type='solid' color='whitesmoke'></box-icon>
								<box-icon name='star' type='solid' color='whitesmoke'></box-icon>
								<box-icon name='star' type='solid' color='whitesmoke'></box-icon>
								<box-icon name='star-half' type='solid' color='whitesmoke'></box-icon>
							</div>
						</div>
					</div>

					<div className="test">
						<div className="image">
							<img src="https://s3.ivisa.com/website-assets/blog/id-photo2.jpg" alt="" />
						</div>
						<div className="test-content">
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus sint error aperiam maiores nisi cupiditate, ullam quo qui necessitatibus odio!</p>
							<h2>john Smith</h2>
							<div className="icons">
								<box-icon name='star' type='solid' color='whitesmoke'></box-icon>
								<box-icon name='star' type='solid' color='whitesmoke'></box-icon>
								<box-icon name='star' type='solid' color='whitesmoke'></box-icon>
								<box-icon name='star' type='solid' color='whitesmoke'></box-icon>
								<box-icon name='star-half' type='solid' color='whitesmoke'></box-icon>
							</div>
						</div>
					</div>
				</div>
			</section>


			{/*	<!-- Contact -->*/}

			<section className="contact" id="contact">
				<div className="row">
					<h1>Contact Us</h1>
				</div>
				<div className="row">
					<form>
						<input type="text" placeholder="Enter your name" />
						<input type="email" placeholder="Enter your email" />
						<textarea defaultValue="This is Description"></textarea>
						<input type="submit" value="Send" />
					</form>
				</div>
			</section>


			{/*		<!-- Footer -->*/}
			<footer>
				<p>Technorizen solutions Pvt Ltd.</p>
			</footer>




		</>
        
    )
}