// ================= CHAPTER 7 – OBJECTS =================
function ch7Example() {
    let out = document.getElementById("out7");
    out.innerHTML = ""; // Nadiifi waxyaabaha hore

    // 1. Person object
    let person1 = {
        name: "Ali",
        age: 30,
        city: "Mogadishu",
        greet: function() { return `Hello, my name is ${this.name}.`; }
    };
    out.innerHTML += `<li>1. ${person1.name} (${person1.age} jir, ${person1.city}) - ${person1.greet()}</li>`;

    // 2. Car object
    let car1 = {
        make: "Toyota",
        model: "Camry",
        year: 2021,
        getAge: function(currentYear) { return currentYear - this.year; }
    };
    out.innerHTML += `<li>2. ${car1.make} ${car1.model} - Da'da gaariga: ${car1.getAge(2024)} sano.</li>`;

    // 3. Book object
    let book1 = {
        title: "JavaScript Essentials",
        author: "John Doe",
        pages: 400
    };
    out.innerHTML += `<li>3. Buug: "${book1.title}" uu qoray ${book1.author}, ${book1.pages} bog.</li>`;

    // 4. Shopping cart item
    let item1 = {
        product: "Laptop",
        price: 1200,
        quantity: 1,
        total: function() { return this.price * this.quantity; }
    };
    out.innerHTML += `<li>4. Alaab: ${item1.product} - Qiimaha: ${item1.total()} USD.</li>`;

    // 5. Player object
    let player1 = {
        username: "GamerPro",
        level: 50,
        score: 15000,
        status: "Active"
    };
    out.innerHTML += `<li>5. Ciyaaryahan: ${player1.username}, Level: ${player1.level}, Score: ${player1.score}.</li>`;

    // 6. Object using new Object()
    let dog = new Object();
    dog.name = "Max";
    dog.breed = "German Shepherd";
    dog.speak = function() { return `${this.name} is barking!`; };
    out.innerHTML += `<li>6. Eey: ${dog.name}, Nooca: ${dog.breed} - ${dog.speak()}</li>`;

    // 7. Update properties
    person1.email = "ali@example.com";
    person1.age = 31;
    out.innerHTML += `<li>7. Updated Person: ${person1.name}, Email: ${person1.email}, Age: ${person1.age}.</li>`;

    // 8. Delete property
    delete player1.status;
    out.innerHTML += `<li>8. Player without status: ${player1.username}, Level: ${player1.level}.</li>`;

    // 9. Bracket notation
    out.innerHTML += `<li>9. Book title using bracket notation: "${book1["title"]}".</li>`;

    // 10. Nested object
    let company = {
        name: "Tech Solutions",
        address: { street: "123 Main St", city: "Hargeisa", zip: "2000" },
        departments: ["IT", "HR", "Marketing"]
    };
    out.innerHTML += `<li>10. Company: ${company.name}, City: ${company.address.city}.</li>`;

    // 11. Object with array & method
    let student = {
        name: "Fatima",
        grades: [90, 85, 95],
        calculateAverage: function() {
            let sum = this.grades.reduce((acc, curr) => acc + curr, 0);
            return (sum / this.grades.length).toFixed(2);
        }
    };
    out.innerHTML += `<li>11. Arday: ${student.name}, Celceliska darajadiisa: ${student.calculateAverage()}.</li>`;

    // 12. Calculator object
    let calculator = {
        add: (a,b)=>a+b,
        subtract: (a,b)=>a-b
    };
    out.innerHTML += `<li>12. Calculator: 5 + 3 = ${calculator.add(5,3)}, 5 - 3 = ${calculator.subtract(5,3)}</li>`;

    // 13. This keyword
    out.innerHTML += `<li>13. Person greeting: ${person1.greet()}</li>`;

    // 14. Object with array
    let colors = { primary: ["Red","Blue","Green"], secondary: ["Orange","Purple"] };
    out.innerHTML += `<li>14. Primary colors: ${colors.primary.join(", ")}.</li>`;

    // 15. Function as property
    let game = { title:"Adventure Quest", start: function(){ return `Game ${this.title} started!`; } };
    out.innerHTML += `<li>15. Game: ${game.start()}</li>`;

    // 16. Multi-word property names
    let productDetails = { "item name":"Smartphone", "model number":"X100" };
    out.innerHTML += `<li>16. Product: ${productDetails["item name"]}, Model: ${productDetails["model number"]}.</li>`;

    // 17. Boolean property
    let settings = { darkMode:true, notifications:false };
    out.innerHTML += `<li>17. Dark Mode: ${settings.darkMode ? "Enabled" : "Disabled"}.</li>`;

    // 18. Empty object then add properties
    let emptyObject = {};
    emptyObject.id = "newId123";
    emptyObject.description = "This is a new object.";
    out.innerHTML += `<li>18. Empty Object ID: ${emptyObject.id}, Description: ${emptyObject.description}.</li>`;

    // 19. Constructor function
    function Human(name, age){ this.name=name; this.age=age; this.getInfo = function(){ return `${this.name} waa ${this.age} jir.`; }; }
    let human1 = new Human("Aisha",25);
    out.innerHTML += `<li>19. Human Object: ${human1.getInfo()}</li>`;

    // 20. Check property exists
    out.innerHTML += `<li>20. 'city' in person1? ${"city" in person1 ? "Haa" : "Maya"}, 'zipCode' in person1? ${"zipCode" in person1 ? "Haa" : "Maya"}.</li>`;
}

// ================= CHAPTER 8 – DOM =================
function ch8Example() {
    let domText = document.getElementById("domText");
    let domListExamples = document.getElementById("list");
    domListExamples.innerHTML = ""; // Nadiifi liiska

    domText.textContent = "Halkan waxaa ku jira 20 DOM examples.";

    for(let i=1;i<=20;i++){
        let li = document.createElement("li");
        li.textContent = `DOM Example ${i}`;
        li.style.padding = "5px";
        li.style.border = "1px solid #fff";
        li.style.marginBottom = "3px";
        li.style.borderRadius = "3px";
        li.style.color = i%2==0 ? "lime" : "#fff";
        li.addEventListener("click", ()=> alert(`Clicked DOM Example ${i}`));
        domListExamples.appendChild(li);
    }
}

// ================= CHAPTER 9 – EVENTS =================
document.getElementById("myForm").addEventListener("submit", function(e){
    e.preventDefault();
    let name = document.getElementById("username").value;
    let out = document.getElementById("eventOut");
    out.innerHTML = `Hello, ${name}! Form submitted.`;
});

// Focus & Blur
let usernameInput = document.getElementById("username");
usernameInput.onfocus = function(){ this.style.background="yellow"; };
usernameInput.onblur = function(){ this.style.background="white"; };

// Window Events
window.onload = function(){ console.log("Page loaded"); };
window.onscroll = function(){ console.log("Scrolling..."); };
window.onresize = function(){ console.log("Window resized"); };
