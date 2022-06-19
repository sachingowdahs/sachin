import '../Navbar.css';
import { FaBeer } from 'react-icons/fa';
import { BiHome } from 'react-icons/bi';
import { FaGraduationCap } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';
import { AiFillMacCommand } from 'react-icons/ai';
import { BiMemoryCard } from 'react-icons/bi';
import { BsFillChatLeftDotsFill } from 'react-icons/bs';


import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <div className="navbar">
            <div  className="logo">
        <h3 >Remote SalesFuel</h3>
        </div>
       
<div  className="menubar">
<h3 className='title'><BiHome className='icon'/>DASHBOARD</h3>
<h3 className='title'><FaGraduationCap className='icon'/>KNOWLEDGE</h3>
<h3 className='title'><BsFillPeopleFill className='icon'/>MEMBERS</h3>
<h3 className='title'><AiFillMacCommand className='icon'/>TEAMS</h3>
<h3 className='title'><BiMemoryCard className='icon'/>VAULT</h3>
<h3 className='title'><BsFillChatLeftDotsFill className='icon'/>CHAT</h3></div>


        </div>
      
     );
}
 
export default Navbar;