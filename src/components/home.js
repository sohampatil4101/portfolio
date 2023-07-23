import React, { useState, useRef } from 'react';
import './home.css'
import { Instagram, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import ClientSlider from './slider'
import img from './soham_darshan-removebg-preview.png'
import webdev from './webdev.png'
import appdev from './appdev.png'
import Typed from 'typed.js';


export default function Home() {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMeassage] = useState('')
  const [button, setButton] = useState('Send')
  
const form = useRef();
  function sendmail(e){
    e.preventDefault()

    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setButton('Fill all details!!!')
      setTimeout(() => {
        setButton('Send')
      }, 2000);
    }
    else{
      
      e.preventDefault()

      setButton('Sending...');
      emailjs.sendForm('service_20fs1n5', 'template_ycpnz2s', form.current, 'e-f1QA8lIUF_jiP24')


      .then((result) => {
        console.log(result.text)
        if(result.text === "OK"){
              // When mail is sent
              console.log("Mail sent",result.text);
              console.log(`Name is ${name}, email is ${email}, and message is ${message}`)
              document.getElementById('modal').style.display = 'inline';
              document.getElementById('modal').style.transform = 'translate(-50%, -50%)';
              document.getElementById('modal-speed').style.animationName = 'loader1';
              document.getElementById('modal-speed').style.animationDuration = '4s';
              setTimeout(() =>{
                document.getElementById('modal').style.transform = 'translate(-50%, 300%)';
                document.getElementById('modal-speed').style.animationName = 'loader2';
                setName('');
                setEmail('');
                setMeassage('');
                setButton('Send')
              }, 3500)
              
            }

            else{
              // when mail is not sent
              console.log(`Name is ${name}, email is ${email}, and message is ${message}`)
              document.getElementById('modal').style.display = 'inline';
              document.getElementById('modal').style.transform = 'translate(-50%, -50%)';
              document.getElementById('modal-content').innerHTML = 'message was not sent!!!';
              document.getElementById('modal').style.backgroundColor = 'black';
              document.getElementById('modal-content').style.backgroundColor = 'black';
              document.getElementById('modal-content').style.color = 'red';
              document.getElementById('modal-speed').style.backgroundColor = 'red';
              document.getElementById('modal-speed').style.animationName = 'loader1';
              document.getElementById('modal-speed').style.animationDuration = '4s';

              setTimeout(() =>{
                document.getElementById('modal').style.transform = 'translate(-50%, 300%)';
                document.getElementById('modal-speed').style.animationName = 'loader2';
                setName('');
                setEmail('');
                setMeassage('');
                setButton('Send')
              }, 3500)


            }
            },
        
        // when mail is not sent
        (error) => {
          if(error){
            // when mail is not sent
            console.log("mail wasn't send")
            
              console.log(`Name is ${name}, email is ${email}, and message is ${message}`)
              document.getElementById('modal').style.display = 'inline';
              document.getElementById('modal').style.transform = 'translate(-50%, -50%)';
              document.getElementById('modal-content').innerHTML = 'message was not sent!!!';
              document.getElementById('modal').style.backgroundColor = 'black';
              document.getElementById('modal-content').style.backgroundColor = 'black';
              document.getElementById('modal-content').style.color = 'red';
              document.getElementById('modal-speed').style.backgroundColor = 'red';
              document.getElementById('modal-speed').style.animationName = 'loader1';
              document.getElementById('modal-speed').style.animationDuration = '4s';

              setTimeout(() =>{
                document.getElementById('modal').style.transform = 'translate(-50%, 300%)';
                document.getElementById('modal-speed').style.animationName = 'loader2';
                setName('');
                setEmail('');
                setMeassage('');
                setButton('Send')
              }, 3500)

          }
          else{
            console.log("mail send")
            
            console.log(`Name is ${name}, email is ${email}, and message is ${message}`)
            document.getElementById('modal').style.display = 'inline';
            document.getElementById('modal').style.transform = 'translate(-50%, -50%)';
            document.getElementById('modal-speed').style.animationName = 'loader1';
            document.getElementById('modal-speed').style.animationDuration = '4s';
            setTimeout(() =>{
              document.getElementById('modal').style.transform = 'translate(-50%, 300%)';
              document.getElementById('modal-speed').style.animationName = 'loader2';
              setName('');
              setEmail('');
              setMeassage('');
              setButton('Send')
            }, 3500)
          }

          console.log("Error is",error)
          }
            
          );


    }
  }

