import { useEffect, useState } from "react";



function FlashPage(){
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
        }, 3000);
        return () => clearTimeout(timer)
    }, []);

    return(
        <div className={`flash ${fadeOut ? 'fade-out': ''}`}>
            <span data-text="Brian_Mungai">Brian_Mungai</span>
        </div>
    )
}

function Homepage() {
    return (
        <>
            <section className="hero">
                <FlashPage />
                <div className="frontpage">
                    <div className="menu">
                        <ul>
                            <li>Linkedin</li>
                            <li>Github</li>
                            <li>Projects</li>
                            <li>Resume</li>
                            <li>Contacts</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Homepage;