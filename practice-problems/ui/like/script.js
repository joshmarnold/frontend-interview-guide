const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

document
  .querySelector(".like-button")
  .addEventListener("click", async (event) => {
    console.log("Liked!");
    document.getElementById("heart-svg").style.display = "none";
    document.querySelector(".loader").style.display = "block";

    await delay(2000);
    console.log(event);

    event.target.classList.add("liked");
    document.getElementById("heart-svg").style.display = "block";
    document.querySelector(".loader").style.display = "none";
  });
