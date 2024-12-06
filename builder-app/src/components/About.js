import React from "react";
import { useState, useEffect } from "react";
import validateStyles from "../utils/checkJsonKeys";

function About({ style, content, color }) {
  const [isStyleValid, setIsStyleValid] = useState(true); // Track style validity

  const requiredStyles = [
    "section",
    "container",
    "imageContainer",
    "image",
    "textContainer",
    "title",
    "subtitle",
    "highlight",
    "description",
    "buttonContainer",
    "button",
  ];

  useEffect(() => {
    // Validate styles on mount or when style prop changes
    const valid = validateStyles(style, requiredStyles);
    setIsStyleValid(valid);
  }, [style]);

  if (!isStyleValid) {
    return (
      <div className="bg-red-100 text-red-600 py-14 ">
        <p>Error: Navigation component styles are missing or invalid.</p>
      </div>
    );
  }

  return (
    <section
      id="about"
      className={`bg-[${color.primaryColor}] text-[${color.fontColor}] ${style.section}`}
    >
      <div className={style.container}>
        {/* Left Side: Image */}
        <div className={style.imageContainer}>
          <img
            src={content.imageSrc}
            alt={content.altText}
            className={`border-[${color.secondaryColor}] ${style.image}`}
          />
        </div>

        {/* Right Side: Text */}
        <div className={style.textContainer}>
          <h1 className={`text-[${color.fontColor}] ${style.title}`}>
            {content.title}
          </h1>
          <h2 className={`text-[${color.secondaryColor}] ${style.subtitle}`}>
            {content.subtitle}{" "}
            <span
              className={`text-[${color.secondaryColor}] ${style.highlight}`}
            >
              {content.highlightedText}
            </span>
          </h2>
          <p className={`text-[${color.fontColor}] ${style.description}`}>
            {content.description}
          </p>

          {/* Action Button */}
          <div className={style.buttonContainer}>
            <a
              href={content.button.url}
              download
              className={`bg-[${color.secondaryColor}90] text-[${
                color.fontColor
              }] hover:bg-[${color.secondaryColor}]  ${`${style.button}`}`}
            >
              {content.button.text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
