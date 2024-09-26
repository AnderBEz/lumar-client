<script>
    import whatIcon from "$lib/images/logowhat.png"
    import cellIcon from "$lib/images/telefono.png"
    import mailIcon from "$lib/images/mail.png"
</script>

<section>
    <div class="container py-12">
        <div class="text-center py-6">
            <h2 class="text-3xl lg:text-6xl font-principal">Contactanos</h2>
        </div>
        <div class="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="flex space-x-3 items-center ">
                <img src={cellIcon} alt="celularIcon" class="size-8 lg:size-12">
                <h4 class="text-lg lg:text-xl font-semibold">+52 3321824126</h4>
            </div>
            <div class="flex space-x-3 items-center ">
                <img src={whatIcon} alt="celularIcon" class="size-8 lg:size-12">
                <h4 class="text-lg lg:text-xl font-semibold">+52 3321824126</h4>
            </div>
            <div class="flex space-x-3 items-center ">
                <img src={mailIcon} alt="celularIcon" class="size-8 lg:size-12">
                <h4 class="text-lg lg:text-xl font-semibold">barberialumar@gmail.com</h4>
            </div>
        </div>
    </div>
</section>