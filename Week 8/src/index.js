class User {
    // Data
    constructor(fname, lname, id){
        this.fname = fname;
        this.lname = lname;
        this.id = id;
    }

    // Methods
    getUserName(){
        return (this.fname + " " + this.lname);
    }

    // Changes first name of user and returns new name
    changeFirstName(name){
        this.fname = name;
        return (this.fname + " " + this.lname);
    }

    // Changes last name and returns new name
    changeLastName(name) {
        this.lname = name;
        return (this.fname + " " + this.lname);
    }

    addUserToDatabase(){
        const obj = {name: this.name + " " + this.lname, id: this.id};

        let usersJson = fs.readFileSync("users.json", "utf-8");

        let users = JSON.parse(usersJson);

        users.push(obj);

        usersJson = JSON.stringify(users);

        fs.writeFileSync("users.json", usersJson, "utf-8");
    }
}


function submitUser() {
    let fname = document.forms[0].fname.value;
    let lname = document.forms[0].lname.value;
    let id = document.forms[0].id.value;

    let currUser = new User(fname, lname, id);

    try{
        currUser.addUserToDatabase();
        alert(fname + " " + lname + " has been added to the database.")
    } catch {
        console.log("Was not able to add user to database.");
    }

};