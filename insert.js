
import { initializeHeader } from './header.js';

window.addEventListener('DOMContentLoaded', (event) => {
    // The HTML code you want to insert
    const htmlToInsert = `
    <nav>
    <div class="main-header">
        <ul class="menu">
            <li class="" data-sub=""><a href="index.html"><img src="images/home.png" alt="Home"  class="max-size" /></a></li>
            <li class="menu__item" data-sub="product"><a href="products.html">Products</a></li>
            <li class="menu__item" data-sub="developer"><a href="#">Development</a></li>
            <li class="menu__item" data-sub="company"><a href="#">About</a></li>
        </ul>
        <div class="dropdown-holder">
            <div class="dropdown__arrow"></div>
            <div class="dropdown__bg">
                <div class="dropdown__bg-bottom"></div>
            </div>
            <div class="dropdown__wrap">
                <div class="dropdown-menu" id="product" data-sub="product">
                    <div class="dropdown-menu__content">
                        <div class="top-section">
                            <div class="col-2">
                                <ul>
                                    <li class="first-menu"><a href="/index.html">
                                            <h6>Payment</h6>
                                            <p class="z"> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            </p>
                                        </a></li>
                                    <li class="first-menu"><a href="blyat">
                                            <h6>Connect</h6>
                                            <p class="z"> consectetur adipisicing elit nesciunt! Assumenda,
                                                adipisci.</p>
                                        </a></li>
                                    <li class="first-menu"><a href="sucka">
                                            <h6>Atlas Old</h6>
                                            <p class="z"> ipsum dolor sit amet, consectetur adipisicing elit. .</p>
                                        </a></li>
                                </ul>
                                <ul>
                                    <li class="first-menu"><a href="bucka">
                                            <h6>Subscription</h6>
                                            <p class="z"> Lorem ipsum dolor sit amet, consectetur </p>
                                        </a></li>
                                    <li class="first-menu"><a href="ducka">
                                            <h6>Relay</h6>
                                            <p class="z"> amet, consectetur adipisicing elit. Nisi, sequi!</p>
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="bottom-section">
                            <ul>
                                <li class="third-menu"><a href="pay">Payment</a>
                                </li>
                                <li class="third-menu"><a href="con">Connect</a>
                                </li>
                                <li class="third-menu"><a href="atl">Atlas</a>
                                </li>
                                <li class="third-menu"><a href="con">Connect</a>
                                </li>
                                <li class="third-menu"> <a href="atl">Atlas</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="dropdown-menu" id="developer" data-sub="developer">
                    <div class="dropdown-menu__content">
                        <div class="top-section">
                            <div class="col-2">
                                <div>
                                    <h6 class="menu-title">Front End</h6>
                                    <ul>
                                        <li class="third-menu"><a href="front-visuals">Websites</a></li>
                                        <li class="third-menu"><a href="front-programming">Games</a></li>
                                        <li class="third-menu"><a href="front-atlas">Art/Visuals</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h6 class="menu-title">Back End</h6>
                                    <ul>
                                        <li class="third-menu"><a href="back-sql">SQL Databases</a></li>
                                        <li class="third-menu"><a href="back-programming">User Auth.</a></li>
                                        <li class="third-menu"><a href="back-atlas">Server Dev.</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="bottom-section info">
                            <p class="third-menu">Front and back end programming for commercial and private use.
                                Primarily focused on any development for games, websites and data visuals.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="dropdown-menu" data-sub="company">
                    <div class="dropdown-menu__content">
                        <div class="top-section">
                            <ul>
                                <li class="third-menu"><a href="b1">Payment</a></li>
                                <li class="third-menu"><a href="b2">Connect</a></li>
                                <li class="third-menu"><a href="b3">Atlas</a></li>
                            </ul>
                        </div>
                        <div class="bottom-section">
                            <ul>
                                <li class="third-menu"><a href="b4">Payment</a></li>
                                <li class="third-menu"><a href="b5">Connect</a></li>
                                <li class="third-menu"><a href="b6">Atlas</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>`;

        // Create a reference to the target <div> element with class "into"
        const targetDiv = document.querySelector('.into');

        // Check if the target <div> exists before inserting
        if (targetDiv) {
            // Insert the HTML code into the target <div>
            targetDiv.innerHTML = htmlToInsert;
        }
        initializeHeader();
    });
