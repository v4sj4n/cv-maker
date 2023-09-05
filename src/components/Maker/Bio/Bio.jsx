import './Bio.css'
import UserContext from '../../../contexts/UserContext'
import { useContext } from 'react'
export default function Bio() {
  const { bio } = useContext(UserContext)
  return (
    <div id="maker-bio-container">
      <h2 className="maker-category">Bio</h2>
      {bio.map((item) => {
        if (item[2] !== 'description') {
          return (
            <label htmlFor={`maker-bio-${item[2]}`}>
              {item[3]}
              <input
                type="text"
                onChange={(e) => item[1](e.target.value)}
                placeholder={item[0]}
              />
            </label>
          )
        } else {
          return (
            <label htmlFor={`maker-bio-${item[2]}`}>
              {item[3]}
              <textarea
                type="text"
                onChange={(e) => item[1](e.target.value)}
                placeholder={item[0]}
              />
            </label>
          )
        }
      })}
    </div>
  )
}
