export class Data {
    id: number;
    input: {address: string, amount: number,public_key: string,signature: [],timestamp: number};
    output: {};


  
    constructor(id: number,input:{address: string, amount: number,public_key: string,signature: [],timestamp: number},output: {}) {
      this.id = id;
      this.input = input;
      this.output = output;
    }
  }


  
  