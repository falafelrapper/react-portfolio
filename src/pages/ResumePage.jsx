import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { imageUrls } from "../components/js/pictureConstants";


export default function ResumePage() {


  return (
    <>
      <div className="resume">
        <embed id='resume' src="../content/resume.pdf" />
      </div>
    </>
  );
}
