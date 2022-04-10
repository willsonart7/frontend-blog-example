import { useState } from 'react'

export default ({ onCreatePost }) => {

    const [inputName, setInputName] = useState(null)
    const [inputDescription, setInputDescription] = useState(null)

    const onChangeInputName = (e) => {
        setInputName(e.target.value)
    }

    const onChangeInputDescription = (e) => {
        setInputDescription(e.target.value)
    }

    const handleCreatePost = () => {
        if (!inputName) {
            alert("Debe introducir un nombre para el post")
        }

        const body = {
            name: inputName,
            description: inputDescription
        }
        setInputName(null)
        setInputDescription(null)
        onCreatePost(body)
    }

    return (
        <div className="flex justify-between">
            <div className=''>
                <input id='name' className='inline-block px-6 py-2.5 rounded' onChange={onChangeInputName} type="text" placeholder='Nombre' />
            </div>
            <div className=''>
                <textarea id='description' className='inline-block px-6 py-2.5 rounded' onChange={onChangeInputDescription} type="text" placeholder='Descripcion' />
            </div>
            <div className=''>
                <button onClick={handleCreatePost} type="button" className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Crear</button>
            </div>
        </div>
    )
}