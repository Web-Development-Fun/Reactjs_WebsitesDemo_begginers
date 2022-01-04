import './Style.css';

function Websitetwo() {

     var navLinks = document.querySelector('.nav-links')

     function showMenu() {
         navLinks.style.right = "0";}
    
     function hideMenu() {
         navLinks.style.right = "-50%";}
    
    return (
        <>
            <header id="header">
                <nav>
                    <h1>TECHNO<span>RIZEN.</span></h1>
                    <div class="nav-links">
                        <i class="fas fa-times" onclick="hideMenu()"></i>
                        <ul>
                            <li><a href="/#">HOME</a></li>
                            <li><a href="/#">ABOUT</a></li>
                            <li><a href="/#">SERVICE</a></li>
                            <li><a href="/#">PRICING</a></li>
                            <li><a href="/#">TESTIMONY</a></li>
                            <li><a href="/#">CONTACT</a></li>
                        </ul>
                    </div>
                    <i class="fas fa-bars" onclick="showMenu()"></i>
                </nav>

                <div class="header-content">
                    <h1>Excellence is to do a common thing in an uncommon way.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci delectus deleniti soluta cumque
                        deserunt consectetur recusandae quae, ssuscipit, quidem magnam, porro temporibus aliquam in doloribus id
                        similique amet perspiciatis? Voluptas?uscipit, quidem magnam, porro temporibus aliquam in doloribus id
                        similique amet perspiciatis? Voluptas?</p>
                    <a href="/#" class="hero-btn">View Our Work<i class="fas fa-arrow-circle-right"></i></a>
                    <a href="/#" class="hero-btn">View Pricing<i class="fas fa-arrow-circle-right"></i></a>

                </div>
                <a href="#header" class="scroll-down">.</a>
            </header>



            {/*     <!-- About Us -->*/}
            <section class="aboutus">
                <div class="row">
                    <div class="about-content">
                        <h1>About Us</h1>
                        <p><span>Learn What we do</span></p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor fugiat voluptat magni?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse soluta expedita impedit voluptatem sit,
                            consequatur doloremque itaque officia quisquam labore quidem aut quas maxime optio deserunt.
                            Expedita
                            sed hic facilis incidunt dicta, laboriosam quis suscipit recusandae, alias ea accusantium dolores
                            harum
                            qui, exercitationem culpa!</p>
                        <a href="/#" class="hero-btn-inverse">Read More</a>
                        <div class="icons">
                            <a href="/#"><i class="fab fa-facebook-f"></i></a>
                            <a href="/#"><i class="fab fa-instagram"></i></a>
                            <a href="/#"><i class="fab fa-twitter"></i></a>
                            <a href="/#"> <i class="fab fa-youtube"></i></a>

                        </div>
                    </div>

                    <div class="about-col one">
                        <img src="https://media.istockphoto.com/vectors/about-us-concept-illustration-vector-id1266703967?k=20&m=1266703967&s=612x612&w=0&h=_q_SVrqu7XcOghvQF-c8-2qY448MwmBI0mhA2-JeFyE=" alt="" />
                    </div>
                    <div class="about-col two">
                        <i class="fas fa-network-wired fa-2x"></i>
                        <h3>World Class Infrastructure</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi expedita impedit natus tenetur
                            beatae dolor sit amet</p>

                        <i class="fas fa-server fa-2x"></i>
                        <h3>Industry Standard</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi expedita impedit natus tenetur
                            beatae dolor sit amet
                        </p>
                    </div>
                </div>
            </section>


            <section class="service">
                <h1>What can we do for you.</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor fugiat voluptat magni?</p>

                <div class="row">
                    <div class="service-content">
                        <i class="fab fa-android fa-3x"></i>
                        <div class="service-overlay">
                            <h3>Android App Development</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia omnis atque mollitia!</p>
                        </div>
                    </div>
                    <div class="service-content">
                        <i class="fab fa-app-store-ios fa-3x"></i>
                        <div class="service-overlay">
                            <h3>Ios App Development</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia omnis atque mollitia!</p>
                        </div>
                    </div>
                    <div class="service-content">
                        <i class="fas fa-blog fa-3x"></i>
                        <div class="service-overlay">
                            <h3>Website Development</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia omnis atque mollitia!</p>
                        </div>
                    </div>
                    <div class="service-content">
                        <i class="fas fa-shopping-cart fa-3x"></i>
                        <div class="service-overlay">
                            <h3>Ecommerce Solutions</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia omnis atque mollitia!</p>
                        </div>
                    </div>
                </div>
                <div class="service-btn">
                    <a href="/#" class="hero-btn-inverse">Learn More</a>
                </div>
            </section>


          {/*  <!-- Pricing -->*/}
    <div class="pricing-overlay">
        <section class="pricing">
            <h1>What We Charge</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sed?</p>

            <div class="planContainer">
                <div class="plan">
                    <div class="titleContainer">
                        <div class="title">App Development</div>
                    </div>
                    <div class="infoContainer">
                        <div class="price">
                            <p>$4.99 </p><span>/mo</span>
                        </div>
                        <div class="p desc"><em>IOS and Android App Development</em></div>
                        <ul class="features">
                            <li><strong>1</strong> Users</li>
                            <li><strong>1</strong> Projects</li>
                            <li><strong>10 GB</strong> Cloud Storage</li>
                            <li><strong>100 GB</strong> Bandwidth</li>
                            <li><strong>10</strong> Revisions</li>
                        </ul>
                        <a href="/#" class="selectPlan">Select Plan</a>
                    </div>
                </div>
                <div class="plan">
                    <div class="titleContainer">
                        <div class="title">Website Development</div>
                    </div>
                    <div class="infoContainer">
                        <div class="price">
                            <p>$9.99 </p><span>/mo</span>
                        </div>
                        <div class="p desc"><em>Ecommerce, Blog, Landing Page Development</em></div>
                        <ul class="features">
                            <li><strong>5</strong> Users</li>
                            <li><strong>5</strong> Projects</li>
                            <li><strong>50 GB</strong> Cloud Storage</li>
                            <li><strong>500 GB</strong> Bandwidth</li>
                            <li><strong>50</strong> Revisions</li>
                        </ul><a href="/#" class="selectPlan">Select Plan</a>
                    </div>
                </div>
                <div class="plan">
                    <div class="titleContainer">
                        <div class="title">Network Solutions</div>
                    </div>
                    <div class="infoContainer">
                        <div class="price">
                            <p>$19.99</p><span>/mo</span>
                        </div>
                        <div class="p desc"><em>Office Network Supplies and Infra Development</em></div>
                        <ul class="features">
                            <li><strong>Unlimited</strong> Users</li>
                            <li><strong>10</strong> Projects</li>
                            <li><strong>150 GB</strong> Storage</li>
                            <li><strong>Unlimited</strong> Bandwidth</li>
                            <li><strong>Unlimited</strong> Revisions</li>
                        </ul><a href="/#" class="selectPlan">Select Plan</a>
                    </div>
                </div>
            </div>

        </section>
    </div>

{/*    <!-- Testimonials -->*/}
    <section class="testimonials">
        <h1>What Our Clients Says</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sed?</p>
        <div class="row">
            <div class="testimonial-col ">
                <i class="fas fa-quote-left"></i>
                <img src="images/c1.jpg" alt=""/>

                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quaerat minus veritatis magnam
                        placeat. Repudiandae, error! Deserunt omnis eos laboriosam?</p>
                    <h3>Amy Jackson</h3>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
            </div>
            <div class="testimonial-col">
                <i class="fas fa-quote-left"></i>
                <img src="images/c2.jpg" alt=""/>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quaerat minus veritatis magnam
                        placeat. Repudiandae, error! Deserunt om</p>
                    <h3>Linda Smith</h3>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
            </div>
            <div class="testimonial-col">
                <i class="fas fa-quote-left"></i>
                <img src="images/c3.jpg" alt=""/>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit minus veritatis magnam
                        placeat. Repudiandae, error! Deserunt omnis eos laboriosam?</p>
                    <h3>Monica johnson</h3>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            </div>
        </div>
    </section>

    


    <footer>
        <p>All Rights Reserved &copy; SOFTECH 2021</p>
        <div class="icons">
            <a href="/#"><i class="fab fa-facebook-f"></i></a>
            <a href="/#"><i class="fab fa-instagram"></i></a>
            <a href="/#"><i class="fab fa-twitter"></i></a>
            <a href="/#"> <i class="fab fa-youtube"></i></a>

        </div>
    </footer>

        </>
    );
};

export default Websitetwo;
