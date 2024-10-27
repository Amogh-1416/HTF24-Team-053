import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import cross from './cross.png'

const Synthesia = ({ close }) => {
  return (

      <div style={componentStyle}>
        <div style={closeButtonStyle} onClick={close}>  {/* Close button */}
        <img src={cross} alt="Close" className="size-8"/>
        </div>
        <h2 style={{ textAlign: "center", fontSize: "2rem", color:"#FFFFFF" }}>Synthesia</h2>
        <p style={{ textAlign: "center", color: "#FFFFFF", fontSize: "1rem" }}>
          (Examples: marketing plans, course reading, research notes, meeting transcripts, sales documents, etc.)
        </p>
        <div style={uploadBoxStyle}>
          <div style={{ fontSize: "1.5rem", color: "#ccc" }}>Upload sources</div>
          <p style={{ fontSize: "1rem" }}>Drag and drop or <span style={{ color: "#1a73e8", cursor: "pointer" }}>choose file</span> to upload</p>
          <p style={{ fontSize: "0.9rem", color: "#999" }}>
            Supported file types: PDF, .txt, Markdown, Audio (e.g. mp3)
          </p>
        </div>
        <div style={buttonRowStyle}>
          <button style={buttonStyle}>Google Drive</button>
          <button style={buttonStyle}>Link</button>
          <button style={buttonStyle}>Paste text</button>
        </div>
        <div style={buttonRowStyle}>
          <button style={buttonStyle}>Google Docs</button>
          <button style={buttonStyle}>Website</button>
          <button style={buttonStyle}>Copied text</button>
        </div>
        <div style={progressBarContainerStyle}>
          <div style={progressBarStyle}></div>
        </div>
        <div style={{ textAlign: "right", fontSize: "1rem", color: "#999" }}>Source limit</div>
        <div className="flex flex-left mt-10">
          <Link to="/notebook" className="text-gray-300 bg-gray-700 hover:bg-white hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex flex-end">Continue</Link>
        </div>
      </div>

  );
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#1e1e2f"
};

const componentStyle = {
  width: "90%",  
  maxWidth: "1200px",  
  padding: "40px",
  border: "1px solid #444",
  borderRadius: "10px",
  backgroundColor: "#2e2e3e",
  position: "relative",
};

const uploadBoxStyle = {
  border: "2px dashed #555",
  borderRadius: "10px",
  padding: "40px 20px",
  textAlign: "center",
  margin: "30px 0",
};

const buttonRowStyle = {
  display: "flex",
  justifyContent: "space-around",
  marginBottom: "20px",
  gap: "15px",
};

const buttonStyle = {
  padding: "15px 30px",  // Increased padding for larger buttons
  backgroundColor: "#f0f0f0",
  border: "1px solid #ddd",
  borderRadius: "5px",
  color: "#333",
  cursor: "pointer",
  flex: 1,
  textAlign: "center",
  fontSize: "1rem",  // Increased font size
};

const progressBarContainerStyle = {
  height: "8px",  // Increased height for a thicker progress bar
  backgroundColor: "#3a3a4a",
  borderRadius: "5px",
  overflow: "hidden",
  marginTop: "30px",
};

const progressBarStyle = {
  width: "0%",
  height: "100%",
  backgroundColor: "#1a73e8",
};

const closeButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  color: '#888', // Light gray or your preferred color
  cursor: 'pointer',

};



export default Synthesia;
