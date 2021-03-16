$(document).ready(function () {

    $.get(`http://localhost:3000/listZeplin`, function (data, status) {
        data.forEach(item => {
            $('.menu-sale').append(`
                                    <div class="col-xl-3 item-product ">
                                        <div class="image">
                                            <div class="image-item-product">
                                                <img src="${item.img}" alt="">
                                                <div class="label-sale ${item.labelsale == "" ? "d-none" : ""}"></div>
                                                <div class="label-sale-1">${item.labelsale}</div>
                                                <div class="sales-off ${item.salesoff == "" ? "d-none" : ""}">${item.salesoff}</div>
                                                <div class="heart">
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
                                                        <defs>
                                                            <path id="km5unbenua" d="M8.868 1.334c-4.155 0-7.534 3.688-7.534 8.22 0 4.325 7.788 13.641 14.66 20.519 5.336-5.42 14.672-16.051 14.672-20.518 0-4.533-3.379-8.221-7.534-8.221-2.298 0-4.522 1.206-5.948 3.227L16 6.239 14.816 4.56c-1.426-2.021-3.65-3.227-5.948-3.227zM16 31.959l-.472-.469C11.885 27.881 0 15.632 0 9.555 0 4.285 3.978 0 8.868 0c2.73 0 5.362 1.417 7.037 3.79l.095.136.093-.134C17.77 1.417 20.401 0 23.133 0 28.022 0 32 4.286 32 9.555c0 6.189-13.94 20.34-15.53 21.933l-.47.47z"/>
                                                        </defs>
                                                        <g fill="none" fill-rule="evenodd">
                                                            <g>
                                                                <g transform="translate(-312 -720) translate(312 720)">
                                                                    <mask id="7jwpenanfb" fill="#fff">
                                                                        <use xlink:href="#km5unbenua"/>
                                                                    </mask>
                                                                    <use fill="#050000" xlink:href="#km5unbenua"/>
                                                                    <g fill="#333" mask="url(#7jwpenanfb)">
                                                                        <path d="M0 0H32V32H0z"/>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div class="glass">
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
                                                        <defs>
                                                            <path id="yqanp6kdsa" d="M24.645 11.043c-.081 1.609-.534 3.141-1.31 4.433-1.26 2.104-3.478 3.539-5.93 3.839-2.473.306-4.883-.578-6.772-2.48-.971-.976-1.66-2.247-1.99-3.669-.424-1.844-.424-3.798.005-5.644l1.437-6.198h12.747l.002.011c.013.055.023.108.034.164l1.135 4.898c.372 1.59.72 3.09.642 4.646m.65-4.95l-1.148-4.962C24.003.425 23.918 0 23.357 0H9.604l-.586.052-1.662 7.169c-.474 2.04-.474 4.2-.002 6.244.382 1.662 1.192 3.152 2.34 4.304 1.749 1.755 3.863 2.711 6.133 2.867v10.04h-4.91V32h11.146v-1.324H17.15v-10.02c.138-.01.276-.009.412-.026 2.859-.348 5.441-2.019 6.91-4.473.886-1.478 1.404-3.222 1.496-5.046.087-1.747-.3-3.409-.674-5.018"/>
                                                        </defs>
                                                        <g fill="none" fill-rule="evenodd">
                                                            <g>
                                                                <g transform="translate(-184 -720) translate(184 720)">
                                                                    <mask id="prbvdrdn3b" fill="#fff">
                                                                        <use xlink:href="#yqanp6kdsa"/>
                                                                    </mask>
                                                                    <use fill="#050000" xlink:href="#yqanp6kdsa"/>
                                                                    <g fill="#333" mask="url(#prbvdrdn3b)">
                                                                        <path d="M0 0H32V32H0z"/>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-title title-item-product">${item.title}</div>
                                        <div class="now-price">
                                            <div class="price">${item.price}</div>
                                            <div class="old-price">${item.oldprice}</div>
                                            <div class="new-price">${item.newprice}</div> 
                                        </div> 
                                    </div>
                                    `)
            $('.menu').append(`
                                    <div class="col-xl-3 item-product ">
                                        <div class="image">
                                            <div class="image-item-product">
                                                <img src="${item.img}" alt=""><div class="sales-off ${item.salesoff == "" ? "d-none" : ""}">${item.salesoff}</div>
                                                <div class="heart">
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
                                                        <defs>
                                                            <path id="km5unbenua" d="M8.868 1.334c-4.155 0-7.534 3.688-7.534 8.22 0 4.325 7.788 13.641 14.66 20.519 5.336-5.42 14.672-16.051 14.672-20.518 0-4.533-3.379-8.221-7.534-8.221-2.298 0-4.522 1.206-5.948 3.227L16 6.239 14.816 4.56c-1.426-2.021-3.65-3.227-5.948-3.227zM16 31.959l-.472-.469C11.885 27.881 0 15.632 0 9.555 0 4.285 3.978 0 8.868 0c2.73 0 5.362 1.417 7.037 3.79l.095.136.093-.134C17.77 1.417 20.401 0 23.133 0 28.022 0 32 4.286 32 9.555c0 6.189-13.94 20.34-15.53 21.933l-.47.47z"/>
                                                        </defs>
                                                        <g fill="none" fill-rule="evenodd">
                                                            <g>
                                                                <g transform="translate(-312 -720) translate(312 720)">
                                                                    <mask id="7jwpenanfb" fill="#fff">
                                                                        <use xlink:href="#km5unbenua"/>
                                                                    </mask>
                                                                    <use fill="#050000" xlink:href="#km5unbenua"/>
                                                                    <g fill="#333" mask="url(#7jwpenanfb)">
                                                                        <path d="M0 0H32V32H0z"/>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div class="glass">
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
                                                        <defs>
                                                            <path id="yqanp6kdsa" d="M24.645 11.043c-.081 1.609-.534 3.141-1.31 4.433-1.26 2.104-3.478 3.539-5.93 3.839-2.473.306-4.883-.578-6.772-2.48-.971-.976-1.66-2.247-1.99-3.669-.424-1.844-.424-3.798.005-5.644l1.437-6.198h12.747l.002.011c.013.055.023.108.034.164l1.135 4.898c.372 1.59.72 3.09.642 4.646m.65-4.95l-1.148-4.962C24.003.425 23.918 0 23.357 0H9.604l-.586.052-1.662 7.169c-.474 2.04-.474 4.2-.002 6.244.382 1.662 1.192 3.152 2.34 4.304 1.749 1.755 3.863 2.711 6.133 2.867v10.04h-4.91V32h11.146v-1.324H17.15v-10.02c.138-.01.276-.009.412-.026 2.859-.348 5.441-2.019 6.91-4.473.886-1.478 1.404-3.222 1.496-5.046.087-1.747-.3-3.409-.674-5.018"/>
                                                        </defs>
                                                        <g fill="none" fill-rule="evenodd">
                                                            <g>
                                                                <g transform="translate(-184 -720) translate(184 720)">
                                                                    <mask id="prbvdrdn3b" fill="#fff">
                                                                        <use xlink:href="#yqanp6kdsa"/>
                                                                    </mask>
                                                                    <use fill="#050000" xlink:href="#yqanp6kdsa"/>
                                                                    <g fill="#333" mask="url(#prbvdrdn3b)">
                                                                        <path d="M0 0H32V32H0z"/>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-title title-item-product">${item.title}</div>
                                        <div class="now-price">
                                            <div class="price">${item.price}</div>
                                            <div class="old-price">${item.oldprice}</div>
                                            <div class="new-price">${item.newprice}</div> 
                                        </div> 
                                    </div>
                                    `)    
                
                    
        });
    });
    $.get(`http://localhost:3000/list-moment`, function (data, status) {
        data.forEach(item => {
            console.log(item.img)
            $('.menu-moment').append(`
                                    <div class="col-xl-3 item-product ">
                                        <div class="image">
                                            <div class="image-item-product">
                                                <img src="${item.img}" alt="">
                                                <div class="heart">
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
                                                        <defs>
                                                            <path id="km5unbenua" d="M8.868 1.334c-4.155 0-7.534 3.688-7.534 8.22 0 4.325 7.788 13.641 14.66 20.519 5.336-5.42 14.672-16.051 14.672-20.518 0-4.533-3.379-8.221-7.534-8.221-2.298 0-4.522 1.206-5.948 3.227L16 6.239 14.816 4.56c-1.426-2.021-3.65-3.227-5.948-3.227zM16 31.959l-.472-.469C11.885 27.881 0 15.632 0 9.555 0 4.285 3.978 0 8.868 0c2.73 0 5.362 1.417 7.037 3.79l.095.136.093-.134C17.77 1.417 20.401 0 23.133 0 28.022 0 32 4.286 32 9.555c0 6.189-13.94 20.34-15.53 21.933l-.47.47z"/>
                                                        </defs>
                                                        <g fill="none" fill-rule="evenodd">
                                                            <g>
                                                                <g transform="translate(-312 -720) translate(312 720)">
                                                                    <mask id="7jwpenanfb" fill="#fff">
                                                                        <use xlink:href="#km5unbenua"/>
                                                                    </mask>
                                                                    <use fill="#050000" xlink:href="#km5unbenua"/>
                                                                    <g fill="#333" mask="url(#7jwpenanfb)">
                                                                        <path d="M0 0H32V32H0z"/>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-section">${item.section}</div>
                                        <div class="product-title title-item-product">${item.title}</div>
                                        
                                    </div>
                                    `)
        });
    });

})