import React, {Component} from 'react';
import InstaService from '../services/instaServices';
import ErrorMessage from './Error';

export default class Palette extends Component {
    InstaService = new InstaService();
    state = {
        error: false,
        photos: []
    }

    componentDidMount() {
        this.updatePhotos();
    }

    updatePhotos() {
        this.InstaService.getAllMyPhotos()
        .then(this.onPhotosLoaded)
        .catch(this.onError);
    }

    onPhotosLoaded = (photos) => {
        this.setState({
            photos,
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
            const {src, alt, _id} = item;

            return (
               <img key={_id} src={src} alt={alt} className="palette__img"></img>
            )
        })
    }

    render() {
        const {error, photos} = this.state;

        if (error) {
            return <ErrorMessage />
        }

        const items = this.renderItems(photos);

        return (
           <div className="palette">
               {items}
           </div>
        )
    }
}