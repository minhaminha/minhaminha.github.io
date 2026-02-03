import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from 'next/link';
import { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
// TODO: Change fonts and general clean up

function SiteHeader(siteName="Minha Lee") {
  // Returns tab name and site icon
  // TODO: Make it scroll really fast through a bunch of icons/site name iterations
  return (
    <Head>
      <title>{siteName}</title>
      <meta name="description" content="The coding portfolio of Minha Lee" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/chicken.ico" /> 
    </Head>
  )
}

function WelcomeText() {
  // Returns formatted welcome text
  // TODO: Make text dynamic - have it type itself out on first load
  const about = `This is my*  Portfolio site. *Minha Lee`
  const sub_about = `Powered by Github and created by Me with Next.js.`
  const sub_about_2 = `Interactive portfolio* additionally powered by Replay.js (*Playable!).`
  const sub_about_3 = `(This site is not yet optimized for mobile viewing)`

  return (
    <div className={styles.welcomeText}>
      <h1>
        {about}
      </h1>
      <h2>
        {sub_about}
      </h2>
      <h2>
        {sub_about_2}
      </h2>
      <h6>
        {sub_about_3}
      </h6>
    </div>
  )
} 

function ProfilePic() {
  return (
    <div className={styles.profilePics}>
      <div className={styles.ppSingle}>
        <a 
          href="https://rotatingsandwiches.com/"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            src="/me.jpg"
            alt="Me"
            width={155}
            height={155}
            style={{ borderRadius: "25px"}}>
          </Image>
        </a>
      </div>
      <div className={styles.ppSingle}>
        <a href="https://archive.org/stream/TheBlackCat_339/TheBlackCatByEdgarAllanPoe_djvu.txt"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            src="/bimmy.jpeg"
            alt="Bee Me"
            width={155}
            height={155}
            style={{ borderRadius: "75px"}}>
          </Image>
        </a>
      </div>
    </div>
    
  )
}

function SideBar() {
  const pages = [{id: 0, name: 'Home', class:styles.pageLink},
                  {id: 1, name: 'Resume', class:styles.pageLink}, 
                  {id: 2, name: 'Projects', class:styles.pageLink}, 
                  {id: 3, name: 'Contact', class:styles.pageLink}, 
                  {id: 4, name: 'Interactive_Portfolio', class:styles.specialLink}];
  const icons = [{id: 5, name: "linkedin", link: "https://www.linkedin.com/in/minha-lee-432547130/"}, 
                 {id: 6, name: "github", link: "https://github.com/minhaminha"},
                 {id: 7, name: "crouton", link: "https://crouton.net/"}];
  const socialLinks = (
    <li>
      {
        icons.map((icon) => (
          <a
            key={icon.id}
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLinks}
          >
            <Image
              aria-hidden
              src={`/${icon.name}.svg`}
              alt="Socials"
              width={25}
              height={25}
            />
          </a>
        ))
      }
    </li>
  )
                
  const sideBarItems = (
    <ul>
      {
        pages.map((page) => (
          <li key={page.id}>
            <Link
              key={page.id}
              href={page.name.includes("Home") ? "/" : "/" + page.name.toLowerCase()}
            >
              <p className={page.class}>{page.name.includes("_") ? page.name.replace("_", " ") : page.name}</p>
            </Link>
          </li>
        ))
      }
      {socialLinks}
    </ul>
  )

  return (
    <div className={styles.sidebar}>
      {sideBarItems}
    </div>
  )
}

function DefaultPlaceholder() {
  return (
    <div className={styles.pageContent}>
      Something!
    </div>
  )
}

export default function BasePageContent({ pageContent: PageContent = DefaultPlaceholder }) {
  return (
    <>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        {SiteHeader()}
        <div className={styles.topBump}>
          Spacerrrr
        </div>
        <div className={styles.flexpagecontent}>
          <div className={styles.fixedColumn}>
            <div className={styles.ppContainer}>
              {ProfilePic()}
            </div>
            {SideBar()}
          </div>
          <div className={styles.scrollColumn}>
            {WelcomeText()}
            <PageContent />
          </div>
        </div>
      </div>
    </>
  );
}