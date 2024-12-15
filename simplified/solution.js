/** 
 * Diese Lösung soll eine Idee vermitteln, wie die Anforderungen mit möglichst wenig Code umgesetzt werden können.
 * Prinzipiell ist es empfehlenswert, den Programmcode in Englisch zu verfassen.
 */

class Fach {
    constructor(name) {
        this.name = name;
    }
}

class Note {
    constructor(fach, noteA, noteExperteB) {
        this.fach = fach;

        if (!isNaN(noteExperteB)) {
            this.note = (noteA * 2 + noteExperteB) / 3;
        } else {
            this.note = noteA;
        }
    }
}

class Student{
    constructor(name){
        this.name = name;
        this.noten = [];
    }

    durchschnitt(){
        return this.noten.reduce((prev, n) => prev + n.note, 0) / this.noten.length;
    }
}

const deutsch = new Fach("Deutsch");
const mathe = new Fach("Mathe");

const student = new Student("Iris");
student.noten.push(new Note(deutsch, 3.5, 4));
student.noten.push(new Note(mathe, 5));
console.log(student.durchschnitt(), "OOD Übung");

student.noten.push(new Note(deutsch, 6));
console.log(student.durchschnitt(), "OOD Übung");
