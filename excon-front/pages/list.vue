<template>
  <div class="container mx-auto h-full flex justify-center items-center">
    <div class="flex">
      <div v-for="item in items" :key="item.id" class="max-w-sm rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            {{ item.name }}
          </div>
          <ul class="text-gray-700 text-base">
            <li>{{ item.dni }}</li>
            <li>{{ item.cell }}</li>
            <li>{{ item.email }}</li>
            <li>{{ item.direction }}</li>
            <li>{{ item.department }}</li>
            <li>{{ item.province }}</li>
            <li>{{ item.district }}</li>
          </ul>
        </div>
        <div class="px-6 py-4">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{{ item.comment }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const userData = await $axios.$get('http://localhost:4000/person/get-all')
    return { items: userData }
  }
}
</script>
