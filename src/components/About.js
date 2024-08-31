import React from "react";

export default function About(props) {
  
  let myStyle ={
    color: props.mode === "dark"?"white":"black",
    backgroundColor: props.mode === 'dark'?'#173d75':'white',
    border: '2px solid',
    borderColor : props.mode === "dark"?"white":"black"
  }
  return (
    <div className="container my-3" style={{ color: myStyle.color, backgroundColor: myStyle.backgroundColor }}>
    <h2>About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Operations can be done</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul>
                <li>Converting to UpperCase</li>
                <li>Converting to LowerCase</li>
                <li>Clearing the input text</li>
                <li>Getting the previous text</li>
                <li>Copying the text to clipboard</li>
                <li>Getting Audio for the input text</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Source</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Taken the inspiration from Code with harry Youtube Channel from React Playlist.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Creator</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            Created by <strong>Addala Veera Vardhan</strong>. Pursuing B. Tech 4th yr CSE branch with specialization of AI & ML in CMR College of Engineering 
            & Technology. Projects done till now BudgetCard, Pothole Filler, Cotton Plucking Machine, TextUtils.  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
