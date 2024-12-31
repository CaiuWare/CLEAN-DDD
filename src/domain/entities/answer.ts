import { Entity } from "../../core/entities/entity"
import { Optional } from "../../core/entities/types/optional"
import { UniqueEntityID } from "../../core/entities/unique-entity-id"

interface AnswerProps {
    authorId: UniqueEntityID
    questionId: UniqueEntityID
    content: string
    createAt: Date
    updateAt?: Date
}
export class Answer extends Entity<AnswerProps> {
    get content() {
        return this.props.content
    }

        static create(props: Optional<AnswerProps, 'createAt'>, id?: UniqueEntityID) {
            const answer = new Answer({...props,
                createAt: new Date()
            }, id)
    
            return answer
        }


}