import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Project from '../components/Project';
import { imageUrls } from "../components/js/pictureConstants";

export default function PortfolioPage() {

  return (
    <>
      <div className="portfolio-container">
        <Project 
        projectTitle='Breaking Bread' 
        projectLink='https://agile-cove-66310-81bc545fcfa7.herokuapp.com/' 
        projectImg='/images/portfolio/breaking-bread.jpg'
        projectGit='https://github.com/falafelrapper/breaking-bread'/>
        <Project 
        projectTitle='Movie Recommender'
        projectLink='https://falafelrapper.github.io/movie-recommender/'
        projectImg='/images/portfolio/movie-recommender.png'
        projectGit='https://github.com/falafelrapper/movie-recommender' />
        <Project 
        projectTitle='MVC Tech Blog'
        projectLink='https://fast-brook-63532-7edb79d80522.herokuapp.com/'
        projectImg='/images/portfolio/tech-blog.png'
        projectGit='https://github.com/falafelrapper/mvc-tech-blog' />
        <Project 
        projectTitle='Coding Quiz'
        projectLink='https://falafelrapper.github.io/code-quiz/'
        projectImg='/images/portfolio/code-quiz.png'
        projectGit='https://github.com/falafelrapper/code-quiz' />
      </div>
    </>
  );
}
