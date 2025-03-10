* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    transform: scale(0.8);
    transform-origin: top left; 
    width: 125%;
}


.block-1{
 position: fixed;
 top: 0px;
 left: 0;
 width: 100%;
 padding: 10px 0;
 background-color: rgba(240, 240, 240, 0.543);
 backdrop-filter: blur(10px);
 z-index: 100;
}

.block-2{
    margin-top: 70px;
    align-items: center;
    font-family: "Harmattan", sans-serif;
}

nav {
    background-color: transparent;
    padding: 30px 0;
    text-align: center;
}

nav ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
}

nav ul li {
    margin: 0 20px;
}

nav ul li a {
    color: black;
    text-decoration: none;
    font-size: 16px;
}

nav ul li a:hover {
    color:  rgb(19, 146, 174); 
}


body {
    font-family: "Harmattan", sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    overflow: hidden;
}

.title {
    position: relative;
    transform: translate(-50%, -50%);
    top: 10px;
    left: 50%;
    color: black;
    text-align: center;
    font-size: 50px;
    font-weight: 700;
    margin-top: 0;
}


#container {
    position: relative;
    width: 500px;
    height: 400px;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

label {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
}

input[type="text"] {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 40px;
    font-size: 18px;
    font-family: "Harmattan", sans-serif;
    padding: 10px;
    text-align: center;
    border: 2px solid #333;
    border-radius: 20px;
    outline: none;
    transition: background-color boarder 0.5s ease;
}

input[type="text"]:hover {
    background-color:  rgb(19, 146, 174);
    border:rgba(0, 0, 0, 0.1);
}

input[type="text"]:hover::placeholder {
    color: white; 
}

.letter {
    position: absolute;
    font-size: 24px;
    font-family: "Harmattan", sans-serif;
    font-weight: bold;
    opacity: 0;
    pointer-events: none;
    animation: fall 7s linear infinite;
}

@keyframes fall {
    0% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(500px);
    }
}

.message {
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%);
    margin: 20px, 0;
    font-size: 24px;
    font-family: "Harmattan", sans-serif;
    font-weight: 700;
    color: #d14545;
    opacity: 0;
    pointer-events: none;
    display: none;
    text-align: center;
    z-index: 10;
    animation: fadeIn ease 1.5s forwards;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

input[type='button'] {
    position: relative;
    bottom: -80px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 50px;
    font-size: 14px;
    padding: 10px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

input[type='button']:hover {
    background-color: rgb(19, 146, 174);
}

@media (max-width: 768px) {
    .title {
        font-size: 7vw;
    }
    #container {
        width: 80vw;
        height: 50vh;
    }
    label, input[type="text"], input[type="button"] {
        font-size: 4vw;
    }
}
