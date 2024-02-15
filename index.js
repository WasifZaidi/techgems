const service_data = [
    {   image: "./images/ui ux.jpg",
        title: "UI/UX design",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius iaculis velit, quis dictum elit sodales sit amet. In nec ex mauris. Donec a lorem dictum, porta lorem a, lacinia purus"
    },
    {   image: "./images/web developer.jpg",
        title: "Web development",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius iaculis velit, quis dictum elit sodales sit amet. In nec ex mauris. Donec a lorem dictum, porta lorem a, lacinia purus"
    },
    {   image: "./images/server manager.jpg",
        title: "UI/UX design",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius iaculis velit, quis dictum elit sodales sit amet. In nec ex mauris. Donec a lorem dictum, porta lorem a, lacinia purus"
    },
    {   image: "./images/ecommerce.jpg",
        title: "Server management",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius iaculis velit, quis dictum elit sodales sit amet. In nec ex mauris. Donec a lorem dictum, porta lorem a, lacinia purus"
    },
    {   image: "./images/app developer.jpg",
        title: "App development",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius iaculis velit, quis dictum elit sodales sit amet. In nec ex mauris. Donec a lorem dictum, porta lorem a, lacinia purus"
    },
    {   image: "./images/book design.jpg",
        title: "Book design",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius iaculis velit, quis dictum elit sodales sit amet. In nec ex mauris. Donec a lorem dictum, porta lorem a, lacinia purus"
    },
]
const cards = document.querySelector("#cards_1")
service_data.map((curelem) => {
    cards.innerHTML += `
    <div class="card">
        <img src="${curelem.image}" alt="${curelem.title}">
        <div class="content">
            <h2 class="heading_small blue">${curelem.title}</h2>
            <p class="body_text_small">${curelem.desc}</p>
            <a href="" class="btn gredient body large_fs">Get started</a>
        </div>
    </div>`;
});

const ourclients = [
    {
     logo: "./images/Tech-Data-logo.png"
    },
    {
        logo: "./images/pngtree-logo-for-tech-gear-png-image_6954677.png"
    },
    {
        logo: "./images/Life_Technologies_Logo.png"
    },
    {
        logo: "./images/Tech_Mahindra-Logo.wine.png"
    },
    {
        logo: "./images/United_Technologies-Logo.wine.png"
    }
]
const cards_2 = document.querySelector("#cards_2")
ourclients.map((curelem) => {
    cards_2.innerHTML += `<div class="logo">
    <img src="${curelem.logo}" alt="no _imge">
</div>`;
});
