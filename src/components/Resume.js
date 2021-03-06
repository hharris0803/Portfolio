import React, { Component } from 'react';

class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map(item => {
                return (
                  <div className="row item" key={item.id}>
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work &&
              resumeData.work.map(item => {
                return (
                  <div className="row item" key={item.id}>
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="row nine columns main-col">
            <p>{resumeData.skillsDescription}</p>

            <div className="columns">
              <ul className="">
                {resumeData.skills &&
                  resumeData.skills.slice(0, 5).map(item => {
                    return (
                      <li key={item.id}>
                        <img
                          alt="skillsImage"
                          src={`${item.imgurl}`}
                          className="item-img"
                          style={{ height: "80px" }}
                        />
                        {/* <em>{item.skillname}</em> */}
                      </li>
                    );
                  })}
              </ul>
            </div>
                    
            <div className="columns">
              <ul className="">
                {resumeData.skills &&
                  resumeData.skills.slice(5, 10).map(item => {
                    return (
                      <li key={item.id}>
                        <img
                          alt="skillsImage"
                          src={`${item.imgurl}`}
                          className="item-img"
                          style={{ height: "80px" }}
                        />
                      </li>
                    );
                  })}
              </ul>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default Resume;