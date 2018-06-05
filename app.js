var app = new Vue({
  el: "#root",
  data: {
      showingAddModal: false,
      showingEditModal: false,
      showingDeleteModal: false,
      errorMessage: "",
      successMessage: "",
      users: []
      newUser: {username: "", email: "", mobile: ""}
  },

  mounted: function(){
    console.log("mounted");
    this.getAllUsers();
  },

  methods: {
    getAllUsers: function(){
      axios.get("http://localhost/vue-mini-mysql/api.php?action=read")
      .then(function(response){
        //console.log(response);
        if(response.data.error){
          app.errorMessage = response.data.message;
        } else{
          app.users = response.data.users;
        }
      });
    }
  }
})
