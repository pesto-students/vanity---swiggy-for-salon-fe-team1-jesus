import React, { Suspense } from "react";
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
            </Suspense>
        </div>
    )
}

export default Landing;