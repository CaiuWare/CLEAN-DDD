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
    get authorId() {
        return this.props.authorId
    }
    get questionId() {
        return this.props.questionId
    }
    get content() {
        return this.props.content
    }
    get createAt() {
        return this.props.createAt
    }
    get updateAt() {
        return this.props.updateAt
    }

    get excerpt() {
        return this.content
        .substring(0, 120)
        .trimEnd()
        .concat('...')
    }

    private touch(){
        this.props.updateAt = new Date()
    }
    set content(content: string) {
        this.props.content = content
        this.touch()
    }


    static create(props: Optional<AnswerProps, 'createAt'>, id?: UniqueEntityID) {
        const answer = new Answer({...props,
            createAt: new Date()
        }, id)
    
        return answer
    }


}