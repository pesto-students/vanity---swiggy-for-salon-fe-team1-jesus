import React, { Suspense } from "react";
import Hero from "../../components/Landing/Hero";
import Testimonials from "../../components/Landing/Testimonials";

const Landing = () => {

    const Features = React.lazy(() => import('../../components/Landing/Features'))
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