const cardData = [
    {
        heading:'website of exoape',
        body:'This is website . In this project react.js ,tailwind.css,framer motion is used',
        link:'https://framer-seven-delta.vercel.app/'
    },
    {
        heading:'calculator',
        body:'this is simple calculator to perform mathematical function such as add , subtract , multiply , divide . It is made up of simple html,css,js',
        link:'https://kmishara.github.io/calculator/'
    },
    {
        heading:'Music Streaming clone',
        body:'This is website of music streaming . This is responsive page . In this project html ,css ,express.js, node.js is used. In this project we search songs ,upload and login&signup function is available.',
        link:'https://drive.google.com/file/d/1-MLeGmY07I-fAt5bJ6VhVqeE10PayPPN/view?usp=drivesdk'
    },
    {
        heading:'Food Landing Page',
        body:' This is responsive page . In this project react.js , tailwind.css is used. In this project we search items and add to cart function is available.',
        link:'https://foods-gilt.vercel.app/'
    },
    {
        heading:'website of internsala',
        body:'This is website of internsala clone. In this project express.js, node.js is used for backend purpose and for frontend we used react.js,tailwind.css . In this project login&signup function is available and see static page of profile.',
        link:'#'
    },
    {
        heading:'website of e-commerce',
        body:'This is e-commerce website of clothes . In this project express.js, node.js is used for backend purpose and for frontend we used react.js and CSS .In this project login&signup function is available and see static page of clothes and also in admin pannel we add products.',
        link:'#'
    },
    {
        heading:'Fitness web application with workout,diet & motivation  ',
        body:'This is website of fitness . In this project express.js, node.js is used for backend purpose and for frontend we used html,CSS,js .In this project login&signup function is available and after login we access the information about the exercise and diet food',
        link:'https://clg-3lp7.onrender.com/'
    },
    
  
]

const postContainer = document.querySelector('.card-container');

const postMethods = ()=>{
    cardData.map((postData)=>{
        const postElement = document.createElement('div');
        postElement.classList.add('card')
        postElement.innerHTML=` <h3 class="card-heading">projectname: <span  class="card-span" >${postData.heading}</span></h3>
           <p class="card-body">${postData.body}</p>
          <a class="card-link" href=${postData.link}>click</a>`
            postContainer.appendChild(postElement)
    })
}
function valuesetters(){
    gsap.set("#nav a", {y:"-100%",opacity: 0});
}

postMethods()
