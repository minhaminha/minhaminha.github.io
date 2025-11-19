import styles from "@/styles/Home.module.css";
import Image from "next/image";

import BasePageContent from "./base_page";

function portfolioLink() {
  return (
    <div className={styles.pageContent}>
      <p>
        This was a short little pandemic project I made to make my original site more fun and inviting.
        It has since been minimally updated to contain more relevant information. 
        Click the image below to open the game in a new tab.
        Functional for both desktop and mobile viewing!        
      </p>
      <br></br>
      <p>
        <u>HOW TO PLAY</u>: Navigating using the arrow keys, WASD or simply swiping 
        in the direction you want to go on mobile. Stand on purple tiles to open text boxes
        and learn more about a particular topic. Have fun!
      </p>
      <br></br>
      <a 
        href="/game.html"
        target="_blank"
        rel="noopener noreferrer">
        <Image
          src="/linkimage.png"
          alt="interactive_portfolio_link"
          width={500}
          height={300}
          style={{ borderRadius: "25px"}}>
        </Image>
      </a>
    </div>
  )
}

export default function Home() {
  return (BasePageContent({ pageContent: portfolioLink }));
}
