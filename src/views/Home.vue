<template>
  <div class="home">
    <Navbar />
    <!-- Content -->
    <div class="content">
      <HomeContent />
      <div class="container mt-5 mb-5">
        <div class="row justify-content-center" v-scrollanimation>
          <div class="col-md-3">
            <div class="card shadow">
              <div class="card-body">
                <h5 class="card-title text-center">Book</h5>
                <hr />
                <p class="card-text number-count text-center">
                  <strong v-text="book">{{ jumlah("book") }} </strong>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card shadow">
              <div class="card-body">
                <h5 class="card-title text-center">Author</h5>
                <hr />
                <p class="card-text number-count text-center">
                  <strong v-text="author">{{ jumlah("author") }}</strong>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card shadow">
              <div class="card-body">
                <h5 class="card-title text-center">Category</h5>
                <hr />
                <p class="card-text number-count text-center">
                  <strong v-text="category">{{ jumlah("category") }}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Info -->
      <Info />
    </div>
    <!-- Footer -->

  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import HomeContent from "@/components/HomeContent.vue";
import Info from "@/components/Info.vue";

import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    HomeContent,
    Info,
 
  },
  data() {
    return {
      book: 0,
      author: 0,
      category: 0
    };
  },
  methods: {
    jumlah(name) {
      axios
        .get(`https://frozen-shore-65267.herokuapp.com/${name}/`)
        .then((res) => {
          if (name == "book") {
            this.book = res.data.length;
          } else if (name == "author") {
            this.author = res.data.length;
          } else {
            this.category = res.data.length;
          }

        })
        .catch((err) => console.log(err));
    },

    handleScroll: function (evt, el) {
      if (window.scrollY > 50) {
        el.setAttribute(
          'style',
          'opacity: 1; transform: translate3d(0, -10px, 0)'
        )
      }
      return window.scrollY > 100
    }
  },
  
  mounted() {},
};
</script>
