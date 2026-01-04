/// <reference types="vite/client" />

interface ViteTypeOptions {
	// strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
	readonly VITE_IS_PREVIEW: boolean
	readonly VITE_BUILD_TIMESTAMP: number
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
