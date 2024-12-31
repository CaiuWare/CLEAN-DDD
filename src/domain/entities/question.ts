import { Slug } from "./value-objects/slug"
import { Entity } from "../../core/entities/entity"
import { UniqueEntityID } from "../../core/entities/unique-entity-id"
import { Optional } from "../../core/entities/types/optional"

interface QuestionProps { 
    authorId: string
    bestAnswareId?: UniqueEntityID
    title: string
    content: string
    slug: Slug
    createAt: Date
    updateAt?: Date
}
export class Question extends Entity<QuestionProps> {
    get authorId() {
        return this.props.authorId
    }
    get bestAnswareId() {
        return this.props.bestAnswareId
    }
    get title() {
        return this.props.title
    }
    get content() {
        return this.props.content
    }
    get slug() {
        return this.props.slug
    }
    get createAt() {
        return this.props.createAt
    }
    get updateAt() {
        return this.props.updateAt
    }
    
    static create(props: Optional<QuestionProps, 'createAt'>, id?: UniqueEntityID) {
        const question = new Question({...props,
            createAt: new Date()
        }, id)

        return question
    }
}
