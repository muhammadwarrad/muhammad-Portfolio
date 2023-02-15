import { Fragment, useEffect, useState } from "react";

const Nav = ({ close, trigger }) => {
  const [toggle_, setToggle_] = useState("");
  useEffect(() => {
    !trigger && setToggle_("");
    setTimeout(() => {
      trigger ? setToggle_("ready") : setToggle_("");
    }, 2000);
  }, [trigger]);

  return (
    <Fragment>
      <a href="#" className="resumo_fn_nav_overlay" onClick={() => close()} />
      <div className="resumo_fn_navigation">
        <a href="#" className="closer" onClick={() => close()} />
      
        <div className="nav_in">
          <nav id="nav">
            <h3 className="label">Menu</h3>
            <ul>
              <li style={{ transitionDelay: !trigger ? "0ms" : "700ms" }}>
                <a href="#home" onClick={() => close()}>
                  Home
                </a>
              </li>
              <li style={{ transitionDelay: !trigger ? "0ms" : "900ms" }}>
                <a onClick={() => close()} href="#about">
                  About
                </a>
              </li>
              <li style={{ transitionDelay: !trigger ? "0ms" : "1100ms" }}>
                <a onClick={() => close()} href="#portfolio">
                  Portfolio
                </a>
              </li>

              <li style={{ transitionDelay: !trigger ? "0ms" : "1900ms" }}>
                <a onClick={() => close()} href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className={`nav_footer ${toggle_}`}>
            <div className="social">
              <ul>
        
                <li>
                  <a href="https://twitter.com/warrad_muhammad" target="_blank">
                  <svg height="681pt" viewBox="-21 -81 681.33464 681" width="681pt" xmlns="http://www.w3.org/2000/svg"><path d="m200.964844 515.292969c241.050781 0 372.871094-199.703125 372.871094-372.871094 0-5.671875-.117188-11.320313-.371094-16.9375 25.585937-18.5 47.824218-41.585937 65.371094-67.863281-23.480469 10.441406-48.753907 17.460937-75.257813 20.636718 27.054687-16.230468 47.828125-41.894531 57.625-72.488281-25.320313 15.011719-53.363281 25.917969-83.214844 31.808594-23.914062-25.472656-57.964843-41.402344-95.664062-41.402344-72.367188 0-131.058594 58.6875-131.058594 131.03125 0 10.289063 1.152344 20.289063 3.398437 29.882813-108.917968-5.480469-205.503906-57.625-270.132812-136.921875-11.25 19.363281-17.742188 41.863281-17.742188 65.871093 0 45.460938 23.136719 85.605469 58.316407 109.082032-21.5-.660156-41.695313-6.5625-59.351563-16.386719-.019531.550781-.019531 1.085937-.019531 1.671875 0 63.46875 45.171875 116.460938 105.144531 128.46875-11.015625 2.996094-22.605468 4.609375-34.558594 4.609375-8.429687 0-16.648437-.828125-24.632812-2.363281 16.683594 52.070312 65.066406 89.960937 122.425781 91.023437-44.855469 35.15625-101.359375 56.097657-162.769531 56.097657-10.5625 0-21.003906-.605469-31.2617188-1.816407 57.9999998 37.175781 126.8710938 58.871094 200.8867188 58.871094"fill="blue"></path></svg>
                  </a>
                </li>

                
                <li>
                  <a href="https://github.com/muhammadwarrad" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"/></svg> 
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/muhammadwarrad/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" fill="blue"></path></svg>
                  </a>
                </li>

              </ul>
            </div>
          
          </div>
        </div>

        
      </div>
    </Fragment>
  );
};

export default Nav;
