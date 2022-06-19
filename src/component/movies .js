import "./Style.css"
import { useEffect, useState } from "react";
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdOutlinePlayLesson } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';


const Movie = () => {




    return ( 
        <div className="movie">
         <div style={{display:'flex',alignItems:'center',borderBottom:'1px solid black'}}>
             <div><h1>KNOWLEDGE</h1></div>
             <div style={{marginLeft:'60%',display:'flex'}}>
                 <button style={{padding:'2% 0%',width:'100%',margin:'2% 0%',color:'white',backgroundColor:'#0ac9f7',fontWeight:"bold",border:'1px solid white'}} >CREATE COURSE</button><img style={{height:'60px',width:'120px',borderRadius:'50%',marginLeft:'15%'}} src="https://www.perfocal.com/blog/content/images/2020/07/Perfocal_Male_Dating_Profile_Portrait_Asian.jpg" alt=""></img><BsThreeDotsVertical style={{fontSize:'55px',marginLeft:'20px'}}/></div></div>
         <div>
       
            </div>

            <div>
                <p className="filterlist">
                    <span className="filter" >ALL</span>
                    <span className="filter" >LIVE</span>
                    <span className="filter" >DRAFT</span>
                    <span className="filter" >ARCHIVED</span></p>
            </div>
<div style={{display:'flex'}}>

<div className="cards" style={{width:'22%'}} ><img  style={{width:'100%'}}src="https://roadwarriorcreative.com/wp-content/uploads/2019/10/simple-website-design.jpg"></img>
<div style={{margin:'10%'}}><h4>XYZ</h4>
<p style={{fontSize:'12px',fontWeight:'bold',marginTop:'-8%'}}>Last Updated : 04/08/22</p>
<div style={{display:'flex'}}>
<p style={{alignItems:'center'}}><MdOutlinePlayLesson/><span style={{marginLeft:'2px',fontSize:'15px',fontWeight:'bolder'}}>Lessons:1</span></p>
<p style={{alignItems:'center',marginLeft:"10px"}}><BiTimeFive/><span style={{marginLeft:'2px',fontSize:'15px',fontWeight:'bolder'}}>Minutes:1</span></p>
</div>
<div style={{display:'flex'}}>
<h4 style={{marginBlockStart:'0%',backgroundColor:'#d9e3e6',padding:'0px 8px 3px 8px',borderRadius:'10px'}}>Marketing</h4>
</div>
</div>
</div>


<div className="cards" style={{width:'22%'}} ><img  style={{width:'100%'}}src="https://amzconcept.com/wp-content/uploads/2019/03/shutterstock_193950494.jpg?e93887&e93887"></img>
<div style={{margin:'10%'}}><h4>Sales vs marketing</h4>
<p style={{fontSize:'12px',fontWeight:'bold',marginTop:'-8%'}}>Last Updated : 04/08/22</p>
<div style={{display:'flex'}}>
<p style={{alignItems:'center'}}><MdOutlinePlayLesson/><span style={{marginLeft:'2px',fontSize:'15px',fontWeight:'bolder'}}>Lessons:1</span></p>
<p style={{alignItems:'center',marginLeft:"10px"}}><BiTimeFive/><span style={{marginLeft:'2px',fontSize:'15px',fontWeight:'bolder'}}>Minutes:1</span></p>
</div>
<div style={{display:'flex'}}>
<h4 style={{marginBlockStart:'0%',backgroundColor:'#d9e3e6',padding:'0px 8px 3px 8px',borderRadius:'10px'}}>Sales</h4>
<h4 style={{marginBlockStart:'0%',marginLeft:'19px',backgroundColor:'#d9e3e6',padding:'0px 8px 3px 8px',borderRadius:'10px'}}>Marketing</h4>
</div>
</div></div>


<div className="cards" style={{width:'22%'}} ><img  style={{width:'100%'}}src="https://th.bing.com/th/id/OIP.RAK8XdJuReRddTZH1h_u_QHaEo?pid=ImgDet&rs=1"></img>
<div style={{margin:'10%'}}><h4>How to unclog a Sink</h4>
<p style={{fontSize:'12px',fontWeight:'bold',marginTop:'-8%'}}>Last Updated : 04/08/22</p>
<div style={{display:'flex'}}>
<p style={{alignItems:'center'}}><MdOutlinePlayLesson/><span style={{marginLeft:'2px',fontSize:'15px',fontWeight:'bolder'}}>Lessons:6</span></p>
<p style={{alignItems:'center',marginLeft:"10px"}}><BiTimeFive/><span style={{marginLeft:'2px',fontSize:'15px',fontWeight:'bolder'}}>Minutes:15</span></p>
</div>
<div style={{display:'flex'}}>
<h4 style={{marginBlockStart:'0%',backgroundColor:'#d9e3e6',padding:'0px 8px 3px 8px',borderRadius:'10px'}}>Sales</h4>
<h4 style={{marginBlockStart:'0%',marginLeft:'19px',backgroundColor:'#d9e3e6',padding:'0px 8px 3px 8px',borderRadius:'10px'}}>Marketing</h4>
</div></div></div>


<div className="cards" style={{width:'22%'}} ><img  style={{width:'100%',height:'40%'}}src="https://th.bing.com/th/id/OIP.Un_0ljBzsX_fhhV_R8VM3AAAAA?pid=ImgDet&w=400&h=300&rs=1"></img>
<div style={{margin:'10%'}}><h4>How to unclog a Sink </h4>
<p style={{fontSize:'12px',fontWeight:'bold',marginTop:'-8%'}}>Last Updated : 04/08/22</p>
<div style={{display:'flex'}}>
<p style={{alignItems:'center'}}><MdOutlinePlayLesson/><span style={{marginLeft:'2px',fontSize:'15px',fontWeight:'bolder'}}>Lessons:3</span></p>
<p style={{alignItems:'center',marginLeft:"10px"}}><BiTimeFive/><span style={{marginLeft:'2px',fontSize:'15px',fontWeight:'bolder'}}>Minutes:25</span></p>
</div>
<div style={{display:'flex'}}>
    <h4 style={{marginBlockStart:'0%',marginLeft:'19px',backgroundColor:'#d9e3e6',padding:'0px 8px 3px 8px',borderRadius:'10px'}}>Sales</h4>
</div></div></div>
</div>



<div style={{display:'flex'}}>

<div className="cards" style={{width:'22%'}} ><img  style={{width:'100%'}}src="https://nyseofirm.com/wp-content/uploads/2020/09/which-web-design-platform-is-right-for-you-5e4d59fb941b9-1520x800-1.png"></img>
<div style={{margin:'10%'}}><h4>Social Marketing Media</h4>
<p style={{fontSize:'12px',fontWeight:'bold',marginTop:'-8%'}}>Last Updated : 04/08/22</p>
<div style={{display:'flex'}}>
<p style={{alignItems:'center'}}><MdOutlinePlayLesson/><span style={{marginLeft:'2px',fontSize:'15px',fontWeight:'bolder'}}>Lessons:1</span></p>
<p style={{alignItems:'center',marginLeft:"10px"}}><BiTimeFive/><span style={{marginLeft:'2px',fontSize:'15px',fontWeight:'bolder'}}>Minutes:1</span></p>
</div>
<div style={{display:'flex'}}>
<h4 style={{marginBlockStart:'0%',backgroundColor:'#d9e3e6',padding:'0px 8px 3px 8px',borderRadius:'10px'}}>Marketing</h4>
</div>
</div>
</div>


<div className="cards" style={{width:'22%'}} ><img  style={{width:'100%',height:'38%'}}src="https://th.bing.com/th/id/OIP.SK5TucLaikXoEcAZDMKcnwHaE8?pid=ImgDet&rs=1"></img>
<div style={{margin:'10%'}}><h4>Complance Training</h4>
<p style={{fontSize:'12px',fontWeight:'bold',marginTop:'-8%'}}>Last Updated : 04/08/22</p>
<div style={{display:'flex'}}>
<p style={{alignItems:'center'}}><MdOutlinePlayLesson/><span style={{marginLeft:'2px',fontSize:'15px',fontWeight:'bolder'}}>Lessons:1</span></p>
<p style={{alignItems:'center',marginLeft:"10px"}}><BiTimeFive/><span style={{marginLeft:'2px',fontSize:'15px',fontWeight:'bolder'}}>Minutes:1</span></p>
</div>
<div style={{display:'flex'}}>
<h4 style={{marginBlockStart:'0%',backgroundColor:'#d9e3e6',padding:'0px 8px 3px 8px',borderRadius:'10px'}}>Sales</h4>
<h4 style={{marginBlockStart:'0%',marginLeft:'19px',backgroundColor:'#d9e3e6',padding:'0px 8px 3px 8px',borderRadius:'10px'}}>Marketing</h4>
</div>
</div></div>


<div className="cards" style={{width:'22%'}} ><img  style={{width:'100%'}}src="https://static.skillshare.com/uploads/video/thumbnails/89ad6994f3b8835f8fcd77d1cef6882d/original"></img>
<div style={{margin:'10%'}}><h4>Top tricks to bargaining</h4>
<p style={{fontSize:'12px',fontWeight:'bold',marginTop:'-8%'}}>Last Updated : 04/08/22</p>
<div style={{display:'flex'}}>
<p style={{alignItems:'center'}}><MdOutlinePlayLesson/><span style={{marginLeft:'2px',fontSize:'15px',fontWeight:'bolder'}}>Lessons:6</span></p>
<p style={{alignItems:'center',marginLeft:"10px"}}><BiTimeFive/><span style={{marginLeft:'2px',fontSize:'15px',fontWeight:'bolder'}}>Minutes:15</span></p>
</div>
<div style={{display:'flex'}}>
<h4 style={{marginBlockStart:'0%',backgroundColor:'#d9e3e6',padding:'0px 8px 3px 8px',borderRadius:'10px'}}>Sales</h4>
<h4 style={{marginBlockStart:'0%',marginLeft:'19px',backgroundColor:'#d9e3e6',padding:'0px 8px 3px 8px',borderRadius:'10px'}}>Marketing</h4>
</div></div></div>

<div className="cards" style={{width:'22%'}} ><img  style={{width:'100%'}}src="https://static.skillshare.com/uploads/video/thumbnails/89ad6994f3b8835f8fcd77d1cef6882d/original"></img>
<div style={{margin:'10%'}}><h4>Top tricks to bargaining</h4>
<p style={{fontSize:'12px',fontWeight:'bold',marginTop:'-8%'}}>Last Updated : 04/08/22</p>
<div style={{display:'flex'}}>
<p style={{alignItems:'center'}}><MdOutlinePlayLesson/><span style={{marginLeft:'2px',fontSize:'15px',fontWeight:'bolder'}}>Lessons:6</span></p>
<p style={{alignItems:'center',marginLeft:"10px"}}><BiTimeFive/><span style={{marginLeft:'2px',fontSize:'15px',fontWeight:'bolder'}}>Minutes:15</span></p>
</div>
<div style={{display:'flex'}}>
<h4 style={{marginBlockStart:'0%',backgroundColor:'#d9e3e6',padding:'0px 8px 3px 8px',borderRadius:'10px'}}>Sales</h4>
<h4 style={{marginBlockStart:'0%',marginLeft:'19px',backgroundColor:'#d9e3e6',padding:'0px 8px 3px 8px',borderRadius:'10px'}}>Marketing</h4>
</div></div></div>


</div>



    </div>
     );
}
 
export default Movie;