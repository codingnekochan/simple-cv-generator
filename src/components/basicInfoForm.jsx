import upload from '../assets/upload.svg'
import '../index.css'
export default function BasicInfoForm({newValue,handleChange}) {
    return (
        <>
            <form className="basic-info-form grid grid-cols-3 grid-rows-3 gap-2 mt-4 ">
                <div className="border rounded-lg col-span-1 row-span-3 h-[100px] w-[120px] gap-1 self-center">
                    <label htmlFor='profilepic' className="cursor-pointer px-2 py-1 flex flex-col items-center justify-center " tabIndex={0}>
                        <img src={upload} alt="upload icon" className='w-[50px]' />
                        Upload Photo
                        <input type="file" id='profilepic' name='profilePicture' className="visually-hidden" accept="image/*" onChange={handleChange}/>
                    </label>
                </div>
                <div className='flex flex-col col-span-1 row-span-1'>
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" name='firstName' id='firstname' className='firstname border placeholder:text-xs pl-1 outline-none focus-visible:border-gray-700' value={newValue.firstname} onChange={handleChange} placeholder='Salma' />
                </div>
                <div className='flex flex-col col-span-1 row-span-1'>
                    <label htmlFor='lastname'>Last Name</label>
                    <input type="text" name='lastName' id='lastname' className='border placeholder:text-xs pl-1 outline-none focus-visible:border-gray-700' value={newValue.lastname} onChange={handleChange} placeholder='Doeson' />
                </div>
                <div className='flex flex-col col-span-2 row-span-1'>
                    <label htmlFor='address'>Address</label>
                    <input type="text" name='address' id='address' className='border placeholder:text-xs pl-1 outline-none focus-visible:border-gray-700' placeholder='12,Dreams St., Lala Land, Utopia' value={newValue.address} onChange={handleChange} />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='phone'>Telephone</label>
                    <input type="tel" name='phone' id='telephone' className='border placeholder:text-xs pl-1 outline-none focus-visible:border-gray-700' placeholder='+23470546973' value={newValue.telephone} onChange={handleChange} />
                </div> 
                <div className='flex flex-col'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' className='border placeholder:text-xs pl-1 outline-none focus-visible:border-gray-700' placeholder='salmadoeson@gmail.com' value={newValue.email} onChange={handleChange} />
                </div>
            </form>
            <details className='border shadow-sm rounded-lg p-4 my-4'>
                <summary>BRIEF DESCRIPTION</summary>
                <div className='flex flex-col'>
                    <label htmlFor="occupation">Occupation</label>
                    <input type="text" name='occupation' id='occupation' className='border placeholder:text-xs pl-1 outline-none focus-visible:border-gray-700' placeholder='Software Engineer' value={newValue.occupation} onChange={handleChange} />
                    <label htmlFor='about'>About</label>
                    <textarea name="about" id="about" className='border pl-2 outline-none focus-visible:border-gray-700 h-[100px]' maxLength={250} placeholder='I am awesome software engineer and I write great code' autoCorrect='on' value={newValue.about} onChange={handleChange}></textarea>
                </div>
            </details>
        </>
    )
}

