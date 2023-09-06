import { useState } from 'react'
import { createContext } from 'react'
import { v4 } from 'uuid'

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

  // EDUCATION
  const [educations, setEducations] = useState([
    {
      uuid: v4(),
      fieldOfStudy: 'Crimology',
      school: 'Gotham University',
      city: 'Gotham, New Jersey',
      country: 'USA',
      startDate: 'October 2nd, 1957',
      endDate: 'July 4th 1961',
    },
  ])

  const [fieldOfStudy, setFieldOfStudy] = useState('')
  const [school, setSchool] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

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
    educational: {
      educationList: {
        educations,
        setEducations,
      },
      educationItem: [
        [
          fieldOfStudy,
          setFieldOfStudy,
          'Crimology',
          'Field of Study',
          'fieldOfStudy',
        ],
        [school, setSchool, 'Gotham University', 'School', 'school'],
        [city, setCity, 'Gotham', 'City', 'city'],
        [country, setCountry, 'USA', 'Country', 'country'],
        [startDate, setStartDate, 'Start Date', 'startDate'],
        [endDate, setEndDate, 'End Date', 'endDate'],
      ],
    },
    professional: [],
  }
  return (
    <UserContext.Provider
      value={{ bio: bigObj.bio, educational: bigObj.educational }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
