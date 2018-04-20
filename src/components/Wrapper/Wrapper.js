import React from "react";
import "./Wrapper.css";

const Wrapper = props => 
<div className="container">
        <nav className="navbar">
            <h1 className="brand">The Book Worm</h1>
            <button className="btn btn-dark float-right login">Login</button>
        </nav>
            <div className="wrapper">{props.children}</div>
            {/* footer */}
    <footer className= "page-footer font-small blue pt-4 mt-4" >
        <div className= "container-fluid text-center text-md-left" > 
            <div className="row">
                <div className="values col-sm-6">
                    <h5 className="text-uppercase">Core Values</h5>
                    <p>Lorem ipsum dolor amet marfa authentic bespoke hexagon PBR&B. Pabst four loko fashion axe intelligentsia cronut copper mug taxidermy biodiesel drinking vinegar blue bottle VHS sustainable glossier. Viral thundercats before they sold out listicle, hoodie kickstarter brunch fashion axe typewriter echo park taxidermy meggings cronut tattooed. Farm-to-table DIY XOXO, occupy iceland stumptown pickled locavore shabby chic gochujang hexagon pinterest artisan copper mug butcher. Narwhal subway tile chartreuse, lomo vinyl bicycle rights hammock copper mug bushwick echo park shabby chic put a bird on it pug fingerstache</p>
                </div>

                <div className="devs float-right col-sm-6">
                    <h5 className="float-right text-uppercase">Developers</h5>
                    <ul className="links list-unstyled">
                        <li>
                            <a href="#!">Derek F.</a>
                        </li>
                        <li>
                            <a href="#!">Derrick G.</a>
                        </li>
                        <li>
                            <a href="#!">Ida J.</a>
                        </li>
                        <li>
                            <a href="#!">Nate J.</a>
                        </li>
                        <li>
                            <a href="#!">Ravish R.</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
            <div className="footer-copyright py-3 text-center">
                <h4>© 2018 Copyright:GitHubName</h4>
            </div>
    </footer>

</div>
export default Wrapper;
