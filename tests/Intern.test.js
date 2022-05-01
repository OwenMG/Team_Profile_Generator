const Intern=require("../lib/Intern");

describe("Intern", ()=> {
    describe("Initialization", ()=>{
        it("should generate an Intern object with the given name, id, email, and school", ()=> {
            const name = "Icarus";
            const id = -1;
            const email = "icarus@internmail.com";
            const school = "University of Washington";

            const Icarus = new Intern(name, id, email, school);

            expect(Icarus.name).toEqual("Icarus");
            expect(Icarus.id).toEqual(-1);
            expect(Icarus.email).toEqual("icarus@internmail.com");
            expect(Icarus.school).toEqual("University of Washington");
        })
    })
    describe("getSchool", ()=>{
        it("should return the supplied school name when called", ()=>{
            const school = "UCLA";

            const Imelda = new Intern("Imelda", -2, "imelda@internmail.com", school);
            const imeldaschool = Imelda.getSchool();

            expect(imeldaschool).toEqual("UCLA");
        })
    })
    describe("inherited get functions", ()=>{
        it("should return supplied name, email, and id for given employee", ()=>{
            const name = "Ishmael";
            const id = -3
            const email = "ishmael@internmail.com";

            const Ishmael = new Intern(name, id, email, 34);
            ishmaelname = Ishmael.getName();
            ishmaelid = Ishmael.getId();
            ishmaelemail = Ishmael.getEmail();

            expect(ishmaelname).toEqual("Ishmael");
            expect(ishmaelid).toEqual(-3);
            expect(ishmaelemail).toEqual("ishmael@internmail.com");
        })
    })
})