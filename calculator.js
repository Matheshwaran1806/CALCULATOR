
let calci = document.createElement("section")
calci.setAttribute("class","calc")
calci.innerHTML=`
    <div class="back">
    <div class="main">
    <video src="./img/calci video.mp4" muted autoplay loop>
	</video>
    </div>
        <div class="calculators">
            <div class="box">
            <input type="text" id="box"></input>
        </div>
        <div class="row">
            <button onclick="cler()">clr</button>
            <button onclick="delet()" class="delete">del</button>
            <button onclick="disp('%')" class="number">%</button>
            <button onclick="disp('/')" class="number opertion">/</button>
        </div>
        <div class="row">
            <button onclick="disp('7')">7</button>
            <button onclick="disp('8')">8</button>
            <button onclick="disp('9')">9</button>
            <button onclick="disp('*')" class="number opertion">*</button>
        </div>
        <div class="row">
            <button onclick="disp('4')">4</button>
            <button onclick="disp('5')">5</button>
            <button onclick="disp('6')">6</button>
            <button onclick="disp('-')" class="number opertion">-</button>
        </div>
        <div class="row">
            <button onclick="disp('1')">1</button>
            <button onclick="disp('2')">2</button>
            <button onclick="disp('3')">3</button>
            <button onclick="disp('+')" class="number opertion">+</button>
        </div>
        <div class="row">
            <button onclick="disp('.')" class="number dot">.</button>
            <button onclick="disp('0')">0</button>
            <button style="width:48%" onclick="calculate()" class="equal"  >=</button>
        </div>
        </div>
    </div>`
document.body.appendChild(calci)
let display = document.getElementById("box")
function disp(dis){
    display.value += dis
}
function calculate(){
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = "Error"
    }
}
function cler(){
    display.value = " "
}
function delet(){
        display.value = display.value.slice(0,-1)
}

