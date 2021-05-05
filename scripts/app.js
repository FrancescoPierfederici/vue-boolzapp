const app = new Vue({
    el: "#app",
    data: {
        usersList: globalUsersList,
        activeChat : {},
        
    },
    methods:{
       onUserClick(user){
            this.activeChat = user;
        },
        formatTime(stringDate){
            return moment(stringDate, "DD/MM/YYYY HH:mm:ss").format("HH:mm")

        }
    },
    mounted(){
        this.activeChat = this.usersList[0];
        // moment().format("DD/MM/YYYY HH:mm:ss")
    },
})