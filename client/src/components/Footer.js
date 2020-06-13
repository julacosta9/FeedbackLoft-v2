import React from "react";
import logoPattern from "./../images/feedbackloft-logo-icon.png";

const Footer = () => {

    let footerStyle = {
        backgroundImage: 'url(' + logoPattern + ')',
        backgroundRepeat: 'repeat',
        backgroundSize: '60px'
      };

    return (
        <div style={footerStyle} className= "flex flex-col overflow-hidden items-center justify-between bg-fl-darkGray px-6 py-5 md:py-10 mt-20 text-white text-sm md:text-base">
            <div className="font-mono font-bold font-white">Feedback Loft © 2020</div>
            <div className="font-mono font-bold font-white">&lt;/&gt; with 🤍 in San Diego, CA</div>
            <a href="https://github.com/julacosta9/FeedbackLoft-v2" className="font-mono font-bold hover:text-fl-mint transition ease-in-out duration-150" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
    );
};

export default Footer;

