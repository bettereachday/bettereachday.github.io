// import { motion, useViewportScroll, useTransform } from "framer-motion";
import Logo from "../components/Logo";
import CalEmbed from "../components/CalEmbed";
export default function Landingpage({}) {
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
      <section>
        <div className="wrapper">
          <div className="header">
            <h2>Clarify</h2>
          </div>
          <div className="body">
            <article>
              <div className="title">1. Workshop</div>
              Free customer journey workshop with a senior product designer or
              developer
            </article>
            <article>
            <div className="title">2. Clarity</div>
              After this workshop you will have greater clarity on how your work
              impacts your customers. And will have several things you can
              automate.
            </article>
          </div>
        </div>
      </section>
      <section>
        <div className="wrapper">
          <div className="header">
            <h2>Analyse</h2>
          </div>
          <div className="body">
            <article>
            <div className="title">3. Gather</div>
              Don’t have the right data? We help you set up collection.
            </article>
            <article>
            <div className="title">4. Use</div>
              Have the right data but it’s not used? We help you set up the
              process.{" "}
            </article>
            <article>
            <div className="title">5. Clarity</div>
              After this step will have better insights into customer processes
              and how they impact your bottom line.
            </article>
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
            <article>
              <div className="card">
              <div className="title">6. Choose</div>
                You pick a process, or step in a process, we build the
                automation.
              </div>
            </article>
            <article>
              <div className="card">
              <div className="title">7. Simplify</div>
                Does it need a human in the loop? Or an AI? We’ll help you set
                that up.
              </div>
            </article>
            <article>
              <div className="card">
              <div className="title">8. Operationalise</div>
                Need to self host? We’ll help you set up on prem.
              </div>
            </article>
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
