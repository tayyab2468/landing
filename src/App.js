import logo from './logo.svg';
import './App.css';
import image1 from './logo-bookmark.svg';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import image2 from './hero-bg.png';
import image3 from './illustration-features-tab-3.png';
import image4 from './logo-chrome.svg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import image9 from './logo-bookmark-white.png';
import image5 from './logo-chrome.svg';
import image6 from './logo-opera.svg';

import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className='container flex items-center justify-between py-4 px-6 sm:px-10'>
        <div className='py-1'>
          <img src={image1} alt="Logo" className='h-6 sm:h-8' />
        </div>

        {/* Desktop Menu */}
        <ul className='hidden sm:flex flex-1 justify-end items-center gap-6 lg:gap-12 text-bookmark-blue uppercase text-1xl font-semibold'>
          <li className='cursor-pointer hover:text-bookmark-red transition'>Features</li>
          <li className='cursor-pointer hover:text-bookmark-red transition'>Pricing</li>
          <li className='cursor-pointer hover:text-bookmark-red transition'>Contact</li>
          <button type="button" className='bg-bookmark-red text-white rounded-md px-5 py-2 uppercase'>
            Login
          </button>
        </ul>

        {/* Mobile Menu */}
        <div className='sm:hidden'>
          {menuOpen ? (
            <CloseIcon className='text-3xl cursor-pointer' onClick={() => setMenuOpen(false)} />
          ) : (
            <MenuIcon className='text-3xl cursor-pointer' onClick={() => setMenuOpen(true)} />
          )}
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className='absolute top-16 left-0 w-full bg-white shadow-md p-6 sm:hidden z-10'>
            <ul className='flex flex-col gap-4 text-bookmark-blue uppercase text-sm'>
              <li className='cursor-pointer hover:text-bookmark-red transition'>Features</li>
              <li className='cursor-pointer hover:text-bookmark-red transition'>Pricing</li>
              <li className='cursor-pointer hover:text-bookmark-red transition'>Contact</li>
              <button type="button" className='bg-bookmark-red text-white rounded-md px-5 py-2 uppercase w-full'>
                Login
              </button>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className='relative container flex flex-col-reverse lg:flex-row items-center gap-12 mt-10 lg:mt-20 px-6'>
        <div className='flex-1 text-center lg:text-left'>
          <h2 className='text-bookmark-blue text-3xl md:text-4xl lg:text-5xl font-bold'>
            A Simple Bookmark Manager
          </h2>
          <p className='text-bookmark-grey text-lg mt-4'>
            A Clean and Simple interface to organize your favorite websites.
          </p>
          <div className='flex justify-center lg:justify-start gap-4 mt-6'>
            <button className='btn btn-purple'>Get it on Chrome</button>
            <button className='btn btn-white'>Get it on Firefox</button>
          </div>
        </div>
        <div className='flex-1 flex justify-center'>
          <img src={image2} className='w-full max-w-md' alt="Bookmark Manager" />
        </div>
      </section>

      {/* Download Section */}
      <section className='py-20 bg-gray-100'>
        <div className='container text-center'>
          <h1 className='text-3xl text-bookmark-blue'>Download the Extension</h1>
          <p className='text-bookmark-grey mt-4 max-w-2xl mx-auto'>
            Get practical experience through an internship.
          </p>
        </div>

        {/* Extension Download Cards */}
        <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4 sm:px-0'>
          <div className='flex flex-col items-center border p-6 rounded-lg shadow-md bg-white text-center'>
            <img src={image5} alt="Chrome Logo" className='h-16' />
            <h3 className='mt-4 text-bookmark-blue text-lg font-medium'>Add to Chrome</h3>
            <p className='text-bookmark-grey text-sm mt-2'>Minimum version 62</p>
            <button className='mt-4 btn btn-purple'>More Info</button>
          </div>

          <div className='flex flex-col items-center border p-6 rounded-lg shadow-md bg-white text-center'>
            <img src={image6} alt="Firefox Logo" className='h-16' />
            <h3 className='mt-4 text-bookmark-blue text-lg font-medium'>Add to Firefox</h3>
            <p className='text-bookmark-grey text-sm mt-2'>Minimum version 55</p>
            <button className='mt-4 btn btn-purple'>More Info</button>
          </div>

          <div className='flex flex-col items-center border p-6 rounded-lg shadow-md bg-white text-center'>
            <img src={image5} alt="Opera Logo" className='h-16' />
            <h3 className='mt-4 text-bookmark-blue text-lg font-medium'>Add to Opera</h3>
            <p className='text-bookmark-grey text-sm mt-2'>Minimum version 50</p>
            <button className='mt-4 btn btn-purple'>More Info</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-bookmark-blue py-8 text-white'>
        <div className='container flex flex-wrap items-center justify-between px-6 md:px-0'>
          {/* Logo */}
          <img src={image9} alt="Bookmark Logo" className='h-8' />

          {/* Navigation Links */}
          <ul className='flex flex-wrap gap-6 text-xs uppercase'>
            <li className='cursor-pointer hover:text-gray-300'>Features</li>
            <li className='cursor-pointer hover:text-gray-300'>Pricing</li>
            <li className='cursor-pointer hover:text-gray-300'>Contact</li>
          </ul>

          {/* Social Icons */}
          <div className='flex gap-6'>
            <a href="#" className='text-white text-2xl'><XIcon /></a>
            <a href="#" className='text-white text-2xl'><LinkedInIcon /></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
