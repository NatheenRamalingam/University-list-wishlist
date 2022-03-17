import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {setWishList} from '../redux/DataAction'


class Home extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                  <h3 className="display-3 text-secondary"> List of Universities </h3>
                </div>
            </div>

            <div className="row">
                {
                  this.props.output.map((item,key) => {
                    return (
                      <div className="col-md-3 mt-2 mb-2" key={key}  >
                        <div className="card">
                            <div className="card-header">
                                <h6> {item.name} </h6>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                  <li className="list-group-item">
                                      <strong>Country</strong>
                                      <span className="float-end"> {item.country} </span>
                                  </li>
                                  <li className="list-group">
                                      {
                                        item.web_pages.map((item,key) => {
                                          return (
                                            <a key={key} href={item} target="_blank" className="btn btn-block btn-success">
                                                Web page
                                            </a>
                                          )
                                        })
                                      }
                                  </li>
                                  <li className="list-group-item">
                                      <button onClick={this.props.setWishList.bind(this,item.name)} className="btn btn-block float-end btn-warning">Add to wishlist</button>
                                  </li>
                                </ul>
                            </div>
                        </div>
                      </div>
                    )
                  })
                }
            </div>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    output: state
  }
}

const dispatchToProps = (dispatcher) => {
  return bindActionCreators({
    setWishList: setWishList
  }, dispatcher);
};


export default connect(stateToProps,dispatchToProps)(Home)