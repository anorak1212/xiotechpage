$(document).ready(function () {
    let currentPage = localStorage.getItem("currentPage") || 1;
    const totalPages = 3;

    function showPage(page) {
        $(".nospace.clear").hide();
        $(`.page-${page}`).show();
        $(".pagination .page-num").removeClass("active");
        $(`.pagination .page-num[data-page="${page}"]`).addClass("active");
        currentPage = page;
        localStorage.setItem("currentPage", page);
    }

    $(".pagination .page-num").click(function (e) {
        e.preventDefault();
        const page = $(this).data("page");
        showPage(page);
    });

    $(".pagination .prev").click(function (e) {
        e.preventDefault();
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    });

    $(".pagination .next").click(function (e) {
        e.preventDefault();
        if (currentPage < totalPages) {
            showPage(currentPage + 1);
        }
    });

    // Muestra la página almacenada al cargar
    showPage(currentPage);
});
