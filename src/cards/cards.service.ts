/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@nestjs/common';
import { Card } from 'src/interfaces/card.interface';
import { Answer } from 'src/interfaces/answer.interface';

@Injectable()
export class CardsService {
    answers: Answer[] = [];

    getCards():Promise<Card[]> {
        const cards = [
            {id:1, question:'Question1?', answer:'Response1'},
            {id:2, question:'Question2?', answer:'Response2'}
        ];
        return new Promise(resolve => {
            resolve(cards);
        })
    }

    saveAnswer(answers): Promise<{msg:string,date:string}> {
        return new Promise(resolve => {
            this.answers = answers;
            resolve({msg:'answers saved', date: new Date().toISOString()})
        });
    }
}
