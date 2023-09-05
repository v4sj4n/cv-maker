import './Main.css'
import Maker from '../Maker/Maker'
import Preview from '../Preview/Preview'
import { UserProvider } from '../../contexts/UserContext'

export default function Main() {
  return (
    <main>
      <UserProvider>
        <Maker />
        <Preview />
      </UserProvider>
    </main>
  )
}
