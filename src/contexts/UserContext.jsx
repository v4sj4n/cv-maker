import { useState } from 'react'
import { createContext } from 'react'

const UserContext = createContext()

export function UserProvider({ children }) {
  // BIO
  const [firstName, setFirstName] = useState('Bruce')
  const [lastName, setLastName] = useState('Wayne')
  const [location, setLocation] = useState('Gotham, New Jersey')
  const [phone, setPhone] = useState('+1-800-BATMAN')
  const [email, setEmail] = useState('bruce@wayne.inc')
  const [occupation, setOccupation] = useState('Batman')
  const [description, setDescription] = useState(
    'I am a superhero protector of Gotham City, dressed as a bat and fighting against evil.'
  )

  const bigObj = {
    bio: [
      [firstName, setFirstName, 'firstname', 'First Name'],
      [lastName, setLastName, 'lastname', 'Last Name'],
      [location, setLocation, 'location', 'Location'],
      [email, setEmail, 'email', 'Email'],
      [phone, setPhone, 'phone', 'Phone'],
      [occupation, setOccupation, 'occupation', 'Occupation'],
      [description, setDescription, 'description', 'Description'],
    ],
  }
  return (
    <UserContext.Provider value={{ bio: bigObj.bio }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
