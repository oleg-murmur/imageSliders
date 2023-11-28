
import photo1 from './public/images/1.jpg'
import photo2 from './public/images/2.jpg'
import photo3 from './public/images/3.jpg'
import NavBar from './NavBar'
import SlidersController from './SlidersController'
import "./Global.css"


const IMAGES = [photo1,photo2,photo3]

const App = () => {

  return (
    <div className='main'>
      <NavBar/>
      <div className='main-body'>
        <div className="main-body-imageController">
          <SlidersController 
            imageURLs={IMAGES} 
            autoPlay={false} 
            autoPlayTime={0} 
            width={''} 
            height={''}
          />
        </div>
      </div>
     </div> 

    
  )
}

export default App