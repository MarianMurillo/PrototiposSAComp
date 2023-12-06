let currentTab = 0;
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        showTab(index);
    });
});

prevBtn.addEventListener('click', () => {
    if (currentTab > 0) {
        currentTab--;
        showTab(currentTab);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentTab < tabs.length - 1) {
        currentTab++;
        showTab(currentTab);
    }
});

function showTab(n) {
    tabContents.forEach((tabContent, index) => {
        tabContent.classList.add('hide');
    });

    tabContents[n].classList.remove('hide');

    tabs.forEach((tab, index) => {
        tab.classList.remove('active');
    });

    tabs[n].classList.add('active');

    currentTab = n;
}

showTab(currentTab);