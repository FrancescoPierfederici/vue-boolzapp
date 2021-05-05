const app = new Vue({
    el: "#app",
    data: {
        usersList: globalUsersList,
        activeChat : {},
        
    },
    methods:{
       onUserClick(user){
            this.activeChat = user;
        }
    },
    mounted(){
        this.activeChat = this.usersList[0];
    }
})