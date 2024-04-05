
import './App.css'
import Item from "./components/Items";
import Cart from "./components/Cart";
function App() {

  return (
   <div className='App'>
      <div className='App-item'>
        <Item name="Macbook Pro" price={200000} />
        <Item name="iPhone 15 Pro" price={100000}/>
        <Item name="Pendrive" price={4000}/>
        </div>
        <div className='App-cart'>
        <Cart/>
        
      </div>
      </div>
  
  )
}

export default App
