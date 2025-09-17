function toggleCountdown(countdownId) {
    var things =  document.querySelectorAll(".countdown")
    things.forEach(function(thing) {
        thing.style.display = "none";
    })

    var selectedThing = document.getElementById("content-" + countdownId)
    if (selectedThing) {
        selectedThing.style.display = "block";
    }
}

toggleCountdown(1)