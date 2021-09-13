import pageLoad from './pageLoad.js';

const index = (() => {

    // Default page is home page
    pageLoad("home");

    // Add event listeners to toggle between pages
    document.querySelectorAll(".tabs").forEach(tab => tab.addEventListener('change', handlePageLoad));
    
    function handlePageLoad(e) {
        pageLoad(e.target.dataset.tab);
    }

})();

