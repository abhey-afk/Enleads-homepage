import React from "react";
import Image from "next/image";

const Button = ({ type, title, icon, variant, full }) => {
  const getVariantClasses = (variant) => {
    switch (variant) {
      case 'apply_now':
        return 'bg-[#b8ef43] text-black border-0 rounded-none'; // Green background, no border-radius
      case 'contact_us':
        return 'bg-transparent text-black border border-black rounded-none ml-5'; // Transparent with 1px black border
      default:
        return ''; // Default styles if no matching variant is found
    }
  };

  return (
    <button
      className={`flexCenter gap-2.5 ${getVariantClasses(variant)} ${full ? 'w-full' : ''} py-3 px-4 text-sm`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  );
};

export default Button;
