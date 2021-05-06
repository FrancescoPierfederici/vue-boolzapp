const app = new Vue({
    el: "#app",
    data: {
        usersList: globalUsersList,
        activeChat : {},
        searchText:"",
        newMsgText:"",
        showSendIcon: false,
        tempFilteredData: [],
        
    },
    //JS RIPRESO DALLA LEZIONE
    computed: {
        selectedUserLastAccess(){

        },
        filteredUserList(){
            return this.usersList.filter((element) => {
                return element.name.toLowerCase().startsWith(this.searchText)
            })
       
        },
    },
    methods:{
       onUserClick(user){
            this.activeChat = user;
        },
        //JS RIPRESO DALLA LEZIONE
        formatTime(stringDate){
            return moment(stringDate, "DD/MM/YYYY HH:mm:ss").format("HH:mm")

        },
        sendMessage(){
            const newMessage= {
                date:moment().format("DD/MM/YYYY  HH:mm:ss"),
                text: this.newMsgText,
                status: 'sent'
            };
            const currentUser = this.activeChat;
            currentUser.messages.push(newMessage)
            this.newMsgText="";
            this.scrollToBottom();

            setTimeout( ()=>{
                const newRespMsg = {
                date:moment().format("DD/MM/YYYY  HH:mm:ss"),
                text: "Ok",
                status: 'received'
                };
                currentUser.activeChat.messages.push(newRespMsg);
                this.scrollToBottom();
            },5000);
        },
        //scrollToBottom()
        onInput(){
            console.log("input");
        }
       
    },
    mounted(){
        //Autoselect the first user
        this.activeChat = this.usersList[0];
        // moment().format("DD/MM/YYYY HH:mm:ss")
    },
})