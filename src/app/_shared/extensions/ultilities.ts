export class Utilities {
  static firstCharToLower(value: string): string {
    return value.replace(/^[A-Z]/g, (s: string) => s[0].toLowerCase());
  }

  static firstCharToUpper(value: string): string {
    return value.replace(/^[a-z]/g, (s: string) => s[0].toUpperCase());
  }
}
