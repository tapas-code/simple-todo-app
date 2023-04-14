import React, { useState } from 'react'

const Phone = () => {

    const [item, setItem] = useState('');
    const [itemList, setItemList] = useState([]);

    const handleChange = (e) => {
        setItem(e.target.value)
    }

    const handleSubmit = () => {
        setItemList((prev)=>{
            return [...prev, item]
        })
        setItem('')
    }

    const handleDelete = (id) => {
        setItemList((prevList)=>{
            return prevList.filter((itemval, index)=>index!=id)
        })
    }

  return (
    <div className='flex h-screen w-screen items-center'>
      <div className="mockup-phone border-primary">
        <div className="camera"></div>
        <div className="display">
            <div className="artboard artboard-demo phone-1">
                <div className="container h-full m-4 p-8">
                    {/* Header Section  */}
                    <h1 className='text-3xl font-bold font-sans text-center'>TODO LIST</h1>
                    <p className='border-2 w-24 ml-20 mt-1 border-secondary'></p>

                    {/* Input Section  */}
                    <div className="form-control mt-8">
                        <div className="input-group">
                            <input type="text" placeholder="Add item" className="input input-bordered"
                            value={item} 
                            onChange={handleChange}/>
                            <button className="btn btn-square hover:text-green-500"
                            onClick={handleSubmit}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            </button>
                        </div>
                    </div>

                    {/* List of all Todos  */}
                    <ol className='mt-16'>
                        {itemList.map((item, index)=>{
                            return (
                                <div className='flex items-center align-center mb-2' key={index}>
                                    <button 
                                        onClick={()=>{handleDelete(index)}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:cursor-pointer
                                        hover:text-red-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </button>
                                    <li className='ml-3 text-lg'>{item}</li>
                                </div>
                            )
                        })}
                    </ol>

                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Phone
