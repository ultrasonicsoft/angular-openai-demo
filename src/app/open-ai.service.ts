import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from "openai";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class OpenAiService {

  readonly configuration = new Configuration({
    apiKey: environment.openAIKey
  });

  readonly openai = new OpenAIApi(this.configuration);

  constructor() { }

  async getSuggestion(input: string) {
    const suggestion = await this.openai.createCompletion({
      model: 'text-davinci-002',
      prompt: input,
      max_tokens: 256
    });
    console.debug('🔥 suggestion', suggestion.data.choices[0].text);
  }
}
