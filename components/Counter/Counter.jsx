import React from 'react'

const Counter = () => {
 return (
  <>
   <section className="cta-section ">
    <div className="container">
     <div className="cta position-relative">
      <div className="row">
       <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="counter-stat">
         <i className="icofont icofont-patient-bed"></i>
         <span className="h3">3L</span>+
         <p>Patients Treated</p>
        </div>
       </div>
       <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="counter-stat">
         <i className="icofont icofont-prescription"></i>
         <span className="h3">500</span>+
         <p>Successful Treatments</p>
        </div>
       </div>

       <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="counter-stat">
         <i className="icofont icofont-award"></i>
         <span className="h3">25</span>+
         <p>Years of Experience</p>
        </div>
       </div>
       <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="counter-stat">
         <i className="icofont icofont-hospital"></i>
         <span className="h3">2</span>
         <p>Hospitals Affiliated</p>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>
  </>
 )
}

export default Counter
