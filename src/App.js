import {
    Billing,
    Business,
    CTA,
    Clients,
    Contract,
    Footer,
    Home,
    Navbar,
    Statistics,
    Testimonials,
} from "./components";
import { styles } from "./util/style";

const App = () => {
    return (
        <div className=" bg-blue-950 w-full overflow-hidden">
            {/*  Navbar */}
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.container}`}>
                    <Navbar />
                </div>
            </div>
            {/*  home */}
            <div className={` bg-blue-950 ${styles.flexStart}`}>
                <div className={`${styles.container}`}>
                    <Home />
                </div>
            </div>

            <div
                className={` bg-blue-950 ${styles.paddingX} ${styles.flexCenter}`}
            >
                <div className={`${styles.container}`}>
                    <Statistics />
                    <Contract />
                    <Billing />
                    <Business />
                    <Testimonials />
                    <Clients />
                    <CTA />
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default App;
