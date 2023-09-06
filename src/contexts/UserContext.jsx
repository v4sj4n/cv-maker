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
  const [bio, setBio] = useState(
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
      endDate: 'July 4th, 1961',
    },
  ])

  const [fieldOfStudy, setFieldOfStudy] = useState('')
  const [school, setSchool] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  // Professional
  const [professionalExperiences, setProfessionalExperiences] = useState([
    {
      uuid: v4(),
      jobTitle: 'Batman',
      company: 'nonProfit/Community',
      startDate: 'July 4th, 1961',
      endDate: '',
      description:
        "Me Batman, also known as the Dark Knight, is an iconic vigilante from the DC Universe. Clad in a sleek bat-inspired suit and armed with unparalleled detective skills, he prowls the crime-ridden streets of Gotham City. Driven by a tragic past, Batman fights for justice without superpowers, relying on his intellect, gadgets, and indomitable will. This enigmatic hero embodies the enduring human spirit's ability to rise above adversity and inspire hope in the darkest of times.",
    },
  ])
  const [jobTitle, setJobTitle] = useState('')
  const [company, setCompany] = useState('')
  const [jobStartDate, setJobStartDate] = useState('')
  const [jobEndDate, setJobEndDate] = useState('')
  const [jobDescription, setJobDescription] = useState('')

  const bigObj = {
    bio: [
      [firstName, setFirstName, 'firstname', 'First Name'],
      [lastName, setLastName, 'lastname', 'Last Name'],
      [location, setLocation, 'location', 'Location'],
      [email, setEmail, 'email', 'Email'],
      [phone, setPhone, 'phone', 'Phone'],
      [occupation, setOccupation, 'occupation', 'Occupation'],
      [bio, setBio, 'bio', 'Bio'],
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
    professional: {
      profExperiencesList: {
        professionalExperiences,
        setProfessionalExperiences,
      },
      professionalItem: [
        [jobTitle, setJobTitle, 'Batman', 'Job Title', 'jobTitle'],
        [company, setCompany, 'nonProfit/Community', 'Company', 'company'],
        [jobStartDate, setJobStartDate, 'Job Start Date', 'jobStartDate'],
        [jobEndDate, setJobEndDate, 'Job End Date', 'jobEndDate'],
        [
          jobDescription,
          setJobDescription,
          "Me Batman, also known as the Dark Knight, is an iconic vigilante from the DC Universe. Clad in a sleek bat-inspired suit and armed with unparalleled detective skills, he prowls the crime-ridden streets of Gotham City. Driven by a tragic past, Batman fights for justice without superpowers, relying on his intellect, gadgets, and indomitable will. This enigmatic hero embodies the enduring human spirit's ability to rise above adversity and inspire hope in the darkest of times.",
          'Job Description',
          'jobDescription',
        ],
      ],
    },
  }
  return (
    <UserContext.Provider
      value={{
        bio: bigObj.bio,
        educational: bigObj.educational,
        professional: bigObj.professional,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
