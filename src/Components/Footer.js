import React from 'react'

function Footer(){
    return(
        <footer className="page-footer">
          <div className="footer-container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
            </div>
          </div>
          <div className="footer-copyright" >
            <div className="container">
            © 2014 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">{process.env.NODE_ENV}Mode{process.env.REACT_APP_API_ENDPOINT}</a>
            </div>
          </div>
        </footer>
    )
}

export default Footer