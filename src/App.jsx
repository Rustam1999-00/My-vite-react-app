import { Privet } from "./Components/app/Privet"
import { Public } from "./Components/app/Public"


function App() {
const token = false

if(token === true){
  return(
    <Privet/>
  )
}
else{
  
return(  <Public/>
)}

}

export default App
