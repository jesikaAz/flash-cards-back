/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Get, Body, Post } from '@nestjs/common';
import { CardsService } from './cards.service';
import { Card } from 'src/interfaces/card.interface';
import { SaveAnswerDto } from './dto/save-answer.dto';
import { FlagDto } from './dto/flag.dto';

@Controller('cards')
export class CardsController {
    constructor(private cardsService: CardsService){}

    @Get()
    async getCards() : Promise<Card[]> {
        const cards = await this.cardsService.getCards();
        return cards;
    }

    @Post('reset')
    async resetGame(@Body() flag:FlagDto) {
        if (flag.reset) {
            const result = await this.cardsService.resetGame();
            return result;
        } else {
            return { msg : 'message error', date: new Date().toISOString()};
        }
    }

    @Post()
    async saveAnswer (@Body() saveAnswersDto: SaveAnswerDto) {
        const result = await this.cardsService.saveAnswer(saveAnswersDto);
        console.log('saveAnswer result', result);
        return result;
    }

}
