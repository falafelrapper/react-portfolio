import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages and getting the current param variable's value from URL
import { useParams, Link } from 'react-router-dom';


export default function ResumePage() {
  

  return (
    <>
      <footer className="resume">
        <embed id='resume' src="../content/resume.pdf" />
      </footer>
    </>
  );
}
