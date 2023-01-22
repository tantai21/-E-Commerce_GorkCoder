import React from 'react';

const Head = () => {
    return (
        <>
            <section className='head'>
                <div className="container d_flex">
                    <div className="left row">
                        <i className="fa fa-phone"></i>
                        <label >+84 367 639 282</label>
                        <i className="fa fa-envelope"></i>
                        <label >tantai@gmail.com</label>
                    </div>
                    <div className="right row RText">
                        <label >Theme FAQ's</label>
                        <label >Need Help</label>
                        <i className="fa-solid fa-language"></i>
                        <label htmlFor="">EN</label>
                        <i className="fa-solid fa-language"></i>
                        <label htmlFor="">USD</label>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Head;
