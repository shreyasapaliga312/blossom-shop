import './App.css'
import {useState} from 'react'

function App(){

const [menuOpen,setMenuOpen]=useState(false)

const products=[
{
title:"Men Collection",
img:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500"
},
{
title:"Women Collection",
img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500"
},
{
title:"Kids Collection",
img:"https://images.unsplash.com/photo-1519238359922-989348752efb?w=500"
}
]

return(
<>

<nav>

<h1 className="logo">Blossom</h1>

<div
className="hamburger"
onClick={()=>setMenuOpen(!menuOpen)}
>
{menuOpen ? "✕":"☰"}
</div>

<ul className={menuOpen ? "nav-links open":"nav-links"}>

<li>
<a href="#home">Home</a>
</li>

<li>
<a href="#products">Products</a>
</li>

<li>
<a href="#about">About</a>
</li>

<li>
<a href="#contact">Contact</a>
</li>

</ul>

</nav>

<section
id="home"
className="hero"
>

<h2>Welcome To Blossom</h2>

<p>
Fashion for Everyone
</p>

<button>
Shop Now
</button>

</section>

<section id="products">

<h2 className="title">
Our Collections
</h2>

<div className="card-container">

{
products.map((item,index)=>(

<div className="card" key={index}>

<img
src={item.img}
alt=""
/>

<h3>
{item.title}
</h3>

<button>
View
</button>

</div>

))
}

</div>

</section>

<section
id="about"
className="about"
>

<h2>
About Blossom
</h2>

<p>

Welcome to Blossom Clothing Store.

We provide quality fashion for men, women and kids with stylish collections at affordable prices.

</p>

</section>

<section
id="contact"
className="contact"
>

<h2>Contact Us</h2>

<p>
📞 +91 9876543210
</p>

<p>
📍 Your Shop Address
</p>

<button>
WhatsApp Us
</button>

</section>

<footer>

© 2026 Blossom Clothing Store

</footer>

</>

)

}

export default App