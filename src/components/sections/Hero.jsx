import './Sections.css';
import React from 'react';

const Hero = () => {
    return (
        <>
            <section>
                <div className='container d-flex flex-column align-items-center'>
                    <p className='heroText pt-5 pb-3'><span className='heroTextTrim'>Pojok Baca</span> Probolinggo</p>
                    <h2 className='heroHeading pb-5'>Pinjam Buku Secara <span className='heroHeadingTrim'>Gratis</span> untuk Masyarakat</h2>
                    <div className='btnWrapper'>
                        <button className='heroBtnSearch btn btn-success'>Cari Judul Buku</button>
                        <button className='heroBtnDonate btn btn-outline-success'>Donasi dengan Kami</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;