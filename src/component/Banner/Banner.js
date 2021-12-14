import React, { useEffect, useState } from 'react';
import Typist from 'react-typist';
import './Banner.css'

const Banner = () => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        // document.title = `You clicked ${count} times`;
        console.log("Count: " + count);
        setCount(1);
    }, [count]);





    return (
        <div>
            <div className="card  w-100 mx-auto  banner-style container-fluid">
                <div className="row g-0 d-flex align-items-center  my-auto">
                    <div className="col-md-8">
                        <div className="card-body text-white">
                            <div className="m-5">
                                <h5 className="card-title">Hello,my name is</h5>
                                <h1 className="card-title">Nazmul Hasan Palash</h1>
                                <h3>And I'am
                                    {count ? (
                                        <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
                                            <span className="span-style"> Web Developer</span>
                                            <Typist.Backspace count={20} delay={800} />
                                            <span className="span-style"> Wed Designer</span>
                                            <Typist.Backspace count={20} delay={800} />
                                            <span className="span-style"> Freelancer</span>
                                            <Typist.Backspace count={20} delay={800} />
                                            <span className="span-style"> Content Writer</span>
                                        </Typist>
                                    ) : (
                                        ""
                                    )}
                                </h3>
                                <button className="btn btn-danger btn-style m-3 contact-style"><a href="#contact">Contact
                                    me</a></button>
                                <button className="btn btn-warning btn-style m-3 resume-style"><a
                                    href="https://drive.google.com/file/d/1r32hbyqrn40Z7W3jXoJ-RWzFLiUsIUqj/view?usp=sharing">
                                    Download Resume</a>
                                </button>
                            </div>


                        </div>
                    </div>
                    <div className="col-md-3  ">
                        <div className="profile-style rounded-circle">
                            <img src="/image/final profile.png" className="img-fluid rounded-start mx-auto " alt="..." />

                        </div>
                        <div>
                            <div>
                                <a className="text-white font-style" target="blank" href="https://www.facebook.com/profile.php?id=100014847361984"><i className="fab fa-facebook-square m-3"></i></a>
                                <a className="text-white  font-style" target="blank" href="https://github.com/NazmulHasanPalash"><i className="fab fa-github"></i></a>
                                <a className="text-white font-style" target="blank" href="https://www.instagram.com/nazmul_hasan_polash/"><i className="fab fa-instagram m-3"></i></a>
                                <a className="text-white font-style" target="blank" href="https://www.linkedin.com/in/mohammad-nazmul-hasan-palash-b74292194"><i class="fab fa-linkedin"></i></a>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div >
    );
};

export default Banner;