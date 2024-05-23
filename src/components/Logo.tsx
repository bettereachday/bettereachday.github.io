import { useRef } from "react";
import { motion, stagger } from "framer-motion"

export default function Logo({}){     
    
    return (<h1 className="logo">
        <motion.div
            animate={{
                translateY: 0,
                opacity: 1,
            }}
            initial={{
                translateY: 10,
                opacity: 0
            }}
            transition={{delay: 0}}
        >Better</motion.div>
        <motion.div
        animate={{
            translateY: 0,
            opacity: 1,
        }}
        initial={{
            translateY: 10,
            opacity: 0
        }}
        transition={{delay: 0.1}}
        >Each</motion.div>
        <motion.div
        animate={{
            translateY: 0,
            opacity: 1,
        }}
        initial={{
            translateY: 10,
            opacity: 0
        }}
        transition={{delay: 0.2}}
        >Day</motion.div>
    </h1>)

}