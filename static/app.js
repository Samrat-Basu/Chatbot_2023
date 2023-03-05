class Chatbox
{
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatBox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button')
        }
        this.state = false;
        this.messages = [];
        document.getElementById('leave_div').style.display = "none";

    }

    display() {
        const {openButton, chatBox, sendButton} = this.args;

        openButton.addEventListener('click', () => this.toggleState(chatBox))

        sendButton.addEventListener('click', () => this.onSendButton(chatBox))

        const node = chatBox.querySelector('input');
        node.addEventListener("keyup", ({key}) => {
            if (key === "Enter") {
                this.onSendButton(chatBox)
            }
        })
    }

    toggleState(chatbox) {
        this.state = !this.state;

        // show or hides the box
        if(this.state) {
            chatbox.classList.add('chatbox--active')
        } else {
            chatbox.classList.remove('chatbox--active')
        }
    }

    onSendButton(chatbox) {
        var textField = chatbox.querySelector('input');
        let text1 = textField.value
        if (text1 === "") {
            return;
        }
        if(text1.includes('leave') || text1.includes(('leaves')))
        {

            let msg1 = {name: "User", message: text1}
            //this.messages.push(msg1);
            //textField.value = ''
            this.updateChatText(chatbox)


            console.log('leave');
            // document.getElementById('leave_div').style.visibility ='visible';
            // document.getElementById('leave_div').style.display = "block";

             let msg2 = {name: "Sam", message: "Did you mean?"};
            // this.messages.push(msg2)
             //this.updateChatText(chatbox)
              document.getElementById("chat_msg").innerHTML+="<table><tr><td><h5>Did you mean?</h5><br/></td></tr><tr><td><button style='background-color: blueviolet;color:white'>Apply Leave</button></td></tr><tr><td><button style='background-color: blueviolet;color:white'>Apply Leave</button></td></tr><tr><td><button style='background-color: blueviolet;color:white'>Apply Leave</button></td></tr><tr><td><button style='background-color: blueviolet;color:white'>Apply Leave</button></td></tr></table>";
             // document.getElementById("chat_msg").appendChild(document.getElementById("leave_div"));
             // document.getElementById('leave_div').style.display = "block";

             textField.value = ''

        }
        else {
            document.getElementById('chat_msg').innerHTML="";
            let msg1 = {name: "User", message: text1}
            this.messages.push(msg1);

            fetch('http://127.0.0.1:5000/predict', {
                method: 'POST',
                body: JSON.stringify({message: text1}),
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(r => r.json())
                .then(r => {
                    let msg2 = {name: "Sam", message: r.answer};
                    this.messages.push(msg2);
                    this.updateChatText(chatbox)
                    textField.value = ''

                }).catch((error) => {
                console.error('Error:', error);
                this.updateChatText(chatbox)
                textField.value = ''
            });
        }
    }

    updateChatText(chatbox) {
        var html = '';
        this.messages.slice().reverse().forEach(function(item, index) {
            if (item.name === "Sam")
            {
                html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
            }
            else
            {
                html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
            }
          });

        const chatmessage = chatbox.querySelector('.chatbox__messages');
        chatmessage.innerHTML = html;
    }
}


const chatbox = new Chatbox();
chatbox.display();