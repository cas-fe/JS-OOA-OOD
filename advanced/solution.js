/** 
 * Diese Lösung soll eine Idee vermitteln, wie die OO-Prinzipien von EcmaScript eingesetzt werden können.
 * Prinzipiell ist es empfehlenswert, den Programmcode in Englisch zu verfassen.
 */

class Fach {
    constructor(name=""){
        this.name = name;
    }
}

class Note {
    #fach;

    constructor(fach) {
        if(!(fach instanceof Fach)){
            throw Error("wrong arguments");
        }
        this.#fach = fach;
    }

    get note() {
        throw Error("not implemented");
    }

    toString() {
        return `${this.#fach.name}: ${this.note}`
    }

    static runden(note) { /*Alternative: In eine Math-Util Klasse auslagern*/ 
        return (Math.round(note * 4) / 4);
    }
}

class MuendlicheNote extends Note {
    #experteA;
    #experteB;

    constructor(fach, experteA, experteB) {
        super(fach);
        this.#experteA = experteA;
        this.#experteB = experteB;
    }

    get note() {
        return (this.#experteA * 2 + this.#experteB) / 3;
    }

    toString() {
        return super.toString() + ` (66% ${this.#experteA} / 33% ${this.#experteB})`
    }
}

class SchriftlicheNote extends Note
{
    #pruefungsNote;

    constructor(fach, pruefungsNote) {
        super(fach);
        this.#pruefungsNote = pruefungsNote;
    }

    get note() {
        return this.#pruefungsNote;
    }
}

class Student {
    #name;
    #noten = [ ];

    constructor(name) {
        this.#name = name;
    }

    noteEinfuegen(note) {
        if(note instanceof Note)
        {
            this.#noten.push(note)
        }
    }

    durchschnitt() {
        return Note.runden(this.#noten.reduce((prev, n) => prev + n.note, 0) / this.#noten.length);
    }

    #bestanden() {
        return this.#noten.length > 0 && this.durchschnitt() >= 4;
    }

    toString() {
        return `Name: ${this.#name}\n  Durchschnitt (gerundet): ${this.durchschnitt()}\n    ${this.#noten.join("\n    ")}\n  Bestanden: ${this.#bestanden() ? "Ja" : "Nein"}`;
    }
}

let deutsch = new Fach("Deutsch");
let mathe = new Fach("Mathe");

let student = new Student("Iris");
student.noteEinfuegen(new MuendlicheNote(deutsch, 3.5, 4));
student.noteEinfuegen(new SchriftlicheNote(mathe, 5));
console.log(student.toString(), "OOD Übung");

student.noteEinfuegen(new SchriftlicheNote(deutsch, 6));
console.log(student.toString(), "OOD Übung");
