import { apple, bill, google } from "../assets";
import { layout, styles } from "../util/style";

const Billing = () => {
    return (
        <section id="features" className={layout.sectionReverse}>
            <div className={layout.sectionImageReverse}>
                <img
                    src={bill}
                    alt="bill"
                    className="w-[100%] h-[100%] relative z-[5]"
                />
                <div className="absolute z-[3] -left-1/2 w-[50%] h-[50%] top-0 rounded-full white__gradient" />
                <div className="absolute z-[0] -left-1/2 w-[50%] h-[50%] rounded-full bottom-0 pink__gradient" />
            </div>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Hisob-kitob va fakturial <br className="sm:block hidden" />{" "}
                    osongina boshqaring
                </h2>
                <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo laboriosam earum doloremque corrupti at ad quia. Cumque
                    et eum facilis.
                </p>
                <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                    <img
                        src={google}
                        alt="apple"
                        className="w-[129px] h-[42px] object-contain mr-5 cursor-pointer"
                    />

                    <img
                        src={apple}
                        alt="apple"
                        className="w-[129px] h-[42px] object-contain mr-5 cursor-pointer"
                    />
                </div>
            </div>
        </section>
    );
};

export default Billing;
