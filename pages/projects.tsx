import styles from "@/styles/Home.module.css";
import Image from "next/image";

import BasePageContent from "./base_page";

function Projects() {
  return (
    <div className={styles.pageContent}> 
      <p>
        A sample of some personal projects I&apos;ve worked on.
      </p>
      <br></br>
      <h2>
        Portfolio Site
      </h2>
        <p>
          This portfolio site was made using Next.js and hosted on Github, mostly so that I could
          have some hands on experience working with a web framework that wasn&apos;t Django and also
          to move away from using the now defunct Gatsby.js.
        </p>
        <br></br>
        <p>
          This site also features an interactive version of the portfolio I initially created 
          during the pandemic, which you can check out in the side bar. Powered by the lightweight
          browser enginer Replay.js (mostly responsible for the refresh logic) this static site 
          was a faun way to learn about browser based game dev and design.
        </p>
        <br></br>
        <Image
          src="/desktopgif500.gif"
          alt="interactive_portfolio_gif"
          width={500}
          height={300}
          style={{ borderRadius: "25px"}}>
        </Image>
      <br></br>
      <br></br>
      <h2>
        Discord-Pac
      </h2>
        <p>
          This was also another pandemic project I learned to learn about Discord bots, APIs 
          and Python libraries. It operates by sending a continous stream of self-deleting messages 
          in a Discord channel with updated frames to create the illustion of animation.
          Users control the action by sending inputs as you would a regular message. 
          You can checkout the implementaion details in the <a href={"https://github.com/minhaminha/Discord-Pac"}><u>Github repository</u></a>.
        </p>
        <br></br>
        <Image
          src="/discordpac.gif"
          alt="discord_pac_gif"
          width={500}
          height={300}
          style={{ borderRadius: "25px"}}>
        </Image>
    </div>
  )
}

export default function Home() {
  return (BasePageContent({ pageContent: Projects }));
}
