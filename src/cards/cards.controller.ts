import { Controller, Get } from '@nestjs/common';
import { CardsService } from './cards.service';
import { Card } from 'src/interfaces/card.interface';

@Controller('cards')
export class CardsController {
    constructor(private cardsService: CardsService){}

    @Get()
    async getCards() : Promise<Card[]> {
        const cards = await this.cardsService.getCards();
        return cards;
    }

}
