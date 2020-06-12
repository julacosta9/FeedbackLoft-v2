import React from "react";
import logoPattern from "./../images/fl-background.png";

const Footer = () => {

    let footerStyle = {
        backgroundImage: 'url(' + logoPattern + ')',
      };

    return (
        <div style={footerStyle} className= "flex flex-col relative overflow-hidden items-center justify-between bg-fl-gray px-6 py-10 mt-20 text-white">
            {/* <img src={logoPattern} className="absolute inset-0" /> */}
            <div className="font-mono font-bold font-white">Feedback Loft © 2020</div>
            <div className="font-mono font-bold font-white">&lt;/&gt; with 🤍 in San Diego, CA</div>
            <a href="https://github.com/julacosta9/FeedbackLoft-v2" className="font-mono font-bold hover:text-fl-mint transition ease-in-out duration-150" target="_blank">GitHub</a>
        </div>
    );
};

export default Footer;