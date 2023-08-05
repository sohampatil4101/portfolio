import React, { useState, useEffect, useRef, useCallback } from 'react';
import './home.css';

const useSliderAnimation = (isPaused) => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const frameRef = useRef();
  const prevTimestampRef = useRef();

  const updateSliderPosition = useCallback(
    (timestamp) => {
      if (!prevTimestampRef.current) {
        prevTimestampRef.current = timestamp;
      }

      const timeElapsed = timestamp - prevTimestampRef.current;
      prevTimestampRef.current = timestamp;

      if (!isPaused) {
        setSliderPosition((prevPosition) => {
          const pixelsPerSecond = 50; // Adjust the value to control the speed
          const newPosition = prevPosition - (pixelsPerSecond * timeElapsed) / 1000;
          return newPosition;
        });
      }

      frameRef.current = requestAnimationFrame(updateSliderPosition);
    },
    [isPaused]
  );

  useEffect(() => {
    frameRef.current = requestAnimationFrame(updateSliderPosition);

    return () => {
      cancelAnimationFrame(frameRef.current);
    };
  }, [updateSliderPosition]);

  return { sliderPosition, setSliderPosition };
};


const ClientSlider = () => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef();

  const { sliderPosition, setSliderPosition } = useSliderAnimation(isPaused);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
      const scrollDirection = event.deltaY > 0 ? 1 : -1;
      const scrollStep = 300; // Adjust the value to control the amount of movement

      const newSliderPosition = sliderPosition + scrollDirection * scrollStep;

      const minSliderPosition = -(document.querySelector('.project-topic-name').clientWidth * 2);
      const maxSliderPosition = 0;
      const clampedSliderPosition = Math.min(Math.max(newSliderPosition, minSliderPosition), maxSliderPosition);

      setSliderPosition(clampedSliderPosition);
    };

    const containerElement = containerRef.current;
    containerElement.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      containerElement.removeEventListener('wheel', handleWheel);
    };
  }, [sliderPosition, setSliderPosition]);

  return (
    <section style={{ height: '100vh' }} className="our-clients">
      <div
        className="container"
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ul
          style={{
            transform: `translateX(${sliderPosition}px)`,
            transition: 'transform 0.3s',
          }}
        >
          
          <a className='project-topic-name' href='https://github.com/sohampatil4101/Jarvis'>
            <h4>Jarvis(python)</h4>
            <p>'Jarvis' is a cutting-edge automation project designed to streamline your Windows experience and boost productivity like never before, its automation capabilities, making it the perfect tool for repetitive tasks and day-to-day operations.</p>
          </a>

          
          <a className='project-topic-name' href='https://github.com/sohampatil4101/VoloMart-Django'>
            <h4>Volo-Mart(Django)</h4>
            <p>A Django-based e-commerce website is a robust and customizable online platform that facilitates the buying and selling of products over the internet.'Volo-Mart' is a platform for local vendors to get their products online using VoloMart.</p>
          </a>


          <a className='project-topic-name' href='https://github.com/sohampatil4101/WarehouseManagementSystem-Django'>
            <h4>WareHouse-Management(Django)</h4>
            <p>A Django-based warehouse management system website is a user-friendly and efficient platform designed to streamline and optimize warehouse operations. It allows users to manage inventory, track stock levels, handle order fulfillment processes seamlessly.</p>
          </a>


          <a className='project-topic-name' href='https://github.com/sohampatil4101/NewsApp-ClassBasedComponents'>
            <h4>NewsApp(React-ClassBasedComponents)</h4>
            <p>A React-based news app website is a responsive platform that delivers information in an user-friendly manner. Leveraging React's classcomponent-based and with NewsOrg's Api allowing users to filter content based on preferences, receive real-time updates.</p>
          </a>


          <a className='project-topic-name' href='https://github.com/sohampatil4101/Authentication-System'>
            <h4>VlogWriting-Website(Django)</h4>
            <p>A Django-based Vlog writing website is a user-friendly and efficient platform designed to interact and vlog writers and readers. It allows users to read and write vlogs, with proper Sign-up, login and many more features.</p>
          </a>


          <a className='project-topic-name' href='https://github.com/sohampatil4101/TextAnalyser-React'>
            <h4>TextAnalyser(React)</h4>
            <p>A React-based text analyzer website is a intuitive tool that allows users to analyze text. Leveraging React's dynamic UI components, users can input text, and it perform various analyses such as word count, character count, keyword extraction, and more. </p>
          </a>


          <a className='project-topic-name' href='https://github.com/sohampatil4101/Todolist_django'>
            <h4>TodoList(Django)</h4>
            <p>A Django-based to-do list website is a simple yet effective platform that allows users to create and manage their daily tasks and activities. Leveraging Django's powerful framework, where users can add, edit, and mark tasks as completed.</p>
          </a>


          <a className='project-topic-name' href='https://github.com/sohampatil4101/RoomBuddies-django'>
            <h4>RoomBuddies(Django)</h4>
            <p>RoomBuddies is a Django-based website that facilitates users in finding roommates, houses for sale, and rental properties. With an intuitive interface, users can search and filter listings based on their preferences. </p>
          </a>


          <a className='project-topic-name' href='https://github.com/sohampatil4101/Todolist_react'>
            <h4>TodoList(React)</h4>
            <p>A React-based to-do list website is a simple yet effective platform that allows users to create and manage their daily tasks and activities. Leveraging React's powerful framework, where users can add, edit, and mark tasks as completed.</p>
          </a>


          


        </ul>
      </div>
    </section>
  );
};

export default ClientSlider;


// jai yogeshwar