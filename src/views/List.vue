<template>
  <div class="list-data">
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/"> Home </router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">List</li>
              <div class="ml-auto">
                <span @click="$router.go(-1)"
                  ><b-icon-arrow-left></b-icon-arrow-left
                ></span>
              </div>
            </ol>
          </nav>
        </div>
      </div>

      <!-- List Body -->
      <div class="row mt-4">
        <div class="col-md-4 mt-4">
          <div class="card card-data shadow">
            <img src="../assets/images/book.png" class="card-img-top p-2" />
            <div class="card-body">
              <h5 class="card-title"><strong>Book</strong></h5>
              <p class="card-text">
                Data gabungan dari author dan category seperti halnya grup dan memiliki sebuah judul pada setiap grup nya.
              </p>
              <router-link to="/list/book" class="btn btn-primary">Go to Book <b-icon-arrow-right></b-icon-arrow-right></router-link>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-4">
          <div class="card card-data shadow">
            <img src="../assets/images/author.png" class="card-img-top p-2" />
            <div class="card-body">
              <h5 class="card-title"><strong>Author</strong></h5>
              <p class="card-text">
                Kalian bisa menambahkan, mengedit, dan menghapus author. Data kalian bisa menggabungkannya.
              </p>
              <router-link to="/list/author" class="btn btn-primary">Go to Author <b-icon-arrow-right></b-icon-arrow-right></router-link>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-4">
          <div class="card card-data shadow">
            <img src="../assets/images/category.png" class="card-img-top p-2" />
            <div class="card-body">
              <h5 class="card-title"><strong>Category</strong></h5>
              <p class="card-text">
                Sama seperti author kalian dapat mengedit, menambahkan,menghapus dan juga menggabungkannya dengan Author.
              </p>
              <router-link to="/list/category" class="btn btn-primary">Go to Category <b-icon-arrow-right></b-icon-arrow-right></router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Body info -->
      <div class="mt-5">
        <hr />
        <div class="row">
          <!-- <div class="col text-center">
            <h2><strong>Apa saja yang bisa kita lakukan?</strong></h2>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "List",
  components: {
    Navbar,
  },
};
</script>

<style>
</style>