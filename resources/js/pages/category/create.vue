<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div
            class="
              card-header
              d-flex
              justify-content-between
              align-items-center
            "
          >
            <h5>Create Category</h5>
            <a href="#" class="btn btn-primary">Category List</a>
          </div>

          <div class="card-body">
            <div class="row">             
              <div class="col-6 offset-3">
                <form @submit.prevent="createCategory">
                  <div class="form-group">
                    <label for="name">Category Name</label>
                    <!-- <input type="text" v-model="categoryForm.name" name="name" class="form-control" placeholder="Enter Category Name" />
                    <div v-if="categoryForm.errors.has('name')" v-html="categoryForm.errors.get('name')" /> -->

                    <input v-model="categoryForm.name" type="text" name="name" class="form-control" :class="{ 'is-invalid': categoryForm.errors.has('name') }">
                        <has-error :form="categoryForm" field="name"></has-error>
                  </div>

                  <div class="form-group">
                      <button type="submit" class="btn btn-success">Create Category</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from 'vform'

// Vue.component(HasError.name, HasError)
// Vue.component(AlertError.name, AlertError)

export default {
  data(){
      return{
        categoryForm: new Form({
        name: '',
      }),

      }
  },

  methods: {
      createCategory(){

        //data send into backend with axios
        // axios.post('/api/category', {name: this.categoryName}) .then(response => {
        //     console.log(response);
        // });
        
        this.categoryForm.post('/api/category').then(({data}) => {
          this.categoryForm.name= '';

          this.$toast.success({
            title:'Success',
            message:'Category created successfully!'
})
          })

      }
  }
};
</script>
