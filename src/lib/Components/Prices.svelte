<script>
    import sizorsIcon from "$lib/images/icons8-tijeras-50.png"
    import chairIcon from "$lib/images/icons8-silla-de-peluquero-50.png"
</script>


<section id="Prices">
    <div class="container py-12 relative">
        <div class="text-center m-auto mb-20 md:w-1/2">
        <h2 class="text-4xl md:text-6xl font-principal text-white">Nuestros Precios</h2>
        </div>
        <div class="grid lg:grid-cols-2 md:grid-cols-1 gap-12 lg:gap-8 px-4 sm:px-6 lg:px-8">
            <div class="border-2 border-solid border-yellow-focus text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-blue-footer ease-in duration-150">
                <div class="flex items-center justify-center">
                    <img src={sizorsIcon} alt="sizors">
                </div>
                <div class="py-6 mb-20">
                    <h3 class="text-center font-principal text-2xl lg:text-4xl text-yellow-focus">Sencillo</h3>
                    <p class="text-white text-lg lg:text-2xl">Cabello</p>
                </div>
                <div>
                    <h2 class="text-4xl lg:text-6xl text-center font-bold text-white">$60 mx</h2>
                </div>
            </div>
            <div class="border-2 border-solid border-yellow-focus text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-blue-footer ease-in duration-150">
                <div class="flex items-center justify-center">
                    <img src={chairIcon} alt="chairIcon">
                </div>
                <div class="py-6 mb-20">
                    <h3 class="text-center font-principal text-2xl lg:text-4xl text-yellow-focus">Sencillo</h3>
                    <p class="text-white text-lg lg:text-2xl">Cabello</p>
                    <p class="text-white text-lg lg:text-2xl">Ceja</p>
                    <p class="text-white text-lg lg:text-2xl">Barba</p>
                </div>
                <div>
                    <h2 class="text-4xl lg:text-6xl text-center font-bold text-white">$100 mx</h2>
                </div>
            </div>
        </div>
    </div>
</section>