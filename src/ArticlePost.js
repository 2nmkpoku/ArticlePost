import React, { useState, useEffect } from 'react'
import axios from 'axios'


function ArticlePost() {
    const[articles, setArticles] = useState([])
    
    useEffect(() =>{

        axios.get('https://www.jalirani.com/files/barstool.json')
        .then(response => {
            console.log(response)
            setArticles(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    })
    
    return(
        
        <div>
                       
            {
                articles.map((item)=>(
                    <li><a className= "App-link" href= {article.url}>{articles.title}</a>
                    <img src={articles.thumbnail.location + articles.thumnail.images.small}></img>
                    <p>{articles.author.name}</p>
                    <img src = {articles.author.avatar} alt= "author" />
                    <p>Comments: {articles.comment_count}</p>
                    </li>
                ))}
                </div>

                 

                       
    )
}
/*
class ArticlePost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             comment_count:[]
        }
    }
    
    componentDidMount(){
        axios.get('https://www.jalirani.com/files/barstool.json')
        .then(response => {
            console.log(response)
            this.setState({comment_count: response.data})
        })
        .catch(error => {
            console.log(error)
           
        })
    }
    render() {
        const{ comment_count } =this.state
        return (
            <div>
                Article
                {
                    comment_count.length ?
                    comment_count.map(comment_count => <div key = {comment_count.id}>{comment_count.num}/</div>):
                    null
                }
            
            </div>
        )
    }
}
*/

export default ArticlePost


/*function ArticlePost() {
    const[articles, setArticles] = useState([])
    
    useEffect(() =>{

        axios.get('https://www.jalirani.com/files/barstool.json')
        .then(response => {
            console.log(response)
            setArticles(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    })
    
    return(
        <div>
            Title
            {
                articles.map(

                    <li key ={articles.id}>{
                    articles.title
                     }
                     </li>)
                    
            
            }

            <ul>{
                    articles.map(

                        <li key ={articles.id}>{
                        articles.author.name
                         }
                        </li>)
                }
            </ul>
            <ul>
                {
                    articles.map(

                        <li key ={articles.id}>{
                                articles.author.avatar
                            }
                        </li>)
                 }   
            </ul>
            <ul>
                {
                    articles.map(

                        <li key ={articles.id}>{
                                articles.comment_count
                            }
                        </li>)
                 }   
            </ul>
        </div>
    )
}

class ArticlePost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             comment_count:[]
        }
    }
    
    componentDidMount(){
        axios.get('https://www.jalirani.com/files/barstool.json')
        .then(response => {
            console.log(response)
            this.setState({comment_count: response.data})
        })
        .catch(error => {
            console.log(error)
           
        })
    }
    render() {
        const{ comment_count } =this.state
        return (
            <div>
                Article
                {
                    comment_count.length ?
                    comment_count.map(comment_count => <div key = {comment_count.id}>{comment_count.num}/</div>):
                    null
                }
            
            </div>
        )
    }
}
*/

export default ArticlePost
