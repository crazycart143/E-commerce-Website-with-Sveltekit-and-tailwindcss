<script>
  import image from '$lib/assets/images/hero-vector.webp'
  import image1 from '$lib/assets/images/hero-image.webp'
  import brand1 from '$lib/assets/images/hero-brand1.webp'
  import brand2 from '$lib/assets/images/hero-brand2.webp'
  import brand3 from '$lib/assets/images/hero-brand3.webp'
  import brand4 from '$lib/assets/images/hero-brand4.webp'
  import brand5 from '$lib/assets/images/hero-brand5.webp'
  import brand6 from '$lib/assets/images/hero-brand6.webp'
  import image3 from '$lib/assets/images/linkin-icon.png'
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<main class="text-black">
   
    <section>
      <div
        class="relative bg-[#F4F6F5] h-[85vh] rounded-3xl flex mx-[5%] sm:mt-[2%] md:mt-[3%] mb-[3%] md:overflow-y-hidden"
      >
        <div
          class="text-[10vw] sm:text-[7.5vw] md:text-[6vw] lg:text-[4.3vw] font-extrabold absolute pt-[5%] pl-[5%]"
        >
          <h1>
            <span class="bg-white pl-[1vw]"
              >LET'S &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
            >
            <br />
            <span class="pl-[1vw]">EXPLORE</span> <br />
            <span class="bg-[#EBD96B] pl-[1vw]">
              UNIQUE&nbsp;&nbsp;&nbsp;</span
            >
            <br />
            <span class="pl-[1vw]">CLOTHES.</span>
          </h1>
          <p
            class="text-[3.5vw] w-[70%] md:w-[100%] sm:text-[3.3vw] md:text-[2vw] lg:text-[1.5vw] font-medium pl-[1.3vw] mt-[2vw]"
          >
            Live for influential and innovative fashion!
          </p>
          <div
            class="flex flex-col md:flex-row mt-[4vw] justify-start items-center"
          >
            <img
              class="hidden md:flex w-[15vw] h-5 mr-[3vw]"
              src="{image}"
              alt="star vector"
            />
            <button
              class="bg-black text-white text-[4vw] mr-[40vw] md:mr-0 py-2 px-5 rounded-lg md:text-[1.5vw] md:py-4 md:px-9 font-bold"
            >
              Shop Now
            </button>
          </div>
        </div>
        <div
          class="hidden animate-fade-in-down z-50 fixed w-[100%] h-full left-0 top-[100px] bg-[rgba(0,0,0,0.5)]"
          id="darkBgMobile"
        ></div>
        <div>
          <img
            class="w-[100vw] h-full object-cover md:max-w-[80%] md:ml-auto"
            src="{image1}"
            alt="model girl with black outfit"
          />
        </div>
      </div>
      <div
        class="bg-[#EBD96B] flex justify-between items-center sm:px-[5vw] h-[10vh] w-[100%]"
      >
        <div class="flex ml-[6vw] sm:ml-0">
          <img
            class="h-[3vh] md:h-[4vh] lg:h-[5vh]"
            src="{brand1}"
            alt="H&M BRAND"
          />
        </div>
        <div class="flex">
          <img
            class="h-[2.5vh] md:h-[4vh] lg:h-[4.5vh]"
            src="{brand2}"
            alt="OBEY BRAND"
          />
        </div>
        <div class="flex">
          <img
            class="h-[3vh] md:h-[4vh] lg:h-[5vh]"
            src="{brand3}"
            alt="SHOPIFY BRAND"
          />
        </div>
        <div class="flex">
          <img
            class="h-[3vh] md:h-[4vh] mb-[1vw] lg:h-[5vh]"
            src="{brand4}"
            alt="LACOSTE BRAND"
          />
        </div>
        <div class="flex mt-[1vw]">
          <img
            class="h-[3vh] md:h-[4vh] mb-[1vw] mx-[10px] lg:h-[5vh]"
            src="{brand5}"
            alt="LEVI'S BRAND"
          />
        </div>
        <div class="flex mr-[5vw] sm:mr-0 mt-[2vw]">
          <img
            class="h-[3vh] md:h-[4vh] mb-[1vw] lg:h-[5vh]"
            src="{brand6}"
            alt="AMAZON BRAND"
          />
        </div>
      </div>
    </section>
    <section>
      <div class="mb-[15%] lg:mb-[5%] w-full">
        <div
          class="font-bold text-xl relative mx-[5%] mt-[5%] mb-[10%] sm:mb-[7%] pb-[5%] lg:pb-[3%]"
        >
          <h1
            class="absolute lg:left-[1%] sm:text-[5vw] md:text-[4vw] lg:text-[3vw]"
          >
            New Arrivals
          </h1>
        </div>
        <div
          class="flex items-center justify-center w-full lg:justify-between"
        >
          <div class="flex flex-col grid-cols-3 gap-10 mx-auto lg:grid">
            <div>
              <img
                class="w-[70vw] sm:w-[65vw] md:w-[55vw] lg:w-[25vw]"
                src="../src/images/arrivals-image1.webp"
                alt="girl wearing orange hoodie"
              />
              <div class="mt-[5%] relative">
                <h1
                  class="font-bold mb-[1%] text-lg sm:text-[4vw] lg:text-[1.5vw]"
                >
                  Hoodies & Sweet Shirt
                </h1>
                <p
                  class="text-gray-500 font-medium sm:text-[3vw] lg:text-[1.5vw]"
                >
                  Explore Now!
                </p>
                <img
                  class="w-[5vw] lg:w-[2vw] absolute bottom-[5vw] sm:bottom-[3vw] right-[1vw] lg:right-0 lg:bottom-[2.5vw] cursor-pointer"
                  src="../src/images/arrow-icon.webp"
                  alt="arrow icon"
                />
              </div>
            </div>

            <div class="mt-[5vw] lg:mt-0">
              <img
                class="w-[70vw] sm:w-[65vw] md:w-[55vw] lg:w-[25vw]"
                src="../src/images/arrivals-image2.webp"
                alt="girl wearing blue coat"
              />
              <div class="mt-[5%] relative">
                <h1
                  class="font-bold mb-[1%] text-lg sm:text-[4vw] lg:text-[1.5vw]"
                >
                  Coats & Parkas
                </h1>
                <p
                  class="text-gray-500 font-medium sm:text-[3vw] lg:text-[1.5vw]"
                >
                  Explore Now!
                </p>
                <img
                  class="w-[5vw] lg:w-[2vw] absolute bottom-[5vw] lg:right-0 sm:bottom-[3vw] lg:bottom-[2.5vw] right-[1vw] cursor-pointer"
                  src="../src/images/arrow-icon.webp"
                  alt="arrow icon"
                />
              </div>
            </div>

            <div class="mt-[5vw] lg:mt-0">
              <img
                class="w-[70vw] sm:w-[65vw] md:w-[55vw] lg:w-[25vw]"
                src="../src/images/arrivals-image3.webp"
                alt="girl wearing white t-shirt"
              />
              <div class="mt-[5%] relative">
                <h1
                  class="font-bold mb-[1%] text-lg sm:text-[4vw] lg:text-[1.5vw]"
                >
                  Tees & T-Shirt
                </h1>
                <p
                  class="text-gray-500 font-medium sm:text-[3vw] lg:text-[1.5vw]"
                >
                  Explore Now!
                </p>
                <img
                  class="w-[5vw] lg:w-[2vw] absolute bottom-[5vw] lg:right-0 sm:bottom-[3vw] lg:bottom-[2vw] right-[1vw] cursor-pointer"
                  src="../src/images/arrow-icon.webp"
                  alt="arrow icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="bg-[#FDEC5E] relative w-[100%] lg:grid grid-cols-2">
        <div>
          <img
            class="hidden lg:flex absolute left-[3%] bottom-0 h-[90%] text-center"
            src="../src/images/jpgtopngconverter-com.webp"
            alt="shopping girl"
          />
        </div>
        <div
          class="mt-[10%] flex flex-col  justify-center lg:justify-start items-center lg:items-start mx-auto w-full"
        >
          <h1
            class="font-bold text-3xl sm:text-[6vw] lg:text-[4vw] -rotate-6 lg:rotate-0 pt-[10%] lg:pt-0"
          >
            <span class="transform bg-white">
              &nbsp;&nbsp;PAYDAY &nbsp;&nbsp;</span
            >
            <div class="sm:mt-[6%] md:mt-[10%]">SALE NOW</div>
          </h1>
          <p
            class="mt-[10%] text-[#231300] font-bold text-[15px] sm:text-[4vw] lg:text-[2vw] text-center lg:text-left"
          >
            Spend minimal $100 get 30% off <br />
            voucher code for your next purchase
          </p>
          <p class="font-bold mt-[5%] sm:text-[4vw] lg:text-[2vw]">
            1 June - 10 June 2021
          </p>
          <p class="sm:text-[4vw] lg:text-[2vw]">
            *Terms & Conditions may apply
          </p>
          <button
            class="bg-black text-white text-[5vw] sm:text-[4vw] lg:text-[2vw] my-auto mt-[8%] mb-[8%] py-2 px-5 sm:py-3 sm:px-6 rounded-lg font-bold"
          >
            Shop Now
          </button>
        </div>
        <img
          class="absolute top-[10%] left-[5%]"
          src="../src/images/vector_star.webp"
          alt="vector star design 1"
        />
        <img
          class="absolute w-[30px] top-[10%] right-[10%]"
          src="../src/images/vector_star.webp"
          alt="vector star design 2"
        />
        <img
          class="absolute w-[50px] bottom-[10%] right-[10%]"
          src="../src/images/vector_star.webp"
          alt="vector star design 3"
        />
        <img
          class="absolute w-[30px] bottom-[20%] left-[10%]"
          src="../src/images/vector_star.webp"
          alt="vector star design 4"
        />
      </div>
    </section>
    <section class="w-[100%] h-[100%] mb-[10%] lg:mb-[5%]">
      <div
        class="font-bold text-xl md:text-[4vw] lg:text-3xl relative mx-[5%] mt-[5%] mb-[10%] pb-[5%] lg:pb-[3%] lg:mb-[5%]"
      >
        <h1 class="absolute">Young's Favourite</h1>
      </div>
      <div
        class="flex flex-col items-center justify-around w-full mx-auto lg:flex-row"
      >
        <div>
          <img
            class="lg:w-[40vw] w-[70vw]"
            src="../src/images/youngs-image1.webp"
            alt="two young girls looking happy wearing glasses"
          />
          <div class="mt-[5%] relative">
            <h1
              class="font-bold mb-[1%] text-base sm:text-[3vw] lg:text-[2vw]"
            >
              Trending on instagram
            </h1>
            <p class="text-gray-500 font-medium sm:text-[3vw] lg:text-[2vw]">
              Explore Now!
            </p>
            <img
              class="w-[5vw] absolute bottom-[5vw] right-[1vw] cursor-pointer sm:bottom-[3vw] lg:w-[2vw] lg:right-0"
              src="../src/images/arrow-icon.webp"
              alt="arrow icon"
            />
          </div>
        </div>

        <div class="mt-[5vw] lg:mt-0">
          <img
            class="w-[70vw] lg:w-[40vw]"
            src="../src/images/youngs-image2.webp"
            alt="young happy girl wearing glasses "
          />
          <div class="mt-[5%] relative">
            <h1
              class="font-bold mb-[1%] text-base sm:text-[3vw] lg:text-[2vw]"
            >
              All Under $40
            </h1>
            <p class="text-gray-500 font-medium sm:text-[3vw] lg:text-[2vw]">
              Explore Now!
            </p>
            <img
              class="w-[5vw] absolute bottom-[5vw] right-[1vw] cursor-pointer sm:bottom-[3vw] lg:w-[2vw] lg:right-0"
              src="../src/images/arrow-icon.webp"
              alt="arrow icon"
            />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div
        class="flex flex-col h-[500px] border-gray-200 border-t-[2px] md:h-[800px] md:grid grid-cols-2 justify-center items-center relative"
      >
        <div
          class="flex flex-col items-center justify-center w-full text-2xl text-center lg:text-start"
        >
          <h1 class="font-bold lg:leading-normal lg:text-[2.8vw]">
            DOWNLOAD APP & <br />
            GET THE VOUCHER!
          </h1>
          <h1
            class="text-gray-500 mt-[5%] sm:mt-[2%] text-[15px] lg:text-[1.3vw] lg:pr-[5%] font-medium"
          >
            Get 30% off for first transaction using
            <br />Rondovision mobile app for now
          </h1>
        </div>

        <div
          class="flex absolute w-[90%] lg:w-[80%] top-[70%] md:top-[60%] md:left-[5%] lg:left-[11.5%] lg:mt-[3%] justify-center items-center md:justify-start"
        >
          <img
            class="w-[35%] sm:w-[25%] md:w-[20%] lg:w-[15%] mr-[5%] lg:mr-[2%] cursor-pointer"
            src="../src/images/apple-btn.webp"
            alt="download on apple button"
          />
          <img
            class="w-[35%] sm:w-[25%] md:w-[20%] lg:w-[15%] cursor-pointer"
            src="../src/images/googleplay-btn.webp"
            alt="download on google play button"
          />
        </div>
        <div
          class="w-[50vw] h-[30vh] sm:max-w-[40vw] sm:max-h-[30vh] md:max-w-[20vw] md:max-h-[20vh] md:left-[15%] lg:max-w-[15vw] lg:max-h-[20vh] lg:left-[17%] my-auto border-[1px] border-gray-300 rounded-[50%] absolute -z-[999]"
        ></div>
        <div
          class="w-[70vw] h-[40vh] sm:max-w-[60vw] sm:max-h-[40vh] md:w-[30vw] md:h-[30vh] md:left-[10%] lg:max-w-[25vw] lg:max-h-[30vh] lg:left-[12%] my-auto border-[1px] border-gray-300 rounded-[50%] absolute -z-[999]"
        ></div>
        <div
          class="w-[90vw] h-[50vh] sm:max-w-[75vw] sm:max-h-[55vh] md:w-[40vw] md:h-[40vh] md:left-[5%] lg:max-w-[35vw] lg:max-h-[40vh] lg:left-[7%] border-[1px] border-gray-300 rounded-[50%] absolute -z-[999]"
        ></div>
        <div
          class="w-[25px] h-[25px] my-auto border-[1px] bg-[#EBD96B] rounded-[50%] absolute left-[2%] bottom-[10%] md:bottom-[25%] -z-[999]"
        ></div>
        <div
          class="w-[40px] h-[40px] my-auto border-none bg-[#EBD96B] rounded-[50%] absolute right-[7%] top-[15%] md:left-[40%] md:top-[25%] -z-[999]"
        ></div>
        <div
          class="w-[20px] h-[20px] my-auto border-none bg-[#89807A] rounded-[50%] absolute left-[5%] top-[12%] md:top-[30%] -z-[999]"
        ></div>
        <div
          class="w-[10px] h-[10px] my-auto border-none bg-[#89807A] rounded-[50%] absolute right-[5%] bottom-[15%] md:left-[45%] md:bottom-[30%] -z-[999]"
        ></div>
        <!-- mobile -->
        <div
          class="hidden md:flex h-[550px] w-[300px] mx-auto rounded-[30px] bg-white overflow-hidden relative shadow-2xl border-[20px] border-[#C2C8DA] my-[10%]"
        >
          <div
            class="hidden md:grid grid-cols-2 absolute top-0 left-0 bottom-0 -right-[17px] overflow-y-scroll"
          >
            <div class="flex justify-start items-center mt-[25%] ml-[20%]">
              <img src="../src/images/apps-btn.webp" alt="apps menu button" />
            </div>
            <div class="flex justify-end items-center mr-[25%] mt-[25%]">
              <img src="../src/images/profile-btn.webp" alt="profile button" />
            </div>
            <div
              class="mx-[15%] mt-[10%] w-[29vw] font-bold text-xl lg:text-base flex flex-col text-[2vw]"
            >
              <h1>Match your style</h1>

              <form class="relative flex overflow-hidden">
                <img
                  class="absolute top-[30%] left-[3%] cursor-pointer"
                  src="../src/images/Search-btn.webp"
                  alt="search button"
                />
                <input
                  class="bg-[#F1F1F1] font-normal tracking-wide pl-9 max-w-[80%] lg:max-w-[220px] lg:min-w-[100px] text-gray-900 text-xs rounded-full py-1 mt-[3%] focus:outline-none"
                  placeholder="Search"
                  type="text"
                />
              </form>
              <div
                class="flex justify-between items-center w-[220px] mt-[5%] text-[1vw] lg:text-[.5vw] my-[5%] font-semibold"
              >
                <button
                  class="flex bg-[#EBD96B] h-[4vh] w-[10vw] lg:w-[6vw] focus:bg-gray-300 rounded-xl justify-center items-center"
                >
                  Trending Now
                </button>
                <button
                  class="flex h-[4vh] w-[6vw] lg:w-[4vw] bg-gray-300 focus:bg-[#EBD96B] rounded-full justify-center items-center"
                >
                  All
                </button>
                <button
                  class="flex h-[4vh] w-[6vw] lg:w-[4vw] bg-gray-300 focus:bg-[#EBD96B] rounded-full justify-center items-center"
                >
                  New
                </button>
              </div>
              <div
                class="grid grid-cols-2 grid-rows-new3 gap-4 bg-white items-start h-[700px] w-[220px] mt-[5%]"
              >
                <div>
                  <img
                    class="w-full"
                    src="../src/images/mobile-image1.webp"
                    alt="arrival item 1 girl wearing orange hoodie"
                  />

                  <div class="mt-[3%]">
                    <h1 class="font-bold text-[10px]">
                      Polkadot Red Dress
                      <div
                        class="text-gray-500 font-medium text-[12px] mb-[5%]"
                      >
                        $250
                      </div>
                    </h1>
                  </div>
                </div>
                <div class="flex flex-col">
                  <img
                    class="w-[100%]"
                    src="../src/images/mobile-image2.webp"
                    alt="arrival item 1 girl wearing orange hoodie"
                  />

                  <div class="mt-[5%]">
                    <h1 class="font-bold mb-[1%] text-[10px]">
                      Striped Pink Dress
                    </h1>
                    <p class="text-gray-500 font-medium text-[12px]">$250</p>
                  </div>
                </div>
                <div class="flex flex-col">
                  <img
                    class="w-[100%]"
                    src="../src/images/mobile-image3.webp"
                    alt="arrival item 1 girl wearing orange hoodie"
                  />

                  <div class="mt-[5%]">
                    <h1 class="font-bold mb-[1%] text-sm">Striped Dress</h1>
                    <p class="text-sm font-medium text-gray-500">$250</p>
                  </div>
                </div>
                <div class="flex flex-col">
                  <img
                    class="w-[100%]"
                    src="../src/images/mobile-image4.webp"
                    alt="arrival item 1 girl wearing orange hoodie"
                  />

                  <div class="mt-[5%]">
                    <h1 class="font-bold mb-[1%] text-sm">Green Pants</h1>
                    <p class="text-sm font-medium text-gray-500">$250</p>
                  </div>
                </div>
                <div class="flex flex-col">
                  <img
                    class="w-[100%]"
                    src="../src/images/mobile-image4.webp"
                    alt="arrival item 1 girl wearing orange hoodie"
                  />

                  <div class="mt-[5%]">
                    <h1 class="font-bold mb-[1%] text-sm">Green Pants</h1>
                    <p class="text-sm font-medium text-gray-500">$250</p>
                  </div>
                </div>
                <div class="flex flex-col">
                  <img
                    class="w-[100%]"
                    src="../src/images/mobile-image4.webp"
                    alt="arrival item 1 girl wearing orange hoodie"
                  />

                  <div class="mt-[5%]">
                    <h1 class="font-bold mb-[1%] text-sm">Green Pants</h1>
                    <p class="text-sm font-medium text-gray-500">$250</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="bg-white h-[8%] w-full absolute bottom-0 grid grid-cols-4"
          >
            <div class="flex justify-center items-start mt-[10%]">
              <svg
                class="w-[50%] fill-current text-[#EBD96B]"
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                viewBox="0 0 840 591"
              >
                <path
                  d="M406.5 41.5c-12 2.6-26.6 11.2-34.6 20.3-1.8 2-42.9 44.9-91.4 95.2-116 120.5-106.6 110.4-111.7 120.7-4.1 8.3-4.3 9-4.3 17.7 0 8.2.3 9.6 3 14.5 3.3 6 8.6 10.9 15.4 14.3 4.3 2.1 6.1 2.3 24.8 2.6l20.2.3.3 84.7.3 84.7 2.4 7c7.5 22.3 21.3 37.6 40.4 44.6 6.1 2.3 7.1 2.3 53.5 2.7l47.2.3V460c0-100.9-.3-96.4 6.3-99.2 4.6-1.9 78.8-1.9 83.4 0 6.6 2.8 6.3-1.7 6.3 99.2v91.1l47.3-.3c46.3-.4 47.3-.4 53.4-2.7 21.4-7.9 37.2-27.4 41.9-51.7 1.1-6.2 1.4-22.1 1.4-88.4v-80.9l20.3-.3c18.7-.3 20.5-.5 24.8-2.6 7.2-3.5 12.5-8.7 15.6-15 2.4-4.9 2.8-6.9 2.8-14.3 0-8.1-.2-9-4.3-17.2-5.1-10.3 6.8 2.5-115.1-124.1-51.4-53.4-95.7-98.9-98.5-101-14-10.7-33.6-14.9-51.1-11.1z"
                />
              </svg>
            </div>
            <div class="flex justify-center items-start mt-[10%]">
              <svg
                class="w-[40%] fill-current text-gray-400 focus:text-[#EBD96B] cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                viewBox="0 0 1024 1024"
              >
                <path
                  d="M114.1 193.5C85.7 199.7 64 226.7 64 256c0 23.7 14.1 46.4 35.1 56.8C114.9 320.6 77 320 512 320c434.7 0 397.3.6 413-7.1 20.8-10.3 35-33.3 35-56.9s-14.2-46.6-35-56.9c-15.8-7.7 21.7-7.1-413.5-7-329.6 0-392 .3-397.4 1.4zM114.1 449.5C85.7 455.7 64 482.7 64 512c0 23.7 14.1 46.4 35.1 56.8C114.9 576.6 77 576 512 576c434.7 0 397.3.6 413-7.1 20.8-10.3 35-33.3 35-56.9s-14.2-46.6-35-56.9c-15.8-7.7 21.7-7.1-413.5-7-329.6 0-392 .3-397.4 1.4zM114.1 705.5C85.7 711.7 64 738.7 64 768c0 23.7 14.1 46.4 35.1 56.8C114.9 832.6 77 832 512 832c434.7 0 397.3.6 413-7.1 20.8-10.3 35-33.3 35-56.9s-14.2-46.6-35-56.9c-15.8-7.7 21.7-7.1-413.5-7-329.6 0-392 .3-397.4 1.4z"
                />
              </svg>
            </div>
            <div class="flex justify-center items-start mt-[10%]">
              <svg
                class="w-[40%] fill-current text-gray-400 focus:text-[#EBD96B] cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                viewBox="0 0 1200 1200"
              >
                <path
                  d="M80 125.1c-6.7 1.3-14.4 5.5-20.5 11.1-11.9 10.9-16.5 28.2-11.6 43.6 3.8 11.8 14 22.6 25.8 27.3l5.8 2.4 72.9.5 73 .5 59.2 275.3 59.2 275.3-8.1 14.7c-11.7 21.5-25 48.9-28.7 58.9-4.3 12-5 20.8-2.1 30.1 4.7 15.7 18.2 27.6 34.2 30.2 3.5.5 13.4 1 21.9 1.1l15.5.1-6.5 1.3c-27.7 6-52.9 28.2-62.1 54.8-4 11.6-5.3 21.2-4.6 34.2.7 12.6 2.5 19.9 7.3 30.3 4.4 9.7 10.6 18.2 19.1 26.3 17.8 17.2 38.4 24.8 63.3 23.6 13.9-.7 20.6-2.4 32.7-8.2 21.1-10.2 36.9-28.1 44.4-50.5 2.8-8.2 3.3-11.3 3.7-22.6 1-27-6.5-46.3-25.3-65-11.8-11.7-25.7-19.4-41.1-22.7-6.2-1.4 23.7-1.5 281.1-1.5 247.9 0 287.1.2 281.5 1.3-27.7 6-52.9 28.2-62.1 54.8-4 11.6-5.3 21.2-4.6 34.2.7 12.6 2.5 19.9 7.3 30.3 4.4 9.7 10.6 18.2 19.1 26.3 17.8 17.2 38.4 24.8 63.3 23.6 13.9-.7 20.6-2.4 32.7-8.2 21.1-10.2 36.9-28.1 44.4-50.5 2.8-8.2 3.3-11.3 3.7-22.6 1-27-6.5-46.3-25.3-65-11.8-11.7-25.7-19.4-41.1-22.7l-6.9-1.5 15.5-.1c18.5-.1 26.6-1.3 34-4.8 7.7-3.7 16.3-12.7 20.3-21 3-6.4 3.2-7.5 3.2-17.8 0-10.5-.2-11.4-3.3-17.7-4.2-8.5-14.8-18.7-23-22l-5.7-2.3-312.7-.3c-172.1-.1-312.8-.4-312.8-.6 0-.2 2.3-5.5 5.1-11.8 11.7-25.7 12.1-29.9 5.8-58.3-2.3-10.2-3.9-18.8-3.7-19 .3-.3 156.6-18.7 347.4-40.9 190.8-22.3 349.8-41 353.4-41.6 16.7-2.8 30.3-15.2 34.5-31.6 1.4-5.4 1.5-26 1.3-185l-.3-179-3.7-7.5c-4.6-9.3-12.2-16.8-21.5-21.2l-6.8-3.2-407.2-.3-407.1-.2-.6-2.8c-.3-1.5-2-10.4-3.7-19.7-5.3-29.1-9.8-41.2-18.6-50.6-5.2-5.6-14.2-10.4-22.2-11.9-6.7-1.2-181.6-1.2-188.1.1z"
                />
              </svg>
            </div>
            <div class="flex justify-center items-start pt-[10%]">
              <svg
                class="w-[40%] fill-current text-gray-400 focus:text-[#EBD96B] cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                viewBox="0 0 1200 1200"
              >
                <path
                  d="M573.5 61.1c-117 10.2-218.8 89.7-257 201-53.6 155.9 28.3 325.8 183.4 380.6C609.1 681.3 730 653.9 812 572c105.7-105.7 117.5-272.8 27.6-392.4C782.5 103.7 692.7 59.3 598 60.1c-8 .1-19 .6-24.5 1zM555.5 751c-116.4 6.5-220.3 35.4-307.1 85.3-98.2 56.4-168.3 138.2-185.5 216.2-2 9.1-2.2 13.4-2.6 48.8l-.5 38.7h1080.4l-.5-38.8c-.4-35.3-.6-39.6-2.6-48.7-16.7-75.5-82.4-154.1-176.3-210.8C876.4 790.8 776.6 761 660 752c-18.5-1.5-84.9-2-104.5-1z"
                />
              </svg>
            </div>
          </div>
        </div>
        <!-- mobile -->
      </div>
    </section>
    <section>
      <div
        class="bg-[#E5C643] flex justify-center items-center h-[70vh] w-full"
      >
        <div>
          <img src="" alt="" />
        </div>
        <div
          class="text-center flex flex-col justify-center items-center px-[5%]"
        >
          <p class="text-xl font-bold text-white lg:text-3xl">
            JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
          </p>

          <p class="text-white text-lg w-[75%] mt-[5%] lg:text-2xl">
            Type your email down below
          </p>
          <div
            class="bg-white py-2 px-2 rounded-lg mt-[5%] flex w-[80%] justify-center items-center"
          >
            <input
              class="w-[100%] focus:outline-none py-2 px-2"
              type="text"
              placeholder="Email"
              autocomplete="email"
            />
            <button
              class="px-3 py-2 font-bold text-center text-white bg-black rounded-lg"
            >
              SEND
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>

