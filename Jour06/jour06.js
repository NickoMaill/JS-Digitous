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
    } else { return (currentYear - birthYear) - 1 };

}

console.log(calculateAge("1995-12-02"));


//exo3 /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const prompt = require("prompt");

prompt.start();

function checkProfile() {
    prompt.get([
        { 
            name: "email", 
            description: "What is you email?", 

        },

        { 
            name: "userName", 
            description: "What is your username?",
        },

        {
            name: "password", 
            description: "What is your password?",
            hidden: true,
        },
    
    ],

        function (err, res) {

            if (err) {
                return console.log("Something went wrong", err);
            }

            const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            const userNameFormat = /^[A-Za-z0-9-]*$/;
            const passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

            if (
                emailFormat.test(res.email) &&
                userNameFormat.test(res.userName) &&
                passwordFormat.test(res.password)
            ) {
                console.log("All Good!");
            } else {
                console.log("error");
            }

        }

    );
}

//checkProfile()