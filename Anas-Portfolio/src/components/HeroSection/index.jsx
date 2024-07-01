import React from "react";
import Typewriter from 'typewriter-effect';
import myPhoto from "../../assets/Me.jpg";
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div id="about" className="bg-[#FE3A4A] min-h-screen flex flex-col md:flex-row p-10 relative z-10">
            <div id="right" className="order-1 md:order-2 flex justify-center items-center md:w-1/2 mt-10 md:mt-0 md:-mt-16 ">
                <img src={myPhoto} alt="My Photo" className="w-96 h-96 rounded-full border-4 border-[#FEC501] shadow-lg" />
            </div>

            <div id="left" className="order-2 md:order-1 flex flex-col justify-center items-start text-white space-y-4 md:w-1/2 md:-mt-16">
                <h2 className="text-3xl font-bold leading-tight">
                    <span className="text-5xl">H</span>i, I am 
                    <span className="inline-break">
                    <span className="text-5xl font-bold text-red-800">{" <A"}</span>
                    nas Khan 
                    <span className="text-5xl font-bold text-red-800">{" />"}</span>
                    </span>
                </h2>
                <div className="flex items-center text-2xl font-semibold leading-relaxed">
                    <span>I am a </span>
                    <span className="text-[#FEC501] ml-2 type-right">
                        <Typewriter
                            options={{
                                strings: ["Full Stack Web Developer", "CP Enthusiast", "Python Developer", "Programmer"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                </div>
                <h4 className="text-xl leading-relaxed">
                    I am a programmer with a calm demeanor and a resilient "never die" attitude. Known for my composure, I excel as a team player, motivated and versatile in tackling new challenges. My passion for learning and commitment to high-quality results drive me to contribute meaningfully and achieve excellence.
                </h4>
                <a className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-24 rounded-full shadow-lg transform transition-transform hover:scale-105" href="https://drive.google.com/file/d/1sRdQvQc-rUkA5KFw4YGbMzraqjZ73DGn/view?usp=drive_link" target="display">
                    My Resume
                </a>
            </div>
        </div>
    );
};

export default HeroSection;
