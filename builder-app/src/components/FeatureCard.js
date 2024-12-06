import React from "react";

const FeatureCard = ({
  imageSrc,
  altText,
  title,
  tags,
  description,
  style,
}) => {
  return (
    <div className={style.card}>
      {/* Image Section */}

      <img src={imageSrc} alt={altText} className={style.image} />

      {/* ConstumCard */}

      {/* Content Section */}
      <div className={style.content}>
        <h3 className={style.cardTitle}>{title}</h3>

        {/* Tags */}
        <div className={style.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={style.tag}>
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className={style.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
