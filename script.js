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
/*

document.getElementById("contactForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const form = e.target;
      const formData = new FormData(form);

      fetch("http://localhost:5000/submit", {
        method: "POST",
        body: new URLSearchParams(formData),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then(res => res.json())
      .then(data => {
        alert("Form submitted successfully!");
        form.reset();
      })
      .catch(err => {
        console.error("Error:", err);
        alert("Submission failed!");
      });
    });--->*/








