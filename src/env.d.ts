interface ImportMetaEnv {
  readonly VITE_API_URI: string;
  readonly VITE_API_VERSION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
