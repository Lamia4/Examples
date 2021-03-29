
const h1Element = document.querySelector("h1");
const header = h1Element.closest("header");
console.log(header);
header.style.border = "5px solid grey";


const infoPackage = document.querySelectorAll(".info >.info-package");

infoPackage.forEach(element => {

    const all = Array.from(element.children);

    all.children.forEach(value => {
        if(value.matches(".package-title")) {
            value.previousElementSibling.style.border = "solid red 5px"
        }
        })




    // element.children[1].previousElementSibling.style.border = "solid 10px red";
    
});


const allLabel = document.querySelectorAll("label");

allLabel.forEach(element => {
    if(element.matches(".mild")){
        element.style.borderBottom = "yellow solid 5px";
    } else if (element.matches(".intense")){
        element.style.borderBottom = "orange solid 5px";
    } else {
        element.style.borderBottom = " red solid 5px";
    }
});


const navList = document.querySelector(".nav-list");
// console.log(navList.children);


// const allChildrenNav = navList.children;


const siteMap = document.querySelector(".site-map");

// const clone = navList.cloneNode(true);

const allChildrenNav = Array.from (navList.children);

for (const value of allChildrenNav) {
    const tempClone = value.cloneNode(true)
    siteMap.appendChild(tempClone);
}



// siteMap.appendChild;



// const mild = allLabel.match(".mild")

// console.log(allChildren);

// const packageTitle = allChildren[1];
// const prevEle = packageTitle.previousElementSibling;
// prevEle.style.border ="solid 20px red";