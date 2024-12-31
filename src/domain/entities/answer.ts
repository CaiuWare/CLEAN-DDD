import { Entity } from "../../core/entities/entity"

interface AnswareProps {
    content: string
    authorId: string
    questionId: string
}
export class Answer extends Entity<AnswareProps> {
    get content() {
        return this.props.content
    }


}