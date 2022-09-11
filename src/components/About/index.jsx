import React from 'react'

const About = () => {
    return (
        <div className='flex flex-col min-h-screen bg-cream font-lora space-y-8 items-center py-16'>
            <div className='text-4xl mb-10 phone:mb-0 font-aboreto font-bold'>ABOUT US</div>
            <div className='text-xl mt-10 w-1/2 phone:w-full phone:mt-4 phone:px-6'>
                But what is it good for? (Engineer at the Advanced Computing Systems Division of IBM, commenting on the microchip, 1968) There is no programming language–no matter how structured–that will prevent programmers from making bad programs. (Larry Flon) In C++ it’s harder to shoot yourself in the foot, but when you do, you blow off your whole leg. (Bjarne Stroustrup) It would appear that we have reached the limits of what it is possible to achieve with computer technology, although one should be careful with such statements, as they tend to sound pretty silly in 5 years. (John Von Neumann, circa 1949)
            </div>
            <div className='text-xl mt-6 w-1/2 phone:w-full phone:mt-4 phone:px-6'>
                It’s a curious thing about our industry: not only do we not learn from our mistakes, but we also don’t learn from our successes. (Keith Braithwaite) Computers are getting smarter all the time. Scientists tell us that soon they will be able to talk to us. (And by ‘they’, I mean ‘computers’. I doubt scientists will ever be able to talk to us.) (Dave Barry) The best thing about a boolean is even if you are wrong, you are only off by a bit. (Anonymous) The best performance improvement is the transition from the nonworking state to the working state. (J. Osterhout)
            </div>
        </div>
    )
}

export default About