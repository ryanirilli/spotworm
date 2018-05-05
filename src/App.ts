import * as express from 'express';
import * as path from 'path';

class App {
  constructor() {
    this.app = express();
    this.app.use(express.static(path.join(__dirname, '../client/build')));
    this.app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
  }

  public app: express.Application;
}

export default new App().app;
