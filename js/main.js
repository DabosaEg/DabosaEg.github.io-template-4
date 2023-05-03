// for trying Fns
// let conten = document.getElementById("content-data");
// conten.addEventListener("click", () => {});

// Sart Content

// Start creating Up Btn
// define the document
let page = document.getElementById("page");

// create Upbtn
let upBtn = document.createElement("div");
upBtn.innerHTML = "Up";
upBtn.className = "upBtn";

// Upbtn behavior
upBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  upBtn.classList.add("clicked");
});

// Start Relative H2

let afterParentH2 = document.querySelectorAll("#content-data .relativeH2 h2");
afterParentH2.forEach((ele) => {
  let afterEle = window.getComputedStyle(ele, ":after");
  let afterValue = afterEle.content;
  // empty
  if (afterValue.length == 2) {
    ele.parentElement.style.minHeight = 0;
  } else {
  }
});

// End Relative H2

// Start Yearly Section

let yearlySection = document.querySelector("#content-data .yearlyTargets");

let spans = document.querySelectorAll(
  "#content-data .yearlyTargets .spandiv span"
);

window.onscroll = function () {
  // for other pages yearlySection not exist
  if (yearlySection != null) {
    if (window.scrollY >= yearlySection.offsetTop - 200) {
      // console.log(`k7hhhhh`);
      spans.forEach((span) => {
        span.style.width = span.getAttribute("data-width");
        span.classList.add("active");
      });
    }
  }

  // Start upbtn to take action
  if (window.scrollY >= 500) {
    upBtn.classList.add("show");
    if (document.querySelector("#page .upBtn")) {
    } else {
      page.appendChild(upBtn);
    }
  } else if (window.scrollY == 0) {
    upBtn.classList.remove("clicked");
  } else {
    upBtn.classList.remove("show");
  }
  // End upbtn to take action
};

// End Yearly Section

// Start Latest Tasks

let latestTaskDels = document.querySelectorAll(
  "#content-data .latestTasks .task i"
);

latestTaskDels.forEach((del) => {
  del.addEventListener("click", () => {
    del.parentElement.children[0].classList.add("done");
    del.parentElement.children[1].classList.add("done");
  });
});

// End Latest Tasks

// Start Projects
let projectsStatus = document.querySelectorAll(
  "#content-data .projects tbody td span"
);
projectsStatus.forEach((pro) => {
  let value = pro.innerHTML;
  if (value == "Pending") {
    pro.style.backgroundColor = "var(--orange-color)";
  } else if (value == "In Progress") {
    pro.style.backgroundColor = "var(--blue-color)";
  } else if (value == "Rejected") {
    pro.style.backgroundColor = "var(--red-color)";
  }
});

// End Projects

// Start setting.html
let servers = document.querySelectorAll("#setting-data .backup .servers div");

servers.forEach((server) => {
  server.addEventListener("click", () => {
    for (let i = 0; i < servers.length; i++) {
      servers[i].classList.remove("checked");
    }
    server.classList.add("checked");
  });
});
// End setting.html

// Start Projects.html
let proStatusParents = document.querySelectorAll(
  "#projects-data .project .pro-status"
);
proStatusParents.forEach((pro) => {
  if (pro.classList.contains("pending")) {
    pro.style.setProperty("--background", "var(--orange-color)");
  } else if (pro.classList.contains("inProgress")) {
    pro.style.setProperty("--background", "var(--blue-color)");
  } else if (pro.classList.contains("rejected")) {
    pro.style.setProperty("--background", "var(--red-color)");
  } else {
    pro.style.setProperty("--background", "var(--green-color)");
  }
});
// End Projects.html
// End Content
