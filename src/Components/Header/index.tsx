import './style.css';

const Header = () => {
  return (
    <>
      <div className='NavBar'>
        <h1>CashClever</h1>
        <ul className='navList'>
          <li>Mobile</li>
          <li>Navigator</li>
          <li>About us</li>
          <li>Knowledge Base</li>
        </ul>
        <button>Sign in</button>
      </div>
    </>
  );
};

export default Header;
