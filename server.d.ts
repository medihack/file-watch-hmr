declare const server: {
  applyServerHMR(callback: (changedFile: string) => void): void;
};

export = server;
