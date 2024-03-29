document.addEventListener("DOMContentLoaded", function() {
    var accordionItems = document.querySelectorAll(".accordion.block");

    accordionItems.forEach(function(item) {
        var btn = item.querySelector(".acc-btn");

        btn.addEventListener("click", function() {
            var isActive = item.classList.contains("active-block");

            accordionItems.forEach(function(item) {
                item.classList.remove("active-block");
            });

            if (!isActive) {
                item.classList.add("active-block");
            }
        });
    });

    // Close accordion when clicking anywhere outside of it
    document.body.addEventListener("click", function(event) {
        var isAccordionBtn = event.target.closest(".acc-btn");
        var isAccordionContent = event.target.closest(".acc-content");

        if (!isAccordionBtn && !isAccordionContent) {
            accordionItems.forEach(function(item) {
                item.classList.remove("active-block");
            });
        }
    });
});
