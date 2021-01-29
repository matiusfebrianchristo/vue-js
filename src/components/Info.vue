<template>
  <div class="container">
    <div class="d-none d-md-block">
      <div class="container">
        <div class="row py-5 " >
          <!-- PC -->
          <div class="col-md" v-scrollanimation>
            <img
              src="../assets/images/info.png"
              alt="Image Hero"
              width="100%"
            />
          </div>
          <div class="col-md" v-scrollanimation>
            <div class="d-flex h-100">
              <div class="justify-content-center align-self-center">
                <h2><strong>API Framework</strong></h2>
                <p>
                  Data yang digunakan dalam website ini semua diambil dari
                  <strong>API</strong>. Dimana API tersebut menjadi perantara
                  antara fronted dan backend
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Android -->
    <div class="d-sm-block d-md-none">
      <div class="container">
        <div class="row px-3 py-5" v-scrollanimation>
          <div class="col-md mb-3">
            <img
              src="../assets/images/info.png"
              alt="Image Hero"
              width="95%"
            />
          </div>
          <div class="col-md">
            <div class="d-flex h-100">
              <div class="justify-content-center align-self-center">
                <h2><strong>API Framework</strong></h2>
                <p>
                  Data yang digunakan dalam website ini semua diambil dari
                  <strong>API</strong>. Dimana API tersebut menjadi perantara
                  antara fronted dan backend
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- info 2 -->
    <div class="d-none d-md-block">
      <div class="container">
        <div class="row py-5" v-scrollanimation>
          <!-- PC -->
          
          <div class="col-md">
            <div class="d-flex h-100">
              <div class="justify-content-center align-self-center">
                <h2><strong>Vue js Framework</strong></h2>
                <p>
                  <strong>Vue js</strong> adalah framework dari javascript dan merupakan komponen utama penyusun Website ini.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md">
            <img
              src="../assets/images/info-2.png"
              alt="Image Hero"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Android -->
    <div class="d-sm-block d-md-none">
      <div class="container">
        <div class="row px-3 py-5" v-scrollanimation>
          <div class="col-md mb-3">
            <img
              src="../assets/images/info-2.png"
              alt="Image Hero"
              width="95%"
            />
          </div>
          <div class="col-md">
            <div class="d-flex h-100">
              <div class="justify-content-center align-self-center">
                <h2><strong>Vue js Framework</strong></h2>
                <p>
                  <strong>Vue js</strong> adalah framework dari javascript dan merupakan komponen utama penyusun Website ini.
                </p>
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
  name: "Info",
};
</script>

<style>
</style>