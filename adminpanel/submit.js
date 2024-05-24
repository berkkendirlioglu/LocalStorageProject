// window.addEventListener("storage", function(){
//     window.location.reload();
// })
document.getElementById("hamburger").addEventListener("click", function(){
    document.getElementById("menu").classList.toggle("d-none");
    document.getElementById("panel").classList.toggle("w-100");
});
document.getElementById("refreshBtn").addEventListener("click", function(){
    window.location.reload();
})

window.onload = function(){
    const dataList = JSON.parse(localStorage.getItem("dataList")) || [];
    const orderList = document.getElementById("orders");
    dataList.forEach(function(data){
        const newElement = `
        <button class="accHeader d-flex justify-content-between align-items-center"><span class="userName fw-bold">${data.fullName}</span><i class="fa-solid fa-plus fa-xl menu-plus"></i></button>
        <div class="accordionBody py-4">

            <ul class="list-inline">
                <li>Ad - Soyad: <span>${data.fullName}</span></li>
                <li>E-mail: <span>${data.email}</span></li>
                <li>Konu: <span>${data.subject}</span></li>
                <li>Mesajınız: <span>${data.msg}</span></li>
            </ul>

        </div>
        `;
        orderList.innerHTML += newElement;
    })
    const accordion = document.querySelectorAll(".accHeader");

    for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
      this.classList.toggle("active");
  
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
    };

}



