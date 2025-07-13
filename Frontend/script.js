document.getElementById("hire-me").addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView();
});

document.getElementById("resume-btn").addEventListener("click", () => {
  window.open("../documents/cv.pdf");
});

document.getElementById("mca-marksheet").addEventListener("click", () => {
  window.open("../documents/mca.pdf");
});

document.getElementById("bca-marksheet").addEventListener("click", () => {
  window.open("../documents/bca.pdf");
});
document.getElementById("inter-marksheet").addEventListener("click", () => {
  window.open("../documents/12th.pdf");
});
document.getElementById("matric-marksheet").addEventListener("click", () => {
  window.open("../documents/10th.pdf");
});
document.getElementById("eduphoenix").addEventListener("click", () => {
  window.open("../documents/Eduphionix.jpg");
});
document.getElementById("nptel").addEventListener("click", () => {
  window.open("../documents/dbms.pdf");
});

document.getElementById("gemini-clone").addEventListener("click", () => {
  window.open("https://github.com/ramansingh10/Gemini-Clone");
});
document.getElementById("snake-game").addEventListener("click", () => {
  window.open("https://github.com/ramansingh10/snakegame");
});
document.getElementById("spotify-clone").addEventListener("click", () => {
  window.open("https://github.com/ramansingh10/Spotify-Clone");
});
document.getElementById("aqi").addEventListener("click", () => {
  window.open("https://github.com/ramansingh10/Air-Quality-Prediction-System");
});
document.getElementById("ems").addEventListener("click", () => {
  window.open("https://github.com/ramansingh10/Employee-Management-System");
});

let mode = document.getElementById("darkmode-icon");
mode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.querySelectorAll(".icon").forEach((img) => {
    img.classList.toggle("invert");
  });
  if (document.body.classList.contains("dark-mode")) {
    mode.src = "svg/moon-solid.svg";
  } else {
    mode.src = "svg/sun-solid.svg";
  }
});

document.getElementById("openMenu").addEventListener("click", () => {
  sideMenu.style.right = "0";
});

document.getElementById("closeMenu").addEventListener("click", () => {
  sideMenu.style.right = "-200px";
});

document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;

  const formData = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value,
  };
  try {
    const response = await axios.post(
      "https://portfolio-website-backend-zfzo.onrender.com/send",
      formData
    );
    console.log("Server response:", response.data);
    alert("Form Submitted successfully");
    form.reset();
  } catch (error) {
    console.log("Error submitting form:");
    alert("Error submitting form");
  }
});

// document.getElementById("contactForm").addEventListener("submit", function(e) {
//       e.preventDefault();

//       const formData = new FormData(this);
//       const data = {};
//       formData.forEach((value, key) => data[key] = value);

//       fetch("https://script.google.com/macros/s/AKfycbziRbRbGIXS5adit4ac_2Jc7xBaX8kYZSYijS1y2IC4I2M5HWWxGRPNrooVxQPA8TYAmQ/exec", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data)
//       })
//       .then(response => response.text())
//       .then(result => {
//         alert("Form submitted successfully!");
//         document.getElementById("contactForm").reset();
//       })
//       .catch(error => alert("Error: " + error.message));
//     });
