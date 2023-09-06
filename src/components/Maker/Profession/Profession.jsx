import './Profession.css'
import UserContext from '../../../contexts/UserContext'
import { useContext } from 'react'
import { v4 } from 'uuid'
import { format } from 'date-fns'

export default function Education() {
  const { professional } = useContext(UserContext)
  const { professionalExperiences, setProfessionalExperiences } =
    professional.profExperiencesList
  const { professionalItem } = professional

  return (
    <div id="maker-profession-container">
      <h2 className="maker-category">Education</h2>

      <div id="profession-list">
        {professionalExperiences &&
          professionalExperiences.map((item) => {
            return (
              <div className="profession" key={item.uuid}>
                <div>
                  <h3>
                    <span>{item.jobTitle}</span>-<span>{item.company}</span>
                  </h3>
                  <p>
                    <span>{item.startDate}</span>-
                    <span>{item.endDate ? item.endDate : 'Now'}</span>
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setProfessionalExperiences((current) =>
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
        {professionalItem.map((item) => {
          if (item[2].endsWith('Date')) {
            return (
              <label key={item[3]} htmlFor={`maker-professional-${item[3]}`}>
                {item[2]}
                <input
                  className="maker-profession-input"
                  type="date"
                  id={`maker-professional-${item[3]}`}
                  onChange={(e) => item[1](e.target.value)}
                />
              </label>
            )
          } else if (item[3].endsWith('Description')) {
            return (
              <label key={item[4]} htmlFor={`maker-professional-${item[4]}`}>
                {item[3]}
                <textarea
                  className="maker-profession-input"
                  type="text"
                  id={`maker-education-${item[4]}`}
                  placeholder={item[2]}
                  onChange={(e) => item[1](e.target.value)}
                />
              </label>
            )
          } else {
            return (
              <label key={item[4]} htmlFor={`maker-professional-${item[4]}`}>
                {item[3]}
                <input
                  className="maker-profession-input"
                  type="text"
                  id={`maker-education-${item[4]}`}
                  placeholder={item[2]}
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
            professionalItem.forEach((element) => {
              if (element[0] !== '') {
                areAllFilled++
              }
            })
            if (areAllFilled === 4 || areAllFilled === 5) {
              if (professionalItem[3][0] !== '') {
                const newProfEx = {
                  uuid: v4(),
                  jobTitle: professionalItem[0][0],
                  company: professionalItem[1][0],
                  startDate: format(new Date(professionalItem[2][0]), 'PPP'),
                  endDate: format(new Date(professionalItem[3][0]), 'PPP'),
                  description: professionalItem[4][0],
                }
                setProfessionalExperiences((oldEds) => [...oldEds, newProfEx])
                areAllFilled = 0
                professionalItem.forEach((el) => el[1](''))
                document
                  .querySelectorAll('.maker-profession-input')
                  .forEach((el) => (el.value = ''))
              } else {
                const newProfEx = {
                  uuid: v4(),
                  jobTitle: professionalItem[0][0],
                  company: professionalItem[1][0],
                  startDate: format(new Date(professionalItem[2][0]), 'PPP'),
                  endDate: '',
                  description: professionalItem[4][0],
                }
                setProfessionalExperiences((oldEds) => [...oldEds, newProfEx])
                areAllFilled = 0
                professionalItem.forEach((el) => el[1](''))
                document
                  .querySelectorAll('.maker-profession-input')
                  .forEach((el) => (el.value = ''))
              }
            } else {
              alert('Please fill all the values with appropriate values')
              areAllFilled = 0
            }
          }}
        >
          Add Professional Experience
        </button>
      </form>
    </div>
  )
}
