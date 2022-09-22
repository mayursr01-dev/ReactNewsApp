import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
    let {title, description, imageUrl, newsUrl, author, publishedDate, source} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: '18rem'}}>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">{source}</span>
            <img src={!imageUrl?"https://i.dailymail.co.uk/1s/2022/09/09/04/62228475-0-image-a-31_1662692896266.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(publishedDate).toGMTString()}</small></p>
                <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
