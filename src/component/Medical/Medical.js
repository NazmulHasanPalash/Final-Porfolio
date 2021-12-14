import React, { useEffect, useState } from 'react';
import Typist from 'react-typist';

const Medical = () => {
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
                    <div className="col-md-5">
                        <div className="card-body text-white info-style m-5 border-1 rounded-3">
                            <div className="mx-5">
                                <h1 className="card-title">Medical <span className="span-style">Center</span></h1>
                                <h3 className="card-title">React App </h3>
                                <h3>Project Outlines
                                    {count ? (
                                        <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
                                            <span className="span-style">Responsive Website</span>
                                            <Typist.Backspace count={20} delay={800} />
                                            <span className="span-style">Firebase Authentication</span>

                                            <Typist.Backspace count={50} delay={800} />
                                            <span className="span-style">Login Feature</span>
                                        </Typist>
                                    ) : (
                                        ""
                                    )}
                                </h3>

                                <p className="card-text">Elements: Bootstrap, React.js, CSS, Firebase</p>
                                <p>Description: server load data from mongodb database and provide data to client site website load data from server and data can add or delete from website . user need to login watch all features of website</p>

                                <button className="btn btn-danger btn-style m-3 contact-style"><a href="https://peaceful-stream-27485.herokuapp.com/">Live site</a></button>

                                <button className="btn btn-warning btn-style m-3 client-style"><a
                                    href="https://github.com/Programming-Hero-Web-Course3/healthcare-related-website-NazmulHasanPalash">
                                    Client Side</a>
                                </button>
                            </div>


                        </div>
                    </div>
                    <div className="col-md-5 ">
                        <img src="image/FireShot Capture 017 - Multi Device Website Mockup Generator - techsini.com.png" className="img-fluid rounded-3 mx-auto  " alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Medical;