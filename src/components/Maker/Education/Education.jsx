import './Education.css'
import UserContext from '../../../contexts/UserContext'
import { useContext } from 'react'
import { v4 } from 'uuid'
import { format } from 'date-fns'

export default function Education() {
  const { educational } = useContext(UserContext)
  const { educations, setEducations } = educational.educationList
  const { educationItem } = educational
  console.log(educations)
  console.log(...educationItem)

  return (
    <div id="maker-education-container">
      <h2 className="maker-category">Education</h2>

      <div id="education-list">
        {educations &&
          educations.map((item) => {
            return (
              <div className="education" key={item.uuid}>
                <div>
                  <h3>
                    {' '}
                    <span>{item.fieldOfStudy}</span>-<span>{item.school}</span>{' '}
                  </h3>
                  <p>
                    <span>{item.startDate}</span>-<span>{item.endDate}</span>
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setEducations((current) =>
                        current.filter((el) => el.uuid !== item.uuid)
                      )
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          })}
      </div>
      <form>
        {educationItem.map((item) => {
          if (!item[2].endsWith('Date')) {
            return (
              <label key={item[4]} htmlFor={`maker-education-${item[4]}`}>
                {item[3]}
                <input
                  className="maker-education-input"
                  type="text"
                  id={`maker-education-${item[4]}`}
                  placeholder={item[2]}
                  onChange={(e) => item[1](e.target.value)}
                />
              </label>
            )
          } else {
            return (
              <label key={item[3]} htmlFor={`maker-education-${item[3]}`}>
                {item[2]}
                <input
                  className="maker-education-input"
                  type="date"
                  id={`maker-education-${item[3]}`}
                  onChange={(e) => item[1](e.target.value)}
                />
              </label>
            )
          }
        })}

        <button
          onClick={(e) => {
            e.preventDefault()
            let areAllFilled = 0
            educationItem.forEach((element) => {
              if (element[0] === '') {
                alert('Please fill all the values with appropriate values')
                return
              } else {
                areAllFilled++
              }
            })
            if (areAllFilled === 6) {
              const newEducation = {
                uuid: v4(),
                fieldOfStudy: educationItem[0][0],
                school: educationItem[1][0],
                city: educationItem[2][0],
                country: educationItem[3][0],
                startDate: format(new Date(educationItem[4][0]), 'PPP'),
                endDate: format(new Date(educationItem[5][0]), 'PPP'),
              }
              setEducations((oldEds) => [...oldEds, newEducation])
              areAllFilled = 0
              educationItem.forEach((el) => el[1](''))
              document
                .querySelectorAll('.maker-education-input')
                .forEach((el) => (el.value = ''))
            } else {
              areAllFilled = 0
            }
          }}
        >
          Add Education
        </button>
      </form>
    </div>
  )
}
