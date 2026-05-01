import Books from "@/components/Homepage/Books";
import Hero from "@/components/Homepage/Hero";
import NewArrivals from "@/components/Homepage/NewArrivals";


const HomePage = () => {
    return (
        <div>
            <Hero />
            <NewArrivals />
            <Books />
        </div>
    );
};

export default HomePage;