import styles from "@/styles/Home.module.css";
import Link from 'next/link';

import BasePageContent from "./base_page";


function Resume() {
  const somePoints = [
    "Designing and implementing features within a legacy codebase",
    "Managing database indices and writing reusable queries",
    "Modernizing frontend libraries to improve user experience",
    "Finding and mitigating security vulenerabilities"
  ]
  const skills = [
    "Python", "Django", "PostgreSQL", "Git", 
    "Javascript", "Bootstrap", "Elasticsearch", "Java", 
    "jQuery", "CouchDB",  "HTML/CSS"
  ]
  return (
    <div className={styles.pageContent}>
      <div>
        <h1>
          Quick Overview: Fullstack Software Engineer
        </h1>
        <br></br>
        <h3 style={{ marginBottom: "7px" }}>
          I am a <u>Software Engineer</u> with 4 years of experience in
          <b> fullstack development, database management, and UI/UX design</b>.
          Some key experiences include:
        </h3>
        <br></br>
          <ul style={{ marginLeft: "20px"}}>
            {somePoints.map((point, index) => (
              <li key={index} style={{ listStyleType: "disc", marginBottom: "5px"}}>
                <p>
                  { point }
                </p>
              </li>
            ))}
          </ul>
        <br></br>
        <h3 style={{ marginBottom: "7px" }}>
          Here&apos;s a few <b>skills</b> you might be interested in:
        </h3>
            <ul style={{ marginLeft: "20px"}}>
            {skills.map((skill, index) => (
              <li key={index} style={{ listStyleType: "disc", marginBottom: "5px"}}>
                <p>
                  { skill }
                </p>
              </li>
            ))}
          </ul>
        <br></br>
        <h3 style={{ marginBottom: "7px" }}>
          See my full <Link key={12} href={"/resume"}><u>Resume</u></Link> for more details!
        </h3>
      </div>
    </div>
  )
}


export default function Home() {
  return BasePageContent({ pageContent: Resume });
}