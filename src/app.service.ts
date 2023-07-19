/* eslint-disable prettier/prettier */
import { Injectable, HttpException } from '@nestjs/common';
import * as elasticsearch from 'elasticsearch';

@Injectable()
export class AppService {
  private readonly esclient: elasticsearch.Client;

  constructor() {
    this.esclient = new elasticsearch.Client({
      host: 'localhost:9200', // Replace with your Elasticsearch cluster endpoint
    });

    this.esclient.ping({ requestTimeout: 3000 })
      .catch(err => {
        throw new HttpException(
          {
            status: 'error',
            message: 'Unable to reach Elasticsearch cluster',
          },
          500,
        );
      });
  }

  async bulkInsert(abilities: any[]) {
    const body = abilities.flatMap(ability => [
      { index: { _index: 'pokemons' } },
      ability,
    ]);

    try {
      const result = await this.esclient.bulk({
        body,
      });
      return { status: 'success', data: result };
    } catch (err) {
      throw new HttpException(err, 500);
    }
  }

  async searchIndex(q: string) {
    const body = {
      size: 200,
      from: 0,
      query: {
        match: {
          name: q,
        },
      },
    };
    try {
      const result = await this.esclient.search({
        index: 'pokemons',
        body,
      });
      return result.hits.hits;
    } catch (err) {
      throw new HttpException(err, 500);
    }
  }
}
