import './style.css';

function Websiteone() {
    return (
        <>
            <a href="#home" class="backtotop"><i class="fas fa-arrow-up"></i></a>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#feature">Feature</a></li>
                    <li><a href="#testimony">Testimony</a></li>

                </ul>
                <i class="fas fa-bars fa-2x"></i>
            </nav>

            <section class="hero" id="home">
                <header>
                    <div class="header-content">
                        <h1>Beginner's Project</h1>
                        <h1>Simple, Elegant & Easy To Learn</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus architecto doloremque sit sed
                            commodi
                            Delectus architecto doloremque sit sed commodi dolorum harum deleniti, assumenda est labore. Ratione
                            vero itaque deserunt fuga.</p>
                        <a href="/#" class="btn">Learn Web Dev</a>
                    </div>
                </header>
            </section>

            <section class="section2 p-100" id="about">
                <header>
                    <h2>What you will learn from this simple front end website</h2>
                    <p>Lorem ipsum dolor, sit amet sit amet consectetur adipisicing elit. Architecto, magni. consectetur <br/>
                        adipisicing elit.Architecto, magni.</p>
                </header>
                <div class="section2-content">
                    <div class="row">
                        <div class="box">
                            <div class="icon">
                                <i class="fas fa-atlas fa-3x"></i>
                            </div>
                            <h3>Web Dev</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officia quod laborum amet
                                quas quia!</p>
                        </div>
                        <div class="box">
                            <div class="icon">
                                <i class="fas fa-award fa-3x"></i>
                            </div>
                            <h3>Certified</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officia quod laborum amet
                                quas quia!</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="box">
                            <div class="icon">
                                <i class="fas fa-beer fa-3x"></i>
                            </div>
                            <h3>Enjoy</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officia quod laborum amet
                                quas quia!</p>
                        </div>
                        <div class="box">
                            <div class="icon">
                                <i class="fas fa-file-code fa-3x"></i>
                            </div>
                            <h3>Code</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officia quod laborum amet
                                quas quia!</p>
                        </div>
                    </div>
                </div>
            </section>


            
    <section class="section3 p-100" id="feature">
        <div class="row">
            <div class="box">
                <div class="icon">
                    <i class="fab fa-adn fa-3x"></i>
                </div>
                <h3>Store</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehd laborum amet
                    quas quia!</p>
            </div>
            <div class="box">
                <div class="icon">
                    <i class="fab fa-apple fa-3x"></i>
                </div>
                <h3>Apple</h3>
                <p>Lorem ipsum dolor sit amet consing elit. Reprehenderit officia quod laborum amet
                    quas quia!</p>
            </div>
            <div class="box">
                <div class="icon">
                    <i class="fas fa-mobile-alt fa-3x"></i>
                </div>
                <h3>Mobile</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ofaborum amet
                    quas quia!</p>
            </div>
            <div class="box">
                <div class="icon">
                    <i class="fab fa-android fa-3x"></i>
                </div>
                <h3>Android</h3>
                <p>Lorem ipsum dolorctetur adipisicing elit. Reprehenderit officia quod laborum amet
                    quas quia!</p>
            </div>
        </div>
    </section>

    <section class="section4 p-100" id="testimony">
        <div class="section4-content">
            <div class="icon">
                <i class="fas fa-user-friends fa-3x"></i>
            </div>
            <div class="testimony">
                <i class="fas fa-quote-left fa-4x"></i>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nulla deleniti soluta repudiandae
                    minima, enim natus error, recusandae dicta tempore rerum ipsa ducimus reiciendis aliquam?</p>
                <h3>John Doe</h3>
            </div>
        </div>
    </section>


    <footer>
        <div class="icons">
            <a href="/#"><i class="fab fa-facebook-f"></i></a>
            <a href="/#"><i class="fab fa-instagram"></i></a>
            <a href="/#"><i class="fab fa-twitter"></i></a>
            <a href="/#"> <i class="fab fa-youtube"></i></a>
        </div>
    </footer>




        </>
    )
}

export default Websiteone;
