import Books from "@/components/Homepage/Books";
import Contact from "@/components/Homepage/Contact";
import Hero from "@/components/Homepage/Hero";
import NewArrivals from "@/components/Homepage/NewArrivals";
import WhyChooseUs from "@/components/Homepage/WhyChooseUs";


const HomePage = () => {
    return (
        <div>
            <Hero />
            <NewArrivals />
            <Books />
            <WhyChooseUs />
            <Contact />
        </div>
    );
};

export default HomePage;