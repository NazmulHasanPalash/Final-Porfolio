import React from 'react';
import './Contacts.css'

const Contacts = () => {
    return (
        <div className="" id="contact">
            <div className="card  w-100 mx-auto  form-style container-fluid">
                <div className="row g-0 d-flex align-items-center  my-auto">
                    <div className="col-md-6 mx-auto">
                        <div className="card-body text-white info-style  border-1 rounded-3 container-fluid">
                            <div className="mx-5">
                                <h1 className="card-title">Keep In <span className="span-style">Touch</span></h1>
                                <p><i className="far fa-envelope m-3"></i> Email: antynion1998@gmail.com</p>
                                <p><i class="fas fa-phone-square-alt"></i> Mobile: +88018842-85896</p>
                                <p><i class="fab fa-linkedin"></i> LinkdIne: <a className="text-white" target="blank" href="https://www.linkedin.com/in/mohammad-nazmul-hasan-palash-b74292194">Mohammad_Nazmul_Hasan</a></p>

                            </div>


                        </div>
                    </div>
                    <div className="col-md-5 ">
                        <form className="text-center mx-auto w-100 text-white  border-3 border-white rounded-3" action="mailto:antynion1998@gmail.com" method="post" enctype="text/plain">
                            <h1 className="logo-style">Contact with me</h1>
                            <input className="w-75 m-3 border-warning border-2 rounded-pill" type="text" name="name" placeholder="Name" />

                            <input className="w-75 m-3 border-warning border-2 rounded-pill" type="text" name="mail" placeholder="Email" />
                            <div className="input-group mx-auto overflow-scroll w-75 comment-style  mt-3 ">
                                <textarea className="form-control " placeholder="Text" aria-label="With textarea"></textarea>
                            </div>
                            <input className="btn btn-primary m-3" type="submit" value="Send" />
                            <input className="btn btn-danger text-white m-3" type="reset" value="Reset" />
                        </form>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Contacts;