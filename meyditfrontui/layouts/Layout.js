import React from "react";
import Navbar from "./Navbar.js";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

const Layout = ({ children }) => {
    const router = useRouter();
    const variants = {
        out: {
          opacity: 0,
          y: 40,
          transition: {
            duration: 0.75
          }
        },
        in: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.75,
            delay: 0.5
          }
        }
    };
  return (
    <>
    <div className="content">
        <Navbar />
    <AnimatePresence mode='wait' initial={false}>
    <motion.div
        key={router}
        variants={variants}
        animate="in"
        initial="out"
        exit="out"
    >      
         {children}
    </motion.div>
    </AnimatePresence>
    </div>
    </>
  );
};
export default Layout;
