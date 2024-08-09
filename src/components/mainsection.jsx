import Form from "./form";
import UserCVTemplate from './resume'
import { useState } from "react";
import profilePic from '../assets/profilePic.jpg'

export function MainContent() {
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
    function handleBasicInfo(e) {
        let elementID = e.currentTarget.id
        if (elementID === 'profilepic') {
            let file = URL.createObjectURL(e.target.files[0])
            setBasicInfo(() => ({ ...basicInfo, [elementID]: file }))
        }
        else {
            setBasicInfo(() => ({
                ...basicInfo,
                [elementID]: e.target.value
            })
            );
        }
    }

    const workForm = {
        jobTitle: '',
        employer: '',
        startDate: '',
        endDate: 'Present',
        responsibilities: []
    }
    const educationForm = {
        degree: '',
        course: '',
        school: '',
        start: '',
        end: 'Present',

    }
    const [workInfo, setWorkInfo] = useState([workForm])
    const [educationInfo, setEducationInfo] = useState([educationForm])
    const [skillInfo, setSkillInfo] = useState(['', '', ''])
    const [certsInfo, setCertsInfo] = useState(['', '', ''])
    return (
        <main className="main-page flex justify-between px-6 pb-6">
            <Form
                basicInfo={basicInfo}
                handleBasicInfo={handleBasicInfo}
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
            <UserCVTemplate userBasicInfo={basicInfo} workHistory={workInfo} educationHistory={educationInfo} skills={skillInfo} certification={certsInfo} />
        </main>
    )
}



