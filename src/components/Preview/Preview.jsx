import './Preview.css'
import UserContext from '../../contexts/UserContext'
import { useContext } from 'react'

export default function Preview() {
  const { bio, educational } = useContext(UserContext)
  const { educations } = educational.educationList
  return (
    <div id="preview-container">
      <div id="preview-bio">
        <h1>
          {bio[0][0]} {bio[1][0]}
        </h1>
        <h3>{bio[5][0]}</h3>
        <p>{bio[2][0]}</p>
        <p>
          <span>{bio[3][0]}</span> | <span>{bio[4][0]}</span>
        </p>
        <p>{bio[6][0]}</p>
      </div>
      <br />
      <div id="preview-education">
        <h1>Educations</h1>
        <div id="education-list">
          {educations.map((education) => {
            return (
              <div className="education-element">
                <h3>
                  <span style={{ textTransform: 'uppercase' }}>
                    {education.fieldOfStudy}
                  </span>{' '}
                  -
                  <span style={{ fontWeight: '400' }}> {education.school}</span>
                </h3>
                <p>
                  <span>{education.city}</span>,
                  <span style={{ fontWeight: '700' }}>
                    {' '}
                    {education.country}
                  </span>
                </p>
                <h4 style={{ fontWeight: '400' }}>
                  <span>{education.startDate}</span> <strong>x</strong>
                  <span> {education.endDate}</span>
                </h4>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
