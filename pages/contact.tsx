import styles from "@/styles/Home.module.css";

import BasePageContent from "./base_page";

function ContactInfo() {
  return (
    <div className={styles.pageContent}>
      <p>
        Feel free to reach out to me through any of these links! 
        Though I&apos;ll be most responsive via email, you should check out some of my 
        projects on Github too! And my LinkedIn because why not.
      </p>
      <br></br>
      <p style={{ lineHeight: "2.0"}}>
        <b>Email</b>: minhalee999@gmail.com<br/>
        <b>Github</b>: <a href="https://github.com/minhaminha"><u>github.com/minhaminha</u></a><br/>
        <b>LinkedIn</b>: <a href="https://www.linkedin.com/in/minha-lee-432547130"><u>linkedin.com/in/minha-lee</u></a><br/>
      </p>
    </div>
  )
}

export default function Home() {
  return (BasePageContent({ pageContent: ContactInfo }));
}
