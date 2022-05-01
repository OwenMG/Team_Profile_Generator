const Employee=require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should generate an Employee object with given Name, ID, and Email", () => {
        const name="Eric"
        const id="222"
        const email="eric@ericmail.com"

        const Eric = new Employee(name,id,email);

        expect(Eric.name).toEqual(name);
        expect(Eric.id).toEqual(id);
        expect(Eric.email).toEqual(email)
        })
    })
    describe("getRole", () => {
        it(`should return the role "Employee"`, ()=> {
            const role = "Employee"

            const Earnest = new Employee("Earnest", 223, "earnest@ericmail.com");
            const earnestrole = Earnest.getRole();

            expect(earnestrole).toEqual(role);
        })
    })
    describe("getName", () => {
        it(`should return the supplied name of the Employee`, ()=> {
            const name = "Ezekiel"

            const Ezekiel = new Employee("Ezekiel", 224, "ezekiel@ericmail.com");
            const ezekielname = Ezekiel.getName();
            
            expect(ezekielname).toEqual(name);
        })
    })
    describe("getEmail", () => {
        it(`should return the supplied email of the employee`, ()=> {
            const email = "enrique@ericmail.com";

            const Enrique = new Employee("Enrique", 225, email);
            const enriquemail = Enrique.getEmail();
            
            expect(enriquemail).toEqual("enrique@ericmail.com");
        })
    })
    describe("getId", ()=>{
        it("should return the supplied Id number of the employee", ()=>{
            const id = 77

            const Elijah = new Employee("Elijah", id, "elijah@ericmail.com")
            const elijahid = Elijah.getId();

            expect(elijahid).toEqual(77);
        })
    })
})