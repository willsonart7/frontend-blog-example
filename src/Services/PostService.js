export class PostService {

    static async getPosts() {
        const res = await fetch("http://localhost:3001/api/post")
        const json = await res.json()

        if (json.status == 201) {
            return json.response
        }

        return []
    }

    static async createPost(newPost) {

        try {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: newPost.name,
                    description: newPost.description
                })
            };

            const postId = newPost.id

            const res = await fetch('http://localhost:3001/api/post/' + postId, requestOptions)
            const json = await res.json()

            if (json.status == 201) {
                return true
            }

        } catch (error) {
            alert("Ha ocurrido un error en la creacion del Post, por favor intentolo mas tarde")
        }

    }

    static async deletePost(postId) {
        try {
            const requestOptions = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            };

            const res = await fetch('http://localhost:3001/api/post/' + postId, requestOptions)
            const json = await res.json()

            if (json.status == 201) {
                return true
            }

        } catch (error) {
            alert("Ha ocurrido un error en la creacion del Post, por favor intentolo mas tarde")
        }
    }



}