const Navbar = () => {
    return (
      <nav className="fixed top-0 left-0 z-50 flex items-center justify-between w-full h-20 px-8 bg-black">
        {/* Logo on the left (clickable link to Home) */}
        <a href="#home">
          <img 
            src="/assets/logo.jpg"  // Make sure the path is correct
            alt="Logo" 
            className="w-16 h-16 transition-transform duration-300 rounded-full hover:scale-110"
          />
        </a>
  
        {/* Navigation Links */}
        <ul className="flex gap-12">
          <li>
            <a href="#about" className="nav-link">About</a>
          </li>
          <li>
            <a href="#projects" className="nav-link">Projects</a>
          </li>
          <li>
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  