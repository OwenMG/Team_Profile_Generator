const Manager=require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", ()=>{
        it("should create a manager object with given name, id, email, and office number attributes", ()=>{
            const name = "Michael";
            const id = 1;
            const email="michael@ericmail.com"
            const officenum=12;

            const Michael = new Manager(name,id,email,officenum);

            expect(Michael.name).toEqual("Michael");
            expect(Michael.id).toEqual(1);
            expect(Michael.email).toEqual("michael@ericmail.com");
            expect(Michael.officenum).toEqual(12);
        })
    })
    describe("getRole", ()=> {
        it('should return "Manager"', ()=>{
            const role = "Manager";

            const Monty = new Manager("Monty", 2, "monty@ericmail.com", 13);
            const montyrole = Monty.getRole();

            expect(montyrole).toEqual(role);
        })
    })
    describe("inherited get functions", ()=>{
        it("should return supplied name, email, and id for given employee", ()=>{
            const name = "Mary";
            const id = 3
            const email = "mary@ericmail.com";

            const Mary = new Manager(name, id, email, 34);
            maryname = Mary.getName();
            maryid = Mary.getId();
            maryemail = Mary.getEmail();

            expect(maryname).toEqual("Mary");
            expect(maryid).toEqual(3);
            expect(maryemail).toEqual("mary@ericmail.com");
        })
    })
})