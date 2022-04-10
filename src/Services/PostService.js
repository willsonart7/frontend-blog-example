
export class PostService {

    static async  getPosts() {
        const res = await fetch("http://localhost:3001/api/post")
        const json = await res.json()

        if (json.status == 201) {
            return json.response
        }

        return []
    }

}