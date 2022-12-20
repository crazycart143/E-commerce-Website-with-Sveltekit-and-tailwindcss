<script>
    import image from '$lib/assets/images/fb.png'
    import image1 from '$lib/assets/images/google.png'
    import image2 from '$lib/assets/images/linked-in.png'
    import image3 from '$lib/assets/images/login-bg.webp'
    import image4 from '$lib/assets/images/signup-fb.png'
    import image5 from '$lib/assets/images/signup-google.png'
</script>

<svelte:head>
    <title>Login</title>
</svelte:head>

<section class="lg:grid grid-cols-login1 w-full h-full text-center pb-10 sm:py-28 lg:h-[85vh] lg:py-0 lg:pb-0">
    <div class="h-full w-full flex flex-col justify-center lg:justify-start lg:pt-36  ">
        <h1 class="text-3xl sm:text-[40px] lg:text-[45px] font-semibold mb-10">Create Your Account</h1>
        <div class="flex flex-col justify-center mx-[18%] sm:mx-[25%] mb-[20px]">
        <input class="mb-[20px] bg-[#EDF5F3] rounded-xl px-3 py-2" type="text" placeholder="Phone Number">
        <button class="btn text-white bg-black opacity-60 hover:bg-black">NEXT</button>
        </div>
        <div class="w-full flex justify-center my-4 ">
            <p class=" text-xs text-gray-400 divider divider-vertical w-[80%] md:w-[60%]"> OR  </p>
        </div>
        <div class="flex justify-center items-center w-full mx-auto">
            <div class="w-40 h-14 flex justify-center items-center border border-gray-400 hover:bg-gray-100 mr-10 cursor-pointer">
               <img class="w-[20%] mx-1" src="{image4}" alt="fb signup">
               <h1>Facebook</h1>
            </div>
             <div class="w-40 h-14 flex justify-center items-center border border-gray-400 hover:bg-gray-100 cursor-pointer">
                <img class="w-[20%] mx-1" src="{image5}" alt="google signup">
                <h1>Google</h1>
             </div>
        </div>
        <h1 class="w-[60%] md:w-[30%] mx-auto my-12">By signing up, you agree to Fashion's <span>Terms of Service</span>  & <span class="">Privacy Policy</span> </h1>
    </div>
    
    <div class="hidden lg:flex h-[100vh] relative">
        <div class="absolute h-full  mx-16 flex flex-col justify-start items-center text-white font-bold pt-52">
            <h1 class="text-[3vw]">Have an Account?</h1>
            <h2 class="font-light my-8 text-xl">Login and discover a great amount of aesthetic clothes made just for you!</h2>
            <a href="/login"><button class="btn hover:bg-black hover:text-white text-black w-[200px] border-none bg-white rounded-full mx-auto">Login</button></a>
        </div>
        <img class="h-[85vh] w-full" src="{image3}" alt="">

    </div>
</section>