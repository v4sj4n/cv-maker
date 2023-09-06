import './Maker.css'
import Bio from './Bio/Bio'
import Education from './Education/Education'
import Profession from './Profession/Profession'

export default function Maker() {
  return (
    <div id="maker-conatainer">
      <Bio />
      <hr />
      <Education />
      <hr />
      <Profession />
    </div>
  )
}
