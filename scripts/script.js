function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

window.calendarURL = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0DDvltye_72CNL6RFQb4chibtX0NIkDfFnVck_7IgqcJ9Rm0pOSmCWTgU5yuyw5pkm9lzQyFEi?gv=true';
function loadGoogleCalendarButtons(calendarURL = window.calendarURL, buttonColor = '#005180', buttonLabel = 'Konsultacja', containerClass = 'google-calendar-button') {
    const containers = document.querySelectorAll(`.${containerClass}`);

    containers.forEach(container => {
        calendar.schedulingButton.load({
            url: calendarURL,
            color: buttonColor,
            label: buttonLabel,
            target: container,
        });
    });
}

window.addEventListener('load', function () {
    loadGoogleCalendarButtons();
});


document.addEventListener('DOMContentLoaded', function () {
    const detailsElements = document.querySelectorAll('.faq details');

    detailsElements.forEach((detail) => {
        const summary = detail.querySelector('summary');
        const content = Array.from(detail.children).filter((child) => child.tagName !== 'SUMMARY');

        content.forEach((element) => {
            element.style.transition = 'max-height 0.3s ease';
            element.style.overflow = 'hidden';
            element.style.maxHeight = '0';
        });

        summary.addEventListener('click', function (event) {
            event.preventDefault();

            const isOpen = detail.open;

            if (isOpen) {
                content.forEach((element) => {
                    element.style.maxHeight = '0';
                });

                setTimeout(() => {
                    detail.removeAttribute('open');
                }, 300);
            } else {
                detailsElements.forEach((otherDetail) => {
                    if (otherDetail !== detail && otherDetail.open) {
                        const otherContent = Array.from(otherDetail.children).filter(
                            (child) => child.tagName !== 'SUMMARY'
                        );
                        otherContent.forEach((element) => {
                            element.style.maxHeight = '0';
                        });
                        setTimeout(() => {
                            otherDetail.removeAttribute('open');
                        }, 300);
                    }
                });

                detail.setAttribute('open', '');
                content.forEach((element) => {
                    element.style.maxHeight = element.scrollHeight + 'px';
                });
            }
        });
    });
});
