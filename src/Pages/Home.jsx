import React from 'react'
import Hero from '../Components/Hero'
import Feature from '../Components/Feature'
import About from '../Components/About'
import Departments from '../Components/Departments'
import WhyUs from '../Components/WhyUs'   //  FIXED HERE
import Counter from '../Components/Counter'
import Team from '../Components/Team'
import ContactForm from '../Components/ContactForm'

const Home = () => {
    return (
        <>
            <section>
                <Hero />
            </section>
            <section>
                <Feature />
            </section>
            <section>
                <About />
            </section>
            <section>
                <WhyUs />   {/* FIXED HERE */}
            </section>
            <section>
                <Counter />
            </section>
            <section>
                <Departments />
            </section>
            <section>
                <Team />
            </section>
            <section>
                <ContactForm />
            </section>
        </>
    )
}
export default Home
