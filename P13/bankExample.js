class HouseHold {
    persons = [];
    cars = []
    houses = []

    addPerson(person) {
        this.persons.push(person)
    }
}


const client = new HouseHold();
client.addPerson({name: 'Tomas', personalCode: 39011011234 })
client.addPerson({name: 'Renata', personalCode: 49011011234 })

const obj = {

}