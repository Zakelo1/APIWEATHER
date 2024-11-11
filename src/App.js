import {useState} from 'react'
import axios from 'axios'
import Button from './Button'
import {Search} from 'lucide-react'

function App() {
  const [ville, setville] = useState("")
  const [weatherdata, setwheatherdata] = useState(null)
  const getwheather = async () => {
    const apikey = 'd3ff86bfafb1410d96e114546240711'
    const apiURL = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${ville}&lang=fr`
    try {
      const response = await axios.get(apiURL)
      setwheatherdata(response.data)}
    catch(err) {
      alert("Ville non trouvée")
    }
  }
  const handlechange = (event) => {
    setville(event.target.value)
  }

return (
  <div >
    <div className=" flex justify-center text-3xl">
      <h1>WeatherAPI</h1>
      </div>
    
    <div className=" flex justify-center">
      <input className="rounded-l-full border border-secondary-border shadow shadow-secondary py-1 px-4 text-lg w-300 focus:border-blue-500 outline-none" type="search" placeholder='Search' value={ville} onChange={handlechange}/>
    <Button className="py-2 px-4 rounded-r-full border-secondary-border  border border-l-0"
    onClick={getwheather}>
      <Search/>
      </Button></div>
      
    <div className="translate-y-4, flex justify-center grid">
      <li>Lieu : {weatherdata?.location?.name}</li> 
      <li>La témpérature est de   {weatherdata?.current?.temp_c} °C</li>
      
    </div>
  </div>

)}

export default App;
