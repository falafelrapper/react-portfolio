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
        <Project 
        projectTitle='Breaking Bread' 
        projectLink='https://fast-brook-63532-7edb79d80522.herokuapp.com/' 
        projectImg='../images/portfolio/breaking-bread.jpg'
        projectGit='https://github.com/falafelrapper/breaking-bread'/>
        <Project 
        projectTitle='MVC Tech Blog'
        projectLink='https://fast-brook-63532-7edb79d80522.herokuapp.com/'
        projectImg='../images/portfolio/tech-blog.png'
        projectGit='https://github.com/falafelrapper/mvc-tech-blog' />
        <Project projectTitle='Project 2'></Project>
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