let navbar =() =>{

    return ` <div id="top_navbar">
    <div id="top1">
      <p><a href="#">WOMEN</a></p>
      <p><a href="#">MEN</a></p>
      <p><a href="#">KIDS</a></p>
      <p><a href="#">LIFE</a></p>
    </div>
    <div id="top2">
      <p><a href="#"><b> Signup for Newslatter </b></a></p>
     <div class="dropdown-item">
        <div id="account_hover" onmouseover="myFunction()">
            <p>My account</p>
        </div>
        <div class="dropdown-content">
            <div class="content">
                <div class="name">WELCOME!</div>
            </div>
            <ul class="links">
                <li><input type="text" placeholder="Your E-Mail" id="remail"></li>
                <li><input type="password" placeholder="Password" id="rpassword"></li>
                <li><button id="rbtn">LOGIN</button></li>
                <div class="divider"></div>
                <li><p>If you have an account with us, log in using your email address and password.</p></li>
                <li><a href="#">Did you forget your password ?</a></li>
                <li><button id="rbtn1">CREATE AN ACCOUNT</button></li>
            </ul>
        </div>
    </div>
<p><a href="#"><b> My wishlist <i class="fa-solid fa-heart"></b></i></a></p>
      <p><a href="#"><b> International | English</b></a></p>
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
      <div class="dropdown">
        <p class="dropbtn"><a href="#">NEW ARRIVALS</a></p>
       
        <div class="drp-content">
          <div id="hover_ctg">
                  <div id="head_catg1">
                      <p>Shop by category</p><br>
                      <ul>
                          <li>Current week</li>
                          <li>Previous week</li>
                          <li>Essential</li>
                          <li>Tailoring edit</li>
                          <li>Dress code</li>
                          <li>Summer wardrobe</li>
                          <li>Outdoor & Active wear</li>
                          <li>The Gift shop</li>
                      </ul>
                  </div>
                  <div id="head_catg2">
                      <p> Top brands</p> <br>
                      <ul>
                          <li>Current week</li>
                          <li>Previous week</li>
                          <li>Essential</li>
                          <li>Tailoring edit</li>
                          <li>Dress code</li>
                          <li>Summer wardrobe</li>
                          <li>Outdoor & Active wear</li>
                          <li>The Gift shop</li>
                      </ul>
          
                    </div>
                  <div id="head_catg3">
                      <p>Discover</p><br>
                      <ul>
                          <li>Current week</li>
                          <li>Previous week</li>
                          <li>Essential</li>
                          <li>Tailoring edit</li>
                          <li>Dress code</li>
                          <li>Summer wardrobe</li>
                          <li>Outdoor & Active wear</li>
                          <li>The Gift shop</li>
                      </ul>
                  </div>
                  <div id="head_catg4">
                      <img src="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW34/FO/FLYOUT_2_20220822152843.jpg" alt="">
                  </div>
              </div>
        </div>
      </div>


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
<div id="line" ></div>
`

}
export default navbar;