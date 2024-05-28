// import { motion, useViewportScroll, useTransform } from "framer-motion";
import Logo from "../components/Logo";
import CalEmbed from "../components/CalEmbed";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import { useRef } from "react";

function LandingPageCard(props: any): JSX.Element {
  const {containerRef, stack} = props;
  const [stackNumber, stackHeight] = stack || [];
  const minScale = (100 - (5 - stackNumber)) * 0.01;

  const ref = useRef(null);

  const { scrollYProgress: containerScrollProgress } = useScroll({ container: containerRef });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 22vh"] });
  
  const scale = useTransform(scrollYProgress, [0, 0.97, 0.99], [1, 1, minScale], { clamp: true });
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1], { clamp: true });
  // const translate = useTransform(scrollYProgress, [0, 0.95, 1], [0, -10, -10], { clamp: true });
  const translate = 0;

  return (<motion.div 
      ref={ref}
      //@ts-ignore
      style={{ 
        willChange: 'transform, opacity',
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
              <div className="title">2. Process map</div>
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
              Don&apos;t have the right data? We help you set up collection.
            </LandingPageCard>
            <LandingPageCard container={analyseRef} stack={[2,3]}>
            <div className="title">4. Use</div>
              We help you set up your data process so you have actionable data.
            </LandingPageCard>
            <LandingPageCard container={analyseRef} stack={[3,3]}>
            <div className="title">5. Data funnel</div>
            After this step you will have better insights into all targeted business processes and how they impact your bottom line
            </LandingPageCard>
          </div>
        </div>
      </section>
      <section className="dark">
        <div className="wrapper bg-image"></div>
        <div className="wrapper">
          <div className="header">
            <h2>Automate</h2>
          </div>
          <div className="body">
            <article className="card">
              <div className="card-bg"></div>
              <div className="title">6. Choose</div>
                Pick a manual process or step in that process, we will build automation

            </article>
            <article className="card">
              <div className="card-bg"></div>
              <div className="title">7. Simplify</div>
                Does it need a human in the loop? Or an autonomous AI? We will help you set up that pipeline.
            </article>
            <article className="card">
              <div className="card-bg"></div>
              <div className="title">8. Operationalise</div>
                Need to self host? We&apos;ll help you set up on prem.
            </article>
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="wrapper">
          <div className="header">
            <h2>Start now</h2>
          </div>
          <div className="calContainer">
            <CalEmbed />
          </div>
        </div>
      </section>
      <section>
        <div className="wrapper">
        <div className="authors">
          <div>
            <h3>Jesper Bylund</h3>
            <h4>Product & Design</h4>
            <p>Decades of product & design experience. Has designed games, health tech, CLI tools, and flight control for autonomous flying robot taxis.</p>
            <p><a href="mailto:jesper@bettereachday.co">jesper@bettereachday.co</a></p>
          </div>
          <div>
            <h3>Fredrik Paulin</h3>
            <h4>Development</h4>
            <p>Decades of development & entrepreneurship. Has built social networks, programmed bank mainframes, and launched many companies.</p>
            <p><a href="mailto:fredrik@bettereachday.co">fredrik@bettereachday.co</a></p>
          </div>
        </div>
        </div>
      </section>
      <footer className="wrapper">
        <div>
            Better Each day — Stockholm & Berlin — {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}
