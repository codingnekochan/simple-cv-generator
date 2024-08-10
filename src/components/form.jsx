import '../index.css'
import BasicInfoForm from './basicInfoForm'
import WorkHistoryForm from './workHistoryForm'
import EducationHistoryForm from './educationHistoryForm'
import SkillsForm, { Skills } from './skillsForm'
import CertificationsForm, { Certificate } from './certificationsForm'
import AccordionComponent from './accordionComponent'
import { AddButton, DeleteButton, DownloadButton } from './button'
import { Fragment } from 'react'
import { useState } from 'react'
import PropTypes from "prop-types";


export default function Form(
    {
        basicInfo,
        setBasicInfo,
        workInfo,
        setWorkInfo,
        workForm,
        educationForm,
        educationInfo,
        setEducationInfo,
        skillInfo,
        setSkillInfo,
        certsInfo,
        setCertsInfo
    }
) {

    const [workLength, setWorkLength] = useState(1);
    const [educationLength, setEducationLength] = useState(1)
    const [skillsLength, setSkillsLength] = useState(3)
    const [certsLength, setCertsLength] = useState(3)


    return (
        <section className="border rounded-lg w-[40%] h-full p-8 shadow-lg text-base text-[Raleway]  text-[#141517] bg-white">
            <AccordionComponent id='basic-info' heading='BASIC INFORMATION'>
                <BasicInfoForm
                    basicInfo={basicInfo}
                    setBasicInfo = {setBasicInfo}
                />
            </AccordionComponent>
            <AccordionComponent id='work-history' heading='WORK HISTORY'>
                {
                    Array.from({ length: workLength }).map((_, index) => {
                        return <Fragment key={'w'+index + Math.random()*1}>
                            <WorkHistoryForm workIndex={index} workInfo={workInfo} setWorkInfo={setWorkInfo} />
                        </Fragment>
                    })
                }
                <AddButton
                    buttonName ='Add Work History'
                    info={workInfo}
                    setInfo={setWorkInfo}
                    setInfoLength={setWorkLength}
                    form={workForm}
                />
                <DeleteButton 
                buttonName='Delete Work History'
                    info={workInfo}
                    setInfo={setWorkInfo}
                    setInfoLength={setWorkLength} 
                />
            </AccordionComponent>
            <AccordionComponent id='education' heading='EDUCATION'>
                {
                    Array.from({ length: educationLength }).map((_, index) => {
                        return <Fragment key={'e' + index + Math.random()*1}>
                            <EducationHistoryForm educationIndex={index} educationInfo={educationInfo} setEducationInfo={setEducationInfo} />
                        </Fragment>
                    })
                }
                <AddButton
                    buttonName='Add Education'
                    info={educationInfo}
                    setInfo={setEducationInfo}
                    setInfoLength={setEducationLength}
                    form={educationForm}
                />
                <DeleteButton
                    buttonName='Delete Education'
                    info={educationInfo}
                    setInfo={setEducationInfo}
                    setInfoLength={setEducationLength}
                 />
            </AccordionComponent>
            <AccordionComponent id='skills' heading='SKILLS'>
                <SkillsForm >
                    {
                        Array.from({ length: skillsLength }).map((_, index) => {
                            return <li key={'s' + index + Math.random()*1}>
                                <Skills skillInfo={skillInfo} skillLength={skillsLength} setSkillInfo={setSkillInfo} skillIndex={index} />
                            </li>
                        })
                    }
                </SkillsForm>
                <AddButton
                    buttonName='Add Skill'
                    info={skillInfo}
                    setInfo={setSkillInfo}
                    setInfoLength={setSkillsLength}
                    form={''}
                />
                <DeleteButton
                buttonName='Delete Skill'
                    info={skillInfo}
                    setInfo={setSkillInfo}
                    setInfoLength={setSkillsLength}
                />
            </AccordionComponent>
            <AccordionComponent id='awards' heading='AWARDS/CERTIFICATIONS'>
                <CertificationsForm>
                    {
                        Array.from({ length: certsLength }).map((_, index) => {
                            return <li key={'c' + index + Math.random()*1}>
                                <Certificate certsInfo={certsInfo} certsLength={certsLength} setCertsInfo={setCertsInfo} certIndex={index} />
                            </li>
                        })
                    }
                </CertificationsForm>
                <AddButton
                    buttonName='Add Certification'
                    info={certsInfo}
                    setInfo={setCertsInfo}
                    setInfoLength={setCertsLength}
                    form={''}
                />
                <DeleteButton
                buttonName='Delete Certification'
                    info={certsInfo}
                    setInfo={setCertsInfo}
                    setInfoLength={setCertsLength}
                 />
            </AccordionComponent>
            <DownloadButton/>
        </section>
    )
}
Form.propTypes = {
    basicInfo: PropTypes.object,
    setBasicInfo: PropTypes.func,
    workInfo: PropTypes.array,
    setWorkInfo: PropTypes.func,
    workForm: PropTypes.object,
    educationForm: PropTypes.object,
    educationInfo: PropTypes.array,
    setEducationInfo: PropTypes.func,
    skillInfo: PropTypes.array,
    setSkillInfo: PropTypes.func,
    certsInfo: PropTypes.array,
    setCertsInfo: PropTypes.func,
}
