import React from 'react'

const Info = () => {
  return (
    <div className="about__info">
        <div className="about__box">
        <i class="bx bxs-award about__icon"></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">± 7 Month</span>
        </div>  

        <div className="about__box">
        <i class="bx bxs-briefcase-alt about__icon"></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">4 Project</span>
        </div>  

        <div className="about__box">
        <i class="bx bx-support about_-icon"></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>  
    </div>
  )
}

export default Info