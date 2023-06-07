interface LibraryItem {
    id: number;
    title: string;
    copiesAvailable: number;
    displayInfo(): string;
    borrowCopy(): void;
    returnCopy(): void;
}

class AuthorTS1 {
    id: number;
    name: string;
    birthYear: number;
    constructor(id: number,name: string, birthYear:number) {
        this.id = id;
        this.name = name; 
        this.birthYear = birthYear;  
    }
}

class LibraryMember {
    id: number;
    name: string;
    borrowedItems?: BookTS1[];
    constructor(id: number,name: string,borrowedItems: BookTS1[]=[]) {
        this.id = id;
        this.name = name;
        this.borrowedItems = borrowedItems        
    }
    borrowItem(item: BookTS1): void {
        if (item.copiesAvailable > 0) {
            item.borrowCopy();
            this.borrowedItems.push(item);
        }
        else {
            console.log("No copies of " + item.title + " available to borrow");
        }
    }
    returnItem(item: BookTS1): void {
        const index: number = this.borrowedItems.indexOf(item);
        if (index >= 0 && index < this.borrowedItems.length) {
            item.returnCopy();
            this.borrowedItems.splice(index,1);
        }
        else {
            console.log(item.title + " not found in user's borrowed list");
        }
    }
}

class BookTS1 implements LibraryItem {
    id: number;
    title: string;
    author: AuthorTS1;
    publicationYear: number;
    copiesAvailable: number;
    constructor(id: number,title: string, author: AuthorTS1,publicationYear: number,copiesAvailable: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
        this.copiesAvailable = copiesAvailable;
    }
    borrowCopy(): void {
        this.copiesAvailable -= 1;
    }
    returnCopy(): void {
        this.copiesAvailable += 1;
    }
    displayInfo(): string {
        return ("Book ID: " + this.id + ", Title: " + this.title + ", Author: " + this.author.name + ", Publication Year: " + this.publicationYear + ", Copies Available: " + this.copiesAvailable);
}
}
//create magazine and newspaper classes
class Magazine implements LibraryItem {
    id: number;
    title: string;
    issue: number;
    copiesAvailable: number;
    constructor(id: number, title: string, issue: number, copiesAvailable: number) {
        this.id = id;
        this.title = title;
        this.issue = issue;
        this.copiesAvailable = copiesAvailable;
    }
    borrowCopy(): void {
        this.copiesAvailable -= 1;
    }
    returnCopy(): void {
        this.copiesAvailable += 1;
    }
    displayInfo(): string {
        return ("Magazine ID: " + this.id + ", Title: " + this.title + ", Issue: " + this.issue + ", Copies Available: " + this.copiesAvailable);
    }
}
class Newspaper implements LibraryItem {
    id: number;
    title: string;
    date: string;
    copiesAvailable: number;
    constructor(id: number, title: string, date: string, copiesAvailable: number) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.copiesAvailable = copiesAvailable;
    }
    borrowCopy(): void {
        this.copiesAvailable -= 1;
    }
    returnCopy(): void {
        this.copiesAvailable += 1;
    }
    displayInfo(): string {
        return ("Newspaper ID: " + this.id + ", Title: " + this.title + ", Date: " + this.date + ", Copies Available: " + this.copiesAvailable);
    }
}
//create instances of book and author class
const authorts1 = new AuthorTS1(1,"George Orwell", 1903);
const bookts1 = new BookTS1(101,"1984", authorts1, 1949,5);
const bookts2 = new BookTS1(102,"Animal Farm", authorts1, 1945,10);
const bookts3 = new BookTS1(103,"The Alchemist", new AuthorTS1(2,"Paulo Coelho", 1947), 1988,2);
//create instance for magazine and newspaper class
const magazinets1 = new Magazine(1, "National Geographic",1,10);
const newspaperts1 = new Newspaper(1,"The Hindu",new Date().toDateString(),10);
//create instances of library member
const member1 = new LibraryMember(1,'John Doe');
//display Books avaliable
console.log(magazinets1.displayInfo());
console.log(newspaperts1.displayInfo());
console.log(bookts1.displayInfo());
console.log(bookts2.displayInfo());
console.log(bookts3.displayInfo());
//member1 borrow and returns
member1.borrowItem(bookts1);
member1.borrowItem(bookts2);
console.log(bookts1.displayInfo());
console.log(bookts2.displayInfo());
member1.returnItem(bookts1);
member1.returnItem(bookts2);
console.log(bookts1.displayInfo());
console.log(bookts2.displayInfo());