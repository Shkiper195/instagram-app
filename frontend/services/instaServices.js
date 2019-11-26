export default class instaServices {
    constructor() {
        this._apiBase = 'https://aqueous-forest-33289.herokuapp.com'
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}: received ${res.status}`);
        }

        return await res.json();
    }

    getAllPosts = async () => {
        const res = await this.getResource('/posts/');
        return res;
    }

    getAllUsers = async () => {
        const res = await this.getResource('/posts/');
        return res.map(this._transformPosts);
    }

    _transformPosts = (post) => {
        return {
            photo: post.photo,
            name: post.name,
            alt: post.altname,
            _id: post._id
        }
    }

    getAllMyPhotos = async () => {
        const res = await this.getResource('/my-posts/');
        return res;
    }
}