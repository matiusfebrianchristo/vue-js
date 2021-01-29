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
                <li class="breadcrumb-item active" aria-current="page">Book</li>
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
              <label for="title"><strong>Title</strong></label>
              <input
                type="text"
                class="form-control"
                id="title"
                v-model="titleValue"
              />
            </div>
            <div class="mb-3">
              <label for="title"><strong>Author</strong></label>
              <select
                class="form-select form-select-sm bg-light"
                aria-label=".form-select-sm example"
                id="author"
                v-model="authorValue"
              >
                <option value="0" selected>Select Author</option>
                <option
                  v-for="(author, index) in authors"
                  :value="index + 1"
                  :key="author.id"
                >
                  {{ author.author }}
                </option>
              </select>
            </div>
            <div class="mb-3">
              <label for="title"><strong>Category</strong></label>
              <select
                class="form-select form-select-sm bg-light"
                aria-label=".form-select-sm example"
                id="author"
                v-model="categoryValue"
              >
                <option value="0" selected>Select Category</option>
                <option
                  v-for="(category, index) in categorys"
                  :value="index + 1"
                  :key="category.id"
                >
                  {{ category.category }}
                </option>
              </select>
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
        <h2 class="mt-5">Data ( {{ bookLength }} )</h2>
        <hr />
        <div class="row mt-4 mb-5" v-if="book.length >= 1">
          <div class="col-md-3 mt-4" v-for="data in book" :key="data.id">
            <div class="card shadow">
              <div class="card-body">
                <h5 class="card-title">{{ data.title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ data.author }}</h6>
                <p class="card-text">
                  {{ data.category }}
                </p>
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
  name: "Book",
  components: {
    Navbar,
  },
  data() {
    return {
      book: {},
      bookLength: 0,
      datasetid: 0,
      titleValue: "",
      authorValue: 0,
      categoryValue: 0,
      authors: {},
      categorys: {},
      edit: false,
    };
  },
  methods: {
    setData(data, i) {
      this.book = data;
      this.bookLength = i;
    },
    setAuthor(data) {
      this.authors = data;
    },
    setCategory(data) {
      this.categorys = data;
    },
    addData() {
      if (
        this.titleValue != "" &&
        this.authorValue != 0 &&
        this.categoryValue != 0
      ) {
        axios
          .post("https://frozen-shore-65267.herokuapp.com/book/", {
            title: this.titleValue,
            author: this.authorValue,
            category: this.categoryValue,
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
        .get(`https://frozen-shore-65267.herokuapp.com/book/${id}/`)
        .then((res) => {
          this.titleValue = res.data.title;
          this.authorValue = res.data.author;
          this.categoryValue = res.data.category;
        })
        .catch((err) => console.log(err));
    },
    saveData(id) {
      if (
        this.titleValue != "" &&
        this.authorValue != 0 &&
        this.categoryValue != 0
      ) {
        axios
          .patch(`https://frozen-shore-65267.herokuapp.com/book/${id}/`, {
            title: this.titleValue,
            author: this.authorValue,
            category: this.categoryValue,
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
        .delete(`https://frozen-shore-65267.herokuapp.com/book/${id}/`)
        .then(() => location.reload())
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    axios
      .get("https://frozen-shore-65267.herokuapp.com/book/")
      .then((res) => this.setData(res.data, res.data.length))
      .catch((err) => console.log(err)),
      axios
        .get("https://frozen-shore-65267.herokuapp.com/author/")
        .then((res) => this.setAuthor(res.data))
        .catch((err) => console.log(err)),
      axios
        .get("https://frozen-shore-65267.herokuapp.com/category/")
        .then((res) => this.setCategory(res.data))
        .catch((err) => console.log(err));
  },
};
</script>

<style>
</style>