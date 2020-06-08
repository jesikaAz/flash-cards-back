import { Injectable } from '@nestjs/common';
import { Card } from 'src/interfaces/card.interface';

@Injectable()
export class CardsService {
    getCards():Promise<Card[]> {
        const cards = [
            {id:1, question:'Question1?', answer:'Response1'},
            {id:2, question:'Question2?', answer:'Response2'}
        ];
        return new Promise(resolve => {
            resolve(cards);
        })
    }
}
