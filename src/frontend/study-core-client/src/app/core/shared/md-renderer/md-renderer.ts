import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import frontMatter from 'front-matter';
import { Metadata } from './metadata';

@Component({
  selector: 'app-md-renderer',
  imports: [MarkdownComponent],
  templateUrl: './md-renderer.html',
  styleUrl: './md-renderer.css',
  encapsulation: ViewEncapsulation.None,
})
export class MdRenderer implements OnInit {
  private readonly http = inject(HttpClient);

  mdContent = signal('');
  metadata = signal<Metadata>({});

  ngOnInit(): void {
    this.http
      .get('/assets/tutorials/truth-table/truth-table.md', {
        responseType: 'text',
      })
      .subscribe(data => {
        const fileContent = frontMatter(data);

        this.metadata.set(fileContent.attributes as Metadata);
        this.mdContent.set(fileContent.body);
      });
  }
}