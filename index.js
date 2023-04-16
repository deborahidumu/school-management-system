// Setting the navbar height to the height of the content body on reload

let contents = document.querySelectorAll(".content-body");

contents.forEach((content) => {
  let containsHide = content.classList.contains("hide");
  console.log(containsHide);
  if (containsHide == false) {
    let contentBodyHeight = content.clientHeight;
    let contentHeaderHeight =
      document.querySelector(".content-header").clientHeight;

    let newHeight = `${contentBodyHeight + contentHeaderHeight}px`;
    console.log();

    document.querySelector("nav").style.height = newHeight;
  }
});

// Adding active styling to link in nav bar

let path = window.location.pathname.split("/").pop();

if (path == "") {
  path = "index.html";
}

let links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.classList.remove("active-link");
});

let target = document.querySelector("a[href='" + path + "']");
target.classList.add("active-link");

// Removing hide from clicked tab

let tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault;

    let tabId = tab.id;

    let splitArray = tabId.split("-");
    let contentId = splitArray[0];

    let contents = document.querySelectorAll(".content-body");
    contents.forEach((content) => {
      content.classList.add("hide");
    });

    document.getElementById(contentId).classList.remove("hide");

    // adding the active class

    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });

    tab.classList.add("active-tab");

    // Setting the navbar height to the height of the content body on click of tab

    contents = document.querySelectorAll(".content-body");

    contents.forEach((content) => {
      let containsHide = content.classList.contains("hide");
      console.log(containsHide);
      if (containsHide == false) {
        let contentBodyHeight = content.clientHeight;
        let contentHeaderHeight =
          document.querySelector(".content-header").clientHeight;

        let newHeight = `${contentBodyHeight + contentHeaderHeight}px`;
        console.log();

        document.querySelector("nav").style.height = newHeight;
      }
    });
  });
});

// Showing the next screen of hall of residence when next is clicked

let continueButton = document.getElementById("registration-button");
continueButton.addEventListener("click", () => {
  document.getElementById("dashboard").classList.add("hide");
  document.getElementById("dashboard-2").classList.remove("hide");
});
