import React, {Component} from 'react';

import Header from './Header';

export default class useremail extends Component{
    constructor(){
        super();
        this.state = {
            list: [],
            error: null,
              loading: true,
            UserID:null
         
        }
    }
     
     
      buildList =(data)=>{
        console.log(JSON.stringify(data), null, '\t');
        this.setState({
            list: data,
            error: null
            
        })
     setTimeout(function(){
        this.setState({loading:false});
   }.bind(this),1000);
    }

 
 componentDidMount(){
        let url = 'https://jsonplaceholder.typicode.com/todos/';
        fetch(url)
        .then(response => response.json())
        .then(this.buildList)
        .catch(err => {
            this.setState({error:err})
        })
    }
    
    render(){
        return(
         <div className="jumbotron">
            <Header />
            {this.state.loading &&
                    <h3>Loading Todos</h3>
                }
                <h1>TODOS</h1>
               
                <ul className="list-group">{ this.state.list.length &&
                this.state.list.map((item)=> (
                    <li className="list-group-item" key={item.id}>{item.title}</li>
            
            
                ) ) }</ul>
                {this.state.error &&
                    <h3>{this.state.error}</h3>
                }
            </div>
        );
    }
}