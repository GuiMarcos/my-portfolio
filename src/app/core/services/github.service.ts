import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitHubRepo } from '@shared/models/github.model';
import { githubUsername } from '@shared/config/profile-links';

@Injectable({
  providedIn: 'root',
})
export class GitHubService {
  private readonly http = inject(HttpClient);
  private readonly GITHUB_USERNAME = githubUsername;
  private readonly API_URL = `https://api.github.com/users/${this.GITHUB_USERNAME}/repos`;
  private readonly cacheKey = 'github_repositories_cache_v1';
  private readonly cacheTtlMs = 1000 * 60 * 30;

  readonly repositories = signal<GitHubRepo[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  constructor() {
    const cachedRepos = this.readCache();
    if (cachedRepos) {
      this.repositories.set(cachedRepos);
      return;
    }

    this.fetchRepositories();
  }

  private fetchRepositories(): void {
    if (this.loading()) {
      return;
    }

    this.loading.set(true);
    this.http
      .get<GitHubRepo[]>(this.API_URL, { params: { sort: 'updated', per_page: '100' } })
      .subscribe({
        next: (repos) => {
          this.repositories.set(repos);
          this.writeCache(repos);
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

  getRepositoryPublicUrl(repo: GitHubRepo): string {
    const homepage = this.normalizeExternalUrl(repo.homepage);
    return homepage || repo.html_url;
  }

  private normalizeExternalUrl(url: string | null): string | null {
    if (!url) return null;

    const trimmed = url.trim();
    if (!trimmed) return null;

    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
      return trimmed;
    }

    return `https://${trimmed}`;
  }

  private readCache(): GitHubRepo[] | null {
    if (typeof sessionStorage === 'undefined') {
      return null;
    }

    try {
      const raw = sessionStorage.getItem(this.cacheKey);
      if (!raw) {
        return null;
      }

      const parsed = JSON.parse(raw) as { expiresAt: number; repos: GitHubRepo[] };
      if (!parsed?.expiresAt || !Array.isArray(parsed.repos)) {
        sessionStorage.removeItem(this.cacheKey);
        return null;
      }

      if (Date.now() > parsed.expiresAt) {
        sessionStorage.removeItem(this.cacheKey);
        return null;
      }

      return parsed.repos;
    } catch {
      sessionStorage.removeItem(this.cacheKey);
      return null;
    }
  }

  private writeCache(repos: GitHubRepo[]): void {
    if (typeof sessionStorage === 'undefined') {
      return;
    }

    try {
      sessionStorage.setItem(
        this.cacheKey,
        JSON.stringify({
          expiresAt: Date.now() + this.cacheTtlMs,
          repos,
        }),
      );
    } catch {
      // Ignore quota/storage errors and keep network path as fallback.
    }
  }
}
