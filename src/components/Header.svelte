<script>
  import image from '../lib/assets/images/logo.webp'
</script>

<header class="sticky top-0 left-0 z-50 overflow-hidden">
<nav class="w-full h-[130px] grid grid-cols-3 bg-white">
  
    <div
      class="hidden fixed top-0 px-[15vw] w-full  bg-white animate-fade-in-down text-gray-500"
      id="searchContainer"
    >
      <div>
        <svg
          class="flex hover:text-yellow-600 text-stone-500 mt-11 fill-current h-6 lg:ml-[15vw] cursor-pointer"
          data-tooltip-target="tooltip-default8"
          data-tooltip-placement="bottom"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
        >
          <path
            d="M21 3C11.602 3 4 10.602 4 20s7.602 17 17 17c3.355 0 6.46-.984 9.094-2.656l12.281 12.281 4.25-4.25L34.5 30.281C36.68 27.421 38 23.88 38 20c0-9.398-7.602-17-17-17Zm0 4c7.2 0 13 5.8 13 13s-5.8 13-13 13S8 27.2 8 20 13.8 7 21 7Z"
          />
        </svg>
      </div>
      <input
        class="text-gray-500 flex ml-[2vw] w-[80%] py-10 focus:outline-none border-none"
        type="text"
        placeholder="Search"
      />
      <div>
        
        <svg
          class="flex hover:text-yellow-600 text-stone-500 fill-current h-4 my-12 ml-[3vw] cursor-pointer"
          id="closeSearch"
          xmlns="http://www.w3.org/2000/svg"
          xml:space="preserve"
          style="enable-background: new 0 0 460.775 460.775"
          viewBox="0 0 460.775 460.775"
        >
          <path
            d="M285.08 230.397 456.218 59.27c6.076-6.077 6.076-15.911 0-21.986L423.511 4.565a15.55 15.55 0 0 0-21.985 0l-171.138 171.14L59.25 4.565a15.551 15.551 0 0 0-21.985 0L4.558 37.284c-6.077 6.075-6.077 15.909 0 21.986l171.138 171.128L4.575 401.505c-6.074 6.077-6.074 15.911 0 21.986l32.709 32.719a15.555 15.555 0 0 0 21.986 0l171.117-171.12 171.118 171.12a15.551 15.551 0 0 0 21.985 0l32.709-32.719c6.074-6.075 6.074-15.909 0-21.986L285.08 230.397z"
          />
        </svg>
      </div>
    </div>
    <!-- nav grid 1 -->
  
    <div
      class="flex justify-start items-center list-none font-semibold tracking-wider text-[1.3vw] max-w-full ml-[10%]"
    >
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="flex lg:hidden hover:text-yellow-600 text-stone-500 fill-current h-9 sm:h-11 mt-[2%] sm:mt-[4%] md:cursor-pointer ml-[5vw] mx-2 focus:outline-none"
        id="hamburgerButton"
        version="1.0"
        viewBox="0 0 50 50"
      >
        <path
          d="M3.5 9.1c-1.6 2.5 1.9 2.9 22.1 2.7 17.8-.3 20.9-.5 20.9-1.8s-3.1-1.5-21.2-1.8c-14.7-.2-21.4.1-21.8.9zM3.5 24.1c-1.6 2.5 1.9 2.9 22.1 2.7 17.8-.3 20.9-.5 20.9-1.8s-3.1-1.5-21.2-1.8c-14.7-.2-21.4.1-21.8.9zM3.5 39.1c-1.6 2.5 1.9 2.9 22.1 2.7 17.8-.3 20.9-.5 20.9-1.8s-3.1-1.5-21.2-1.8c-14.7-.2-21.4.1-21.8.9z"
        />
      </svg>
      <div
        class="hidden lg:flex w-full h-[10vh] text-[1vw] mt-[4%] justify-around items-center font-normal"
      >
      
        <div class="dropdown dropdown-bottom">
          <label tabindex="0" class=" hover:text-yellow-600">SHOP</label>
          <ul tabindex="0" class="fixed p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
        <li class="list-none ">
          <a href="#" class="hover:text-yellow-600">COLLECTIONS</a>
        </li>
        <li class="list-none ">
          <a href="#" class="hover:text-yellow-600">NEW ARRIVALS</a>
        </li>
        <li class="list-none ">
          <a href="#" class="hover:text-yellow-600">ABOUT</a>
        </li>
      </div>
    </div>
    
    <!-- nav grid 1 -->

    <!-- nav grid 2 -->
    <div class="flex items-center justify-center w-full ">
      <a href="/">
      <img
        class="w-[120px] sm:w-[150px] md:w-[160px] lg:w-[6vw] cursor-pointer"
        src="{image}"
        alt="fashion website logo"
      />
    </a>
      <h1
        class="hidden lg:flex text-black text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[2vw] font-bold tracking-wide"
      >
        FASHION
      </h1>
    </div>
    <!-- nav grid 2 -->
    <div
      class="flex justify-end items-center list-none font-semibold tracking-wider text-[1.3vw] max-w-full"
    >
    <svg
    class="flex lg:hidden hover:text-yellow-600 text-stone-500 fill-current h-6 sm:h-8 mt-[2%] sm:mt-[4%] mx-2 md:cursor-pointer focus:outline-none"
    id="searchBtnsm"
    data-tooltip-target="tooltip-default8"
    data-tooltip-placement="bottom"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
  >
    <path
      d="M21 3C11.602 3 4 10.602 4 20s7.602 17 17 17c3.355 0 6.46-.984 9.094-2.656l12.281 12.281 4.25-4.25L34.5 30.281C36.68 27.421 38 23.88 38 20c0-9.398-7.602-17-17-17Zm0 4c7.2 0 13 5.8 13 13s-5.8 13-13 13S8 27.2 8 20 13.8 7 21 7Z"
    />
  </svg>
      <svg
        class="lg:hidden hover:text-yellow-600 text-stone-500 fill-current h-8 sm:h-10 mt-[2%] sm:mt-[4%] mx-1 md:mx-0 md:cursor-pointer"
        data-tooltip-target="tooltip-default7"
        data-tooltip-placement="bottom"
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        viewBox="0 0 64 64"
      >
        <path
          d="M25.2 12c-8.1 5-9.5 16.3-2.8 21.9 1.4 1.2 1.1 1.7-2.2 4.1-4 2.8-6.7 7.5-7.8 12.9-.6 2.6-.3 3.1 1.3 3.1 1.4 0 2.2-1.1 3-4.3.7-2.3 2.3-5.3 3.7-6.6l2.5-2.4 3.1 2.7c1.8 1.5 4.4 2.6 6 2.6 1.6 0 4.2-1.1 6-2.6l3.1-2.7 2.5 2.4c1.4 1.3 3 4.3 3.7 6.6.8 3 1.6 4.3 2.9 4.3 4.7 0-1.5-13.7-7.6-17l-2.5-1.3 2.4-2.9c3.1-3.6 3.9-6.8 3.1-11.2-1.8-9.5-12.4-14.5-20.4-9.6zm11.7 3.4c4.7 2.5 6.3 8.3 3.7 13.5-3.5 6.6-13.7 6.6-17.2 0-4.7-9.1 4.4-18.2 13.5-13.5zm-1.1 23.8c-.8 2.2-3.7 3.4-5.5 2.2C27 39.3 27.7 38 32 38c2.8 0 4 .4 3.8 1.2z"
        />
      </svg>
      <svg  class="lg:hidden hover:text-yellow-600 text-stone-500 fill-current h-6 sm:h-7 mt-[2%] sm:mt-[4%] mx-2 mr-[5vw] md:cursor-pointer" xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 980 944"><path d="M20.8 1.4C10.5 4.2 3.3 12 .9 22.7c-2.3 10.2 1.8 21.3 9.9 27 2 1.4 32.3 13.9 67.2 27.7l63.5 25.1 19.1 51.5c10.6 28.3 49.7 133.2 86.9 233.1l67.7 181.6-30.3 80.9c-33.1 88.3-32.9 87.8-29.4 98.5 1.2 3.6 3.3 6.8 6.5 10 6.1 6.1 11.9 7.9 25.3 7.9h10l-4.1 4.4c-11.7 12.6-20.5 28.7-24.8 45.2-2.3 8.6-2.7 11.9-2.7 24.9 0 13 .4 16.3 2.7 25 2.7 10.5 9.3 25.3 14.8 33.3 5.2 7.6 18.3 20.6 26.1 26 12.8 8.8 24.2 13.6 39.6 16.7 11.4 2.4 34.2 1.6 45.4-1.4 34-9.1 61.6-35.4 72-68.6 10.7-34.3 2.5-72.6-21.1-98.5l-6.4-7h216.5l-4.1 4.4c-11.7 12.6-20.5 28.7-24.8 45.2-2.3 8.6-2.7 11.9-2.7 24.9 0 13 .4 16.3 2.7 25 2.7 10.5 9.3 25.3 14.8 33.3 5.2 7.6 18.3 20.6 26.1 26 12.8 8.8 24.2 13.6 39.6 16.7 11.4 2.4 34.2 1.6 45.4-1.4 34-9.1 61.6-35.4 72-68.6 10.7-34.2 2.5-72.6-21-98.4l-6.3-6.9 17.7-.4c17.6-.3 17.9-.3 23.2-3.3 9.8-5.4 16.1-17.2 14.6-27.3-1.4-9.1-7.1-17.1-15.2-21.2l-4.8-2.5-255.2-.5-255.1-.5 13.9-37 14-37 227 .3 227 .2 5-2.1c10.9-4.7 4.3 11 91.5-220.1 77.5-205.5 78.9-209.4 78.9-216.3-.1-11.5-5.5-20.3-15.5-24.9-4.5-2.1-5.4-2.1-135.5-2.7-459.7-2.3-604.3-3.3-605.4-4.4-.5-.6-8.4-21.3-17.6-46-9.2-24.8-17.6-47.1-18.7-49.7-3.3-7.8-8.6-11.7-24.3-18C73.2 16.7 33.2 1 29.7.6c-2.3-.3-6.3 0-8.9.8zm337.5 220.2 88.7.6V301l-87.1-.2-87.1-.3-13.9-38c-7.7-20.9-14.2-39-14.5-40.3l-.6-2.3 12.8.6c7.1.3 52.8.8 101.7 1.1zm248.9 2.4H663v78H503V222.7l24.2.6c13.3.4 49.3.7 80 .7zm304.7 1.6c.2.2-5.9 17.4-13.6 38.1l-14 37.8-83.1.3-83.2.2v-38.3c0-21.1.2-38.6.5-38.9.6-.5 192.8.2 193.4.8zM447 401v45l-60.2-.2-60.1-.3-16.3-44c-9-24.2-16.4-44.3-16.4-44.8 0-.4 34.4-.7 76.5-.7H447v45zm415-44.3c0 .5-7.3 20.6-16.3 44.8l-16.3 44-56.2.3-56.2.2v-90h72.5c39.9 0 72.5.3 72.5.7zM663 402v45H503v-90h160v45zM447.8 541.2l-.3 40.3-35.1.3c-32.8.2-35.2.1-35.9-1.5-5.8-15-29.5-78.2-29.5-78.6 0-.4 22.7-.7 50.5-.7H448l-.2 40.2zm215.2.3V582H503v-81h160v40.5zm146-38.8c0 .5-6.6 18.5-14.7 40L779.5 582H718v-80h45.5c25 0 45.5.3 45.5.7zM380.4 793.2c23.6 7.7 37.3 33.1 31.1 57.3-7.7 29.4-39.6 44.1-67.4 31-16.1-7.6-27.1-25.1-27.1-43s11-35.3 27.2-43c11.9-5.7 23.8-6.4 36.2-2.3zm356.8-.2c15.1 4.6 27.9 18.4 31.9 34.6.7 2.6 1 8.4.7 13.9-.4 8.1-1 10.4-4.1 16.9-5.6 11.8-15.6 21.2-26.7 25.1-28.8 10.2-59.1-7.9-64.2-38.1-3.3-19.8 8.1-41 26.7-50 11.5-5.5 23-6.3 35.7-2.4z"/>
      </svg>
    
     
      <div
        class="hidden lg:flex w-full h-[10vh] text-[1vw] mt-[4%] px-[8%] justify-around items-center font-normal"
      >
      <svg
      class="hidden lg:flex hover:text-yellow-600 text-stone-500 fill-current w-[23px] max-w-lg mt-[1%] md:cursor-pointer focus:outline-none"
      id="searchBtnsm"
      data-tooltip-target="tooltip-default8"
      data-tooltip-placement="bottom"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
    >
      <path
        d="M21 3C11.602 3 4 10.602 4 20s7.602 17 17 17c3.355 0 6.46-.984 9.094-2.656l12.281 12.281 4.25-4.25L34.5 30.281C36.68 27.421 38 23.88 38 20c0-9.398-7.602-17-17-17Zm0 4c7.2 0 13 5.8 13 13s-5.8 13-13 13S8 27.2 8 20 13.8 7 21 7Z"
      />
    </svg>
    <svg  class="hidden lg:flex hover:text-yellow-600 text-stone-500 fill-current h-[23px] mt-[1%] md:cursor-pointer focus:outline-none" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"  viewBox="0 0 490 490"><path d="M316.554 108.336c4.553 6.922 2.629 16.223-4.296 20.774a58.608 58.608 0 0 0-9.621 7.929 14.963 14.963 0 0 1-10.715 4.497 14.959 14.959 0 0 1-10.506-4.291c-5.917-5.801-6.009-15.298-.207-21.212a88.693 88.693 0 0 1 14.562-11.992c6.927-4.55 16.231-2.627 20.783 4.295zm130.468 177.533L298.183 437.573C283.994 452.035 265.106 460 245 460s-38.994-7.965-53.183-22.427L42.978 285.869c-57.304-58.406-57.304-153.441 0-211.847C70.83 45.634 107.882 30 147.31 30c36.369 0 70.72 13.304 97.69 37.648C271.971 43.304 306.32 30 342.689 30c39.428 0 76.481 15.634 104.332 44.021 57.305 58.407 57.305 153.442.001 211.848zM425.596 95.028C403.434 72.44 373.991 60 342.69 60c-31.301 0-60.745 12.439-82.906 35.027-1.122 1.144-2.129 2.533-3.538 3.777-7.536 6.654-16.372 6.32-22.491 0-1.308-1.352-2.416-2.633-3.538-3.777C208.055 72.44 178.612 60 147.31 60c-31.301 0-60.744 12.439-82.906 35.027-45.94 46.824-45.94 123.012 0 169.836l148.839 151.704C221.742 425.229 233.02 430 245 430s23.258-4.771 31.757-13.433l148.839-151.703c45.939-46.824 45.939-123.012 0-169.836zm-21.427 21.006c-8.975-9.148-19.475-16.045-31.208-20.499-7.746-2.939-16.413.953-19.355 8.698-2.942 7.744.953 16.407 8.701 19.348 7.645 2.902 14.521 7.431 20.436 13.459 23.211 23.658 23.211 62.153 0 85.811l-52.648 53.661c-5.803 5.915-5.711 15.412.206 21.212a14.961 14.961 0 0 0 10.506 4.291c3.889 0 7.776-1.502 10.714-4.497l52.648-53.661c34.575-35.241 34.575-92.582 0-127.823z"/></svg>
      <li class="list-none ">
        <a href="#" class="hover:text-yellow-600">CART <span>(0)</span></a>
      </li>
      <li class="list-none ">
         <a href="/login" class="hover:text-yellow-600">SIGN IN</a>
       </li>
      </div>
    </div>
  </nav>
</header>