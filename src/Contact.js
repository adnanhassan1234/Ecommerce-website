import React, { useState , useEffect} from 'react';
import { useAuth0 } from "@auth0/auth0-react";


const Contact = () => {

  const [isLoader, setIsLoader] = useState(false); //spinner
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    setIsLoader(true);
  }, [])



  if (!isLoader) {
    return <div className='loader'>
      <div className="spinner">
      </div>
    </div>
  }

  return (
    <>
      <h2 className="my-5 text-center">Contact us</h2>
      <div className="map_section my-5">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.127358766925!2d74.25801811448136!3d31.46568255699024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919022a17a84c4b%3A0x74ef403a4d0bb9a4!2sExpo%20Center%20Lahore!5e0!3m2!1sen!2s!4v1666611475280!5m2!1sen!2s" width="100%" height="450" style={{ border: "0" }} allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      {/* contact form */}
      <div className="contact_section my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-form">
                <form action="https://formspree.io/f/xaykpyay" method="POST">
                  <input type="text" className="form-control my-3" name="username"
                   value={ isAuthenticated ? user.name : "" }
                   placeholder="Enter username" required />
                  <input type="email" className="form-control my-3" name="email" placeholder="Enter 
                  email" required  
                  value={ isAuthenticated ? user.email : "" }
                  />
                  <input type="password" className="form-control my-3" name="password" placeholder="Enter password" required />
                  <input type="file" className="form-control my-3" name="file" required />
                  <textarea className="form-control my-3" name="message" cols="30" rows="10" required placeholder="Enter message"></textarea>
                  <div className="send_btn text-center">
                    <button type="submit" className="btn btn-primary">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Contact;
