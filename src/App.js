import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

import Hero from "./Components/Hero/hero";
import BrandingVideo from "./Components/BrandingVideo/BrandingVideo";
import WhatWeDo from "./Components/WhatWeDo/WhatWeDo";
import OurDiff from "./Components/OurDifference/OurDiff";
import { motion, useAnimation } from "framer-motion";
import HowItWorks from "./Components/HowItWorks/HowItWorks";

function App() {
  const controls = useAnimation();
  return (
    <motion.div className="App" animate={controls}>
      <Navbar />
      <Hero />
      <BrandingVideo />
      <WhatWeDo />
      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "var(--secondary-color)",
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white",
          })
        }
        viewport={{amount: 0.4}}
      >
        <OurDiff />
      </motion.div>
      <HowItWorks/>
    </motion.div>
  );
}

export default App;
