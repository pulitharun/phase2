import React from "react";



function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" >RentFurLax</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor03">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Cart</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">New User</a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Login</a>
            <a className="dropdown-item" href="#">Register</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Logout</a>
          </div>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-sm-2" type="search" placeholder="Search"/>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    
    </>
  )
}

export default Header
