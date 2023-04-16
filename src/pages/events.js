// import React from 'react';
// import Footer from './footer';
// import Header from './header';


// class Events extends React.Component{
//     render(){
//         return(
//             <div>
               
//                <Header/>
// <br></br>
// <br></br>

// <section id="events" className="events">
//       <div className="container-fluid" data-aos="fade-up">
//         <div className="section-header">
//           <h2>Events</h2>
//           <p>Share <span>Your Moments</span> In Our Restaurant</p>
//         </div>
//         <div className="slides-3 swiper" data-aos="fade-up" data-aos-delay={100}>
//           <div className="swiper-wrapper">
//             <div className="swiper-slide event-item d-flex flex-column justify-content-end" style={{url:"assets/img/events-1.jpg"}}>
//               <h3>Custom Parties</h3>
//               <div className="price align-self-start">$99</div>
//               <p className="description">
//                 Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.
//               </p>
//             </div>{/* End Event item */}
//             <div className="swiper-slide event-item d-flex flex-column justify-content-end" style={{url:"assets/img/events-2.jpg"}}>
//               <h3>Private Parties</h3>
//               <div className="price align-self-start">$289</div>
//               <p className="description">
//                 In delectus sint qui et enim. Et ab repudiandae inventore quaerat doloribus. Facere nemo vero est ut dolores ea assumenda et. Delectus saepe accusamus aspernatur.
//               </p>
//             </div>{/* End Event item */}
//             <div className="swiper-slide event-item d-flex flex-column justify-content-end" style={{url:"assets/img/events-3.jpg"}}>
//               <h3>Birthday Parties</h3>
//               <div className="price align-self-start">$499</div>
//               <p className="description">
//                 Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.
//               </p>
//             </div>{/* End Event item */}
//           </div>
//           <div className="swiper-pagination" />
//         </div>
//       </div>
//     </section>{/* End Events Section */}

// <br></br>
// <br></br>

// <Footer/>


// </div>
//         );
//     }
// }

// export default Events;



import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const event1 = [
  { url: "assets/img/events-1.jpg" },
  
];


const event2 = [
  { url: "assets/img/events-2.jpg" },
  
  
];



const event3 = [

  { url: "assets/img/events-3.jpg" },
  
];


function Events()
{
        return(
            <div>
              <section id="events" className="events">
    <div className="container-fluid" data-aos="fade-up">
        <div className="section-header">
           <h2>Events</h2>
           <p>Share <span>Your Moments</span> In Our Restaurant</p>
        </div>
       <div className="slides-3 swiper" data-aos="fade-up" data-aos-delay={100}>
           <div className="swiper-wrapper">
         <div  className="swiper-slide event-item d-flex flex-column justify-content-end" >
            <SimpleImageSlider 
        width={"50%"}
        height={504}
        loop={true}
        autoPlay={true}
        images={event1}
        showBullets={true}
        showNavs={true}
      />    
               <h3>Custom Parties</h3>
               <div className="price align-self-start">$99</div>
               <p className="description">
                 Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.
               </p>
               </div>
             {/* End Event item */}
             <div className="swiper-slide event-item d-flex flex-column justify-content-end" >
             <SimpleImageSlider 
        width={"50%"}
        height={904}
        loop={true}
        autoPlay={true}
        images={event1}
        showBullets={true}
        showNavs={true}
      />    
               <h3>Private Parties</h3>
               <div className="price align-self-start">$289</div>
              <p className="description">
                 In delectus sint qui et enim. Et ab repudiandae inventore quaerat doloribus. Facere nemo vero est ut dolores ea assumenda et. Delectus saepe accusamus aspernatur.
               </p>
             </div>{/* End Event item */}
            <div className="swiper-slide event-item d-flex flex-column justify-content-end" >
            <SimpleImageSlider 
        width={"50%"}
        height={904}
        loop={true}
        autoPlay={true}
        images={event1}
        showBullets={true}
        showNavs={true}
      />    
              <h3>Birthday Parties</h3>
               <div className="price align-self-start">$499</div>
               <p className="description">
                 Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.
               </p>
             </div>{/* End Event item */}
          </div>           <div className="swiper-pagination" />
         </div>
      </div>
    


            
         
          </section>
        
        </div>
        );
}
    

export default Events;