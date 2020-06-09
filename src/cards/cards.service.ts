/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@nestjs/common';
import { Card } from 'src/interfaces/card.interface';
import { Answer } from 'src/interfaces/answer.interface';
import { Message } from 'src/interfaces/message.interface';

@Injectable()
export class CardsService {
    answers: Answer[] = [];

        cards = [
            {id:1, question:'Question1?', answer:'Response1'},
            {id:2, question:'Question2?', answer:'Response2'},
            {id:3, question:'Question3?', answer:'Response3'},
            {id:4, question:'Question4?', answer:'Response4'}
        ];


        getCards():Promise<Card[]> {
            return new Promise(resolve => {
                resolve(this.selectCardsUsedFailedToAnswer());
        })
    }

    selectCardsUsedFailedToAnswer() {
        // this first time, send all cards as user didn't have a chance to answer right or wrong
        if (this.answers.length === 0) return this.cards;
        const cardsUserFailedToAnswer = this.answers.filter(c => c.isRight === false);
        return cardsUserFailedToAnswer.map(c => c.card);
    }

    saveAnswer(answers): Promise<Message> {
        return new Promise(resolve => {
            this.answers = answers;
            resolve({msg:'answers saved', date: new Date().toISOString()})
        });
    }

    resetGame(): Promise<Message> {
        return new Promise(resolve => {
            this.answers = [];
            resolve({msg:'new game', date: new Date().toISOString()});
        })
    }
}
