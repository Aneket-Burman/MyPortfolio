const Navbar = () => {
    return (
      <nav className="w-full h-20 bg-black flex justify-between items-center fixed top-0 left-0 z-50 px-8">
        {/* Logo on the left (clickable link to Home) */}
        <a href="#home">
          <img 
            src="../../src/assets/logo.jpg"  // Make sure the path is correct
            alt="Logo" 
            className="h-16 w-16 rounded-full hover:scale-110 transition-transform duration-300"
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
  