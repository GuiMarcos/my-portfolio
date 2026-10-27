import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '@shared/models/portfolio.model';
import { GitHubRepo } from '@shared/models/github.model';
import { GitHubService } from '@core/services/github.service';
import { Carousel } from './components/carousel/carousel';

@Component({
  selector: 'app-portfolio',
  imports: [RouterLink, Carousel],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Portfolio {
  private readonly githubService = inject(GitHubService);
  private readonly carouselProjectsLimit = 10;

  readonly sectionTitle = 'Meus Projetos';
  readonly description =
    'Uma curadoria dos meus melhores trabalhos, refletindo minha expertise em desenvolvimento full stack, design responsivo e soluções escaláveis. Cada projeto representa desafios superados e aprendizados aplicados na prática.';
  readonly allProjectsLabel = 'Ver todos os projetos';

  // Estes 3 ficam em destaque no inicio. O restante e completado automaticamente.
  private readonly featuredRepoNames = ['StarbuckProj', 'CarSalesProj', 'ProjetoAnaliseDeSistemas'];

  private readonly candidateRepos = computed<GitHubRepo[]>(() => {
    const featuredRepos = this.githubService.getRepositoriesByNames(this.featuredRepoNames);
    const featuredSet = new Set(featuredRepos.map((repo) => repo.name));
    const extraRepos = this.githubService
      .getAllRepositories()
      .filter((repo) => !featuredSet.has(repo.name));

    return [...featuredRepos, ...extraRepos];
  });

  // Apenas repositorios com preview.png valido entram no carrossel.
  protected readonly projects = signal<Project[]>([]);

  constructor() {
    effect((onCleanup) => {
      const candidates = this.candidateRepos();
      let cancelled = false;
      onCleanup(() => (cancelled = true));

      void this.selectReposWithPreview(candidates).then((repos) => {
        if (!cancelled) this.projects.set(repos.map((repo) => this.toProject(repo)));
      });
    });
  }

  private async selectReposWithPreview(candidates: GitHubRepo[]): Promise<GitHubRepo[]> {
    const selected: GitHubRepo[] = [];

    // Verifica em lotes para nao baixar previews de todos os repositorios de uma vez.
    for (let start = 0; start < candidates.length; start += this.carouselProjectsLimit) {
      const batch = candidates.slice(start, start + this.carouselProjectsLimit);
      const checks = await Promise.all(
        batch.map((repo) =>
          this.githubService.hasPreviewImage(
            this.githubService.getPreviewImageUrl(repo.name, repo.default_branch),
          ),
        ),
      );

      selected.push(...batch.filter((_, index) => checks[index]));
      if (selected.length >= this.carouselProjectsLimit) break;
    }

    return selected.slice(0, this.carouselProjectsLimit);
  }

  private toProject(repo: GitHubRepo): Project {
    return {
      title: repo.name,
      description: repo.description || 'Sem descrição',
      previewUrl: this.githubService.getPreviewImageUrl(repo.name, repo.default_branch),
      techs: repo.topics.length > 0 ? repo.topics : repo.language ? [repo.language] : [],
      repositoryName: repo.name,
      language: repo.language,
      liveUrl: this.githubService.getRepositoryPublicUrl(repo),
    };
  }
}
