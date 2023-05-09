import React from "react";
import "./MisyonAbout.css";

function MisyonAbout ({ title, content }) {
  return (
    <section className="misyon">
      <div className="misyon__container">
        <h2 className="misyon__title">{title}</h2>
        <p className="misyon__description">
          {content}
        </p>
      </div>
    </section>
  );
};

export default MisyonAbout;
