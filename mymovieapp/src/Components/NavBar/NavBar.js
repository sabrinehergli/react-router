import React , {useState} from 'react';
import './NavBar.css';
import ReorderIcon from '@material-ui/icons/Reorder';
import SearchIcon from '@material-ui/icons/Search';
import ReactStars from "react-rating-stars-component";
import {Link} from "react-router-dom";
function NavBar ({ setTitleSearch, setRatingSearch, titleSearch }){
    const [showLinks , setShowLinks] = useState(false);
    return( 
      <div className="NavBar">
        <div className="logo">
          <Link to='/'><img src="/logo.png" alt="logo"/></Link> 
        </div>
      <div className="leftSide">
      
        <div className="links" id={showLinks ?  "hidden":""}>
        <Link to='/'>Home</Link>
          <Link to='/popular'>Polpular Movies</Link>
          <Link to="/all">All movies</Link>
        </div>
        <button onClick={()=>setShowLinks(!showLinks)}>
          <ReorderIcon style={{ color:'white', }}/>
        </button>
      </div> 
      <div className="rightSide">
        <div className="searchSection">
          <input type="text" placeholder="Search..." value={titleSearch}
                        onChange={(event) => {
                            setTitleSearch(event.target.value);
                        }} />
          <button id="searchButton"><SearchIcon style={{ color:'white',width:'22px'}}/></button>
        </div> 
        
        <div className="ratingSection">< ReactStars  count={5} 
                        onChange={setRatingSearch}
                        size={18}
                        isHalf={true}
                        activeColor=" rgb(255, 255, 0)"
                        fullIcon={<i className="fa fa-star" ></i>} />
        </div>
    </div>
    </div>
    )
       
    
}
export default NavBar;