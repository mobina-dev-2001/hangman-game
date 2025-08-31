import { createServer, Model, Factory } from 'miragejs';
import gameData from '../data/data.json';

export function makeServer({ environment = 'development' } = {}) {
  return createServer({
    environment,

    models: {
      word: Model,
    },

    factories: {
      word: Factory.extend({
        name: 'The Godfather',
        category: 'Movies',
        selected: false,
      }),
    },

    seeds(server) {
      Object.entries(gameData.categories).forEach(([categoryName, words]) => {
        words.forEach((word) => {
          server.create('word', {
            name: word.name,
            category: categoryName,
            selected: word.selected,
          });
        });
      });
    },

    routes() {
      this.namespace = 'api';
      this.timing = 200;

      this.get('/words', (schema) => {
        return {
          data: schema.words.all().models.map((word) => ({
            id: word.id,
            name: word.name,
            category: word.category,
            selected: word.selected,
          })),
        };
      });

      // Get words by category
      this.get('/words/category/:categoryName', (schema, request) => {
        const categoryName = decodeURIComponent(request.params.categoryName);
        const words = schema.words.where({ category: categoryName });

        return {
          data: words.models.map((word) => ({
            id: word.id,
            name: word.name,
            category: word.category,
            selected: word.selected,
          })),
        };
      });

      this.get('/categories', (schema) => {
        const allWords = schema.words.all().models;
        const categories = [...new Set(allWords.map((word) => word.category))];

        return {
          data: categories.map((categoryName) => {
            const wordsInCategory = allWords.filter((word) => word.category === categoryName);
            return {
              name: categoryName,
              wordCount: wordsInCategory.length,
            };
          }),
        };
      });

      this.patch('/words/:id', (schema, request) => {
        const word = schema.words.find(request.params.id);
        const attrs = JSON.parse(request.requestBody);

        word.update(attrs);

        return {
          data: {
            id: word.id,
            name: word.name,
            category: word.category,
            selected: word.selected,
          },
        };
      });
    },
  });
}
