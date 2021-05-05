const globalUsersList = [
    {
        name: 'Gandalf',
        avatar: '_1',
        visible: true,
        messages: [
            {
                date: '13/08/2020 15:30:55',
                text: 'Hey Gandalf...',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                text: ' Ci sono dei segni, mi sembra elfico, non riesco a leggerlo.',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                text: 'Pochi ci riescono, la lingua è quella di Mordor e non la pronuncerò qui.',
                status: 'received'
            }
        ],
    },
    {
        name: 'Aragorn',
        avatar: '_2',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                text: 'Sei stato spesso a Gran Burrone?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                text: 'Eccome! Vi abitavo, un tempo, e vi ritorno ancora quando posso. Lì è il mio cuore: ma il mio destino non è di dimorare in pace, nemmeno nella bella casa di Elrond',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                text: 'Caspita...',
                status: 'sent'
            }
        ],
    }, {
        name: 'Legolas',
        avatar: '_3',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                text: 'Moriresti prima di vibrare il colpo',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                text: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                text: 'Ah scusa!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Samvise Gamgee ',
        avatar: '_4',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                text: 'Come fai a raccogliere le fila di una vecchia vita? Come fai ad andare avanti, quando nel tuo cuore cominci a capire che non si torna indietro? Ci sono cose che il tempo non può accomodare, ferite talmente profonde che lasciano un segno.',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Padron Frodo? Sei tu?',
                status: 'received'
            }
        ],
    },
    {
        name: 'Nazgul',
        avatar: '_5',
        visible: true,
        messages: [
            {
                date: '13/08/2020 15:30:55',
                text: 'Non puoi nasconderti... io ti vedo! Non cè vita nel vuoto... solo morte! ',
                status: 'received'
            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Adesso ti blocco...',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                text: 'Ti troverò e ti ucciderò',
                status: 'received'
            }
        ],
    },
    {
        name: 'Boromir',
        avatar: '_6',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                text: 'Boromir mi hai chiamato..?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                text: 'Reggi il destino di tutti noi piccoletto... se questa è la volontà del consiglio... allora Gondor la seguirà!',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                text: 'Eh già...',
                status: 'sent'
            }
        ],
    }, {
        name: 'Gimli',
        avatar: '_7',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                text: 'Certezza di morte.. scarse possibilità di successo..cosa stiamo aspettando?',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                text: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                text: 'Ah scusa!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Pipino',
        avatar: '_8',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova birreria alla contea?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Trovo che tu abbia coraggio, di un tipo diverso però',
                status: 'received'
            }
        ],
    },
    {
        name: 'Merry',
        avatar: '_9',
        visible: true,
        messages: [
            {
                date: '13/08/2020 15:30:55',
                text: 'Sei pronto per il viaggio?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Heyy Merry...',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                text: 'Hai dell erbapipa?? ',
                status: 'received'
            }
        ],
    },
    {
        name: 'Arwen',
        avatar: '_10',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                text: 'Ciao come stai Arwen?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                text: 'La luce della Stella del Vespro non aumenta né si affievolisce. È mia, da donare a colui che io amo. Come il mio cuore!',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                text: 'Ok!',
                status: 'sent'
            }
        ],
    }, {
        name: 'Gollum',
        avatar: '_11',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                text: 'Il mio tesssssssssssssssssorooooooo!!!!!!!!',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                text: 'Eilà Gollum come te la passi?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                text: 'Che bello stagno, per fare un bagno, polposo ssììì! E se mi riesce, io cerco un pesce, polposo ssììì!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Faramir',
        avatar: '_12',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                text: 'Salve Faramir, mi ha cercato?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                text: '  Preparatevi a partire! L Anello andrà a Gondor',
                status: 'received'
            }
        ],
    },
    
];