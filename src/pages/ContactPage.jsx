import React from "react";
import { Footer, Navbar } from "../components";
const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '800' }}>Contact Us</h1>
        <hr />
        
        {/* Contact Info Cards */}
        <div className="row my-5">
          <div className="col-md-4 mb-4">
            <div className="glass-card p-4 text-center h-100" style={{ borderRadius: '15px', border: '2px solid #e2e8f0' }}>
              <i className="fa fa-phone mb-3" style={{ fontSize: '2.5rem', color: '#10b981' }}></i>
              <h5 className="fw-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Call Us</h5>
              <a href="tel:+917871493796" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '1.1rem' }}
                 onMouseEnter={(e) => e.target.style.color = '#10b981'}
                 onMouseLeave={(e) => e.target.style.color = '#6b7280'}>
                +91 78714 93796
              </a>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="glass-card p-4 text-center h-100" style={{ borderRadius: '15px', border: '2px solid #e2e8f0' }}>
              <i className="fab fa-whatsapp mb-3" style={{ fontSize: '2.5rem', color: '#25D366' }}></i>
              <h5 className="fw-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>WhatsApp</h5>
              <a href="https://wa.me/917871493796" target="_blank" rel="noopener noreferrer"
                 style={{ color: '#6b7280', textDecoration: 'none', fontSize: '1.1rem' }}
                 onMouseEnter={(e) => e.target.style.color = '#25D366'}
                 onMouseLeave={(e) => e.target.style.color = '#6b7280'}>
                +91 78714 93796
              </a>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="glass-card p-4 text-center h-100" style={{ borderRadius: '15px', border: '2px solid #e2e8f0' }}>
              <i className="fa fa-envelope mb-3" style={{ fontSize: '2.5rem', color: '#f59e0b' }}></i>
              <h5 className="fw-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Email Us</h5>
              <a href="mailto:info@cleanpro.com" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '1.1rem' }}
                 onMouseEnter={(e) => e.target.style.color = '#f59e0b'}
                 onMouseLeave={(e) => e.target.style.color = '#6b7280'}>
                info@cleanpro.com
              </a>
            </div>
          </div>
        </div>
        
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="form my-3">
                <label for="Name">Name</label>
                <input
                  type="email"
                  class="form-control"
                  id="Name"
                  placeholder="Enter your name"
                />
              </div>
              <div class="form my-3">
                <label for="Email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  placeholder="name@example.com"
                />
              </div>
              <div class="form  my-3">
                <label for="Password">Message</label>
                <textarea
                  rows={5}
                  class="form-control"
                  id="Password"
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <button
                  class="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                  disabled
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
