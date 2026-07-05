import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import frontMatter from 'front-matter';
import { Metadata } from './metadata';

@Component({
  selector: 'app-md-renderer',
  imports: [MarkdownComponent],
  templateUrl: './md-renderer.html',
  styleUrl: './md-renderer.css',
})
export class MdRenderer implements OnInit {
  private readonly _httpClient = inject(HttpClient);

  public mdContent = '';
  public metadata: Metadata = {};

 ngOnInit(): void {

    console.log('MD RENDERER STARTED');
  this._httpClient
    .get('/assets/tutorials/truth-table/truth-table.md', {
      responseType: 'text',
    })
    .subscribe({
      next: data => {
        console.log('RAW:', data);

        const fileContent = frontMatter(data);
        console.log('BODY:', fileContent.body);

        this.metadata = fileContent.attributes as Metadata;
        this.mdContent = fileContent.body;
      },
      error: err => {
        console.error('HTTP ERROR:', err);
      }
    });
}
}