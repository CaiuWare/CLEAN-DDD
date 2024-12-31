import { Slug } from "./value-objects/slug"
import { Entity } from "../../core/entities/entity"
import { UniqueEntityID } from "../../core/entities/unique-entity-id"
import { Optional } from "../../core/entities/types/optional"
import dayjs from "dayjs"

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
    get isNew():boolean {
        return dayjs().diff(this.createAt, 'days') <= 3
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
    set bestAnswerId(bestAnswerId: UniqueEntityID) {
        this.props.bestAnswareId = bestAnswerId
        this.touch()
    }
    set title(title: string) {
        this.props.title = title
        this.props.slug = Slug.createFromText(title)
        this.touch()
    }

    
    static create(props: Optional<QuestionProps, 'createAt' | 'slug'>, id?: UniqueEntityID) {
        const question = new Question({...props,
            slug: props.slug ?? Slug.createFromText(props.title),
            createAt: new Date()
        }, id)

        return question
    }
}
