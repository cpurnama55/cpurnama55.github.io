// Link hover underline animation
function reveal() {
    // Reveals a div if it has a reveal mark and the corresponding CSS has been set accordingly
    // The div is revealed when you scroll and the page determine a satisfying scroll distance has been acheived
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; // Modify this value if you want the content to show up more easily. Decreased value means content shows up sooner, increased means later/more scroll required
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
// Add an event listener. Whenever a "scroll happens, the reveal function is called"
window.addEventListener("scroll", reveal);

// When clicking a link, fade out the entire page
document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll("a");
    Array.from(links).forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            document.body.classList.add("fade-effect");
            setTimeout(function() {
                window.location.href = link.href;
            }, 500); // Wait for the fade out transition to complete before redirecting
        });
    });
});