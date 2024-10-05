<script lang="ts">
  import { json } from "@sveltejs/kit";
  import "../../app.css";
  import "../styles/images.css";

  interface formData {
    nombre: string;
    numeroCel: string;
    fecha: string;
    hora: string;
  }

  let nombre: string = "";
  let numeroCel: string = "";
  let fecha: string = "";
  let hora: string = "";

  let successMessage: string | null = null;
  let errorMessage: string | null = null;

  const sendFormData = async (event: Event): Promise<void> => {
    event.preventDefault();

    const datos: formData = { nombre, numeroCel, fecha, hora };

    try {
      const respuesta = await fetch(
        "https://lumar-server.onrender.com/api/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datos),
        }
      );

      if (respuesta.ok) {
        successMessage =
          "Tu cita ha sido registrada correctamente, te esperamos!";
        errorMessage = null;
      } else {
        errorMessage = "Error al agendar tu cita, intentalo despues :c";
        successMessage = null;
      }
    } catch (error) {
      errorMessage = "Ocurrio un error.";
      successMessage = null;
    }
  };
</script>

<form
  on:submit={sendFormData}
  class="space-y-4 p-10 bg-white lg:shadow-md rounded-lg max-w-xl mx-auto lg:mt-[10%]"
>
  <div class="flex justify-center items-center">
    <div>
      <h1 class="text-4xl lg:text-5xl font-principal mb-4 text-center">
        Agendar Una Cita
      </h1>

      <div class="pt-3 pb-5">
        <div>
          <label
            for="nombre"
            class="block text-sm lg:text-2xl text-gray-500 text-center"
            >Nombre</label
          >
        </div>
        <div>
          <input
            type="text"
            id="nombre"
            bind:value={nombre}
            required
            class="mt-1 block w-full p-1 border-b focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div class="pb-5">
        <div>
          <label
            for="celular"
            class="block lg:text-2xl text-sm text-gray-500 text-center"
            >Número de celular</label
          >
        </div>
        <div>
          <input
            type="tel"
            id="celular"
            bind:value={numeroCel}
            required
            class="mt-1 block w-full p-1 border-b focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div
        class="flex flex-col lg:flex-row text-center lg:space-x-3 items-center"
      >
        <div class="lg:pt-4 space-y-2 w-full">
          <label
            for="fecha"
            class="block lg:text-2xl text-sm text-gray-500 text-center"
            >Fecha</label
          >
          <div>
            <input
              type="date"
              id="fecha"
              bind:value={fecha}
              required
              class="mt-1 block w-full py-2 lg:mt-3 lg:px-3 lg:py-[4.5%] border-2 px-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div class="space-y-2 w-full pt-4">
          <label
            for="hora"
            class="block lg:text-2xl text-sm text-gray-500 text-center"
            >Hora</label
          >
          <div class="flex justify-center">
            <select
              id="hora"
              bind:value={hora}
              required
              class="mt-1 block w-full py-[4%] lg:py-[6.3%] border-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="" disabled selected></option>
              <option value="4:00">4:00 PM</option>
              <option value="4:30">4:30 PM</option>
              <option value="5:00">5:00 PM</option>
              <option value="5:30">5:30 PM</option>
              <option value="6:00">6:00 PM</option>
              <option value="6:30">6:30 PM</option>
              <option value="7:00">7:00 PM</option>
              <option value="7:30">7:30 PM</option>
            </select>
          </div>
        </div>
      </div>

      <div class="flex justify-center py-10">
        <button
          type="submit"
          class="bg-gold-highlight lg:text-lg text-white py-1 px-8 rounded-full hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 transition duration-200"
          >Agendar Cita</button
        >
      </div>
    </div>
  </div>
</form>

<!-- Mensaje de éxito -->
{#if successMessage}
  <div
    class="mt-6 p-4 max-w-lg mx-auto bg-green-100 border border-green-400 text-green-700 rounded-md flex items-center space-x-2"
  >
    <svg
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12l2 2l4-4m-7 8a9 9 0 1 0 0-18a9 9 0 0 0 0 18z"
      />
    </svg>
    <span>{successMessage}</span>
  </div>
{/if}

<!-- Mensaje de error -->
{#if errorMessage}
  <div
    class="mt-6 p-4 max-w-lg mx-auto bg-red-100 border border-red-400 text-red-700 rounded-md flex items-center space-x-2"
  >
    <svg
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
    <span>{errorMessage}</span>
  </div>
{/if}
