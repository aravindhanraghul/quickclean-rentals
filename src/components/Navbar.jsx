import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    return (
        <nav className="navbar navbar-expand-lg navbar-light py-3" style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            width: '100%',
            zIndex: 1000,
            overflow: 'hidden'
        }}>
            {/* Animated Background Effect */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.15) 0%, transparent 60%)',
                animation: 'float 8s ease-in-out infinite',
                zIndex: 0
            }}></div>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/" style={{ 
                    color: 'white',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '800',
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
                }}> 
                    <i className="fa fa-shower"></i> CleanPro Rentals
                </NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link fw-semibold" to="/" style={{ color: 'white', transition: 'all 0.3s ease' }}
                            onMouseEnter={(e) => e.target.style.color = '#f0f0f0'}
                            onMouseLeave={(e) => e.target.style.color = 'white'}>
                                <i className="fa fa-home me-1"></i>Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fw-semibold" to="/product" style={{ color: 'white', transition: 'all 0.3s ease' }}
                            onMouseEnter={(e) => e.target.style.color = '#f0f0f0'}
                            onMouseLeave={(e) => e.target.style.color = 'white'}>
                                <i className="fa fa-box me-1"></i>Equipment
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fw-semibold" to="/about" style={{ color: 'white', transition: 'all 0.3s ease' }}
                            onMouseEnter={(e) => e.target.style.color = '#f0f0f0'}
                            onMouseLeave={(e) => e.target.style.color = 'white'}>
                                <i className="fa fa-info-circle me-1"></i>About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fw-semibold" to="/contact" style={{ color: 'white', transition: 'all 0.3s ease' }}
                            onMouseEnter={(e) => e.target.style.color = '#f0f0f0'}
                            onMouseLeave={(e) => e.target.style.color = 'white'}>
                                <i className="fa fa-envelope me-1"></i>Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        <NavLink to="/login" className="btn m-2" style={{
                            background: 'rgba(255, 255, 255, 0.2)',
                            border: '2px solid white',
                            color: 'white',
                            borderRadius: '10px',
                            fontWeight: '600',
                            transition: 'all 0.3s ease',
                            backdropFilter: 'blur(10px)'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = 'white';
                            e.target.style.color = '#667eea';
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                            e.target.style.color = 'white';
                            e.target.style.transform = 'translateY(0)';
                        }}>
                            <i className="fa fa-sign-in me-1"></i> Login
                        </NavLink>
                        <NavLink to="/register" className="btn m-2" style={{
                            background: 'rgba(255, 255, 255, 0.2)',
                            border: '2px solid white',
                            color: 'white',
                            borderRadius: '10px',
                            fontWeight: '600',
                            transition: 'all 0.3s ease',
                            backdropFilter: 'blur(10px)'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = 'white';
                            e.target.style.color = '#667eea';
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                            e.target.style.color = 'white';
                            e.target.style.transform = 'translateY(0)';
                        }}>
                            <i className="fa fa-user-plus me-1"></i> Register
                        </NavLink>
                        <NavLink to="/cart" className="btn m-2 position-relative" style={{
                            background: 'white',
                            color: '#667eea',
                            border: 'none',
                            borderRadius: '10px',
                            fontWeight: '600',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-2px) scale(1.05)';
                            e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0) scale(1)';
                            e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                        }}>
                            <i className="fa fa-shopping-cart me-1"></i> Cart
                            {state.length > 0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill pulse-badge" style={{
                                    background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
                                    fontSize: '0.7rem',
                                    padding: '0.35em 0.65em'
                                }}>
                                    {state.length}
                                </span>
                            )}
                        </NavLink>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar