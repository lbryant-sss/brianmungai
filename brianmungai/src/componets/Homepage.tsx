import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Contact from "../assets/contacts.png";
import Github from "../assets/github.png";
import Projects from "../assets/projects.png";
import Linkedin from "../assets/linkedin.png";
import Resume from "../assets/resume.png";
import MenuBar from "../assets/menu-icon.svg";
import CloseMenubar from "../assets/close-menu-icon.svg";

function FlashPage() {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div className={`flash ${fadeOut ? 'fade-out' : ''}`}
            initial="hidden"
            animate="show"
            variants={{
                hidden: { opacity: 0, y: 0 },
                show: { opacity: 1, y: -20 },
            }}
            transition={{ duration: 1, delay: 0.7 }}
        >
            <span data-text="Brian_Mungai">Brian_Mungai</span>
        </motion.div>
    );
}

function Homepage() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <>
            <motion.section className="hero"
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.25
                        },
                    },
                }}
                initial="hidden"
                animate="show"
            >
                <FlashPage />

                <div className="frontpage">
                    <div className="wrapper">
                        <div className="menubar" onClick={toggleMenu}>
                            <img src={MenuBar} alt="Menu Bar" />
                        </div>
                        <div className={`menu ${menuVisible ? 'show' : 'hide'}`}>
                            <ul>
                                <motion.li className="closebar" onClick={toggleMenu}
                                    initial="hidden"
                                    animate="show"
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        show: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 1, delay: 3 }}
                                >
                                    <img src={CloseMenubar} alt="Close Menu" />
                                </motion.li>
                                <motion.li
                                    initial="hidden"
                                    animate="show"
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        show: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 1, delay: 3 }}
                                >
                                    <Link to="#" >
                                        <img src={Projects} alt="React Projects" />
                                        <span>Projects</span>
                                    </Link>
                                </motion.li>
                                <motion.li
                                    initial="hidden"
                                    animate="show"
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        show: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 1, delay: 3.1 }}
                                >
                                    <Link to="#" >
                                        <img src={Github} alt="Github Repository" />
                                        <span>Github</span>
                                    </Link>
                                </motion.li>
                                <motion.li
                                    initial="hidden"
                                    animate="show"
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        show: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 1, delay: 3.2 }}
                                >
                                    <Link to="#" >
                                        <img src={Linkedin} alt="LinkedIn Profile" />
                                        <span>LinkedIn</span>
                                    </Link>
                                </motion.li>
                                <motion.li
                                    initial="hidden"
                                    animate="show"
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        show: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 1, delay: 3.4 }}
                                >
                                    <Link to="#" >
                                        <img src={Resume} alt="My Resume" />
                                        <span>Resume</span>
                                    </Link>
                                </motion.li>
                                <motion.li
                                    initial="hidden"
                                    animate="show"
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        show: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 1, delay: 3.6 }}
                                >
                                    <Link to="contacts" >
                                        <img src={Contact} alt="Contact Me" />
                                        <span>Contacts</span>
                                    </Link>
                                </motion.li>
                            </ul>
                        </div>
                        <div className="intro-text">
                            <motion.h2
                                initial="hidden"
                                animate="show"
                                variants={{
                                    hidden: { opacity: 0, x: 20 },
                                    show: { opacity: 1, x: 0 },
                                }}
                                transition={{ duration: 1, delay: 3 }}
                            >
                                Brian Mungai
                            </motion.h2>
                            <motion.p
                                initial="hidden"
                                animate="show"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    show: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 1, delay: 3.5 }}
                            >
                                Fullstack Developer <span className="line"> | </span>I &#x2764;&#xFE0F; Building Online Experiences
                            </motion.p>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    );
}

export default Homepage;
