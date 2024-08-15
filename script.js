document.addEventListener('DOMContentLoaded', function() {
    const loginScreen = document.getElementById('login-screen');
    const mainScreen = document.getElementById('main-screen');
    const voteTab = document.getElementById('vote-tab');
    const candidatesTab = document.getElementById('candidates-tab');
    const rulesTab = document.getElementById('rules-tab');
    const voteSection = document.getElementById('vote-section');
    const candidatesSection = document.getElementById('candidates-section');
    const rulesSection = document.getElementById('rules-section');
    const backToMainButtons = document.querySelectorAll('#back-to-main');
    const loginForm = document.getElementById('login-form');

    function showSection(section) {
        [voteSection, candidatesSection, rulesSection].forEach(s => s.classList.add('hidden'));
        section.classList.remove('hidden');
    }

    function showMainContent() {
        loginScreen.classList.add('hidden');
        mainScreen.classList.remove('hidden');
        showSection(voteSection); // يظهر قسم التصويت بشكل افتراضي
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nationalId = document.getElementById('national-id').value;
        const password = document.getElementById('password').value;
        const captcha = document.getElementById('captcha').value;

        if (nationalId === '2024' && password === '0000' && captcha === '2024') {
            showMainContent();
        } else {
            alert('الرقم الوطني أو كلمة السر أو التحقق غير صحيح');
        }
    });

    voteTab.addEventListener('click', function(event) {
        event.preventDefault();
        showSection(voteSection);
    });

    candidatesTab.addEventListener('click', function(event) {
        event.preventDefault();
        showSection(candidatesSection);
    });

    rulesTab.addEventListener('click', function(event) {
        event.preventDefault();
        showSection(rulesSection);
    });

    backToMainButtons.forEach(button => {
        button.addEventListener('click', function() {
            showSection(voteSection); // أو أي قسم تريد إظهاره عند العودة
        });
    });

    // يظهر نموذج تسجيل الدخول عند تحميل الصفحة
    loginScreen.classList.remove('hidden');
    mainScreen.classList.add('hidden');
});
