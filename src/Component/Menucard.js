import React from "react";
import "./style.css";
const Menucard = ({ menuData }) => {
 

  return (
    <>
      <section className="main-card-container">
        
        {menuData.map((curElem) => {
            const {id, category, name, image, description} = curElem;
          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {id}
                    </span>
                    <span id="card-author subtle">{category}</span>
                    <h2 className="card-title"> {name}</h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read"> {id}</div>
                  </div>
                  <img
                    src={image}
                    alt="image"
                    className="card-media"
                  ></img>
                  <span className="card-tag subtle">order: now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Menucard;