// setting input values
const handleonchangeName = (event)=>{
  setName(event.target.value)
}
const handleonchangeEmail = (event)=>{
  setEmail(event.target.value)
}
const handleonchangeMessage = (event)=>{
  setMeassage(event.target.value)
}





  // Typing effect for profession
  const el = React.useRef(null);
    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Web developer', 'App developer', 'Student'],
        typeSpeed: 20,
        backDelay: 2000,
      });
      return () => {
        typed.destroy();
      };
    }, []);

  // Typing effect for name
  const so = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(so.current, {
      strings: ['Soham Patil'],
      showCursor: false,
      typeSpeed: 20,
    });

    return () => {
      typed.destroy();
    };
  }, []);






  return (
    <>
    <div className="page">
      <div className="home">

        <div className="header">
          <div className="logo">
            <h1>soham</h1>
          </div>
          <div className="navbar">
            <li> <a href="/home" style={{color: 'cyan'}}>Home</a></li>
            <li> <a href="#about">About</a></li>
            <li> <a href="#project">Projects</a></li>
            <li> <a href="/project">Download CV</a></li>
            <li> <a href="#contact">Contact</a></li>
          </div>
        </div>
            

        <div className="body">
          <div className="info">
            <h1>Hi, I'm <p ref={so}></p></h1>
            <h1>and i'm a <p ref={el}></p></h1>
            <h3>Passionate problem solver with a track record of delivering innovative solutions.</h3>
            <div className="cv-contact">
              <button><a className='cv' download href='cv'>Download CV</a></button>
              <button><a className='contact' href="#contact">Contact</a></button>
            </div>
            <div className='social-media'>
            <a href="https://www.instagram.com/soham__patil__4897/"> <li><Instagram size={30} className='lucide' style={{borderRadius:"25px", backgroundColor: 'cyan'}} fill="cyan" /></li></a>

            <a href="https://github.com/sohampatil4101"> <li><Github size={30} className='lucide' style={{borderRadius:"25px", backgroundColor: 'cyan'}} fill="cyan" /></li></a>

            <a href="https://www.linkedin.com/in/soham-patil-32734a245/"> <li><Linkedin size={0} className='lucide' style={{borderRadius:"25px", backgroundColor: 'cyan'}} fill="cyan" /></li></a>

            <a href="https://twitter.com/Soham4101"> <li><Twitter size={30} className='lucide' style={{borderRadius:"25px", backgroundColor: 'cyan'}} fill="cyan" /></li></a>

            </div>
          </div>
          <div className="home-image">
            <img src={img} alt="" />
          </div>
        </div>

      </div>

      <div className="about-skill">

        <div className="about" id='about'>
          <div className="about-img">
            <img src={img} alt="" />
          </div>
          <div className="about-info">
            <h1 >About </h1>
            <h1 style={{color: 'white'}} > Me</h1>


            {/* As a driven student, I excel in web and app development, crafting innovative solutions that merge creativity and functionality. Let me impress you with my expertise and commitment to delivering exceptional results. */}


              <h4>As a student, I am an innovative web and app developer, dedicated to delivering exceptional solutions. My passion for creating intuitive designs and seamless user experiences ensures client satisfaction and leaves a lasting impression.</h4>
              <h5> <a target='soham' href="mailto:patilsoham390@gmail.com"> <Mail size={20} className='lucide-mail' style={{borderRadius:"2px", backgroundColor: 'black'}} fill="black" /></a>
              <a target='soham' href="mailto:patilsoham390@gmail.com">patilsoham390@gmail.com</a>
              </h5>
          </div>
        </div>

        <div className="skill">
          <div className="skill-head">
          <h1>Skills&nbsp;&&nbsp;</h1> 
          <h1 style={{color: 'white'}} >Expertise</h1>
          </div>
          <div className="cards">
            <div className="card">
              <div className="webdev-img">
                <img src={webdev} alt="" />
              </div>
              <h3>Web development</h3>
              <h4>(HTML, CSS, Bootstrap, Tailwind-CSS, Javascript, React, Angular, Django, Django-rest Framework, etc)</h4>
            </div>

            <div className="card">
              <div className="appdev-img">
                <img src={appdev} alt="" />
              </div>
              <h3>App development</h3>
              <h4>(React-native)</h4>
            </div>

            <div className="card">
              <div className="appdev-img">
                <img src={appdev} alt="" />
              </div>
              <h3>AIML</h3>
              <h4>(Python, SKlearn)</h4>
            </div>
          </div>        
          
        </div>


      </div>


      <div className="project-contact">
        <div className="project" id='project'>
          <div className="project-head">
            <a href='https://github.com/sohampatil4101'>
          <h1>Projects</h1>
            </a>
          </div>
          {/* slider */}
          <ClientSlider/>
          {/* slider */}
        </div>

        <div className="contact-page" id='contact'>
          <div className="contact-head">
            <h1>Leave a&nbsp;</h1>
            <h1 style={{color: 'white'}}>Message</h1>
          </div>
          <form onSubmit={sendmail} ref={form}>
            <div className="form" >
                <div className="input">
                  <label htmlFor="">Name</label>
                  <input type="text" value={name} name="user_name"   onChange={handleonchangeName} placeholder='Name'/>
                </div>
                <div className="input">
                  <label htmlFor="">Email</label>
                  <input type="email" value={email} name="user_email"  onChange={handleonchangeEmail} placeholder='Email'/>
                </div>
                <div className="input">
                  <label htmlFor="">Message</label>
                  <textarea type="text" value={message} name="message"  onChange={handleonchangeMessage} placeholder='Message...'/>
                </div>

                <button className='email-send' type='submit'>{button}</button>

            </div>
          </form>

        </div>

      </div>

      <div className="modal" id='modal'>
        <div className="modal-content" id='modal-content'>
          <h4>Thank you!!&nbsp;{ name.length<= 7 ? name : name.slice(0, 7) + '...' }</h4>
        </div>
        <div className="modal-speed" id='modal-speed'>
        </div>
      </div>







    </div>
    
    </>
  )
}
