import { Component, OnInit, signal, computed, effect, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ApiService } from '../../api/api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-backend-status',
  standalone: true,
  imports: [],
  templateUrl: './backend-status.html',
  styleUrls: ['./backend-status.css'],
})
export class BackendStatus implements OnInit {
  private destroyRef = inject(DestroyRef);

  rawHtml = signal<string>('');
  healthData = signal<any>(null);
  truthTableData = signal<any>(null);
  safeHtml = computed(() => {
    return this.sanitizer.bypassSecurityTrustHtml(this.rawHtml());
  });

  constructor(
    private apiService: ApiService,
    private sanitizer: DomSanitizer
  ) {
    effect(() => {
      console.log('Health Data changed:', this.healthData());
      console.log('Truth Table Data changed:', this.truthTableData());
    });
  }

  ngOnInit(): void {
    this.apiService.get_C_HealthStatus()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(json => {
        this.healthData.set(json);
      });

      this.apiService.get_truthTable_And()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(json => {
        this.truthTableData.set(json);
      });
  }
}