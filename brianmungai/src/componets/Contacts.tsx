import { useRef} from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import '../App.css'
import TaskDone from "../assets/task-done.svg";
import CloseTask from "../assets/close-menu-icon.svg";
import BackgroundImage from "../assets/icons8-mail-512.png";

const Contacts = () => {
  const form = useRef(null); // Initialize with null

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!form.current) {
      console.error('Form reference is null');
      return;
    }

    emailjs.sendForm('service_r5tl4kh', 'template_buclwvh', form.current, 'CxickLvxss0iLEMBg')
      .then((result) => {
        console.log('SUCCESS!', result.text);
      }, (error) => {
        console.log('FAILED...', error.text);
      });
  };


  return (
    <section className="contact-section">
        
        <div className="popup">
            <span>Message Sent Successfully!</span>
            <img src={TaskDone} alt="Task Done" className='taskdone-icon' />
            <img src={CloseTask} alt="Close Task" className='close-popup' />
        </div>
        
        <div className="contact-wrapper">
            <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" placeholder='Your Name' name="user_name" required />
                    <label>Email</label>
                    <input type="email" placeholder='example@mail.com' name="user_email" required />
                    <label>Message</label>
                    <textarea name="message" required />
                    <input className='send' type="submit" value="Send" />
                </form>
            </div>
            <div className="sidebar">
                <h2>Let's Chat</h2>
                <p>You will get a response to your message in about 24 hours</p>
               
                <motion.img src={BackgroundImage} 
                    initial="hidden"
                    animate="show"
                    variants={{
                      hidden: {  y: 0 },
                      show: {  y: -50 },
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.7,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                />
                
            </div>
        </div>
        <div className="footnote">
            <ul>
                <li><span>Expert In:</span></li>
                <li>//Django</li>
                <li>//React</li>
                <li>//Webflow</li>
            </ul>
        </div>
    </section>
  );
};

export default Contacts;