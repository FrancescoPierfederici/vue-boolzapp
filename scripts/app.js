const app = new Vue({
    el: "#app",
    data: {
        usersList: globalUsersList,
        activeChat: {},
        searchText: "",
        newMsgText: "",
        showSendIcon: false,
        tempFilteredData: [],

    },
    //JS RIPRESO DALLA LEZIONE(da riguardare)
    computed: {
        selectedUserLastAccess() {

        },
        filteredUserList() {
            return this.usersList.filter((element) => {
                return element.name.toLowerCase().startsWith(this.searchText)
            })

        },
    },
    methods: {
        onUserClick(user) {
            this.activeChat = user;
        },
        //JS RIPRESO DALLA LEZIONE(da riguardare)
        formatTime(stringDate) {
            return moment(stringDate, "DD/MM/YYYY HH:mm:ss").format("HH:mm")

        },
        sendMessage() {
            const newMessage = {
                date: moment().format("DD/MM/YYYY  HH:mm:ss"),
                text: this.newMsgText,
                status: 'sent'
            };
            const currentUser = this.activeChat;
            currentUser.messages.push(newMessage);
            this.newMsgText = "";
            this.scrollToBottom();

            setTimeout(() => {
                const newRespMsg = {
                    date: moment().format("DD/MM/YYYY  HH:mm:ss"),
                    text: "Ok da " + currentUser.name,
                    status: 'received'
                };
                currentUser.messages.push(newRespMsg);
                this.scrollToBottom();
            }, 1000);
        },
        //COSA FA QUESTA FUNZIONE? 
        scrollToBottom() {
            this.$nextTick(() => {
                const htmlElement = this.$refs.chatContainerToScroll
                htmlElement.scrollTop = htmlElement.crollHeight
            })


        },
        onInput() {
            console.log("input");
        },
        onMesgClick(message, event) {
            this.$set(message, "showPopup", true);
            event.currentTarget.focus()
        },
        onFocusLost(message) {
            this.$set(message, "showPopup", false);
        },
        onPopupClick(message) {
            message.showPopup = false;
        },
        onDeleteClick(msgIndex) {
            this.activeChat.messages.splice(msgIndex, 1)
        },
        getLastMsgString(messages) {
            if (messages.length === 0) {
                return "Nessun messaggio disponibile";
            }
            const lastMsg = messages[messages.length - 1];
            const formattedDate = this.formatTime(lastMsg.date);
            let trimmedMsg = lastMsg.text.slice(0, 20) + "...";

            if (lastMsg.text.length > 20) {
                trimmedMsg += "...";
            }




            return trimmedMsg + "-" + formattedDate;
        }
    },
    mounted() {
        //Autoselect the first user
        this.activeChat = this.usersList[0];
        // moment().format("DD/MM/YYYY HH:mm:ss")
    },
})