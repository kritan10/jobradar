import Features from './components/Features'
import Feedback from './components/Feedback'
import Footer from './components/Footer'
import Hero from './components/Hero'
import JobCircular from './components/JobCircular'
import Navbar from './components/Navbar'

export default function Home() {
    return (
        <>
            <div className="px-16 tablet:px-8 phone:px-5">
                <Navbar />
                <Hero />
                <Features />
                <JobCircular />
                <Feedback />
            </div>
            <Footer />
        </>
    )
}
