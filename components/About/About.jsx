import React from 'react'

const About = () => {
 return (
  <>
   <section className="section about" id='about'>
    <div className="container position-relative">
     <div className="row">
      <div className="col-12 col-md-8 col-lg-6">
       <div className="d-flex flex-column justify-content-center h-100">
        <h2 className="about-heading">About Dr. Mohammad Mazharullah</h2>
        <p className="about-sub-heading my-2">
         Dr. Mohammad Mazharullah, MBBS (OSM), MD in General Medicine, is a senior consultant physician and diabetologist.
        </p>
        <p className="about-sub-heading my-2">
         He specializes in the treatment of viral fevers, typhoid fever, blood pressure (BP), diabetes (sugar), thyroid disorders, and medical emergencies.
        </p>
        <p className="about-sub-heading my-2">
         As a senior consultant physician, he provides expert medical care at Renova Hospital, Langer House, and Habeeba Noble Hospital, Asif Nagar.
        </p>
        <p className="about-sub-heading my-2">
         Dr. Mazharullah is dedicated to offering patient-centric treatment, ensuring comprehensive care for acute and chronic medical conditions.
        </p>
       </div>
      </div>
      <div className="col-12 col-md-6">
       <img src="/images/DOC.jpg" alt="Dr. Mohammad Mazharullah" className="img-fluid about-img" />
      </div>
     </div>
    </div>
   </section>
  </>
 )
}

export default About