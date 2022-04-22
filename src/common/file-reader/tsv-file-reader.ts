import { readFileSync } from 'fs';
import { FileReaderInterface } from './file-reader.interface.js';

export default class TSVFileReader implements FileReaderInterface {
  rawData = '';

  constructor(public filename: string) { }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf8' });
  }
}
