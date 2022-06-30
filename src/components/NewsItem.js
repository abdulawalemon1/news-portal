import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description } = this.props;
        return (
            <div className=''>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{title}</h2>
                        <p>{description}</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem