 let menulist = document.getElementById("menulist")
        menulist.style.maxHeight ="0px";
        
        function toggleMenu()
        {
            if(menulist.style.maxHeight =="0px")
        {
            menulist.style.maxHeight = "600px";

        }
        else { 
            menulist.style.maxHeight ="0px";
        }
        
        }
       





       /*  document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});*/


document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  fetch("http://localhost:5000/submit", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Thank you! Your message has been sent.");
      document.getElementById("contactForm").reset();
    })
    .catch((err) => {
      alert("Something went wrong.");
      console.error(err);
    });
});









