import axios from "axios";

export default {
    // User routes
    // TODO: increment 2 users feedback given/receive
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

    updateUser: function (id, obj) {
        axios
            .put(`/api/users/${id}`, obj)
            .then((response) => {
                console.log(response);
                return response;
            })
            .catch((error) => {
                console.log(error);
            });
    },

    deleteUser: function (id) {
        axios
            .delete(`/api/users/${id}`)
            .then((response) => {
                console.log(response);
                return response;
            })
            .catch((error) => {
                console.log(error);
            });
    },

    incrementFeedback: function(giverId, receiverId) {
        axios
            .put("/api/users/incrementFeedback", {
                giverId: giverId,
                receiverId: receiverId
            })
            .then((response) => {
                return response;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    
    // Project routes

    getAllProjects: function () {
        return axios.get("/api/projects/all");
    },

    getProjectsByUserId: function (id) {
        return axios.get(`/api/projects/byUser/${id}`);
    },

    getProjectById: function (id) {
        return axios.get(`/api/projects/${id}`);
    },

    uploadToS3: function (formData) {
        axios
            .post("/api/projects/audio-upload", formData)
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

    updateProject: function (id, obj) {
        axios
            .put(`/api/projects/${id}`, obj)
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
    // TODO: deleteComment
    getAllCommentsByAuthor: function (id) {
        return axios.get(`/api/comments/byAuthor/${id}`);
    },

    getAllCommentsByProject: function (id) {
        return axios.get(`/api/comments/byProject/${id}`);
    },

    getCommentById: function (id) {
        return axios.get(`/api/comments/${id}`);
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

    updateComment: function (id, obj) {
        axios
            .put(`/api/comments/${id}`, obj)
            .then((response) => {
                console.log(response);
                return response;
            })
            .catch((error) => {
                console.log(error);
            });
    },

    deleteComment: function (id) {
        axios
            .delete(`/api/comments/${id}`)
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