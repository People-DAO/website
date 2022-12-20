import numbro from 'numbro';

export const formatPrice = (number: number): string => {
	return numbro(number)
		.format({
			// optionalMantissa: true,
			mantissa: number > 10 ? 2 : 5,
			average: true,
			lowPrecision: false
		})
		.toUpperCase();
};

export default formatPrice;
