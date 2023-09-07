import './Maker.css'
import Bio from './Bio/Bio'
import Education from './Education/Education'
import Profession from './Profession/Profession'
import { jsPDF } from 'jspdf'

export default function Maker() {
  const saveAsPDF = () => {
    const cv = new jsPDF('portrait', 'pt', 'a4')
    const contentElement = document.querySelector('#preview-container')
    const scale = 0.5

    cv.html(contentElement, {
      callback: function (pdf) {
        pdf.save('cv.pdf')
      },
      x: 0,
      y: 0,
      html2canvas: { scale: scale },
    })
  }
  return (
    <div id="maker-conatainer">
      <div id="save-pdf">
        <p>Satisfied? Don't forget to save it for print →</p>
        <button onClick={() => saveAsPDF()}>Save CV</button>
      </div>
      <Bio />
      <hr />
      <Education />
      <hr />
      <Profession />
    </div>
  )
}
