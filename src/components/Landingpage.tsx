// import { motion, useViewportScroll, useTransform } from "framer-motion";
import Logo from "../components/Logo";
import CalEmbed from "../components/CalEmbed";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import { useRef } from "react";

function LandingPageCard(props: any): JSX.Element {
  const {containerRef, stack} = props;
  const [stackNumber, stackHeight] = stack || [];
  const minScale = (100 - (10 - stackNumber)) * 0.01;
  

  const ref = useRef(null);

  const { scrollYProgress: containerScrollProgress } = useScroll({ container: containerRef });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "5vh 5vh"] });
  
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 0.95], [1, 1, 1, minScale], { clamp: true });
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.95, 1], [0, 1, 1, 1], { clamp: true });
  // const translate = useTransform(scrollYProgress, [0, 0.95, 1], [0, -10, -10], { clamp: true });
  const translate = 0;

  return (<motion.div 
      ref={ref}
      //@ts-ignore
      style={{ 
        scaleX: scale, 
        scaleY: scale, 
        opacity: opacity,
        translateY: (stackNumber * 10) -10,
        transformStyle: 'preserve-3d'
      }} 
      className="card"
    >{props.children}</motion.div>)
}

export default function Landingpage({}) {

  const clarityRef = useRef(null);
  const analyseRef = useRef(null);
  const automateRef = useRef(null);

  // useMotionValueEvent(articleOneScrollProgress, "change", (latest) => {
  //   console.log(articleOneScrollProgress.current, articleOneScale.current);
  // })
  // const { scrollYProgress } = useViewportScroll();
  // const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  // console.log('scrollYProgress', scrollYProgress);
  // console.log('scale', scale);

  return (
    <div>
      <header>
        <div className="wrapper">
          <Logo />
          <div className="bg-image"></div>
        </div>
      </header>
      <section ref={clarityRef}>
        <div className="wrapper">
          <div className="header">
            <h2>Clarify</h2>
          </div>
          <div className="body">
            <LandingPageCard container={clarityRef} stack={[1,2]}>
              <div className="title">1. Workshop</div>
              Free customer journey workshop with a senior product designer or
              developer
            </LandingPageCard>
            <LandingPageCard container={clarityRef} stack={[2,2]}>
              <div className="title">2. Clarity</div>
              After this workshop you will have greater clarity on how your work
              impacts your customers. And will have several things you can
              automate.
            </LandingPageCard>
          </div>
        </div>
      </section>
      <section>
        <div className="wrapper">
          <div className="header">
            <h2>Analyse</h2>
          </div>
          <div className="body">
            <LandingPageCard container={analyseRef} stack={[1,3]}>
              <div className="title">3. Gather</div>
              Don’t have the right data? We help you set up collection.
            </LandingPageCard>
            <LandingPageCard container={analyseRef} stack={[2,3]}>
            <div className="title">4. Use</div>
              Have the right data but it’s not used? We help you set up the
              process.{" "}
            </LandingPageCard>
            <LandingPageCard container={analyseRef} stack={[3,3]}>
            <div className="title">5. Clarity</div>
              After this step will have better insights into customer processes
              and how they impact your bottom line.
            </LandingPageCard>
          </div>
        </div>
      </section>
      <section className="dark">
        <div className="bg-image"></div>
        <div className="wrapper">
          <div className="header">
            <h2>Automate</h2>
          </div>
          <div className="body">
            <LandingPageCard container={automateRef} stack={[1,3]}>
              <div className="card-bg">
              <div className="title">6. Choose</div>
                You pick a process, or step in a process, we build the
                automation.
              </div>
            </LandingPageCard>
            <LandingPageCard container={automateRef} stack={[2,3]}>
              <div className="card-bg">
              <div className="title">7. Simplify</div>
                Does it need a human in the loop? Or an AI? We’ll help you set
                that up.
              </div>
            </LandingPageCard>
            <LandingPageCard container={automateRef} stack={[3,3]}>
              <div className="card-bg">
              <div className="title">8. Operationalise</div>
                Need to self host? We’ll help you set up on prem.
              </div>
            </LandingPageCard>
          </div>
        </div>
      </section>
      <section>
        <div className="wrapper">
          <div className="header">
            <h2>Start now</h2>
          </div>
          <div className="">
            <CalEmbed />
          </div>
        </div>
      </section>
      <footer className="wrapper">
        <div>
          <a target="_blank" href="https://www.jesperbylund.com">
            Jesper
          </a>{" "}
          & Fredrik — Stockholm — {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}
