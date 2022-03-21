import React, { useState, useEffect } from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {removeWishList} from '../redux/DataAction'

const storage = window.localStorage.getItem("wishItems");

function Wished(props) {
    const [wishList,setWishList] = useState([]);
    
    useEffect(() => {
        if(storage !== null || storage !== undefined) {
            const data = JSON.parse(storage);
            console.log('wishes =',data);
             setWishList(data);
        } else {
            setWishList([])
        }
    },[])


    const removeHandler = (id) => {
        console.log('id =',id);
       if(window.confirm(`Are you sure to remove wishlist id = ${id + 1} ?`)) {
            props.removeWishList(id);
       } else {
           return null;
       }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="text-secondary display-3">
                        Wished Universities
                    </h3>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <table className="table table-success table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>University Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                wishList.map((item,key) => {
                                    return (
                                        <tr key={key} >
                                            <td> {key + 1} </td>
                                            <td> {item} </td>
                                            <td>
                                                <button onClick={()=> removeHandler(key)} className="btn btn-danger btn-sm">
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
  }


const stateToProps = (state) => {
    return {
   
    }
  }
  
  const dispatchToProps = (dispatcher) => {
    return bindActionCreators({
      removeWishList: removeWishList
    }, dispatcher);
  };
  
  
  export default connect(stateToProps,dispatchToProps)(Wished)