<template>
  <div>
    <Navbar />
    <div class="book-content">
      <div class="container">
        <div class="row">
          <div class="col">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="/"> Home </router-link>
                </li>
                <li class="breadcrumb-item">
                  <router-link to="/list"> List </router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Author</li>
                <div class="ml-auto">
                  <span @click="$router.go(-1)"
                    ><b-icon-arrow-left></b-icon-arrow-left
                  ></span>
                </div>
              </ol>
            </nav>
          </div>
        </div>

        <!-- Body -->
        <div class="row">
          <div class="col-md-4">
            <div class="mb-3">
              <label for="title"><strong>Author</strong></label>
              <input
                type="text"
                class="form-control"
                id="title"
                v-model="authorValue"
              />
            </div>
            <button
              type="submit"
              @click.prevent="addData"
              class="btn btn-primary"
              v-if="edit === false"
            >
              <b-icon-plus></b-icon-plus>Add
            </button>
            <div>
              <button
                type="submit"
                @click.prevent="saveData(datasetid)"
                class="btn btn-primary"
                v-if="edit === true"
              >
                Save
              </button>
            </div>
          </div>
        </div>

        <!-- card body -->
        <h2 class="mt-5">Data ( {{ authorLength }} )</h2>
        <hr />
        <div class="row mt-4 mb-5" v-if="author.length >= 1">
          <div class="col-md-3 mt-4" v-for="data in author" :key="data.id">
            <div class="card shadow card-author text-center">
              <div class="card-body">
                <h5 class="card-title mt-5 mb-5">{{ data.author }}</h5>
              
                <a href="" class="card-link" @click.prevent="editData(data.id)"
                  ><b-icon-pencil-square></b-icon-pencil-square>Edit</a
                >
                <a
                  href=""
                  class="card-link"
                  @click.prevent="deleteData(data.id)"
                  ><b-icon-trash></b-icon-trash>Delete</a
                >
              </div>
            </div>
          </div>
        </div>

        <div class="text-center" v-else>
          <div class="empty-data">
            <h5>No Data</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default {
  name: "Author",
  components: {
    Navbar,
  },
  data() {
    return {
      authorLength: 0,
      datasetid: 0,
      authorValue: '',
      author: {},
      edit: false,
    };
  },
  methods: {
    setData(data, i) {
      this.author = data;
      this.authorLength = i;
    },

    addData() {
      if (this.authorValue != "" ) {
        axios
          .post("https://frozen-shore-65267.herokuapp.com/author/", {
            author: this.authorValue
          })
          .then(() => location.reload())
          .catch((err) => console.log(err));
      } else {
        this.$toast.error("Lengkapi Data!!", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
    editData(id) {
      this.edit = true;
      this.datasetid = id;
      axios
        .get(`https://frozen-shore-65267.herokuapp.com/author/${id}/`)
        .then((res) => {
          this.authorValue = res.data.author;
        })
        .catch((err) => console.log(err));
    },
    saveData(id) {
      if (this.authorValue != 0 ) {
        axios
          .patch(`https://frozen-shore-65267.herokuapp.com/author/${id}/`, {
            author: this.authorValue
          })
          .then(() => {
            this.edit = false;

            location.reload();
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error("Lengkapi Data!!", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
    deleteData(id) {
      axios
        .delete(`https://frozen-shore-65267.herokuapp.com/author/${id}/`)
        .then(() => location.reload())
        .catch((err) => console.log(err));
    },
  },
  mounted() {
      axios
        .get("https://frozen-shore-65267.herokuapp.com/author/")
        .then((res) => this.setData(res.data, res.data.length))
        .catch((err) => console.log(err))
  },
};
</script>

<style>
</style>