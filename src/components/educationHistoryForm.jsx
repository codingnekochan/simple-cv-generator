import PropTypes from "prop-types";

export default function EducationHistoryForm({educationInfo,educationIndex,setEducationInfo}) {

    function handleEducationHistory(e) {
        let elementID = e.currentTarget.id;
        const updatedArray = [...educationInfo]
        updatedArray[educationIndex][elementID] = e.currentTarget.value
        setEducationInfo(updatedArray)
    }
    console.log(educationInfo)
    return <>
        <form action="#" className='education-form grid grid-cols-2 grid-rows-3 gap-2 mb-4'>
            <div className="flex flex-col">
                <label htmlFor="degree">Degree</label>
                <input type="text" id='degree' className='border placeholder:text-xs pl-1 outline-none focus-visible:border-gray-700' placeholder='Bachelor of Science' value={educationInfo[educationIndex].degree} onChange={handleEducationHistory} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="course">Course of Study</label>
                <input type="text" id='course' className='border placeholder:text-xs pl-1 outline-none focus-visible:border-gray-700' placeholder='Computer Science' value={educationInfo[educationIndex].course} onChange={handleEducationHistory} />
            </div>
            <div className="flex flex-col col-span-2">
                <label htmlFor="school">School</label>
                <input type="text" id='school' className='border placeholder:text-xs pl-1 outline-none focus-visible:border-gray-700' placeholder='University of Fantasia, Lala Land' value={educationInfo[educationIndex].school} onChange={handleEducationHistory} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="start">Start Date</label>
                <input type="date" id='start' className='border placeholder:text-xs pl-1 outline-none focus-visible:border-gray-700' value={educationInfo[educationIndex].start} onChange={handleEducationHistory} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="end">End Date</label>
                <input type="date" id="end" className='border placeholder:text-xs pl-1 outline-none focus-visible:border-gray-700' value={educationInfo[educationIndex].end} onChange={handleEducationHistory} />
            </div>
        </form>
    </>
}
EducationHistoryForm.propTypes = {
    educationInfo: PropTypes.any,
    educationIndex: PropTypes.number,
    setEducationInfo: PropTypes.any
}