<script setup lang="ts">
import { useUsers } from "~/composable/useUsers";
const { users, fetchUsers, loading, error } = useUsers();

fetchUsers();
</script>

<template>
  <div class="lg:px-48 lg:py-24 w-full h-screen">
    <h1 class="text-2xl font-semibold">Users List</h1>
    <h4 class="text-gray-400">List of users available for communication</h4>
    <div class="mt-8">
      <div v-if="loading">Loading...</div>
      <div v-else-if="error" class="text-red-500">{{ error }}</div>
      <ul v-else class="space-y-4">
        <li v-for="user in users" :key="user.id" class="p-4 border rounded">
          <h2 class="text-lg font-semibold">
            {{ user.name }}
          </h2>
          <p class="text-gray-600">{{ user.email }}</p>
          <NuxtLink :to="`/users/${user.id}`" class="text-blue-500"
            >View Details</NuxtLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>
