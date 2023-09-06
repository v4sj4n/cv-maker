import './Preview.css'
import UserContext from '../../contexts/UserContext'
import { useContext } from 'react'

export default function Preview() {
  const { bio } = useContext(UserContext)
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
    </div>
  )
}
