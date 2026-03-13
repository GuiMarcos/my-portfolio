import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '@shared/models/portfolio.model';
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

  protected readonly projects = computed<Project[]>(() => {
    const featuredRepos = this.githubService.getRepositoriesByNames(this.featuredRepoNames);
    const featuredSet = new Set(featuredRepos.map((repo) => repo.name));
    const extraRepos = this.githubService
      .getAllRepositories()
      .filter((repo) => !featuredSet.has(repo.name))
      .slice(0, this.carouselProjectsLimit);

    return [...featuredRepos, ...extraRepos]
      .slice(0, this.carouselProjectsLimit)
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
      );
  });
}
