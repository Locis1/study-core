import { Component, OnInit, signal, computed, effect } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-backend-status',
  standalone: true, // Wichtig ab Angular 17+
  imports: [],
  templateUrl: './backend-status.html',
  styleUrls: ['./backend-status.css'],
})
export class BackendStatus implements OnInit {
  

  rawHtml = signal<string>('');
  healthData = signal<any>(null);

 
  safeHtml = computed(() => {
    return this.sanitizer.bypassSecurityTrustHtml(this.rawHtml());
  });

  constructor(
    private apiService: ApiService,
    private sanitizer: DomSanitizer
  ) {

    effect(() => {
      // console.log('HTML Changed:', this.rawHtml());
      console.log('Health Data changed:', this.healthData());
    });
  }

  ngOnInit(): void {
   
    this.apiService.getHtmlStatus().subscribe((html) => {
      this.rawHtml.set(html);
    });

   
    this.apiService.get_C_HealthStatus().subscribe((json) => {
      this.healthData.set(json);
    });
  }
}