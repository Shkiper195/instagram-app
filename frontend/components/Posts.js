import React, {Component} from 'react';
import InstaService from '../services/instaServices';
import ErrorMessage from './Error';

export default class Posts extends Component {
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false
    }

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.InstaService.getAllPosts()
        .then(this.onPostsLoaded)
        .catch(this.onError);
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts,
            error: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map(item => {
            const {name, altname, photo, src, alt, descr, _id} = item;

            return (
                <div key={_id} className="post">
                    <a href="#" className="post__user">
                        <img src={photo} alt={altname} className="user__img"></img>
                        <div className="user__name">{name}</div>
                    </a>
                    <img src={src} alt={alt} className="post__img"></img>
                    <div className="post__name">
                            {name}
                    </div>
                    <div className="post__descr">
                            {descr}
                    </div>
                </div>
            )
        })
    }
    render() {
        const {error, posts} = this.state;

        if (error) {
            return <ErrorMessage />
        }
        
        const items = this.renderItems(posts);

        return (
           <div className="left">
               {items}
           </div>
        )
    }
}