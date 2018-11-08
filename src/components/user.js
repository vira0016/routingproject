import React, {Component} from 'react';

import '../App.css';

import Header from './Header';
import {NavLink} from 'react-router-dom';



export default class user extends Component{
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
        let url = 'https://jsonplaceholder.typicode.com/users/';
        fetch(url)
        .then(response => response.json())
        .then(this.buildList)
        .catch(err => {
            this.setState({error:err.message})
        })
    }

    
    render(){
        
        return(
         <div className="jumbotron">
            
            <Header />
            {this.state.loading &&
                    <h3>Loading Users</h3>
                }
                <h1>USERS</h1>
               
                <ul className="list-group">{ this.state.list.length &&
                this.state.list.map((item)=> (
            <React.Fragment>
             <div>
                    <li className="list-group-item" key={item.id}>{item.name}
                    <div>{item.email}</div>
            <NavLink to="/todos"><button className="btn btn-info">Load Todos</button>
             </NavLink>
             <NavLink to="/post"><button className="btn btn-info">Load posts</button>
            </NavLink>
            </li>
        
      
            
           
            </div>
            
            </React.Fragment>
            
            
            
                ) ) }
</ul>


                {this.state.error &&
                    <h3>{this.state.error}</h3>
                }
            </div>
        );
    }
}