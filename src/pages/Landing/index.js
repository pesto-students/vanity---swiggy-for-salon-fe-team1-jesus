import React, { Suspense } from "react";
import Hero from "../../components/Landing/Hero";

const Landing = () => {

    const Features = React.lazy(() => import('../../components/Landing/Features'))
    return (
        <div className="font-lora">
            <Hero />
            <Suspense fallback={<h1>Loading...</h1>}>
                <Features />
            </Suspense>
        </div>
    )
}

export default Landing;