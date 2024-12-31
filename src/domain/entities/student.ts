import { Entity } from "../../core/entities/entity"

interface StudentPrpos {
    name: string
}
export class Student extends Entity<StudentPrpos> {

}