import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { imageUrls } from "../components/js/pictureConstants";


export default function AboutPage() {

  useEffect(() => {
    const pdfFile = "../content/resume.pdf";
    const combinedFiles = [...imageUrls, pdfFile];
    preloadFiles(combinedFiles);
  }, []);

  return (
    <div className="about-me">
      <img id='zach-pic' src="../images/about-me.png" alt="Zachary Roy" />
      <h2>About Me</h2>
      <p>
        I am a high school graduate who has spent my schooling
        focusing on the arts. My primary interests are within the music arts, video games,
        and Japanese culture. For music, this  includes drumming and percussion, playing
        guitar/bass, compositions and singing. In my free time I like to work with computers a
        lot, this can include things such as building them, modding programs such as video
        games, or studying the ins and outs of each part that goes into it. Because of this,
        I have an extensive knowledge on how computers work and how to troubleshoot and fix
        problems quickly. I enjoy meeting and communicating with people and I am always eager
        for a job that can offer this opportunity. As an organized individual, I am capable of
        staying focused on various tasks and always look forward to opportunities that new
        challenges bring.
      </p>
    </div>
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
