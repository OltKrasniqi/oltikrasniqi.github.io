function updateClock() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const timeString = `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        document.getElementById("clock").textContent = timeString;
      }
      
      updateClock();
      setInterval(updateClock, 1000);


    let currentIndex = 0;

function changeSlide(n) {
    currentIndex += n;
    showSlide();
}

function showSlide() {
    const slides = document.querySelectorAll('.ok-slide');
    
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${-currentIndex * 100}%)`;
    });
}

function searchByLine() {
    var linjaInput = document.getElementById("linjaInput").value.toUpperCase();
    filterTable(0, linjaInput);
}


function filterTable(column, inputValue) {
    var table = document.getElementById("oraretTable");
    var tr = table.getElementsByTagName("tr");

    for (var i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[column];
        if (td) {
            var txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(inputValue) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
