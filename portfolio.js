window.addEventListener("DOMContentLoaded", () => {


    let lists = document.querySelectorAll(".list-group-item"),
        contents = document.querySelectorAll(".content");

    let i = 0;

    function hideContent() {
        lists.forEach((item) => {
            item.classList.remove("active");
        });
        contents.forEach((item) => {
            item.classList.remove("active");
        });
    };

    function showContent() {
        lists[i].classList.add("active")
        contents[i].classList.add("active");
    };


    lists.forEach((item, index) => {
        item.addEventListener("click", () => {
            hideContent();
            i = index;
            showContent();
        });
    });

});