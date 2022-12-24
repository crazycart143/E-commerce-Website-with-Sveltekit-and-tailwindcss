<script>
    import image from '$lib/assets/images/fb.png'
    import image1 from '$lib/assets/images/google.png'
    import image2 from '$lib/assets/images/linked-in.png'
    import image3 from '$lib/assets/images/login-bg.webp'
</script>

<svelte:head>
    <title>Login</title>
</svelte:head>

<section class="lg:grid grid-cols-login1 w-full h-full text-center pb-10 sm:py-16 lg:h-[85vh] lg:py-0 lg:pb-0">
    <div class="h-full w-full flex flex-col justify-center lg:justify-start lg:pt-32  ">
        <h1 class="text-2xl md:text-[40px] lg:text-[45px] font-semibold">Login to Your Account</h1>
        <h2 class="text-gray-500 md:text-[18px] lg:text-[19px] my-2 lg:my-4">Login using social networks</h2>
        <div class="flex justify-center items-center">
            <img
            class="w-10 mx-2 cursor-pointer"
            src="{image}"
            alt="facebook icon"
          />
          <img
          class="w-9 mx-2 cursor-pointer"
          src="{image1}"
          alt="google icon"
        />
        </div>
        <div class="w-full flex justify-center my-4 ">
            <p class=" text-xs text-gray-400 divider divider-vertical w-[60%]"> OR  </p>
        </div>
        <div class="flex flex-col justify-center mx-[20%] mb-[20px]">
        <input class="mb-[20px] bg-[#EDF5F3] rounded-xl px-3 py-2" type="text" placeholder="Email">
        <input class="mb-[20px] bg-[#EDF5F3] rounded-xl px-3 py-2" type="text" placeholder="Password">
        </div>
        <button class="btn hover:bg-black w-[60%]  bg-black rounded-full mx-[20%]">Sign in</button>
        <a class="mt-8 lg:hidden" href="/signup">Don't have an account? <span class="text-blue-700">Sign up here</span> </a>
    </div>
    
    <div class="hidden lg:flex h-[100vh] relative">
        <div class="absolute h-full  mx-16 flex flex-col justify-start items-center text-white font-bold pt-52">
            <h1 class="text-[3vw]">New Here?</h1>
            <h2 class="font-light my-8 text-xl">Register and discover a great amount of aesthetic clothes made just for you!</h2>
            <a href="/signup"><button class="btn hover:bg-black hover:text-white text-black w-[200px] border-none bg-white rounded-full mx-auto">Sign Up </button></a>
        </div>
        <img class="h-[85vh] w-full" src="{image3}" alt="">

    </div>
</section>