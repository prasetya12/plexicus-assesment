<script setup>
import { User } from "~/domain/entities/User";
import { Camera, Phone, Mail, Globe } from "lucide-vue-next";
import Avatar from "./Avatar.vue";
defineProps({
  user: User,
});
</script>
<template>
  <div class="p-4 border border-gray-200 rounded-lg shadow-md divide-y">
    <div class="flex items-center gap-4 pb-4">
      <div>
        <Avatar :name="user.name" />
      </div>
      <div>
        <div class="font-medium">{{ user.name }}</div>
        <div class="text-xs text-gray-400">{{ user.username }}</div>
      </div>
    </div>
    <div class="flex gap-4 flex-col">
      <div class="p-2 flex text-sm items-center flex-col gap-2">
        <div class="flex w-full items-center">
          <div class="w-1/6">
            <Phone class="w-4 text-gray-500" />
          </div>
          <div class="w-5/6">
            {{ user.phone }}
          </div>
        </div>
        <div class="flex w-full items-center">
          <div class="w-1/6">
            <Mail class="w-4 text-gray-500" />
          </div>
          <div class="w-5/6">
            {{ user.email }}
          </div>
        </div>
        <div class="flex w-full items-center">
          <div class="w-1/6">
            <Globe class="w-4 text-gray-500" />
          </div>
          <div class="w-5/6">
            {{ user.website }}
          </div>
        </div>
      </div>
      <div class="flex">
        <NuxtLink :to="`/users/${user.id}`">
          <div
            class="text-sm py-2 px-3 border border-indigo-600 rounded-xl cursor-pointer text-indigo-600"
          >
            View Detail
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
