import axios from "axios";

export default {
    // User routes
    // TODO: add updateUser, deleteUser
    getAllUsers: function () {
        return axios.get("/api/users/all");
    },

    getUserById: function (id) {
        return axios.get(`/api/users/${id}`);
    },

    createUser: function (obj) {
        axios
            .post("/api/users", obj)
            .then((response) => {
                console.log(response);
                return response;
            })
            .catch((error) => {
                console.log(error);
            });
    },

    // Project routes
    // TODO: add updateProject

    getAllProjects: function () {
        return axios.get("/api/projects/all");
    },

    getProjectsByUserId: function (id) {
        return axios.get(`/api/projects/byUser/${id}`);
    },

    getProjectById: function (id) {
        return axios.get(`/api/projects/${id}`);
    },

    uploadToS3: function (file) {
        axios
            .post("/api/audio-upload", {
                audio: file
            })
            .then((response) => {
                console.log(response);
                return response;
            })
            .catch((error) => {
                console.log(error);
            });
    },

    createProject: function (obj) {
        axios
            .post("/api/projects", obj)
            .then((response) => {
                console.log(response);
                return response;
            })
            .catch((error) => {
                console.log(error);
            });
    },

    deleteProject: function (id) {
        axios
            .delete(`/api/projects/${id}`)
            .then((response) => {
                console.log(response);
                return response;
            })
            .catch((error) => {
                console.log(error);
            });
    },

    // Comment routes
    // TODO: add getCommentById, updateComment, deleteComment
    getAllCommentsByAuthor: function (id) {
        return axios.get(`/api/comments/byAuthor/${id}`);
    },

    getAllCommentsByProject: function (id) {
        return axios.get(`/api/comments/byProject/${id}`);
    },

    createComment: function (obj) {
        axios
            .post("/api/comments", obj)
            .then((response) => {
                console.log(response);
                return response;
            })
            .catch((error) => {
                console.log(error);
            });
    },

    // Loop routes (for project review)
    getProjectForReview: function() {
        return axios.get("/api/loop");
    }
};