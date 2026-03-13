import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { GitHubService } from '@core/services/github.service';
import { Project } from '@shared/models/portfolio.model';

@Component({
  selector: 'app-all-projects',
  imports: [],
  templateUrl: './all-projects.html',
  styleUrl: './all-projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllProjectsComponent {
  private readonly githubService = inject(GitHubService);
  private readonly fallbackPreviewUrl = 'https://placehold.co/800x500/424144/f5f5f5?text=Preview+indisponivel';

  protected readonly allProjects = computed(() =>
    this.githubService.getAllRepositories().map(
      (repo) =>
        ({
          title: repo.name,
          description: repo.description || 'Sem descrição',
          previewUrl: this.githubService.getPreviewImageUrl(repo.name, repo.default_branch),
          techs: repo.topics.length > 0 ? repo.topics : repo.language ? [repo.language] : [],
          repositoryName: repo.name,
          language: repo.language,
          liveUrl: this.githubService.getRepositoryPublicUrl(repo),
        }) as Project,
    ),
  );

  protected onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img.src === this.fallbackPreviewUrl) return;
    img.src = this.fallbackPreviewUrl;
    img.classList.add('is-fallback');
  }
}
