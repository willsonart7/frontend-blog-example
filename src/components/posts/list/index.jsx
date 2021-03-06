
const PostList = ({ posts, onDeletePost }) => {
    return (
        <table className="min-w-full">
            <thead className="bg-white border-b">
                <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Nombre
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Descripción
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Acción
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    posts?.map((post, index)=> (
                        <tr key={post.id} className="bg-gray-100 border-b">
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                { post.name }
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {post.description}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                <button onClick={() => {
                                    onDeletePost(post.id)
                                }}>
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )

}

export default PostList