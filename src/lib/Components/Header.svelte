<script>
    import "../../app.css"
    import client from "$lib/images/clientLanding.jpg"
    import "../../routes/styles/images.css"
</script>

<header class="w-full lg:h-screen">
    <div class="container py-36 lg:py-6 flex items-center lg:justify-start lg:pt-80">
        <div class="lg:flex lg:flex-col">
            <div class="text-center">
                <h2 class="text-4xl lg:text-7xl text-white font-principal text-center">Barberia</h2>
                <h1 class="text-6xl lg:text-9xl text-gold-highlight font-principal text-center">Lumar</h1>
            </div>
            <div class="text-center lg:text-xl">
                <p class="text-white">Detras de un gran corte, existe una gran barbera.</p>
            </div>
            <div class="flex items-center justify-center py-2 text-center font-principal">
                <a href="/src/routes/meeting/+page.svelte" class="px-3 py-2 lg:text-3xl lg:px-6 bg-yellow-focus rounded-lg hover:opacity-80 ease-in duration-200">Agendar una cita</a>
            </div>

        </div>
    </div>
</header>