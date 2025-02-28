<script setup lang="ts">
import { useRoute } from "vue-router";
import { useUsers } from "~/composable/useUsers";
import { ChevronLeft } from "lucide-vue-next";
import Avatar from "~/components/Avatar.vue";
import { formatAddress } from "#imports";
const route = useRoute();
const { user, fetchUser, loading, error } = useUsers();

fetchUser(Number(route.params.id));
</script>

<template>
  <div class="lg:px-48 lg:py-24 w-full h-screen flex flex-col gap-4">
    <div>
      <div class="flex items-center gap-4">
        <NuxtLink to="/" class="">
          <div
            class="text-blue-500 rounded-full h-10 flex items-center justify-center w-10 border border-blue-500"
          >
            <ChevronLeft />
          </div>
        </NuxtLink>

        <div>Back</div>
      </div>
    </div>

    <div class="mt-4">
      <div v-if="loading">Loading...</div>
      <div v-else-if="error" class="text-red-500">{{ error }}</div>
      <div v-else-if="user" class="flex items-center justify-center w-full">
        <div class="p-4 border rounded lg:w-1/2">
          <div>
            <Avatar :name="user.name" />
          </div>
          <div class="w-full flex">
            <div class="w-1/2">
              <div class="w-full mt-4 flex flex-col gap-2">
                <div class="flex flex-col">
                  <div class="text-sm">Name:</div>
                  <div class="text-medium text-lg">{{ user.name }}</div>
                </div>
                <div class="flex flex-col">
                  <div class="text-sm">Username:</div>
                  <div class="text-medium text-lg">{{ user.username }}</div>
                </div>
                <div class="flex flex-col">
                  <div class="text-sm">Company Name:</div>
                  <div class="text-medium text-lg">{{ user.company.name }}</div>
                </div>
              </div>
            </div>
            <div class="w-1/2">
              <div class="w-full mt-4 flex flex-col gap-2">
                <div class="flex flex-col">
                  <div class="text-sm">Email:</div>
                  <div class="text-medium text-lg">{{ user.email }}</div>
                </div>
                <div class="flex flex-col">
                  <div class="text-sm">Website:</div>
                  <div class="text-medium text-lg">{{ user.website }}</div>
                </div>
                <div class="flex flex-col">
                  <div class="text-sm">Phone:</div>
                  <div class="text-medium text-lg">{{ user.phone }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-2">
            <div class="flex flex-col">
              <div class="text-sm">Address:</div>
              <div class="text-medium text-lg">
                {{ formatAddress(user.address) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
