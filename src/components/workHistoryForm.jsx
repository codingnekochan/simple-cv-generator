import PropTypes from "prop-types";

export default function WorkHistoryForm({ workInfo, workIndex, setWorkInfo }) {
    function handleWorkHistory(e) {
        let elementID = e.currentTarget.id;
        let isResponsibility = e.currentTarget.classList.contains('responsibilities');
        const updatedArray = [...workInfo]
        if (isResponsibility) {
            let index = parseInt(elementID)
            console.log(index)
            let responsibilitiesArray = [...updatedArray[workIndex].responsibilities]
            responsibilitiesArray[index] = e.currentTarget.value
            updatedArray[workIndex].responsibilities = responsibilitiesArray
        }
        else {
            updatedArray[workIndex][elementID] = e.currentTarget.value    
        }
        setWorkInfo(updatedArray)
    }
    console.log(workInfo)
    return <>
        <div className="mb-4">
            <form id={workIndex} action="#" className='work-experience-form grid grid-cols-2 grid-row-4 gap-2'>
                <div className="flex flex-col col-span-1 row-span-1">
                    <label htmlFor="jobTitle">Job Title</label>
                    <input id="jobTitle" type="text" className='border placeholder:text-xs pl-1 outline-none focus-visible:border-gray-700' placeholder='Senior Developer' value={workInfo[workIndex].jobTitle} onChange={handleWorkHistory} />
                </div>
                <div className="flex flex-col col-span-1 row-span-1">
                    <label htmlFor="employer">Employer</label>
                    <input type="text" id='employer' placeholder='Pineapple Inc.' className='border placeholder:text-xs pl-1 outline-none focus-visible:border-gray-700' value={workInfo[workIndex].employer} onChange={handleWorkHistory} />
                </div>
                <div className="flex flex-col col-span-1 row-span-1">
                    <label htmlFor="startDate">Start Date</label>
                    <input type="date" id='startDate' className='border placeholder:text-xs pl-1 outline-none focus-visible:border-gray-700' value={workInfo[workIndex].startDate} onChange={handleWorkHistory} />
                </div>
                <div className="flex flex-col col-span-1 row-span-1">
                    <label htmlFor="endDate">End Date</label>
                    <input type="date" id="endDate" className='border placeholder:text-xs pl-1 outline-none focus-visible:border-gray-700' value={workInfo[workIndex].endDate} onChange={handleWorkHistory} />
                </div>
                <div className="flex flex-col gap-1 col-span-2 row-span-2">
                    <fieldset>
                        <legend>Responsibilities</legend>
                        <ol className='list-disc list-inside flex flex-col gap-1'>
                            <li><input type="text" id='0' className='responsibilities border placeholder:text-xs pl-1 outline-none focus-visible:border-gray-700' onChange={handleWorkHistory} /></li>
                            <li><input type="text" id='1' className='responsibilities border placeholder:text-xs pl-1 outline-none focus-visible:border-gray-700' onChange={handleWorkHistory} /></li>
                            <li><input type="text" id='2' className='responsibilities border placeholder:text-xs pl-1 outline-none focus-visible:border-gray-700' onChange={handleWorkHistory} /></li>
                            <li><input type="text" id='3' className='responsibilities border placeholder:text-xs pl-1 outline-none focus-visible:border-gray-700' onChange={handleWorkHistory} /></li>
                            <li><input type="text" id='4' className='responsibilities border placeholder:text-xs pl-1 outline-none focus-visible:border-gray-700' onChange={handleWorkHistory} /></li>
                        </ol>
                    </fieldset>

                </div>
            </form>
        </div>
    </>

}

WorkHistoryForm.propTypes = {
    workInfo: PropTypes.any,
    workIndex: PropTypes.number,
    setWorkInfo: PropTypes.any
}