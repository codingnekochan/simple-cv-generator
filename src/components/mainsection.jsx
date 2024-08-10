import Form from "./form";
import UserCVTemplate from './resume'
import { useState } from "react";
import profilePic from '../assets/profilePic.jpg'

export function MainContent() {    // parent container for form and resume template
    // basicInfo object holds all basicInfo data
    const [basicInfo, setBasicInfo] = useState({
        profilepic: profilePic,
        firstname: '',
        lastname: '',
        address: '',
        telephone: '',
        email: '',
        occupation: '',
        about: '',
    })
    // workForm holds work history data
    const workForm = {
        jobTitle: '',
        employer: '',
        startDate: '',
        endDate: 'Present',
        responsibilities: []
    }
    // educationForm holds education history data
    const educationForm = {
        degree: '',
        course: '',
        school: '',
        start: '',
        end: 'Present',

    }
    // all states for different form sections
    const [workInfo, setWorkInfo] = useState([workForm])
    const [educationInfo, setEducationInfo] = useState([educationForm])
    const [skillInfo, setSkillInfo] = useState(['', '', '']) // hold skills list in an array
    const [certsInfo, setCertsInfo] = useState(['', '', ''])  //hold certifications/awards in an array
    return (
        <main className="main-page flex justify-between px-6 pb-6">
            <Form
            //form props
                basicInfo={basicInfo}
                setBasicInfo={setBasicInfo}
                workForm={workForm}
                workInfo={workInfo}
                setWorkInfo={setWorkInfo}
                educationForm={educationForm}
                educationInfo={educationInfo}
                setEducationInfo={setEducationInfo}
                skillInfo={skillInfo}
                setSkillInfo={setSkillInfo}
                certsInfo={certsInfo}
                setCertsInfo={setCertsInfo}
            />
            <UserCVTemplate
            // resume props
                userBasicInfo={basicInfo}
                workHistory={workInfo}
                educationHistory={educationInfo}
                skills={skillInfo}
                certification={certsInfo}
            />
        </main>
    )
}



