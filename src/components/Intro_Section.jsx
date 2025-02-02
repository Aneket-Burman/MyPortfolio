import React, { useState, useEffect } from "react";

const IntroSection = () => {
    const [introText, setIntroText] = useState("");
    const [index, setIndex] = useState(0);
    const fullText = "Hi, I'm ANEKET BURMAN.\nWelcome to my portfolio website.\nLet me show you ...";

    useEffect(() => {
        const timer = setInterval(() => {
            if (index < fullText.length) {
                setIntroText((prev) => prev + fullText[index]);
                setIndex((prevIndex) => prevIndex + 1); // Update state correctly with a function
            } else {
                clearInterval(timer);
            }
        }, 100); // Typing speed

        return () => clearInterval(timer);
    }, [index]);

    return (
        <section id="intro" className="w-[100%] min-h-screen flex flex-col justify-center items-start p-10 pl-16 rounded-md">
            <p className="text-5xl leading-snug whitespace-pre-line">
                {introText.split("ANEKET BURMAN").map((part, idx, arr) => (
                    <React.Fragment key={idx}>
                        {part}
                        {idx < arr.length - 1 && (
                            <span className="font-bold text-blue-500 uppercase">
                                ANEKET BURMAN
                            </span>
                        )}
                    </React.Fragment>
                ))}
            </p>
        </section>
    );
};

export default IntroSection;
