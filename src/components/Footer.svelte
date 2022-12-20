<script>
  import image from '$lib/assets/images/fb-icon.png'
  import image1 from '$lib/assets/images/instagram-icon.png'
  import image2 from '$lib/assets/images/twitter-icon.png'
  import image3 from '$lib/assets/images/linkin-icon.png'
</script>

<footer class="w-full h-full grid-cols-2 bg-black lg:grid lg:py-10">
    <div
        class="hidden lg:flex flex-col py-10 px-[15%] justify-start items-start w-full"
      >
        <h1 class="text-3xl font-bold text-white">FASHION</h1>
        <h2 class="text-gray-500 text-sm mt-[5%] leading-loose w-[60%]">
          Complete your style with awesome clothes from us.
        </h2>
        <div
          class="hidden lg:flex justify-start items-start pb-[10%] w-[50%] mt-[5%]"
        >
          <div class="flex">
            <img
              class="w-[70%] cursor-pointer"
              src="{image}"
              alt="facebook icon"
            />
          </div>
          <div class="flex">
            <img
              class="w-[70%] cursor-pointer"
              src="{image1}"
              alt="instagram icon"
            />
          </div>
          <div class="flex">
            <img
              class="w-[70%] cursor-pointer"
              src="{image2}"
              alt="twitter icon"
            />
          </div>
          <div class="flex">
            <img
              class="w-[70%] cursor-pointer"
              src="{image3}"
              alt="linked-in icon"
            />
          </div>
        </div>
      </div>

      <div
        class="flex flex-col items-center justify-center text-center text-white lg:text-[#808080] lg:text-start lg:font-normal lg:items-start lg:justify-around lg:flex-row"
      >
        <div class="mt-[20%] md:mt-[10%] lg:mt-[7%]">
          <ul>
            <li class="mb-[20%] lg:mb-[25%] hover:text-white">
              <a href="#">Company</a>
            </li>
            <li class="mb-[20%] lg:mb-[30%] hover:text-white">
              <a href="#">About</a>
            </li>
            <li class="mb-[20%] lg:mb-[30%] hover:text-white">
              <a href="#">Contact Us</a>
            </li>
            <li class="mb-[20%] lg:mb-[30%] hover:text-white">
              <a href="#">Support</a>
            </li>
            <li class="hover:text-white">
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div class="mt-[20%] md:mt-[10%] lg:mt-[7.5%]">
          <ul>
            <li class="mb-[20%] lg:mb-[18%] hover:text-white">
              <a href="#">Quick Link</a>
            </li>
            <li class="mb-[20%] lg:mb-[20%] hover:text-white">
              <a href="#">Share Location</a>
            </li>
            <li class="mb-[20%] lg:mb-[23%] hover:text-white">
              <a href="#">Orders Tracking</a>
            </li>
            <li class="mb-[20%] lg:mb-[20%] hover:text-white">
              <a href="#">Size Guide</a>
            </li>
            <li class="hover:text-white">
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>
        <div class="mt-[20%] md:mt-[10%] lg:mt-[7.5%]">
          <ul>
            <li class="mb-[20%] lg:mb-[15%] hover:text-white">
              <a href="#">Legal</a>
            </li>
            <li class="mb-[20%] lg:mb-[17%] hover:text-white">
              <a href="#">Terms & Conditions</a>
            </li>
            <li class="hover:text-white">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="flex lg:hidden mt-[10%] flex-col py-10 px-[15%] justify-center items-center w-full"
      >
        <h1 class="text-xl font-bold text-white">FASHION</h1>
        <h2 class="text-gray-500 text-sm mt-[5%] text-center leading-loose">
          Complete your style with awesome clothes from us.
        </h2>
      </div>
      <div
        class="flex lg:hidden justify-center items-center pb-[10%] pl-[4%] sm:pl-[2%] w-full"
      >
        <div class="flex">
          <img
            class="w-[70%] cursor-pointer"
            src="{image}"
            alt="facebook icon"
          />
        </div>
        <div class="flex">
          <img
            class="w-[70%] cursor-pointer"
            src="{image1}"
            alt="instagram icon"
          />
        </div>
        <div class="flex">
          <img
            class="w-[70%] cursor-pointer"
            src="{image2}"
            alt="twitter icon"
          />
        </div>
        <div class="flex">
          <img
            class="w-[70%] cursor-pointer"
            src="{image3}"
            alt="linked-in icon"
          />
        </div>
      </div>
</footer>