<script setup lang="ts">
import { useRoute } from "vue-router";
import { useUsers } from "~/composable/useUsers";
const route = useRoute();
const { user, fetchUser, loading, error } = useUsers();

fetchUser(Number(route.params.id));
</script>

<template>
  <div class="lg:px-48 lg:py-24 w-full h-screen flex flex-col gap-4">
    <div>
      <NuxtLink to="/" class="text-blue-500">← Back to Users</NuxtLink>
    </div>
    <div class="flex gap-4">
      <h1 class="text-2xl font-semibold">Test Detail</h1>
    </div>
    <div class="mt-4">
      <div v-if="loading">Loading...</div>
      <div v-else-if="error" class="text-red-500">{{ error }}</div>
      <div v-else-if="user" class="p-4 border rounded">
        <h1 class="text-2xl font-bold">{{ user.name }}</h1>
        <p class="text-gray-600">{{ user.email }}</p>
        <p><strong>Phone:</strong> {{ user.phone }}</p>
        <p>
          <strong>Website:</strong>
          <a
            :href="`https://${user.website}`"
            target="_blank"
            class="text-blue-500"
            >{{ user.website }}</a
          >
        </p>
        <p><strong>Company:</strong> {{ user.company.name }}</p>
      </div>
    </div>
  </div>
</template>
