import { ErrorItem } from "../data/errors";

interface InvertedIndex {
  [key: string]: Set<string>;
}

class SearchIndex {
  private invertedIndex: InvertedIndex = {};
  private normalizedCache: Map<string, string> = new Map();
  private indexedErrors: ErrorItem[] = [];

  /**
   * Normalize Vietnamese strings by removing tones and diacritics
   * Uses memoization to cache results
   */
  normalizeString(str: string): string {
    if (!str) return "";

    // Check cache first
    if (this.normalizedCache.has(str)) {
      return this.normalizedCache.get(str)!;
    }

    const normalized = str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D")
      .toLowerCase()
      .trim();

    // Store in cache
    this.normalizedCache.set(str, normalized);
    return normalized;
  }

  /**
   * Extract and tokenize text into searchable keywords
   */
  private tokenize(text: string): string[] {
    const normalized = this.normalizeString(text);
    if (!normalized) return [];

    // Split by spaces and special characters, filter out empty tokens
    return normalized
      .split(/[\s\W]+/)
      .filter((token) => token.length > 0);
  }

  /**
   * Build inverted index from error list
   * Maps keywords to error IDs for O(1) lookup
   */
  buildIndex(errors: ErrorItem[]): void {
    this.invertedIndex = {};
    this.indexedErrors = errors;

    errors.forEach((error) => {
      const errorId = error.id;

      // Tokenize code, title, and description
      const codeTokens = this.tokenize(error.code || "");
      const titleTokens = this.tokenize(error.title || "");
      const descTokens = this.tokenize(error.description || "");

      // Add all tokens to inverted index
      [...new Set([...codeTokens, ...titleTokens, ...descTokens])].forEach(
        (token) => {
          if (!this.invertedIndex[token]) {
            this.invertedIndex[token] = new Set();
          }
          this.invertedIndex[token].add(errorId);
        }
      );
    });
  }

  /**
   * Search for errors by keyword
   * Returns unique errors that match the keyword
   * O(k) where k is number of matching tokens, much faster than O(n) filtering
   */
  search(keyword: string): ErrorItem[] {
    if (!keyword.trim()) {
      return this.indexedErrors;
    }

    const normalized = this.normalizeString(keyword);
    if (!normalized) {
      return this.indexedErrors;
    }

    const tokens = this.tokenize(keyword);
    if (tokens.length === 0) {
      return this.indexedErrors;
    }

    // Collect all error IDs that match any token
    const matchingIds = new Set<string>();

    tokens.forEach((token) => {
      if (this.invertedIndex[token]) {
        this.invertedIndex[token].forEach((id) => {
          matchingIds.add(id);
        });
      }
    });

    // Return errors in original order
    return this.indexedErrors.filter((error) => matchingIds.has(error.id));
  }

  /**
   * Get all indexed errors
   */
  getIndexedErrors(): ErrorItem[] {
    return this.indexedErrors;
  }

  /**
   * Clear the index
   */
  clear(): void {
    this.invertedIndex = {};
    this.normalizedCache.clear();
    this.indexedErrors = [];
  }

  /**
   * Get cache statistics (for debugging)
   */
  getStats(): {
    indexSize: number;
    cacheSize: number;
    errorCount: number;
  } {
    return {
      indexSize: Object.keys(this.invertedIndex).length,
      cacheSize: this.normalizedCache.size,
      errorCount: this.indexedErrors.length,
    };
  }
}

// Export singleton instance
export const searchIndex = new SearchIndex();
export default SearchIndex;
