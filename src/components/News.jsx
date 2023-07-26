import React, { Component } from 'react'
import NewItem from './NewItem'
  
export class News extends Component {
    
    constructor(){
        super();
        this.state = {
          articles: [],
            loading: false
        }
    } 
   async componentDidMount() {
      console.log("cdm")
      let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1ae76980be44473f9ca501bca103aeba";
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({articles: parsedData.articles})
    

    }
  render() {
    console.log("render")
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        <div className='row'>
          {this.state.articles.map((element) => {
          return <div className='col-md-4' key={element.url}>
            <NewItem  title={element.title?element.title:""} description={element.description?element.description:""} 
            newsUrl={element.url} imageUrl={element.urlToImage}/>
            </div>
           })}
           </div>
       </div>
    )
  }
}


export default News
