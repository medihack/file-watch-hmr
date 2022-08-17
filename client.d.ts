declare const client: {
  applyClientHMR(callback: (changedFile: string) => void): void;
};

export = client;
