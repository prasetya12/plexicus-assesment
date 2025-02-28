<script setup lang="ts">
import { useUsers } from "~/composable/useUsers";
import UserCard from "~/components/UserCard.vue";
import UserCardLoading from "~/components/Loading/UserCardLoading.vue";
const { users, fetchUsers, loading, error } = useUsers();

fetchUsers();
</script>

<template>
  <div class="lg:px-48 lg:py-24 px-6 pt-4 w-full pb-24">
    <h1 class="text-2xl font-semibold">Users List</h1>
    <h4 class="text-gray-400">List of users available for communication</h4>
    <div class="mt-8">
      <div v-if="loading">
        <UserCardLoading />
      </div>
      <div v-else-if="error" class="text-red-500">{{ error }}</div>
      <div v-else class="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4">
        <UserCard v-for="user in users" :key="user.id" :user="user" />
      </div>
    </div>
  </div>
</template>
