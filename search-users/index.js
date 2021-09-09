document.getElementById("searchInput").addEventListener("keydown", function(event) {
    let searchQuery = event.target.value.toLowerCase();
    let allNamesDomCollection = document.getElementsByClassName("name");
    
    for (i = 0; i < allNamesDomCollection.length; i++) {
        const currentName = allNamesDomCollection[i].textContent.toLowerCase();
        
        if (currentName.includes(searchQuery)) {
            allNamesDomCollection[i].style.display = "block";
        } else {
            allNamesDomCollection[i].style.display = "none";
        }
    }

})  