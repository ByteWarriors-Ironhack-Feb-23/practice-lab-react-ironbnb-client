import { Link } from 'react-router-dom'
import '../App.css'

const HomePage = () => {
    return(
        <>
            <h1>🏠 WELCOME TO IronBnb 🏠</h1>
            <img src="https://s3-ap-southeast-1.amazonaws.com/res.realgrowth.com/2047/D10439.jpg" alt="House in Xàbia" style={{width:'500px', marginTop:'50px', marginBottom:'15px'}}></img>
            <br />
            <span className='links-span'>
                <Link to={'/apartments'} className='link-in-homepage'>CHECK OUR APARTMENTS</Link>
                <Link to={'/apartments/create'} className='link-in-homepage'>ADD YOUR HOUSE</Link>
            </span>
        </>
    )
};

export default HomePage;