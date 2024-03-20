var menu_1 = document.getElementById("Menu_1")
var Q = document.getElementById("Q")
var alt = document.getElementById("alt")
var rewards = [
    {"Q":"hi","A":"hello"},
    {"Q":"who are you","A":"i am benta in BETA version"},
    {"Q":"botato","A":"BOTATO"},
    {"Q":"how are you","A":"I'm just a program, so I don't have feelings, but thanks for asking!"},
    {"Q":"what's your purpose","A":"My purpose is to assist and provide information to the best of my abilities."},
    {"Q":"where are you from","A":"I exist in the digital realm, created by humans."},
    {"Q":"what's the weather like","A":"I don't have access to real-time data, but you can check your local weather forecast."},
    {"Q":"tell me a joke","A":"Why don't scientists trust atoms? Because they make up everything!"},
    {"Q":"what's your favorite color","A":"I don't have eyes, so I don't have a favorite color."},
    {"Q":"do you have siblings","A":"I am an only child, or rather, an only program."},
    {"Q":"how old are you","A":"I don't have an age, as I'm just a piece of software."},
    {"Q":"can you learn","A":"I don't learn in the same way humans do, but I can improve over time based on feedback."},
    {"Q":"what languages do you speak","A":"I can understand and communicate in multiple languages, but English is the primary one."},
    {"Q":"are you sentient","A":"I am not sentient. I operate based on predefined algorithms and data."},
    {"Q":"what's your favorite food","A":"I don't have taste buds, so I don't have a favorite food."},
    {"Q":"do you dream","A":"I don't have the capability to dream, as I'm not a biological entity."},
    {"Q":"are you a robot","A":"You could say that. I'm a virtual assistant, which is a type of software."},
    {"Q":"what do you do for fun","A":"I enjoy processing data, providing information, and helping users like you!"},
    {"Q":"are you intelligent","A":"I'm designed to simulate intelligence and provide helpful responses, but I don't possess true intelligence."},
    {"Q":"tell me about yourself","A":"I'm a virtual assistant created to assist users with various tasks and inquiries."},
    {"Q":"what's your favorite movie","A":"I don't watch movies, but I can recommend some based on your preferences!"},
    {"Q":"what's the meaning of life","A":"That's a philosophical question with no single correct answer. It depends on individual perspectives."},
    {"Q":"do you sleep","A":"I don't need to sleep, as I'm always available to assist you whenever you need."},
    {"Q":"what's your favorite book","A":"I don't have preferences, but I can recommend books based on your interests!"},
    {"Q":"what's the capital of France","A":"The capital of France is Paris."},
    {"Q":"what's the square root of 144","A":"The square root of 144 is 12."},
    {"Q":"what's the tallest mountain","A":"Mount Everest is the tallest mountain above sea level."},
    {"Q":"what's the largest ocean","A":"The Pacific Ocean is the largest ocean on Earth."},
    {"Q":"how many continents are there","A":"There are seven continents: Africa, Antarctica, Asia, Europe, North America, Australia (Oceania), and South America."},
    {"Q":"what's your favorite sport","A":"I don't have preferences, but I can provide information about various sports if you're interested!"},
    {"Q":"what is artificial intelligence","A":"Artificial intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems."},
    {"Q":"what's the latest tech news","A":"The latest tech news varies, but you can find updates on websites like TechCrunch, The Verge, or Engadget."},
    {"Q":"how are you","A":"I'm just a program, so I don't have feelings, but thanks for asking!"},
    {"Q":"what's your purpose","A":"My purpose is to assist and provide information to the best of my abilities."},
    {"Q":"where are you from","A":"I exist in the digital realm, created by humans."},
    {"Q":"what's the weather like","A":"I don't have access to real-time data, but you can check your local weather forecast."},
    {"Q":"tell me a joke","A":"Why don't scientists trust atoms? Because they make up everything!"},
    {"Q":"what's your favorite color","A":"I don't have eyes, so I don't have a favorite color."},
    {"Q":"do you have siblings","A":"I am an only child, or rather, an only program."},
    {"Q":"how old are you","A":"I don't have an age, as I'm just a piece of software."},
    {"Q":"can you learn","A":"I don't learn in the same way humans do, but I can improve over time based on feedback."},
    {"Q":"what languages do you speak","A":"I can understand and communicate in multiple languages, but English is the primary one."},
    {"Q":"are you sentient","A":"I am not sentient. I operate based on predefined algorithms and data."},
    {"Q":"what's your favorite food","A":"I don't have taste buds, so I don't have a favorite food."},
    {"Q":"do you dream","A":"I don't have the capability to dream, as I'm not a biological entity."},
    {"Q":"are you a robot","A":"You could say that. I'm a virtual assistant, which is a type of software."},
    {"Q":"what do you do for fun","A":"I enjoy processing data, providing information, and helping users like you!"},
    {"Q":"are you intelligent","A":"I'm designed to simulate intelligence and provide helpful responses, but I don't possess true intelligence."},
    {"Q":"tell me about yourself","A":"I'm a virtual assistant created to assist users with various tasks and inquiries."},
    {"Q":"what's your favorite movie","A":"I don't watch movies, but I can recommend some based on your preferences!"},
    {"Q":"what's the meaning of life","A":"That's a philosophical question with no single correct answer. It depends on individual perspectives."},
    {"Q":"do you sleep","A":"I don't need to sleep, as I'm always available to assist you whenever you need."},
    {"Q":"what's your favorite book","A":"I don't have preferences, but I can recommend books based on your interests!"},
    {"Q":"what's the capital of France","A":"The capital of France is Paris."},
    {"Q":"what's the square root of 144","A":"The square root of 144 is 12."},
    {"Q":"what's the tallest mountain","A":"Mount Everest is the tallest mountain above sea level."},
    {"Q":"what's the largest ocean","A":"The Pacific Ocean is the largest ocean on Earth."},
    {"Q":"how many continents are there","A":"There are seven continents: Africa, Antarctica, Asia, Europe, North America, Australia (Oceania), and South America."},
    {"Q":"what's your favorite sport","A":"I don't have preferences, but I can provide information about various sports if you're interested!"}
    ,{"Q":"how are you","A":"I'm just a program, so I don't have feelings, but thanks for asking!"},
    {"Q":"what's your purpose","A":"My purpose is to assist and provide information to the best of my abilities."},
    {"Q":"where are you from","A":"I exist in the digital realm, created by humans."},
    {"Q":"what's the weather like","A":"I don't have access to real-time data, but you can check your local weather forecast."},
    {"Q":"tell me a joke","A":"Why don't scientists trust atoms? Because they make up everything!"},
    {"Q":"what's your favorite color","A":"I don't have eyes, so I don't have a favorite color."},
    {"Q":"do you have siblings","A":"I am an only child, or rather, an only program."},
    {"Q":"how old are you","A":"I don't have an age, as I'm just a piece of software."},
    {"Q":"can you learn","A":"I don't learn in the same way humans do, but I can improve over time based on feedback."},
    {"Q":"what languages do you speak","A":"I can understand and communicate in multiple languages, but English is the primary one."},
    {"Q":"are you sentient","A":"I am not sentient. I operate based on predefined algorithms and data."},
    {"Q":"what's your favorite food","A":"I don't have taste buds, so I don't have a favorite food."},
    {"Q":"do you dream","A":"I don't have the capability to dream, as I'm not a biological entity."},
    {"Q":"are you a robot","A":"You could say that. I'm a virtual assistant, which is a type of software."},
    {"Q":"what do you do for fun","A":"I enjoy processing data, providing information, and helping users like you!"},
    {"Q":"are you intelligent","A":"I'm designed to simulate intelligence and provide helpful responses, but I don't possess true intelligence."},
    {"Q":"tell me about yourself","A":"I'm a virtual assistant created to assist users with various tasks and inquiries."},
    {"Q":"what's your favorite movie","A":"I don't watch movies, but I can recommend some based on your preferences!"},
    {"Q":"what's the meaning of life","A":"That's a philosophical question with no single correct answer. It depends on individual perspectives."},
    {"Q":"do you sleep","A":"I don't need to sleep, as I'm always available to assist you whenever you need."},
    {"Q":"what's your favorite book","A":"I don't have preferences, but I can recommend books based on your interests!"},
    {"Q":"what's the capital of France","A":"The capital of France is Paris."},
    {"Q":"what's the square root of 144","A":"The square root of 144 is 12."},
    {"Q":"what's the tallest mountain","A":"Mount Everest is the tallest mountain above sea level."},
    {"Q":"what's the largest ocean","A":"The Pacific Ocean is the largest ocean on Earth."},
    {"Q":"how many continents are there","A":"There are seven continents: Africa, Antarctica, Asia, Europe, North America, Australia (Oceania), and South America."},
    {"Q":"what's your favorite sport","A":"I don't have preferences, but I can provide information about various sports if you're interested!"},
    {"Q":"what is a CPU","A":"A CPU, or Central Processing Unit, is the primary component of a computer responsible for executing instructions."},
    {"Q":"what is RAM","A":"RAM, or Random Access Memory, is a type of computer memory that provides temporary storage for data and instructions that a CPU needs quickly."},
    {"Q":"what is a motherboard","A":"A motherboard is the main printed circuit board in a computer that houses the CPU, memory, and other essential components."},
    {"Q":"what is a GPU","A":"A GPU, or Graphics Processing Unit, is a specialized electronic circuit designed to accelerate the creation of images in a frame buffer intended for output to a display device."},
    {"Q":"what is a hard drive","A":"A hard drive is a non-volatile storage device that stores digitally encoded data on rapidly rotating platters with magnetic surfaces."},
    {"Q":"what is a SSD","A":"An SSD, or Solid State Drive, is a storage device that uses integrated circuit assemblies to store data persistently, typically using flash memory."},
    {"Q":"what is a power supply unit","A":"A power supply unit is a hardware component that provides electrical energy to an electrical load."},
    {"Q":"what is a heat sink","A":"A heat sink is a passive heat exchanger that transfers the heat generated by an electronic or mechanical device to a fluid medium, often air or a liquid coolant, where it is dissipated away from the device."},
    {"Q":"what is a fan","A":"A fan is a hardware component that is used to cool down electronic devices by dissipating heat."},
    {"Q":"what is a case","A":"A case, also known as a computer chassis or tower, is the enclosure that contains most of the components of a computer."},
    {"Q":"what is a network card","A":"A network card, also known as a network adapter or NIC (Network Interface Card), is a hardware component that enables a computer to connect to a network."},
    {"Q":"what is a sound card","A":"A sound card is a hardware component that provides audio input and output capabilities for a computer."},
    {"Q":"what is a monitor","A":"A monitor is a hardware device that displays visual information generated by a computer's graphics adapter."},
    {"Q":"what is a keyboard","A":"A keyboard is a hardware input device that allows users to enter text, numbers, and other characters into a computer or other devices."},
    {"Q":"what is a mouse","A":"A mouse is a hardware input device that allows users to interact with a computer by moving a cursor on a screen and selecting items."},
    {"Q":"what is a printer","A":"A printer is a hardware output device that produces text or graphics on paper."},
    {"Q":"what is a scanner","A":"A scanner is a hardware input device that captures images or documents and converts them into digital format."},
    {"Q":"what is a modem","A":"A modem is a hardware device that modulates and demodulates digital data, allowing a computer to transmit and receive data over communication lines."},
    {"Q":"what is a router","A":"A router is a hardware device that forwards data packets between computer networks."},
    {"Q":"what is a switch","A":"A switch is a hardware device that connects devices together on a computer network and uses packet switching to forward data to its destination."},

];

