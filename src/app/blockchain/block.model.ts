import { Data } from "./data.model";

export class Block {
    data: Data[];
    difficulty: number;
    hash: string;
    last_hash: string;
    nonce: number;
    timestamp: number;


    constructor(data: Data[],difficulty:number,hash:string,last_hash: string,nonce: number,timestamp: number) {
      this.data = data;
      this.difficulty = difficulty;
      this.hash = hash;
      this.last_hash = last_hash;
      this.nonce = nonce;
      this.timestamp = timestamp;
    }
  }



