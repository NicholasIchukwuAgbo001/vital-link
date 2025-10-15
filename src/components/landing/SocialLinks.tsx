import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const SocialLinks = () => {
  const socialLinks = [
    { name: "Twitter", href: "#", icon: <FaTwitter /> },
    { name: "Facebook", href: "#", icon: <FaFacebookF /> },
    { name: "LinkedIn", href: "#", icon: <FaLinkedinIn /> },
    { name: "GitHub", href: "#", icon: <FaGithub /> },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label={social.name}
        >
          <div className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
            <span className="text-lg">{social.icon}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
