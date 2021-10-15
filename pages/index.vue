<script setup lang="ts">

// import {
//   defineProps,
//   useRouter,
//   useStore,
//   computed,
//   ref,
//   onBeforeMount
// } from '?????';

const props = defineProps({});
const router = useRouter();

// import from where ????
const store = useStore();

const someComputed = computed(() => "nuxt + ts + composition-api");

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