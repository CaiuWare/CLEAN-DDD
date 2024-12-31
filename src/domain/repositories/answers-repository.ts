import { Answer } from "../entities/answer";

export interface AnswareRepository {
    create(answer: Answer): Promise<void>
}