import React from "react";

const Contact = ({ data }) => {
  if (!data || !data.contactPage) {
    return <p>Data not provided</p>;
  }

  const { title, description, actions, style } = data.contactPage;

  return (
    <div className={style?.container}>
      <h1 className={style?.title}>{title}</h1>
      <p className={style?.description}>{description}</p>

      <div className={style?.actionsContainer}>
        {actions?.email && actions.email.link && (
          <a
            href={`mailto:${actions.email.link}`}
            className={actions.email.style}
          >
            {actions.email.text || "Email Us"}
          </a>
        )}

        {actions?.number && actions.number.link && (
          <a
            href={`tel:${actions.number.link}`}
            className={actions.number.style}
          >
            {actions.number.text || "Call Us"}
          </a>
        )}
      </div>
    </div>
  );
};

export default Contact;
