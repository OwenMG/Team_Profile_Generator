const Engineer=require("../lib/Engineer");

describe("Engineer", ()=>{
    describe("Initialization", ()=>{
        it("should generate an engineer object with the given Name, ID, and Email", ()=>{
            const name="Earl"
            const id=333
            const email="earl@ericmail.com"

            const Earl = new Engineer(name,id,email);

            expect(Earl.name).toEqual("Earl");
            expect(Earl.id).toEqual(333);
            expect(Earl.email).toEqual("earl@ericmail.com")
        })
    })
    describe("getGithub", ()=>{
        it("should return the github url with the supplied username", ()=>{
            const username = "EricaTheDev";
            
            const Erica = new Engineer("Erica", 231, "erica@ericmail.com", username);
            const ericagithub = Erica.getGithub();
            expect(ericagithub).toEqual("https://github.com/EricaTheDev");
        })
    })
    describe("inherited get functions", ()=>{
        it("should return supplied name, email, and id for given employee", ()=>{
            const name = "Estelle";
            const id = 44
            const email = "estelle@ericmail.com";

            const Estelle = new Engineer(name, id, email, "estellethesnell");
            estellname = Estelle.getName();
            estelleid = Estelle.getId();
            estelleemail = Estelle.getEmail();

            expect(estellname).toEqual("Estelle");
            expect(estelleid).toEqual(44);
            expect(estelleemail).toEqual("estelle@ericmail.com");
        })
    })
})