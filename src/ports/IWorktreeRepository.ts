import { Worktree } from '../types';

export interface IWorktreeRepository {
  getAll(): Worktree[];
  get(id: string): Worktree | undefined;
  add(worktree: Worktree): Promise<void>;
  patch(id: string, fields: Partial<Worktree>): Promise<void>;
  setAlias(id: string, alias: string): Promise<void>;
  remove(id: string): Promise<void>;
  /** debug port registry, keyed by worktree PATH. */
  getPortRegistry(): Record<string, number>;

  /**
   * Drops the worktrees whose directory no longer exists, and returns the ones
   * that survive.
   *
   * On the port because the application decides *when* to reconcile the store
   * with the disk; the store only knows how.
   */
  pruneNonExistent(): Promise<Worktree[]>;
}
