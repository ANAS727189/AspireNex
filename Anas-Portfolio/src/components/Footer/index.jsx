import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GithubIcon from '@mui/icons-material/GitHub';
import "./footer.css";

const Footer = () => {
  return (
    <div className="w-full py-8 flex justify-center bg-[#0A1828]">
      <footer className="w-full max-w-5xl flex flex-col gap-3 items-center p-4 text-[#BFA181]">
        <h1 className="font-semibold text-xl text-[#BFA181]">Anas Khan</h1>
        <nav className="w-full max-w-3xl mt-2 flex flex-row gap-8 justify-center flex-wrap text-center text-lg">
          <a href="#about" className="foot-link">About</a>
          <a href="#skills" className="foot-link">Skills</a>
          <a href="#experience" className="foot-link">Experience</a>
          <a href="#projects" className="foot-link">Projects</a>
          <a href="#education" className="foot-link">Education</a>
        </nav>
        <div className="flex mt-4">
          <a href="https://github.com/Anas727189" target="_blank" rel="noopener noreferrer" className="mx-4 text-xl text-gray-800 hover:text-[#BFA181] transition duration-300 ease-in-out transform hover:scale-110"><GithubIcon /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-4 text-xl text-gray-800 hover:text-[#BFA181] transition duration-300 ease-in-out transform hover:scale-110"><TwitterIcon /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-4 text-xl text-gray-800 hover:text-[#BFA181] transition duration-300 ease-in-out transform hover:scale-110"><LinkedInIcon /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-4 text-xl text-gray-800 hover:text-[#BFA181] transition duration-300 ease-in-out transform hover:scale-110"><InstagramIcon /></a>
        </div>
        <p className="mt-6 text-sm text-gray-500 text-center">
          &copy; 2024 Anas Khan. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
