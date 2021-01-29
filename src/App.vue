<template>
  <div id="app">
    <router-view />
    <div class="position-relative">
      <div class="bottom-0 end-0">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "app",
  components: {
    Footer,
  },
};
</script>

    
   