export class FileWatchHMRPlugin {
  static addListener(callback: (changeFile: string) => void): void;

  constructor(options: { files: string[]; folders: string[] });
}
