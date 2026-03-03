'use client'
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import HomeStats from "./components/HomeStats";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Programs from "./components/Programs";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if loader has already been shown
    const hasLoaded = localStorage.getItem("hasLoaded");

    if (hasLoaded) {
      // Skip loader if already shown
      setLoading(false);
    } 
    else {
      // Show loader once, then mark as shown
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem("hasLoaded", "true");
      }, 2000); // loader duration
      return () => clearTimeout(timer);
    }
  }, []);

//     useEffect(() => {
//   // For testing: simulate loader delay
//   const timer = setTimeout(() => setLoading(false), 2000);
//   return () => clearTimeout(timer);
// }, []);



  return (
    <div className="">
      {loading ? (
        <Loader />
      ) : (
        <>
          
          <Hero />
          <HomeStats />
          <Mission />
          <Programs />
          <Certificates />
          {/* <Gallery /> */}
          <Contact />
        </>
      )}
    </div>
  );
}
