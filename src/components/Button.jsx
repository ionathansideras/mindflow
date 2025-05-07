import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

export default function Button({
    className,
    href,
    children,
    onClick,
    px,
    white,
}) {
    const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
        px || "px-7"
    } ${white ? "text-n-8" : "text-n-1"} ${className} cursor-pointer`;

    const spanClasses = `relative z-10 `;

    const renderButton = () => (
        <button className={classes}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </button>
    );
    return renderButton();
}
