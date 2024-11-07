// first thing we are going to do is make sure all our HTML has been rendered
document.addEventListener('DOMContentLoaded', (loaded) =>{
    //test to see if our JS is connected
    console.log('This is my welcome message in the console, which can be anything I want');
    //now we will look at how to declare a variable in JS
    let a = 200;
    let b = 180;
    let c = a + b;
    // the const is a variable that cannot be changed once the value has been assigned
    const value1 = 500;
    const value2 = 600;
    let total = value1 + value2;
    //now lets look at how we can output our HTML
    document.getElementById("ex1").innerHTML = "<h4>JavaScript Variables</h4>" + "<p>Let: The Value of C is " + c + "</p>" + "<p>Const: The total is: " + total + "</p>";
    //Now we cant see our HTML, lets style it with JS
    document.getElementById("ex1").style.color = "#f8f8f8";
    document.getElementById("ex1").style.padding = "0% 10%";

    //Now lets create our global header
    document.getElementById("lesson-global-header").innerHTML =
        "<div id = 'logo-container'>" +
            "<a href='index.html'>" +
                "<img id='logo' src='./img/logo.png' alt='header logo'>" +
            "</a>" +
        "</div>" +
        "<nav><menu>" +
            "<li><a href='#'>Item 1</a></li>" +
            "<li><a href='#'>Item 2</a></li>" +
            "<li><a href='#'>Item 3</a></li>" +
        "</menu></nav>";

      //   !! lab 3 JS code !!
      document.getElementById("lab-main").innerHTML = "<section>" + 
      "<h2>Hello this is for my lab</h2>" +
           "<p>this paragraph better show up somewhere on this page or i will cry a billion times. </p>" +
           "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a facilisis augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna felis, pretium a euismod sit amet, tempus non magna. Proin tempor, orci nec. </p>" +
           "<div id='picture'>" +
                    "<a href='index.html'>" +
                        "<img id='funneypic' src='./img/funneypic.png' alt='funney picture'" +
                    "</a>" + 
                "</div>"+
           "</section>";
           
        document.getElementById("lab-main").style.cssText="display: flex; height: 300px; background-color: #FF6F00;color: #02FF10; align-items: left;";
        document.getElementById("picture").style.cssText="display: flex; height: 900px; background-color: #FF11F5; align-items: center;";
        document.getElementById("funneypic").style.cssText= "width: auto; height: 100%;";

    document.getElementById("lesson-global-header").style.cssText="display: flex; height: 125px: background-color: #f8f8f8; align-items: center;";
    document.getElementById("logo-container").style.cssText= "flex-grow: 1;  height: 110px; width: auto;";
    document.getElementById("logo").style.cssText= "width: auto; height: 100%;";



});