import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Project from '../components/Project';
import { imageUrls } from "../components/js/pictureConstants";

export default function PortfolioPage() {

  useEffect(() => {
    const pdfFile = "../content/resume.pdf";
    const combinedFiles = [...imageUrls, pdfFile];
    preloadFiles(combinedFiles);
  }, []);

  return (
    <>
      <div className="portfolio-container">
      </div>
    </>
  );
}

function preloadFiles(files) {
  files.forEach((file) => {
    if (file.endsWith(".pdf")) {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", file, true);
      xhr.send();
    } else {
      const img = new Image();
      img.src = file;
    }
  });
}