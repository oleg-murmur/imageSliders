
import car1 from './images/1.jpg'
import car2 from './images/2.jpg'
import car3 from './images/3.jpg'
import car4 from './images/4.jpg'
import "../src/styles/App.css"
import NavBar from './NavBar'
import Slider from './Components/ImageSlider'

const IMAGES = [car1,car1,car1,car1]

const App = () => {

  return (
    <div>
      <NavBar/>
      <div><Slider 
              imageURLs={IMAGES} 
              autoPlay={false} 
              autoPlayTime={0} 
              width={'120px'} 
              height={'120px'}
          /></div>
     </div> 

    
  )
}

export default App