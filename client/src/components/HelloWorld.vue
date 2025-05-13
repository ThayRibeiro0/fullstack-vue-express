<script setup>
import { ref, onMounted } from "vue"; // <- Adiciona onMounted!
import axios from "axios";

const message = ref("Hello World!");

const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:5000/helloworld"); //  Backend URL
    message.value = response.data.message;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  fetchData();
});
</script>

______________________________________

<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>
______________________________________

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
