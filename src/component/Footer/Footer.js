import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer-style mx-auto ">
                <h3 >Portfo<span className="heading-style">lio</span></h3>
                <div className="container">

                    <div className="row my-5">
                        <div className="col">
                            <h5 className="span-style">Profession</h5>
                            <p>Web developer</p>
                            <p>Web designer</p>
                            <p>Web content writer </p>
                            <p>Fon-end developer</p>
                            <p>Freelancer</p>
                        </div>
                        <div className="col-5">
                            <h5 className="span-style">Web developing skill</h5>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Bootstrap</p>
                            <p>Tailwind</p>
                            <p>Material UI</p>
                            <p>React</p>

                        </div>
                        <div className="col">
                            <h1 class="navbar-brand ms-5 text-white">Portfo<span class="span-style">lio.</span> </h1>
                            <p>Workaholic web developer with a knack for delivering attractive
                                solutions in the shortest period of time. For a local charity, I created an
                                e-commerce website, a travel agency website, a hospital website, a
                                customer web portal, a documentary launch website, and a contributions
                                webapp. Software architecture and cloud computing are two areas in
                                which I am really interested. Web developer meetings and hackathons are
                                something I go to on a regular basis.</p>
                        </div>
                    </div>
                    <div><i className="fab fa-facebook-square m-3"></i><i className="fab fa-instagram m-3"></i><i className="fab fa-twitter-square m-3"></i><i className="far fa-envelope m-3"></i></div>
                    <p>Copyright @2021 | Portfolio</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;