import { UniqueEntityID } from "../../core/entities/unique-entity-id"
import { Answer } from "../entities/answer"
import { AnswareRepository } from "../repositories/answers-repository"

interface AnswerQuestionUseCaseRequest {
    instructorId: string
    questionId: string
    content: string
}

export class AnswerQuestionUseCase {
    constructor(
        private answersRepository: AnswareRepository
    ) {}

    async execute({instructorId, questionId, content}: AnswerQuestionUseCaseRequest) {
        const answer = Answer.create({
            content,
            authorId: new UniqueEntityID(instructorId),
            questionId: new UniqueEntityID(questionId)
        })

        await this.answersRepository.create(answer)

        return answer
    }
}
