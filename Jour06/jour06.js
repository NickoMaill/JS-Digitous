console.log("Hello World!");

function formatDate(strDate) {

    const date = new Date(strDate);
    return `${(date.getDay())} / ${(date.getMonth() +1)} / ${(date.getFullYear())}`

}

console.log(formatDate("2022-01-06"));

//exo2

