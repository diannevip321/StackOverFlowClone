export function getTimeString(currentTime, by, dateOf, askedOrAnswered = "asked") {  
    // const currentTime = new Date();

    
    const elapasedTimeSeconds = Math.floor((currentTime.getTime() - dateOf.getTime()) / 1000);
    const elapasedTimeMinutes = Math.floor(elapasedTimeSeconds / 60);
    const elapasedTimeHours = Math.floor(elapasedTimeMinutes / 60);
    const elapasedTimeDays = Math.floor(elapasedTimeHours / 24);
    const elapsedTimeYears = Math.floor(elapasedTimeDays / 365);

    console.log(elapasedTimeSeconds);
    console.log(elapasedTimeMinutes);

    if (elapasedTimeMinutes === 0) {
        return `${by} ${askedOrAnswered} ${elapasedTimeSeconds} seconds ago.`
    }
    else if (elapasedTimeHours === 0) {
        return `${by} ${askedOrAnswered} ${elapasedTimeMinutes} minutes ago.`
    }
    else if (elapasedTimeDays === 0) {
        return `${by} ${askedOrAnswered} ${elapasedTimeHours} hours ago.`
    }
    else if (elapsedTimeYears === 0) {
        const month = dateOf.toLocaleString('default', { month: 'short' });
        const day = dateOf.getDate();
        const hours = dateOf.getHours();
        const mins = dateOf.getMinutes();

        if (hours < 10 && mins < 10) {
            return `${by} ${askedOrAnswered} ${month} ${day} at 0${hours}:0${mins}.`
        }
        else if (hours < 10) {
            return `${by} ${askedOrAnswered} ${month} ${day} at 0${hours}:${mins}.`
        }
        else if (mins < 10) {
            return `${by} ${askedOrAnswered} ${month} ${day} at ${hours}:0${mins}.`
        }
        else {
            return `${by} ${askedOrAnswered} ${month} ${day} at ${hours}:${mins}.`
        }



    }
    else if (elapsedTimeYears >= 1) {
        const year = dateOf.getFullYear();
        const month = dateOf.toLocaleString('default', { month: 'short' });
        const day = dateOf.getDate();
        const hours = dateOf.getHours();
        const mins = dateOf.getMinutes();

        if (hours < 10 && mins < 10) {
            return `${by} ${askedOrAnswered} ${month} ${day}, ${year} at 0${hours}:0${mins}.`
        }
        else if (hours < 10) {
            return `${by} ${askedOrAnswered} ${month} ${day}, ${year} at 0${hours}:${mins}.`
        }
        else if (mins < 10) {
            return `${by} ${askedOrAnswered} ${month} ${day}, ${year} at ${hours}:0${mins}.`
        }
        else {
            return `${by} ${askedOrAnswered} ${month} ${day}, ${year} at ${hours}:${mins}.`
        }

    }

    return "Hello Peets";
}
