'use client'

import React, { useState, useEffect } from 'react';
import '../css/TypingAnimation.css';

const TypingAnimation = () => {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const words = 
    [
        "Software Developer",
        "Front-End Developer",
        "UI/UX Designer",
        "Content creator"
    ];
    const typingDelay = 120;
    const endDelay = 2000;

    useEffect(() => {
        if (text.length < words[wordIndex].length) {
            setTimeout(() => {
                setText(words[wordIndex].slice(0, text.length + 1));
            }, typingDelay);
        } else {
            setTimeout(() => {
                setText('');
                setWordIndex((wordIndex + 1) % words.length);
            }, endDelay);
        }
    }, [text, words, wordIndex]);

    return (
        <div className="font-manrope text-2xl text-purple-400 max-sm:text-lg font-bold typing-animation">
            {text}
            <span className="cursor blink text-2xl font-bold text-white"></span>
        </div>
    );
};

export default TypingAnimation;
