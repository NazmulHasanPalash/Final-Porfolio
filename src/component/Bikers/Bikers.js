import React, { useEffect, useState } from 'react';
import Typist from 'react-typist';
import './Bikers.css';

const Bikers = () => {
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
                    <div className="col-md-6 col-sm-1 mx-auto">
                        <div className="card-body text-white info-style  border-1 rounded-3 container-fluid">
                            <div className="mx-5">
                                <h1 className="card-title">Bikers <span className="span-style">World</span></h1>
                                <h3 className="card-title">React App (Full-Stack)</h3>
                                <h3>Project Outlines
                                    {count ? (
                                        <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
                                            <span className="span-style">Responsive Website</span>
                                            <Typist.Backspace count={20} delay={800} />
                                            <span className="span-style">Firebase Authentication and token features</span>
                                            <Typist.Backspace count={50} delay={800} />
                                            <span className="span-style">MongoDB Atlas database</span>
                                            <Typist.Backspace count={50} delay={800} />
                                            <span className="span-style">Admin feature</span>
                                        </Typist>
                                    ) : (
                                        ""
                                    )}
                                </h3>

                                <p className="card-text">Elements: Bootstrap, React.js, CSS, Firebase, MongoDB Atlas, Heroku</p>
                                <p>Description: server load data from mongodb database and provide data to client site website load data from server and data can add or delete from website . There are different features for users and different features for admin.</p>

                                <button className="btn btn-danger btn-style m-3 contact-style"><a href="https://peaceful-stream-27485.herokuapp.com/">Live site</a></button>
                                <button className="btn btn-warning btn-style m-3 resume-style"><a
                                    href="https://github.com/programming-hero-web-course-4/niche-website-server-side-NazmulHasanPalash">
                                    Server Side</a>
                                </button>
                                <button className="btn btn-warning btn-style m-3 client-style"><a
                                    href="https://github.com/programming-hero-web-course-4/niche-website-client-side-NazmulHasanPalash">
                                    Client Side</a>
                                </button>
                            </div>


                        </div>
                    </div>
                    <div className="col-md-5 col-sm-1 ">
                        <img src="image/bike display.png" className="img-fluid rounded-3 mx-auto  " alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bikers;