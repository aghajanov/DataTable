<template>
  <div class="col-md-12">
    
    <div class="table-responsive">
      <table class="table table-striped table-bordered" style="width:100%">
          <thead width="400px">
              <tr>
                  <th scope="col" >Name </th>
                  <th scope="col" >Id</th>
                  <th scope="col">VIP</th>
                  <th scope="col">Attending </th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(user, index) in (sortedActivity, filteredList)" :key="index" >

                <td @click="addUser(user.name)">{{user.name}}</td>
                <td @click="addUser(user.id)">{{user.id}}</td>
                <td @click="addUser(user.vip)">{{user.vip}}</td>
                <td @click="addUser(user.attending)">{{user.attending}}</td>
            
              </tr>
          </tbody>
      </table>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
 import axios from 'axios';
 import Vue from 'vue'
 import VueRouter from 'vue-router'
// import UserVue from '../views/User.vue';


 Vue.use(VueRouter)

export default {
  data: () => ({
    users: [],
    pageSize: 30,
    currentPage:5
  }),

  methods:{
    addUser(id) {
     this.$router.push({name:'new', params:{user:id}});
  }

  },

  computed: {
    sortedActivity:function() {
      return this.users.sort((a,b) => {
        let modifier = 1;
        if(this.currentSortDir === 'desc') modifier = -1;
        if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      }).filter((row, index) => {
        let start = (this.currentPage-1)*this.pageSize;
        let end = this.currentPage*this.pageSize;
        if(index >= start && index < end) return true;
      });
    },

    filteredList () {
      return this.users.filter((data) => {
        let id = data.id
        let name = data.name
        let vip = data.vip
        let attending = data.attending
        return name || id || vip || attending;
      }).filter((row, index) => {
        let start = (this.currentPage-1)*this.pageSize;
        let end = this.currentPage*this.pageSize;
        if(index >= start && index < end) return true;
      });
    }
  },

  created () {
    axios.get('https://boiling-reaches-93648.herokuapp.com/week-3/party')
      .then(response => {
        this.users = response.data
      })
  },

}
</script>

<style>
th {
  cursor:pointer;
  white-space: nowrap;
}

tr {
  white-space: nowrap;
}

</style>
