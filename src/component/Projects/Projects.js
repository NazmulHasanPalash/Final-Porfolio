import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Projects.css'
const Projects = () => {
    return (
        <div id="projects">

            <div className=" second-banner">
                <h1 className="text-center text-white logo-style ">Pro<span className="span-style">jects</span></h1>

                <div className="row row-cols-1 row-cols-md-3 g-4 w-100 mx-auto second-banner ">
                    <div className="col mb-5">
                        <div className="card h-100 border-white border-3 rounded-3 shadow-lg  ">
                            <div className="m-2 text-white photo-style">
                                <img src="image/bike display.png"
                                    className="card-img-top" alt="..." />
                                <div className="card-body detail-style">
                                    <h5 className="card-title text-center name-style">Bikers World - React Project (Full-Stack)
                                    </h5>

                                </div>
                                <div className="card-footer text-center bg-dark">
                                    <button className="btn btn-style m-2"> <HashLink className="nav-link active" to="/bike">Explore Project</HashLink>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100 border-white border-3 rounded-3 shadow-lg  ">
                            <div className="m-2 text-white photo-style">
                                <img src="image/FireShot Capture 014 - Multi Device Website Mockup Generator - techsini.com.png"
                                    className="card-img-top image-fluid" alt="..." />
                                <div className="card-body detail-style">
                                    <h5 className="card-title text-center name-style">Sky Travels - React Project (Full-Stack)
                                    </h5>

                                </div>
                                <div className="card-footer text-center bg-dark">
                                    <div className="card-footer text-center bg-dark">
                                        <button className="btn btn-style "> <HashLink className="nav-link active" to="/travel">Explore Project</HashLink>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100 border-white border-3 rounded-3 shadow-lg  ">
                            <div className="m-2 text-white photo-style">
                                <img src="image/FireShot Capture 017 - Multi Device Website Mockup Generator - techsini.com.png"
                                    className="card-img-top" alt="..." />
                                <div className="card-body detail-style">
                                    <h5 className="card-title text-center name-style">Medical Center - React Project

                                    </h5>

                                </div>
                                <div className="card-footer text-center bg-dark">
                                    <button className="btn btn-style m-2 "> <HashLink className="nav-link active" to="/medical">Explore Project</HashLink>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Projects;