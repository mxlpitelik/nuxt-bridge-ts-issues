<script setup lang="ts">
import {
  defineProps,
  useRouter,
  computed,
  onBeforeMount,
  useState,
} from "#app";

const props = defineProps({
  propName: {
    type: String,
    default: 'none',
    required: true,
  }
});
const router = useRouter();

// import from where ????
const store = useState('test');

const someComputed = computed(() => "nuxt + ts + composition-api + ");

console.log(router, store, someComputed);

onBeforeMount(() => {
  console.log("works!");
});
</script>

<template>
  <div>
    <h1>Hello Nuxt!</h1>
    <h2>You are useing {{ someComputed }}</h2>
  </div>
</template>