import mail from '../assets/mail.svg'
import telephone from '../assets/telephone.svg'
import address from '../assets/address.svg'
import { Fragment } from 'react'
import PropTypes from "prop-types";
export default function UserCVTemplate({ userBasicInfo, workHistory, educationHistory , skills, certification}) {
    return (
        <section id='resume' className="rounded-sm border bg-white w-[695px]  h-[942px] relative font-[Lato] text-xs pb-4">
            <section id='basic-info' className=' mt-8 flex justify-end bg-[#f4f4f4] h-[190px]'>
                <div className='w-[60%] p-8'>
                    <h2 id='role' className="font-[Raleway] text-base uppercase text-[#464a4e]">{userBasicInfo.occupation}</h2>
                    <h1 id='name' className='font-[Montesserat] uppercase text-2xl font-semibold text-[#244c5d] mb-2'>{userBasicInfo.firstname} {userBasicInfo.lastname}</h1>
                    <p className='text-[#706f6f]'>
                        {userBasicInfo.about}
                    </p>
                </div>
            </section>
            <section id='career-info' className='text-[#706f6f] pl-72 mt-8 pr-4'>
                <section id='experience-info'>
                    <h2 className='font-bold uppercase font-[Raleway] leading-loose text-[#244c5d] tracking-[.2em] mb-2'>Experience</h2>
                    <div className='mb-4'>
                        {workHistory.map((work, index) => {
                           return <Fragment key={`work-${index}`}>
                                <h3 className='job-role font-bold text-[#464a4e] uppercase leading-loose'>
                                    {work.jobTitle}
                                </h3>
                                <p className='company-name mb-1 capitalize'>
                                    {work.employer}
                                </p>
                                <p className='employment-duration text-[#464a4e] font-bold'>
                                    {`${work.startDate} - ${work.endDate}`}
                                </p>
                                <ul className='acievement list-disc list-outside leading-normal ml-3'>
                                    {work.responsibilities.map((responsibility, index) => {
                                if(responsibility !== ''){
                                    return <li key={index}>{responsibility}</li>
                                }
                            })}
                                </ul>
                            </Fragment>
                        })
                        }                 
                    </div>

                </section>
                <section id='education-info'>
                    <h2 className='font-bold uppercase font-[Raleway] leading-loose text-[#244c5d] tracking-[.2em] mb-2'>Education</h2>
                    <div className='mb-2'>
                        {educationHistory.map((education,index) => {
                            return <Fragment key={`work-${index}`}>
                                <p className="school-year font-bold text-[#464a4e] ">
                                    {`${education.start}- ${education.end}`}
                                </p>
                                <p className="Degree">
                                    <span className="degree capitalize">{education.degree} </span>
                                    in
                                    <span className="course capitalize"> {education.course}</span>
                                </p>
                                <p className="university ncapitalize font-bold text-[#464a4e] ">
                                    {`${education.school}`}
                                </p>
                            </Fragment>
                        })
                        }
                    </div>
                </section>
            </section>
            <section id='extra-info' className='w-[220px] h-full bg-[#d9e6ec] absolute top-0 left-8 flex flex-col gap-12  text-[#625f5f]'>
                <div id="profile-pic" className=' self-center rounded-full border-8 border-[#a7c9d8] w-[150px] h-[150px] mt-14'>
                    <img id='profile-pic' src={userBasicInfo.profilepic} className='w-full h-full object-cover rounded-full' />
                </div>
                <section id='contact-info' className=' px-2'>
                    <h3 className='contact uppercase font-bold font-[Raleway] leading-loose text-[#464a4e] tracking-[.2em] ml-2'>Contact</h3>
                    <div id='email' className='flex gap-3 items-center contact-detail px-2'>
                        <img src={mail} alt="email" />
                        <p>{userBasicInfo.email}</p>
                    </div>
                    <div id='phone' className='flex gap-3 items-center contact-detail px-2'>
                        <img src={telephone} alt="phone number" />
                        <p>{userBasicInfo.telephone}</p>
                    </div>
                    <div id='address' className='flex gap-3 items-center contact-detail px-2'>
                        <img src={address} alt="address" />
                        <p className='capitalize'>{userBasicInfo.address}</p>
                    </div>
                </section>
                <section id="skill-info" className='pl-4'>
                    <h3 className='font-bold uppercase font-[Raleway] leading-loose text-[#464a4e] tracking-[.2em]'>Skills</h3>
                    <ul className='list-disc list-inside leading-loose capitalize'>
                        {
                            skills.map((skill,index)=>{
                                if (skill !== '') {
                                    return <li key={Math.random()*index}>{skill}</li>
                                }
                            })
                        }
                    </ul>

                </section>
                <section id="awards" className='pl-4'>
                    <h3 className='font-bold uppercase font-[Raleway] leading-loose text-[#464a4e] tracking-[.2em]'>Cerifications</h3>
                    <ul className='list-disc list-inside leading-loose'>
                        {
                            certification.map((certificate, index) => {
                                if (certificate !== '') {
                                    return <li key={Math.random() * index}>{certificate}</li>
                                }
                            })
                        }
                    </ul>
                </section>
            </section>
        </section>
    )

}

UserCVTemplate.propTypes = {
    userBasicInfo : PropTypes.object,
    workHistory: PropTypes.array,
    educationHistory: PropTypes.array,
    skills:PropTypes.array,
    certification: PropTypes.array

}