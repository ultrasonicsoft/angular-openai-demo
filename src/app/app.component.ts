import { Component } from '@angular/core';
import { OpenAiService } from './open-ai.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-openai-demo';

  description = '';

  constructor(private openAiService: OpenAiService) { }

  getSuggestion(): void {
    this.openAiService.getSuggestion(this.description);
  }

}
