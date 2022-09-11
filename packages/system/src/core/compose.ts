import { createParser, Parser } from './parser';

export const compose = (...parsers: Parser[]) => {
	const config = parsers.reduce((acc: Parser, parser: Parser) => {
		if (!parser || !parser.config) return acc;
		return { ...acc, ...parser.config };
	}, {} as Parser);

	return createParser(config);
};
