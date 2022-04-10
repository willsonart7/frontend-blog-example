import { useState } from 'react'

export default ({ onFilterPosts }) => {

    const [inputSearch, setInputSearch] = useState(null)

    const onChangeInput = (e) => {
        setInputSearch(e.target.value)
    }

    const handleFilter = () => {
        onFilterPosts(inputSearch)
    }

    return (
        <div className="flex justify-between">
            <div className=''>
                <input className='inline-block px-6 py-2.5 rounded' onChange={onChangeInput} type="text" placeholder='Filtro por nombre' />
            </div>
            <div className=''>
                <button onClick={handleFilter} type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Buscar</button>
            </div>
        </div>
    )
}