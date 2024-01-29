class Formulario {
    name;
    surname;
    email;
    birthdate;

        constructor (name, surname, email, birthdate) {
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.birthdate = birthdate;
        }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setSurname(surname) {
        this.surname = surname;
    }
    getSurname() {
        return this.surname;
    }
    setEmail(email) {
        this.email = email;
    }
    getEmail() {
        return this.email;
    }
    setBirthdate(birthdate) {
        this.birthdate = birthdate;
    }
    getBirthDate() {
        return Math.floor((new Date().getTime() - this.birthdate.getTime()) / 31536000000);
    }
}

class Alumno extends Formulario {
    grade;

    constructor(name, surname, email, birthdate, grade) {
        super(name, surname, email, birthdate)
        this.grade = grade;
    }
}

let alumn = new Alumno (`Rafa`, `Campos`, `hola@gmail.com`, new Date(`1997-01-01`), 3);

function getGrade (grade) {
    return new Promise ((resolve, reject) => {
        if (grade < 5) {
            reject ({message: `Lo siento ${alumn.name} ${alumn.surname}, su nota es ${alumn.grade}`});
        } else {
            setTimeout(() => resolve ({message: `Enhorabuena ${alumn.name} ${alumn.surname}, su nota es ${alumn.grade}`}), 2000)
        }
    });
}

async function setGrade () {
    try {
        let newgrade = await getGrade(alumn.grade);
        console.log(newgrade.message);
    } catch (err) {
        console.error(err.message);
    }
}

setGrade();