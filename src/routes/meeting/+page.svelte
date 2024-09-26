<script lang="ts">
  import { json } from "@sveltejs/kit";
    import "../../app.css"

    interface formData {
        nombre : string;
        numeroCel: string;
        fecha: string;
        hora: string;
    }

    let nombre : string = "";
    let numeroCel : string = "";
    let fecha : string = "";
    let hora : string = "";

    let successMessage : string | null = null;
    let errorMessage : string | null = null;

    const sendFormData = async (event : Event) : Promise<void> => {
        event.preventDefault();

        const datos : formData = {nombre, numeroCel, fecha, hora};

        try {
            const respuesta = await fetch('https://lumar-server.onrender.com/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(datos),
            });

            if (respuesta.ok) {
                successMessage = 'Tu cita ha sido registrada correctamente, te esperamos!';
                errorMessage = null;
            } else {
                errorMessage = 'Error al agendar tu cita, intentalo despues :c';
                successMessage = null;
            }
        } catch (error) {
            errorMessage = 'Ocurrio un error.';
            successMessage = null;
        }
    };
</script>


<form on:submit={sendFormData} class="space-y-4 p-6 bg-white shadow-md rounded-lg max-w-lg mx-auto">
    <h1 class="text-2xl font-bold mb-4">Reservar Cita</h1>
    <div>
      <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre:</label>
      <input type="text" id="nombre" bind:value={nombre} required class="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
    </div>
  
    <div>
      <label for="celular" class="block text-sm font-medium text-gray-700">Número de celular:</label>
      <input type="tel" id="celular" bind:value={numeroCel} required class="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
    </div>
  
    <div>
      <label for="fecha" class="block text-sm font-medium text-gray-700">Fecha:</label>
      <input type="date" id="fecha" bind:value={fecha} required class="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
    </div>
  
    <div>
      <label for="hora" class="block text-sm font-medium text-gray-700">Hora:</label>
      <select id="hora" bind:value={hora} required class="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <option value="" disabled selected>Selecciona una hora</option>
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
  
    <button type="submit" class="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 transition duration-200">Reservar Cita</button>
  </form>
  
  <!-- Mensaje de éxito -->
  {#if successMessage}
    <div class="mt-6 p-4 max-w-lg mx-auto bg-green-100 border border-green-400 text-green-700 rounded-md flex items-center space-x-2">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m-7 8a9 9 0 1 0 0-18a9 9 0 0 0 0 18z" />
      </svg>
      <span>{successMessage}</span>
    </div>
  {/if}
  
  <!-- Mensaje de error -->
  {#if errorMessage}
    <div class="mt-6 p-4 max-w-lg mx-auto bg-red-100 border border-red-400 text-red-700 rounded-md flex items-center space-x-2">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
      <span>{errorMessage}</span>
    </div>
  {/if}