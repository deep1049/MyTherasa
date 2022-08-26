let navbar =() =>{

    return `<div id="top_navbar">
    <div id="top1">
      <p><a href="#">WOMEN</a></p>
      <p><a href="#">MEN</a></p>
      <p><a href="#">KIDS</a></p>
      <p><a href="#">LIFE</a></p>
    </div>
    <div id="top2">
      <p><a href="#">Signup for Newslatter</a></p>
      <p><a href="#">My account</a></p>
      <p>
        <a href="#">My wishlist <i class="fa-solid fa-heart"></i></a>
      </p>
      <p><a href="#">International | English</a></p>
    </div>
  </div>
  <div id="mid_navbar">
   <img
      src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo.png?v=20220817T161813"
      alt="logo"
    />
  </a>
    <p>
      <a href="#">SHOPPING BAG <i class="fa-solid fa-bag-shopping"></i> <sup id="cart_count">0</sup></a>
    </p>
    
   </div>
  <div id="bottom_navbar">
    <div id="bottom_catg">
      <p><a href="#">NEW ARRIVALS</a></p>
      <p><a href="#">DESIGNERS</a></p>
      <p><a href="#">CLOTHING</a></p>
      <p><a href="#">SHOES</a></p>
      <p><a href="#">BAGS</a></p>
      <p><a href="#">ACCESSORIES</a></p>
      <p><a href="#">JEWELRY</a></p>
      <p><a href="#">VACATION</a></p>
      <p><a href="#">SALE</a></p>
    </div>
    <div id="bottom_input">
      <div>
        <input type="text" id="text" placeholder="Search for..." />
        <i class="fa fa-search" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</div>
<div id="line"></div>`

}
export default navbar;