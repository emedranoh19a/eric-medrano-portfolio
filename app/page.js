"use client"
import About from "./components/sections/About"
import Contact from "./components/sections/Contact"
import Header from "./components/sections/Header"
import Projects from "./components/sections/Projects"
import Skills from "./components/sections/Skills"
import Thanks from "./components/sections/Thanks"
import Timeline from "./components/sections/Timeline"

import { Bai_Jamjuree } from "next/font/google"
const baiJamjuree = Bai_Jamjuree({ subsets: ["latin"], weight: ["400", "600"] })

export default function Home() {
  return (
    <div className={`${baiJamjuree.className}`}>
      {/* <Head>
        <title>Eric Medrano</title>
        {/* <link rel="icon" href="/favicon.ico" /> 
    </Head> */}

      <Header />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Thanks />

    </div >
  )
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
