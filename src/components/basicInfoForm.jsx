import upload from '../assets/upload.svg'
import '../index.css'
import PropTypes from "prop-types";
//////
export default function BasicInfoForm({ basicInfo, setBasicInfo }) {
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
    return (
        <>
            <form className="basic-info-form grid grid-cols-3 grid-rows-3 gap-2 mt-4 ">
                <div className="border rounded-lg col-span-1 row-span-3 h-[100px] w-[120px] gap-1 self-center">
                    <label htmlFor='profilepic' className="cursor-pointer px-2 py-1 flex flex-col items-center justify-center " tabIndex={0}>
                        <img src={upload} alt="upload icon" className='w-[50px]' />
                        <span>Upload Photo</span>
                        <input type="file" id='profilepic' name='profilePicture' className="visually-hidden" accept="image/*" onChange={handleBasicInfo} />
                    </label>
                </div>
                <div className='flex flex-col col-span-1 row-span-1'>
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" name='firstName' id='firstname' className='firstname border placeholder:text-xs pl-1 outline-none focus-visible:border-gray-700' value={basicInfo.firstname} onChange={handleBasicInfo} placeholder='Salma' />
                </div>
                <div className='flex flex-col col-span-1 row-span-1'>
                    <label htmlFor='lastname'>Last Name</label>
                    <input type="text" name='lastName' id='lastname' className='border placeholder:text-xs pl-1 outline-none focus-visible:border-gray-700' value={basicInfo.lastname} onChange={handleBasicInfo} placeholder='Doeson' />
                </div>
                <div className='flex flex-col col-span-2 row-span-1'>
                    <label htmlFor='address'>Address</label>
                    <input type="text" name='address' id='address' className='border placeholder:text-xs pl-1 outline-none focus-visible:border-gray-700' placeholder='12,Dreams St., Lala Land, Utopia' value={basicInfo.address} onChange={handleBasicInfo} />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='phone'>Telephone</label>
                    <input type="tel" name='phone' id='telephone' className='border placeholder:text-xs pl-1 outline-none focus-visible:border-gray-700' placeholder='+23470546973' value={basicInfo.telephone} onChange={handleBasicInfo} />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' className='border placeholder:text-xs pl-1 outline-none focus-visible:border-gray-700' placeholder='salmadoeson@gmail.com' value={basicInfo.email} onChange={handleBasicInfo} />
                </div>
            </form>
            <details className='border shadow-sm rounded-lg p-4 my-4'>
                <summary>BRIEF DESCRIPTION</summary>
                <div className='flex flex-col'>
                    <label htmlFor="occupation">Occupation</label>
                    <input type="text" name='occupation' id='occupation' className='border placeholder:text-xs pl-1 outline-none focus-visible:border-gray-700' placeholder='Software Engineer' value={basicInfo.occupation} onChange={handleBasicInfo} />
                    <label htmlFor='about'>About</label>
                    <textarea name="about" id="about" className='border pl-2 outline-none focus-visible:border-gray-700 h-[100px]' maxLength={250} placeholder='I am awesome software engineer and I write great code' autoCorrect='on' value={basicInfo.about} onChange={handleBasicInfo}></textarea>
                </div>
            </details>
        </>
    )
}
//////
BasicInfoForm.propTypes ={
    basicInfo : PropTypes.object,
    setBasicInfo : PropTypes.func
}