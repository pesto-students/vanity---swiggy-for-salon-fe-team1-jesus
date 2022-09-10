import React, { Suspense } from "react";
import Hero from "./Hero.jsx";

const Landing = () => {

    const Features = React.lazy(() => import('../../components/Landing/Features.jsx'))
    const Testimonials = React.lazy(() => import('../../components/Landing/Testimonials.jsx'))
    const CTA = React.lazy(() => import('../../components/Landing/CTA.jsx'))
    const Footer = React.lazy(() => import('../../components/Landing/Footer.jsx'))
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