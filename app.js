var app = new Vue({
  el: "#root",
  data: {
      showingAddModal: false,
      showingEditModal: false,
      showingDeleteModal: false,
      errorMessage: "some errorMessage",
      successMessage: "some successMessage",

  },

  mounted: function(){
    console.log("mounted");
    console.error();
  },

  methods: {

  }
})
