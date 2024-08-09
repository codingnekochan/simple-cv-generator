import PropTypes from "prop-types";

export  default function CertificationsForm({children}) {
    return <>
            <form action='#' className='certifications-form'>
                <ol className='list-disc list-inside flex flex-col gap-1 mt-4'>
                  {children}
                </ol>
            </form>
    </>
}

export function Certificate({certsInfo,setCertsInfo,certIndex}){
    function handleCertification(e){
        let elementID = e.currentTarget.id;
        let isASkill = e.currentTarget.classList.contains('certification');
        const updatedArray = [...certsInfo]
        if (isASkill) {
            let index = parseInt(elementID)
            console.log(index)
            updatedArray[index] = e.currentTarget.value
        }
    setCertsInfo(updatedArray)
    }
    console.log(certsInfo)
    return <input type='text' id={certIndex} className='certification border placeholder:text-xs pl-1 outline-none focus-visible:border-gray-700' placeholder='best in dream 2023' value={certsInfo[certIndex]} onChange ={handleCertification} />
}

CertificationsForm.propTypes = {
    children: PropTypes.any,

}
Certificate.propTypes = {
    certsInfo: PropTypes.any,
    certIndex: PropTypes.number,
    setCertsInfo: PropTypes.any,
}