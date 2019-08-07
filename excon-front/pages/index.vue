<template>
  <div class="container mx-auto h-full flex justify-center items-center mt-16">
    <form method="POST" class="w-full max-w-sm" @submit.prevent="insert">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            Nombre
          </label>
        </div>
        <div class="md:w-2/3">
          <input id="inline-full-name" v-model="Person.name" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="text" value="">
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            DNI
          </label>
        </div>
        <div class="md:w-2/3">
          <input id="inline-full-name" v-model="Person.dni" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="text" value="">
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            Telefono
          </label>
        </div>
        <div class="md:w-2/3">
          <input id="inline-full-name" v-model="Person.cell" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="text" value="">
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            E-mail
          </label>
        </div>
        <div class="md:w-2/3">
          <input id="inline-full-name" v-model="Person.email" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="text" value="">
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            Direccion
          </label>
        </div>
        <div class="md:w-2/3">
          <input id="inline-full-name" v-model="Person.direction" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="text" value="">
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            Departamento
          </label>
        </div>
        <div class="md:w-2/3">
          <input id="inline-full-name" v-model="Person.department" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="text" value="">
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            Provincia
          </label>
        </div>
        <div class="md:w-2/3">
          <input id="inline-full-name" v-model="Person.province" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="text" value="">
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            Distrito
          </label>
        </div>
        <div class="md:w-2/3">
          <input id="inline-full-name" v-model="Person.district" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="text" value="">
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            Comentario
          </label>
        </div>
        <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
          <textarea v-model="Person.comment" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" placeholder="Comentarios" rows="6" />
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3" />
        <div class="md:w-2/3">
          <button class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
            Registrar
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      Person: {
        name: '',
        dni: '',
        cell: '',
        email: '',
        direction: '',
        department: '',
        province: '',
        district: '',
        comment: ''
      },
      items: [
        { message: 'name' },
        { message: 'dni' },
        { message: 'cell' },
        { message: 'email' },
        { message: 'direction' },
        { message: 'department' },
        { message: 'province' },
        { message: 'district' }
      ]
    }
  },
  methods: {
    insert ({ $axios }) {
      axios.post('http://localhost:4000/person/insert', this.Person)
        .then((Response) => {})
        .catch((err) => {
          this.errors.push(err)
        })
    }
  }
}
</script>
