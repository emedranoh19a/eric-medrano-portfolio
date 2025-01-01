"use client"
import Head from "next/head"
import TextReveal from "./components/effects/TextReveal"
import About from "./components/sections/About"
import Contact from "./components/sections/Contact"
import Header from "./components/sections/Header"
import Projects from "./components/sections/Projects"
import Skills from "./components/sections/Skills"
import Timeline from "./components/sections/Timeline"

import { Bai_Jamjuree } from "next/font/google"
const baiJamjuree = Bai_Jamjuree({ subsets: ["latin"], weight: ["400", "600"] })
export default function Home() {
  //tODO: verify every text. it should be jamboree
  return (
    <div className={`${baiJamjuree.className}`}>
      <Head>
        <title>Eric Medrano</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Header />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact
      />

      {/* <Hero /> */}
      {/* <div className="z-10 flex min-h-64 items-center justify-center rounded-lg border bg-white"> */}
      {/* </div> */}

      {/* <SkillsGlobe /> */}
      {/* <div className="h-10"> 

      */}

      {/* <Mac /> */}
      {/* </div> */}


    </div >
  )
}

function Hero() {
  return <section id="header" className="container">
    <div className="mx-auto w-fit">
      <div className="w-fit w-fit h-fit bg-red-500 flex flex-col items-center justify-center">
        <div className="w-full flex justify-center">
          <p className="block text-center whitespace-nowrap">

            Hi! I&apos;m Eric
          </p>

        </div>
        <TextReveal words="On a journey from ‘Hello World’ to ‘Hello Dream Job.’ Let’s build something amazing (and functional) together!" />
      </div>
    </div>

    The new weapon to your front-end arsenal.</section>
}

/**

Hola GPT, me han planteado la siguiente pregunta (no tengo una buena idea de lo que puedo responder, pero se me ocurrio lo que te mencionaré),
y he pensado en mencionar el uso de useEffect en React. 
En tutoriales esenciales de React, se te enseña como el hook de useEffect corre por primera vez. 
Para hacer esto, lo que hace la mayoría de los tutoriales es llamar una función asíncrona, que corre por primera vez.
el problema es que en las aplicaciones de muchos tutoriales, muchas funciones api son llamadas para renderizar la página.
Esto me llevóa ser víctima de este malentendido, y cada vez que quería hacer una petición API, usaba el hook useEffect.
El gran problema es que el hook useEffect, no es un hook hecho para hacer una petición API, sino mas bien, un hook para sincronizar UI con otros hooks.
El comportamiento de algunas aplicaciones era complicado y dificil de notar.
Por ejemplo, el hook era llamado varias veces cuando los datos deseados eran los mismos.


 * Projectos:
 *  1. Udemy:
 *  React Jonas.
 *   
 *  WebDev: Angela Yu (?)
 *  
 *  2. Front End Mentor:
 *   newbie
 *   beginner
 * ・・ordenar toooodo
 *   intermediate
 *   advanced
 *   guru
 *  TailwindCSS
 *  3: Personal:
 *   REDA舞神楽　
 * 
 * 
 * //Certificaciones que quiero sacar:
 * Web Design Essentials
 * Web Design Advanced
 * IT Passport
 * IT Basic
 * IT Advanced.
 * N1
 * Kanken 5 (6to de primaria)
 * Kanken 4
 * Kanken 3
 * Kanken Pre-2 (Debería poder leer rápidamente)
 * Quiero el curso de Tanstack Query (y otros)
 */
