import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div className='mx-5'>
                News Component
                <div className='grid grid-cols-3 gap-4'>
                    <NewsItem title="myTitle" description="myDescription" />
                    <NewsItem title="myTitle" description="myDescription" />
                    <NewsItem title="myTitle" description="myDescription" />
                    <NewsItem title="myTitle" description="myDescription" />
                </div>

            </div>
        )
    }
}

export default News