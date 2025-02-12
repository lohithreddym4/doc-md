import React from 'react'

const Features = () => {
 return (
  <>
   <section className="features">
    <div className="container">
     <div className="row">
      <div className="col-lg-12">
       <div className="feature-block d-lg-flex">
        <div className="feature-item mb-5 mb-lg-0">
         <div className="feature-icon mb-4">
          <i className="icofont icofont-surgeon-alt"></i>
         </div>
         <span>24 Hours Service</span>
         <h4 className="mb-3">Online Appointment</h4>
         <p className="mb-4">We've implemented the principle of family medicine, ensuring continuous care and support for you and your loved ones. Give us a call at +91 9948140654</p>
        </div>

        <div className="feature-item mb-5 mb-lg-0">
         <div className="feature-icon mb-4">
          <i className="icofont icofont-ui-clock"></i>
         </div>
         <span>Expert Medical Care</span>
         <h4 className="mb-3">Dr. Mohammad Mazharullah</h4>
         <p>Dr. Mohammad Mazharullah, MBBS (OSM), MD in General Medicine, is a senior consultant physician and diabetologist.</p>
        </div>

        <div className="feature-item mb-5 mb-lg-0">
         <div className="feature-icon mb-4">
          <i className="icofont icofont-support"></i>
         </div>
         <span>Emergency Cases</span>
         <h4 className="mb-3">+91 9948140654</h4>
         <p>Experience all-time support for emergencies. We embrace the principle of family medicine, ensuring continuous care. Connect with us for any urgent need.</p>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>
  </>
 )
}

export default Features