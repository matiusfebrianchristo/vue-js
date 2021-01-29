<template>
  <div class="bg-primary">
    <!-- PC -->
    <div class="d-none d-md-block ">
      <div class="container">
        <div class="row px-3 py-7">
          <div class="col-md">
            <div class="d-flex h-100">
              <div class="justify-content-center align-self-center">
                <h2><strong>Management Data Anda.</strong></h2>
                <p>
                  Sebuah website yang menyediakan Management data dari API dengan fitur <strong>Add</strong>,
                  <strong>Edit</strong>, <strong>Delete</strong>.
                </p>
                <router-link class="btn btn-success" to="/list"
                  >Go ahead <b-icon-arrow-right></b-icon-arrow-right
                ></router-link>
              </div>
            </div>
          </div>
          <div class="col-md">
            <img
              src="../assets/images/home2.png"
              alt="Image Hero"
              width="130%"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Android -->
    <div class="d-sm-block d-md-none">
      <div class="container">
        <div class="row px-3 py-6">
          <div class="col-md mb-3">
            <img
              src="../assets/images/home.png"
              alt="Image Hero"
              width="95%"
            />
          </div>
          <div class="col-md">
            <div class="d-flex h-100">
              <div class="justify-content-center align-self-center">
                <h2><strong>Management Data</strong></h2>
                <p>
                  Memanegement data dari API dengan fitur <strong>Add</strong>,
                  <strong>Edit</strong>, <strong>Delete</strong>
                </p>
                <router-link class="btn btn-success" to="/list"
                  >Go ahead <b-icon-arrow-right></b-icon-arrow-right
                ></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeContent",
};
</script>

<style>
</style>