import React, { Component } from "react";

class Project extends React.Component {

    constructor(props) {
        super(props);
        this.state = {money: 0};
      }
   
    render() {
    return (

        <content class="container">
        <div class="row mt-3 border">
            <div class="col">
                <img className="img-source" src={this.props.imgLink} class="img-fluid" alt={this.props.altText}></img>
            </div>
            <div class="col">
                <h2 className="appName">{this.props.name}</h2>
                <p className="description">{this.props.description}</p>
                
                <p className="credits">{this.props.contributors}</p>
                
                <a className="repo" href={this.props.repoURL}>Repository</a>
                
                <a className="deployed" href={this.props.deployedURL}>Depoloyed page</a>
            </div>
        </div>
    </content>

    );

    }
};

export default Project;