<script setup>
import { ref, computed, onMounted } from "vue";
import { getInitialName, getRandomBackgroundColor } from "../utils/helper";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const initials = computed(() => getInitialName(props.name));

const bgColor = ref("");

onMounted(() => {
  bgColor.value = getRandomBackgroundColor();
});
</script>
<template>
  <div
    class="h-11 w-11 flex items-center justify-center text-white font-medium rounded-full"
    :style="{ backgroundColor: bgColor }"
  >
    {{ initials }}
  </div>
</template>
