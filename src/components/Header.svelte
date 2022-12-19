<header class="sticky top-0 left-0 z-50 overflow-hidden">
<nav class="w-full h-[130px] grid grid-cols-nav1 bg-white">
    <div
      class="hidden fixed top-0 px-[15vw] w-full bg-white animate-fade-in-down text-gray-500"
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
    <div class="flex w-full justify-start items-center ml-[3.5vw] mt-[2vw]">
      <img
        class="w-[19vw] sm:w-[13vw] md:w-[9vw] lg:w-[6vw]"
        src="E-commerce-Website-with-Sveltekit-and-tailwindcss/src/images/logo.webp"
        alt="fashion website logo"
      />
      <h1
        class="text-black text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[2vw] font-bold tracking-wide"
      >
        FASHION
      </h1>
    </div>
    <!-- nav grid 1 -->
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
        class="lg:hidden hover:text-yellow-600 text-stone-500 fill-current h-8 sm:h-10 mt-[2%] sm:mt-[4%] mx-2 md:mx-0 md:cursor-pointer"
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="flex lg:hidden hover:text-yellow-600 text-stone-500 fill-current h-6 sm:h-8 mt-[2%] sm:mt-[4%] md:cursor-pointer mr-[3vw] mx-2 sm:mr-[5vw] focus:outline-none"
        id="hamburgerButton"
        version="1.0"
        viewBox="0 0 50 50"
      >
        <path
          d="M3.5 9.1c-1.6 2.5 1.9 2.9 22.1 2.7 17.8-.3 20.9-.5 20.9-1.8s-3.1-1.5-21.2-1.8c-14.7-.2-21.4.1-21.8.9zM3.5 24.1c-1.6 2.5 1.9 2.9 22.1 2.7 17.8-.3 20.9-.5 20.9-1.8s-3.1-1.5-21.2-1.8c-14.7-.2-21.4.1-21.8.9zM3.5 39.1c-1.6 2.5 1.9 2.9 22.1 2.7 17.8-.3 20.9-.5 20.9-1.8s-3.1-1.5-21.2-1.8c-14.7-.2-21.4.1-21.8.9z"
        />
      </svg>
      <!-- nav grid 2 -->
      <div
        class="hidden lg:flex w-full h-[10vh] text-[1.3vw] mt-[4%] px-[8%] justify-between items-center font-normal"
      >
        <li class="list-none mx-7">
          <a href="/" class="hover:text-yellow-600">Home</a>
        </li>

        <li class="list-none mx-7">
          <a href="#" class="hover:text-yellow-600">Category</a>
        </li>

        <li class="list-none mx-7">
          <a href="#" class="hover:text-yellow-600">About us</a>
        </li>
        <li class="list-none mx-7">
          <a href="#" class="hover:text-yellow-600">Lifestyle</a>
        </li>
        <button class="px-3 py-2 text-white bg-black rounded-lg"> <a href="/login">      Sign In</a>
    
        </button>
      </div>
      <!-- nav grid 2 -->
    </div>
  </nav>
</header>
