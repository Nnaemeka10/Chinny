'use client'
import Image from "next/image"
import { Icon } from "react-feather";
import { ReactNode, useState } from "react";

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    IconDefault?: ReactNode;
    IconHover?: ReactNode;
    variant: string;
}

const Button = ({type, title, IconDefault, IconHover,variant}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
    return (
      <button 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flexCenter btn-gradient gap-3 transition-all duration-300 ease-in-out ${variant}`}
      type={type}
      >
        {isHovered ? IconHover : IconDefault}
          <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
      </button>
    )
  }

export default Button