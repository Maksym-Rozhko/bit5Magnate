function timer(id, deadline) {
    if (id) {
        const addZero = num => num <= 9 ? `0${num}` : num;

        const getTimeRemaining = (endTime) => {
            const time = Date.parse(endTime) - Date.parse(new Date()),
                seconds = Math.floor((time / 1000) % 60),
                minutes = Math.floor((time / 1000 / 60) % 60),
                hours = Math.floor((time / (1000 * 60 * 60)) % 24),
                days = Math.floor((time / (1000 * 60 * 60 * 24)));

            return {
                'total': time,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds,
            };
        };

        const setClock = (selector, endTime) => {
            const timer = document.querySelector(selector),
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds'),
                timeInterval = setInterval(updateClock, 1000);
            // digits time indicator
            let dd = document.getElementById('dd');
            let hh = document.getElementById('hh');
            let mm = document.getElementById('mm');
            let ss = document.getElementById('ss');

            updateClock();

            function updateClock() {
                const time = getTimeRemaining(endTime);

                if (days && hours) {
                    days.textContent = addZero(time.days);
                    hours.textContent = addZero(time.hours);
                }
                minutes.textContent = addZero(time.minutes);
                seconds.textContent = addZero(time.seconds);

                if (days && hours) {
                    // set time circular indicator
                    dd.style.strokeDashoffset = 335 - (335 * time.days) / 30;
                    hh.style.strokeDashoffset = 335 - (335 * time.hours) / 24;
                }
                mm.style.strokeDashoffset = 335 - (335 * time.minutes) / 60;
                ss.style.strokeDashoffset = 335 - (335 * time.seconds) / 60;

                if (time.total > 0) {
                    if (minutes) {
                        minutes.parentElement.parentElement.parentElement.classList.remove('timer__container--endtime');
                    }
                }

                if (time.total <= 0) {
                    if (days && hours) {
                        days.textContent = '00';
                        hours.textContent = '00';
                    }
                    minutes.textContent = '00';
                    seconds.textContent = '00';

                    if (days) {
                        days.parentElement.parentElement.parentElement.classList.add('timer__container--endtime');
                        document.querySelector('#currentTimer .timer__container').parentElement.remove();
                    }

                    if (minutes) {
                        minutes.parentElement.parentElement.parentElement.classList.add('timer__container--endtime');
                    }

                    clearInterval(timeInterval);

                    document.querySelector('#promoTimer .timer__container').parentElement.classList.remove('d-none');
                };
            };
        };

        try {
            setClock(id, deadline);
        } catch (error) {
            
        }
    }
};

if (document.querySelector('#promoTimer')) {
const basePassedSince = 59;

    let lastPassedSince = parseInt(document.querySelector('#promoTimer').dataset.lastPassedSince);

    let currentDeadline = '2022-11-20';
    let promoDeadline = '2022-06-16';

    lastPassedSince ? lastPassedSince = basePassedSince - lastPassedSince : lastPassedSince = basePassedSince;

    if (lastPassedSince > 0) {
        promoDeadline = new Date(Date.now() + (lastPassedSince * 1000 + 999));
    }

    timer('#currentTimer .timer__container', currentDeadline);
    // timer('#promoTimer .timer__container', promoDeadline);
}