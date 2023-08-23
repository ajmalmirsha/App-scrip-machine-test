
import {AiFillStar} from 'react-icons/ai'

export default function Cards ({className,img,title,price,rating}) {
    return (
        <div className={`${className} pe-0 mb-3 `}  >
        <div className={` main-card p-0 `} >
            <img className="w-100 pro-img " src={img} alt="" />
            <footer className="p-2 contents " >
                <h4 id='truncated-heading' className="title" >{title}</h4>
                <div className="d-flex justify-content-between">
                <span className="bg-dark text-white px-2" >{rating} <AiFillStar className='mb-1' /></span>
                <span className='fw-bold' >₹ {price}</span>
                </div>
            </footer>
        </div>
        </div>
    )
}