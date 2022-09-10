import React, { Suspense } from "react";
import CTA from "../../components/Landing/CTA.jsx";
import Footer from "../../components/Landing/Footer.jsx";
import Hero from "../../components/Landing/Hero.jsx";
import Testimonials from "../../components/Landing/Testimonials.jsx";

const Landing = () => {

    const Features = React.lazy(() => import('../../components/Landing/Features.jsx'))
    return (
        <div className="font-lora">
            <Hero />
            <Suspense fallback={<h1>Loading...</h1>}>
                <Features />
                <Testimonials />
                <CTA />
                <Footer />
            </Suspense>
        </div>
    )
}

export default Landing;