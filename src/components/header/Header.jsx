import './Header.css';
import Logo from './Logo.svg';
import React from 'react';

const Header = () => {
    return (
        <>
            <div className='container d-flex justify-content-between align-items-center'>
                <a className='logoLink' href="./index.html">
                    <img className='logoLink__siteLogo' src={Logo} alt='Logo' width='60' height='60' />
                </a>
                <nav className='siteNav d-flex align-items-center'>
                    <ul className='siteNav__navList d-flex'>
                        <li className='navList__item'>
                            <a className='item__itemLink' href="#">Beranda</a>
                        </li>
                        <li className='navList__item'>
                            <a className='item__itemLink' href="#">Koleksi</a>
                        </li>
                        <li className='navList__item'>
                            <a className='item__itemLink' href="#">Syarat dan Ketentuan</a>
                        </li>
                        <li className='navList__item'>
                            <a className='item__itemLink' href="#">Kontak</a>
                        </li>
                    </ul>
                    <button className='siteNav__button btn btn-success'>Masuk</button>
                </nav>
            </div>
        </>
    );
};
export default Header;