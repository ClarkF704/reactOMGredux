import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';
import logo from '../logo.svg';
import '../App.css';


class PostForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        }).then(res => res.json())
        .then(data => console.log(data))

        this.props.createPost(post)
    }

    

   
    render() {
       
        
        return (
            <div>
                        <form onSubmit={this.onSubmit}>
                            
                                <div className="headerO">
                                   <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                           <p className="heads">React Redux Todo</p>
                                        </div>
                                        <div className="col-lg-6">
                                           <img src={logo} alt="logo" className="App-logo"/> 
                                        </div>
                                    </div>
                                </div> 
                                </div>
                                <div id="nd">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h3 class="headInt">Add</h3>
                                        </div>
                                        <div className="col-lg-6">
                                             <label className="headInt">Title: </label><br />
                                <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
                            <br/>
                            <div>
                                <label className="headInt">Body: </label><br />
                                <textarea name="body" onChange={this.onChange} value={this.state.body} />
                            </div>
                            <br/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                        <button type="submit">Submit</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                               
                        </form>
                        
            </div>
        )
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm)
