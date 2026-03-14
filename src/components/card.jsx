import { Bookmark } from 'lucide-react';

const Card=(props)=>{
    return(
         <div className="card">
        <div>
             <div className="top">
            <img src={props.brandlogo} alt="" />
            <button>Save  <Bookmark /> </button>
           </div>
           <div className="centre">
              <h1>{props.company }<span>{props.date}</span></h1>
              <h3>{props.position}</h3>
              <div className='tag'>
                <h5>{props.tag1}</h5>
                <h5>{props.tag2}</h5>
              </div>
           </div>
        </div>
           <div className="bottom">
            <div>
              <h3>{props.pay}</h3>
              <p>{props.location}</p>
            </div>
              <div>
              <button>Apply Now</button>
              </div>
           </div>
       </div>
)
}

export default Card;