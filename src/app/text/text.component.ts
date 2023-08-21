import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent {
  prompt: string = '';
  completedText: string = '';
  apiKey: string = ''; // Replace with your OpenAI API key

  constructor(private http: HttpClient) {}

  ccompleteText() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });
  
    const data = {
      model: 'text-davinci-003', // Choose the appropriate legacy model
      prompt: this.prompt,
      max_tokens: 50 // Adjust as needed
    };
  
    const endpoint = 'https://api.openai.com/v1/completions'; // api endpoint 
  
    this.http.post<any>(endpoint, data, { headers })
      .subscribe(response => {
        this.completedText = response.choices[0].text;
      }, error => {
        console.error('API Error:', error);
      });
  }
  
}
