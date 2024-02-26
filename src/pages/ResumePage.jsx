import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';


export default function ResumePage() {
  

  return (
    <>
      <div className="resume">
        <embed id='resume' src="../content/resume.pdf" />
      </div>
    </>
  );
}
