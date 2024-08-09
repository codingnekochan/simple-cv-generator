import PropTypes from "prop-types";

export default function SkillsForm({ children }) {

    return <>
        <form action="#" className='skills-form'>
            <ol className='list-disc list-inside flex flex-col gap-1 mt-4'>
                {children}
            </ol>
        </form>
    </>
}

export function Skills({ skillInfo, setSkillInfo, skillIndex }) {
    function handleSkill(e) {
        let elementID = e.currentTarget.id;
        let isASkill = e.currentTarget.classList.contains('skills');
        const updatedArray = [...skillInfo]
        if (isASkill) {
            let index = parseInt(elementID)
            console.log(index)
            updatedArray[index] = e.currentTarget.value
        }
        setSkillInfo(updatedArray)
    }
    console.log(skillInfo)
    return <input type='text' id={skillIndex} className='skills border placeholder:text-xs pl-1 outline-none focus-visible:border-gray-700' placeholder='microsoft word' value={skillInfo[skillIndex]} onChange={handleSkill} />


}
SkillsForm.propTypes = {
    children: PropTypes.any,

}
Skills.propTypes = {
    skillInfo: PropTypes.any,
    skillIndex: PropTypes.number,
    setSkillInfo: PropTypes.any,
}