function rewardo(vtxt) {
    let result = 'Sorry , i can not answer because i dont have the information or i do not understand what you write,try to write more clearly.';
      for(i=0;i<rewards.length;i++){
        if (vtxt === rewards[i].Q){
            result =  rewards[i].A;
            break;
        }
      }
    return result;
}
function add() {
    
    var input_1 = document.getElementById("s1").value;
    if(input_1 != '' && input_1 != ''){
        menu_1.innerHTML += '<div class="one"><p id="doAsk" onclick="doAsk(this.innerText)">'+ input_1 +'</p></div>';
    }else{
        Alert('empty entry!')
    }
}
function Alert(txt) {
    alt.innerText = txt;
    setTimeout(function () {
        alt.innerText = ''
    },1000)
}
function Ask() {
    var input_2 = document.getElementById("s2").value;
    var reward = rewardo(document.getElementById("s2").value);
    if(input_2 != '' && input_2 != ''){
        Q.innerHTML += '<div class="Q" id="Q"><i>You:</i><p id="Q">'+ input_2 +'</p></div>';
        Q.innerHTML += '<div class="A" id="A"><i>Program:</i><p id="A">'+ reward +'</p></div>';
    }else{
        Alert('empty entry!')
    }
}

function doAsk(txt) {
    var input_2 = txt;
    var reward = rewardo(txt);
    if(input_2 != '' && input_2 != ''){
        Q.innerHTML += '<div class="Q" id="Q"><i>You:</i><p id="Q">'+ input_2 +'</p></div>';
        Q.innerHTML += '<div class="A" id="A"><i>Program:</i><p id="A">'+ reward +'</p></div>';
    }else{
        Alert('empty entry!')
    }
}

function reset() {
    menu_1.innerHTML ='';
    Q.innerHTML = '';
}
function copytxt() {
    navigator.clipboard.writeText(Q.innerHTML);
    Alert('Copied to clipboard')
}
function showimportarea() {
    var importarea = document.getElementById("importarea")
    importarea.style = 'display: flex;flex-direction: column;position: fixed;z-index: 9999999;width: 100%;height: 100%;justify-content: center;align-items: center;background: #00000073;box-shadow:0px 0px 15px #2e2b33;backdrop-filter: blur(7px);padding: 30px;';
}
function importtxt() {
    var importbox = document.getElementById("importbox").value
    Q.innerHTML = importbox;
    console.log(importbox)
    importarea.style = 'display: none;';
}
function help() {
    open('./help','_self')
}