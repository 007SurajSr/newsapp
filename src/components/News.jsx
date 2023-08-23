// import React, { Component } from 'react'
// import NewItem from './NewItem'
// import Loading from './Loading';
// import PropTypes from 'prop-types'
// import InfiniteScroll from 'react-infinite-scroll-component'; 
  
// export class News extends Component {
    
//   static defaultProps = {
//     country: 'in',
//     pageSize: 8,
//     category: 'general',
//   }  

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   }
  
//   capitalizeFirstLetter = (string)=> {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }

//   constructor(props){
//         super(props);
//         this.state = {
//           articles: [],
//             loading: true,
//             page : 1,
//             totalResults: 0
//         }
//         document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
//     } 

//     async updateNews(){
//       this.props.setProgress(10);
//       // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1ae76980be44473f9ca501bca103aeba&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//       let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//       this.setState({loading : true});
//       let data = await fetch(url);
//       this.props.setProgress(40);
//       let parsedData = await data.json()
//       this.props.setProgress(70);
//       console.log(parsedData);
//       this.setState({
//         articles: parsedData.articles,
//          totalResults:parsedData.totalResults,
//         loading: false
//         })
//         this.props.setProgress(100);
//     }

//    async componentDidMount() {
//     this.updateNews();
    

//     }
//     handlePrevClick = async () => {
//     this.setState({page: this.state.page + 1});
//     this.updateNews();

//     }
//     handleNextClick = async () => {
//       this.setState({page: this.state.page - 1});
//       this.updateNews();

//       }

//    fetchMoreData = async () => {
//     this.setState({page:this.state.page + 1})
//     // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1ae76980be44473f9ca501bca103aeba&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     this.setState({loading : true});
//     let data = await fetch(url);
//     let parsedData = await data.json()
//     console.log(parsedData);
//     this.setState({articles: this.state.articles.concat(parsedData.articles),
//        totalResults:parsedData.totalResults,
//       loading: false
//       })
//    };   

//   render() {
//     console.log("render")
//     return (
//       <> 
//         <h1 className='text-center' style={{margin:'35px 0px'}}>NewsMonkey - Top Headlines from {this.capitalizeFirstLetter(this.props.category)} category </h1>
//           {this.state.loading && <Loading/>}
//          <InfiniteScroll 
//          dataLength={this.state.articles.length}
//          next={this.fetchMoreData}
//          hasMore={this.state.articles.length !== this.state.totalResults}
//          loader={<Loading/>}> 

//          <div className='container'> 
//           <div className='row'>
//           {  this.state.articles.map((element) => {
//           return <div className='col-md-4' key={element.url}>
//             <NewItem  title={element.title?element.title:""} description={element.description?element.description:""} 
//             newsUrl={element.url} imageUrl={element.urlToImage} author={element.author} date={element.publishedAt} source={element.source.name}/>
//             </div>
//            })}
//            </div>
         
//        </div>
//        </InfiniteScroll>
//        </>
       
//     )
//   }
// }
 

// export default News



import React, { useEffect, useState } from 'react';
import NewItem from './NewItem';
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
    //eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h1 className='text-center' style={{ margin: '35px 0px' }}>
        NewsMonkey - Top Headlines from {capitalizeFirstLetter(props.category)} category
      </h1>
      {loading && <Loading />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Loading />}
      >
        <div className='container'>
          <div className='row'>
            {articles.map((element) => {
              return (
                <div className='col-md-4' key={element.url}>
                  <NewItem
                    title={element.title ? element.title : ''}
                    description={element.description ? element.description : ''}
                    newsUrl={element.url}
                    imageUrl={element.urlToImage}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;