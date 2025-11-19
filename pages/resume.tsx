import styles from "@/styles/Home.module.css";

import BasePageContent from "./base_page";

function Resume() {
  const expPoints = [
    "Created scalable and future-minded features requiring full stack development to meet partner requirements within a large open-source, legacy codebase.",
    "Managed database indices, wrote reusable queries and defined models using SQL, ES|QL and Django ORM to service a variety of data cleaning and analyzing features, leading to faster load times, more customizable filtering options and allowing several new features to function accurately.",
    "Designed and implemented UI changes for features new and old, prioritizing simplicity of user interactions, leading to increased positive feedback and user interaction in areas of bulk actions and self service data retrieval and more granular project configurations.",
    "Consolidated and modernized a legacy codebase’s patchwork of frontend libraries like KnockoutJS, jQuery and Django templates by swapping them out for more flexible and supported ones like Alpine.js/HTMX, leading to improved experiences for both end users who have their bug reports resolved quicker and frontend engineers who can make changes faster.",
    "Worked extensively with Git to facilitate CI workflows, including customizing github actions to automate repetitive tasks and enforce security measures during weekly manual code deploys.",
    "Reduced the number of high vulnerability security flaws as defined by the OWASP Top Ten to zero and significantly reduced the overall number of platform weaknesses by facilitating annual penetration tests and mitigating the uncovered issues thereafter.",
    "Frequently participated in asynchronous code review and periodic retrospective discussions to share and gain insights into ongoing and upcoming work, leading to more readable code and the adoption of new off-sprint practices such as a bug-crush week."
  ]
  const skills = [
    "Languages: Python, Javascript, Java, HTML/CSS", 
    "Frameworks: Django, Next.js, Bootstrap", 
    "Databases: PostgreSQL, CouchDB, Elasticsearch",
    "Tools: Git/Github Actions, PyCharm, Cursor"
  ]
  return (
    <div className={styles.pageContent}>
      <div>
        <h2>
          Minha Lee : Software Egnineer
        </h2>
        <br></br>
        <h3 style={{ textDecoration: "underline", marginBottom: "7px" }}>
          Experience
        </h3>
          <h5 style={{ color: "gray", marginBottom: "7px" }}>
            Software Engineer, Dimagi | Hybrid (Boston), June 2021 - August 2025
          </h5>
          <ul style={{ marginLeft: "20px"}}>
            {expPoints.map((exp, index) => (
              <li key={index} style={{ listStyleType: "disc", marginBottom: "5px"}}>
                { exp }
              </li>
            ))}
          </ul>
        <br></br>
        <h3 style={{ textDecoration: "underline", marginBottom: "7px" }}>
          Education
        </h3>
          <p style={{ marginBottom: "7px" }}>
            B.S in Biomedical Engineering, Boston University | Boston, MA | May 2020
          </p>
        <br></br>
        <h3 style={{ textDecoration: "underline", marginBottom: "7px" }}>
          Skills
        </h3>
            <ul style={{ marginLeft: "20px"}}>
            {skills.map((skill, index) => (
              <li key={index} style={{ listStyleType: "disc", marginBottom: "5px"}}>
                { skill }
              </li>
            ))}
          </ul>
      </div>
    </div>
  )
}

export default function Home() {
  return (BasePageContent({ pageContent: Resume }));
}
