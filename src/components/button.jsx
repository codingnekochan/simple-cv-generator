import PropTypes from "prop-types";
import downloadImage from '../assets/download.svg'

function AddButton({ buttonName,info,setInfo,setInfoLength, form}) {

    const handleAddComponent = () => {
        let newComponent = [...info, form]
        setInfo(newComponent);
        setInfoLength(newComponent.length)
    };

    return (
        <div>
           
            <button className=' mt-4 border px-4 py-2 mx-2 bg-blue-500 text-slate-50 rounded-xl' onClick={handleAddComponent}>
                {buttonName}
            </button>
        </div>
    )
}
function DeleteButton({buttonName,info,setInfo,setInfoLength}) {
    const handleDeletion = ()=> {
        if(info.length > 1){
            let newInfoArray = info.slice(0, -1)
            setInfo(newInfoArray)
            setInfoLength(newInfoArray.length)
        }    
    }

    return <button className='mt-4 border px-6 py-2 mx-2 text-slate-50 bg-red-500 rounded-xl' onClick={handleDeletion} >
        {buttonName}
    </button>
}
function DownloadButton (){

    return <button className='create-button  flex gap-2 mt-4 border px-4 py-2 mx-2 bg-blue-500 text-slate-50 rounded-xl hover:scale-110' >
        <span>Download CV</span>
        <img src={downloadImage} alt="download icon" />
    </button>


}

export { AddButton, DeleteButton, DownloadButton }

AddButton.propTypes = {
    buttonName: PropTypes.string.isRequired,
    info:PropTypes.any,
    setInfo:PropTypes.any,
    setInfoLength : PropTypes.any,
    form:PropTypes.any
}
DeleteButton.propTypes = {
    buttonName: PropTypes.string.isRequired,
    info: PropTypes.any,
    setInfo: PropTypes.any,
    setInfoLength: PropTypes.any,
    form: PropTypes.any
}
