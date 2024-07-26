import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPhone, FiMail } from "react-icons/fi";

const ContactHeader: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white py-2">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <FiPhone className="mr-2" />
          <span>Call us: +1 234 567 890</span>
        </div>
        <div className="flex items-center">
          <FiMail className="mr-2" />
          <span>Email: info@alphadigitalgroup.com</span>
        </div>
      </div>
    </header>
  );
};

export default ContactHeader;
