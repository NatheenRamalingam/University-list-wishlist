import React, {useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom'


const storage = window.localStorage.getItem("wishItems");


function Menu() {
    const [wishList,setWishList] = useState([]);
    
    useEffect(() => {
        if(storage !== null || storage !== undefined) {
            const data = JSON.parse(storage);
            console.log('wishes =',data);
             setWishList(data);
        }
    },[])

  return (
        <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
            <div className="container">
                <NavLink to={`/`} className="navbar-brand">
                    University Task
                </NavLink>

                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu" >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id='menu' >    
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to={`/home`} className="nav-link">
                                    Home
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <ul className="navbar-nav float-end">
                    <li className="nav-item">
                        <NavLink to={`/wish`} className="nav-link">
                                WishList <span className="badge bg-warning">
                                    {wishList === null ? 0 : wishList.length}
                                </span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
  )
}

export default Menu