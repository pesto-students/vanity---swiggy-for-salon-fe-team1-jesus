import React from 'react'

const Footer = () => {
    return (
        <footer class="bg-lightPink">
            <div
                class="relative px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8 lg:pt-24"
            >
                <div class="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8">
                    <a
                        class="inline-block p-2 text-white bg-black rounded-full shadow transition sm:p-3 lg:p-4 hover:bg-lavender"
                        href="#home"
                    >
                        <span class="sr-only">Back to top</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </a>
                </div>

                <div class="lg:flex lg:items-end lg:justify-between">
                    <div>
                        <div class="flex justify-center text-black font-bold font-aboreto text-3xl lg:justify-start">
                            VANITY
                        </div>

                        <p
                            class="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-900 lg:text-left"
                        >
                            Vanity makes booking a Salon Appointment so easy and seamless. Save time, energy and money when you book your first appointment with Vanity!
                        </p>
                    </div>

                    <nav class="mt-12 lg:mt-0" aria-labelledby="footer-navigation">
                        <h2 class="sr-only" id="footer-navigation">Footer navigation</h2>

                        <ul
                            class="flex flex-wrap text-lg justify-center gap-6 lg:justify-end md:gap-8 lg:gap-12"
                        >
                            <li>
                                <a class="text-black transition hover:underline" href="/">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a class="text-black transition hover:underline" href="/">
                                    About
                                </a>
                            </li>

                            <li>
                                <a class="text-black transition hover:underline" href="/">
                                    Book
                                </a>
                            </li>

                            <li>
                                <a class="text-black transition hover:underline" href="/">
                                    FAQs
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <p class="mt-12 text-sm text-center text-gray-500 lg:text-right">
                    Copyright &copy; 2022. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer