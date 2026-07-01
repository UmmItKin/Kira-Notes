import { defineConfig, presetUno, presetWebFonts } from 'unocss';

export default defineConfig({
	presets: [
		presetUno(),
		presetWebFonts({
			provider: 'google',
			fonts: {
				terminal: 'VT323',
				mono: 'Share Tech Mono',
			},
		}),
	],
	theme: {
		colors: {
			phosphor: '#39ff14',
			amber: '#ffbf00',
			terminal: '#031403',
			panel: '#061d06',
		},
	},
});
