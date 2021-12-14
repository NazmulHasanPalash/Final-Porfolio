import React from 'react';
import './About.css'

const About = () => {


    return (
        <div id="about">
            <div className="card  w-100 mx-auto about-style container-fluid">
                <h1 className="text-center text-white logo-style ">About<span className="span-style"> me</span></h1>

                <div className="row g-0 d-flex align-items-center w-75 rounded-3  mx-auto bg-dark">
                    <div className="col-md-6   rounded-circle">
                        <img src="image/profile-status.png" className="img-fluid rounded-start mx-auto " alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body text-white">
                            <div className="m-5">
                                <p> Hello, I am Nazmul Hasan Palash .Workaholic web developer with a knack for delivering attractive
                                    solutions in the shortest period of time. For a local charity, I created an
                                    e-commerce website, a travel agency website, a hospital website, a
                                    customer web portal, a documentary launch website, and a contributions
                                    webapp. Software architecture and cloud computing are two areas in
                                    which I am really interested. Web developer meetings and hackathons are
                                    something I go to on a regular basis.</p>
                                <button className="btn rounded-pill p-3 about-btn"><a
                                    href="https://drive.google.com/file/d/1r32hbyqrn40Z7W3jXoJ-RWzFLiUsIUqj/view?usp=sharing">
                                    Download Resume</a></button>
                            </div>


                        </div>
                    </div>

                </div>
                <div className="bg-dark text-white w-75 mx-auto">
                    <h3 className="logo-style skill-style">Skills</h3>
                    <h5 className="text-white">Web Development</h5>
                    <div class="progress w-50 mx-auto">
                        <div class="progress-bar bg-danger" role="progressbar" style={{ width: "89%" }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100">89%</div>
                    </div>
                    <h5 className="text-white">Video Editor</h5>
                    <div class="progress w-50 mx-auto">
                        <div class="progress-bar bg-warning " role="progressbar" style={{ width: "75%" }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100">75%</div>
                    </div>
                    <h5 className="text-white">Graphics Designer</h5>
                    <div class="progress w-50 mx-auto">
                        <div class="progress-bar bg-success " role="progressbar" style={{ width: "65%" }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100">65%</div>
                    </div>
                    <h5 className="text-white">Event Management</h5>
                    <div class="progress w-50 mx-auto">
                        <div class="progress-bar bg-primary " role="progressbar" style={{ width: "92%" }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100">92%</div>
                    </div>
                    <h5 className="text-white">Content write</h5>
                    <div class="progress w-50 mx-auto">
                        <div class="progress-bar bar-style " role="progressbar" style={{ width: "73%" }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100">73%</div>
                    </div>



                </div>
                <div className="bg-dark text-white w-75 mx-auto ">
                    <h3 className="logo-style skill-style my-5"><i class="fas fa-user-graduate"></i> Eduction</h3>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h4 className="text-primary mb-5">Relevant Courses </h4>
                                <div className="my-5"><h6 className="m-2">Data Structure</h6>
                                    <h6 className="m-5">Database Management Systems</h6>
                                    <h6 className="m-5">Responsive Design</h6>
                                    <h6 className="m-5">OOP Web development</h6>
                                    <h6 className="m-5">Web design (Programming Hero-2021)</h6>
                                    <h6 className="m-5">Digital Marketing (Khalid Farhan-2021)</h6></div>
                            </div>
                            <div class="col">
                                <h4 className="text-primary">Institute</h4>
                                <div className="my-5">
                                    <h3 className="border-bottom-2 border-white">School</h3>
                                    <h5>Bangladesh Navy School and College</h5>
                                    <p><i class="fas fa-map-marker-alt"></i> Chittagong, Bangladesh</p>
                                </div>
                                <div className="mb-5">
                                    <h3 className="border-bottom-2 border-white">College</h3>
                                    <h5>Cambrian College</h5>
                                    <p><i class="fas fa-map-marker-alt"></i> Chittagong, Bangladesh</p>
                                </div>
                                <div className="mb-5">
                                    <h3 className="border-bottom-2 border-white">Bachelor In Information and Technology (IT)</h3>
                                    <h5>Limkokwing University</h5>
                                    <p><i class="fas fa-map-marker-alt"></i>Salengor, Malaysia</p>
                                </div>

                            </div>
                        </div>

                    </div>





                </div>


                <h1 className="text-center text-white logo-style ">Blo<span className="span-style">gs</span></h1>
                <h1 className="text-primary">Comming Soon</h1>
            </div>

        </div>

    );
};

export default About;