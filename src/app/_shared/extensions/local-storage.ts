export class LocalStorageExtention {

  static get(key: string): any {
    const value = localStorage.getItem(key);
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }

  static set(key: string, value: any): void {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  static getToken(): string { return localStorage.getItem('token'); }

  static setToken(token: string): void { localStorage.setItem('token', token); }

  static deleteToken(token: string): void { localStorage.removeItem('token'); }

}
