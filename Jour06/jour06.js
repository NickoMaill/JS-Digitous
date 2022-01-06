console.log("Hello World!");

function formatDate(strDate) {

    const date = new Date(strDate);
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
        month = `0${month}`

    }

    if (day < 10) {
        day = `0${day}`

    }

    return `${(day)} / ${(month)} / ${(date.getFullYear())}`

}

console.log(formatDate("2022-01-06"));

//exo2

function calculateAge(strBirthDate) {

    let date2 = new Date();
    let currentYear = date2.getFullYear();
    let birthDate = new Date(strBirthDate);
    let birthYear = birthDate.getFullYear();

    if (birthDate.getMonth < date2.getMonth) {
        return currentYear - birthYear;

    } else if (birthDate.getDate < date2.getDate) {
        return currentYear - birthYear
    } else { return (currentYear - birthYear) -1 };

}

console.log(calculateAge("1973-01-09"))


