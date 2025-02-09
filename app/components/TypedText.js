"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedText() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Web Developer", "Competitive Programmer", "Tech Enthusiast"],
            typeSpeed: 50,
            backSpeed: 25,
            loop: true,
        });

        return () => typed.destroy();
    }, []);

    return <span ref={el} className="text-4xl text-blue-500 font-bold" />;
}
