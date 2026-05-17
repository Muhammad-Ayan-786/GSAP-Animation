import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { useRef } from 'react';

const App = () => {

  /*
    useGSAP(() => {
      gsap.to(".box", {
        x: 500,
        delay: 1,
      })
    })
  */

  const gsapRef = useRef();

  useGSAP(() => {
    gsap.from(gsapRef.current, {
      x: 1000,
      delay: 1,
      rotate: 720
    })
  })

  return (
    <main>
      <div ref={gsapRef} className="box"></div>
    </main>
  )
}

export default App