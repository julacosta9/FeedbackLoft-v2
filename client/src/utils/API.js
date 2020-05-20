import axios from "axios";

export default {
    getAllUsers: function () {
        return axios.get("/api/users/all")
    },

    getAllProjects: function () {
        return axios.get("/api/projects/all");
    },

    getAllComments: function () {
        return axios.get("/api/comments/all");
    },

    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },

    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },

    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    },
};