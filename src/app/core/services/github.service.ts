import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  topics: string[];
  default_branch: string;
}

@Injectable({
  providedIn: 'root',
})
export class GitHubService {
  private readonly http = inject(HttpClient);
  private readonly GITHUB_USERNAME = 'GuiMarcos';
  private readonly API_URL = `https://api.github.com/users/${this.GITHUB_USERNAME}/repos`;

  readonly repositories = signal<GitHubRepo[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  constructor() {
    this.fetchRepositories();
  }

  private fetchRepositories(): void {
    this.loading.set(true);
    this.http
      .get<GitHubRepo[]>(this.API_URL, { params: { sort: 'updated', per_page: '100' } })
      .subscribe({
        next: (repos) => {
          this.repositories.set(repos);
          this.loading.set(false);
        },
        error: (err) => {
          console.error('Erro ao buscar repositórios do GitHub:', err);
          this.error.set('Erro ao carregar repositórios do GitHub');
          this.loading.set(false);
        },
      });
  }

  getRepositoriesByNames(names: string[]): GitHubRepo[] {
    return this.repositories()
      .filter((repo) => names.includes(repo.name))
      .sort((a, b) => names.indexOf(a.name) - names.indexOf(b.name));
  }

  getAllRepositories(): GitHubRepo[] {
    return this.repositories().filter((repo) => !repo.name.startsWith('.'));
  }

  getPreviewImageUrl(repoName: string, branch = 'main'): string {
    return `https://raw.githubusercontent.com/${this.GITHUB_USERNAME}/${repoName}/${branch}/preview.png`;
  }
}
