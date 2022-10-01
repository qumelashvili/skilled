let list = [
    {
        img: "./assets/icon-animation.svg",
        title: "Animation",
        text : "Learn the latest animation techniques to create stunning motion design and captivate your audience."
    },
    {
        img: "./assets/icon-design.svg",
        title: "Design",
        text : "Create beautiful, usable interfaces to help shape the future of how the web looks."
    },
    {
        img: "./assets/icon-photography.svg",
        title: "Photography",
        text : "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."
    },
    {
        img: "./assets/icon-crypto.svg",
        title: "Crypto",
        text : "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."
    },
    {
        img: "./assets/icon-business.svg",
        title: "Business",
        text : "A step-by-step playbook to help you start, scale, and sustain your business without outside investment."
    },
]

var main = document.querySelector(".main")

for(var i of list){
    let content = `
    <div class="card">
            <img src=${i.img} alt="">
            <h2 class="bold">${i.title}</h2>
            <p class="medium">${i.text}</p>
            <a class="bold href="">Get Started</a>
        </div>
    `

     main.innerHTML += content
     
}