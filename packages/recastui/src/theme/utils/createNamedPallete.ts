export function createNamedPalette(name: string, palette: Record<string, string>) {
	const keys = Object.keys(palette).map((k, i) => `${name}${i+1}`);
	return Object.keys(palette).reduce((newPalette, key, index) => {
		newPalette[keys[index]] = palette[key];
		return newPalette;
	}, {} as Record<typeof keys[number], string>);
}
