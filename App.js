import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import ProductHolder from './components/product_holder';
import UserInputProducts from './components/user-product';

import image1 from './components/images/black-forest-cake.webp';
import image2 from './components/images/butter-scotch-cake.webp';
import image3 from './components/images/choclate piece cake.webp';
import image4 from './components/images/valentine-s-heart-red-velvet.jpg';



function App() {
const products=[
  {
    name:"Black forest cake",
    price:800,
    details:"It's like ice cream cake and expensive cake",
    offer:10,
    image:image1

  },
  {
    name:"Butter scotch cake",
    price:1000,
    details:"It's butter flavour cake and very expensive cake",
    offer:20,
    image:image2

  },
  {
    name:"Choclate piece cake",
    price:50,
    details:"It's sample single piece cake",
    offer:2,
    image:image3,
    

  },
  {
    name:"Heart cake",
    price:500,
    details:"It's heart shape model cake",
    offer:30,
    image:image4,

  }
]
  return (
    <div className="App">
      <Header></Header>
      <UserInputProducts />
      <ProductHolder productList={products}></ProductHolder>
    </div>
  )
}

export default App;
