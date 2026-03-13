import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../shared/models/portfolio.model';
import { GitHubService } from '../../core/services/github.service';

@Component({
  selector: 'app-portfolio',
  imports: [RouterLink],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Portfolio {
  private readonly githubService = inject(GitHubService);
  private readonly fallbackPreviewUrl = 'https://placehold.co/800x500/424144/f5f5f5?text=Preview+indisponivel';
  readonly sectionTitle = 'Meus Projetos';
  readonly description =
    'Uma curadoria dos meus melhores trabalhos, refletindo minha expertise em desenvolvimento full stack, design responsivo e soluções escaláveis. Cada projeto representa desafios superados e aprendizados aplicados na prática.';
  readonly allProjectsLabel = 'Ver todos os projetos';

  private readonly featuredRepoNames = ['StarbuckProj', 'CarSalesProj', 'ProjetoAnaliseDeSistemas'];

  protected readonly projects = computed(() => {
    const repos = this.githubService.getRepositoriesByNames(this.featuredRepoNames);
    return repos
      .map(
        (repo) =>
          ({
            title: repo.name,
            description: repo.description || 'Sem descrição',
            previewUrl: this.githubService.getPreviewImageUrl(repo.name, repo.default_branch),
            techs: repo.topics.length > 0 ? repo.topics : repo.language ? [repo.language] : [],
            repositoryName: repo.name,
            language: repo.language,
            liveUrl: repo.html_url,
          }) as Project,
      )
      .slice(0, 3);
  });

  protected onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img.src === this.fallbackPreviewUrl) return;
    img.src = this.fallbackPreviewUrl;
    img.classList.add('is-fallback');
  }
}
