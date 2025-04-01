import Layout from "../../components/layout/layout.jsx";
import Banner from "../../components/shared/banner.jsx";
import AnimatedSection from "../../components/shared/animated-section.jsx";
import {Element} from "react-scroll";
import AboutSection from "../../components/shared/about-section.jsx";
import ContactSection from "../../components/shared/contact-section.jsx";
import TeamSection from "../../components/shared/team-seciton.jsx";
import ReviewsSection from "../../components/shared/reviews-section.jsx";
import FAQsSection from "../../components/shared/faq-section.jsx";
import ServicesSection from "../../components/shared/services-section.jsx";
import ChoicesSection from "../../components/shared/choices-section.jsx";
import VaultPlanSection from "../../components/shared/vault-plan-section.jsx";
import CoreValueSection from "../../components/shared/core-value-section.jsx";

const HomePage = () => {

    return (
        <Layout>
            <Element name="home">
                <AnimatedSection backgroundColor="background.default">
                    <Banner/>
                </AnimatedSection>
            </Element>

            <Element name="about">
                <AnimatedSection>
                    <AboutSection/>
                </AnimatedSection>

                <AnimatedSection>
                    <CoreValueSection/>
                </AnimatedSection>
            </Element>

            <Element name="services">
                <AnimatedSection>
                    <ServicesSection/>
                </AnimatedSection>

                <AnimatedSection>
                    <ChoicesSection/>
                </AnimatedSection>

                <AnimatedSection>
                    <TeamSection/>
                </AnimatedSection>
            </Element>

            <Element name="plans">
                <AnimatedSection>
                    <VaultPlanSection/>
                </AnimatedSection>
            </Element>


            <Element name="contact">
                <AnimatedSection>
                    <ContactSection/>
                </AnimatedSection>

                <AnimatedSection>
                    <FAQsSection/>
                </AnimatedSection>
            </Element>

            <Element name="reviews">
                <AnimatedSection>
                    <ReviewsSection/>
                </AnimatedSection>
            </Element>
        </Layout>
    )
}

export default HomePage;