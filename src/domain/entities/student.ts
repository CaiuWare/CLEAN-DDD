import { Entity } from "../../core/entities/entity"
import { UniqueEntityID } from "../../core/entities/unique-entity-id"

interface StudentPrpos {
    name: string
}
export class Student extends Entity<StudentPrpos> {

        static create(props: StudentPrpos, id?: UniqueEntityID) {
            const student = new Student(props, id)
    
            return student
        }

}