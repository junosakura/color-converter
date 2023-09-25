class ColorConverter {

	constructor() {
		this.$form = document.forms.colorConverter;
	}

	init() {
		this.$form.addEventListener("input", this.inputForm.bind(this));
	}

	inputForm(event) {
		switch(event.target.name) {
			case "color": this.inputColor(); break;
			case "textHEX": this.inputTextHEX(); break;
			case "radioLetter": this.inputRadioLetter(); break;
			case "rangeRGB_R": this.inputRangeRGB(); break;
			case "rangeRGB_G": this.inputRangeRGB(); break;
			case "rangeRGB_B": this.inputRangeRGB(); break;
			case "rangeCMY_C": this.inputRangeCMY(); break;
			case "rangeCMY_M": this.inputRangeCMY(); break;
			case "rangeCMY_Y": this.inputRangeCMY(); break;
			case "rangeCMY_K": this.inputRangeCMY(); break;
			case "rangeHSV_H": this.inputRangeHSV(); break;
			case "rangeHSV_S": this.inputRangeHSV(); break;
			case "rangeHSV_V": this.inputRangeHSV(); break;
			case "rangeHSL_H": this.inputRangeHSL(); break;
			case "rangeHSL_S": this.inputRangeHSL(); break;
			case "rangeHSL_L": this.inputRangeHSL(); break;
			case "numberRGB_R": this.inputNumberRGB(); break;
			case "numberRGB_G": this.inputNumberRGB(); break;
			case "numberRGB_B": this.inputNumberRGB(); break;
			case "numberCMY_C": this.inputNumberCMY(); break;
			case "numberCMY_M": this.inputNumberCMY(); break;
			case "numberCMY_Y": this.inputNumberCMY(); break;
			case "numberCMY_K": this.inputNumberCMY(); break;
			case "numberHSV_H": this.inputNumberHSV(); break;
			case "numberHSV_S": this.inputNumberHSV(); break;
			case "numberHSV_V": this.inputNumberHSV(); break;
			case "numberHSL_H": this.inputNumberHSL(); break;
			case "numberHSL_S": this.inputNumberHSL(); break;
			case "numberHSL_L": this.inputNumberHSL(); break;
		}
	}

	inputColor() {
		const hex = this.getColor();
		const rgb = this.convHEXtoRGB(hex);
		const cmy = this.convRGBtoCMY(rgb);
		const hsv = this.convRGBtoHSV(rgb);
		const hsl = this.convRGBtoHSL(rgb);
		this.setValues(hex, rgb, cmy, hsv, hsl);
	}

	inputTextHEX() {
		const hex = this.getTextHEX();
		if (!hex) return false;
		const rgb = this.convHEXtoRGB(hex);
		const cmy = this.convRGBtoCMY(rgb);
		const hsv = this.convRGBtoHSV(rgb);
		const hsl = this.convRGBtoHSL(rgb);
		this.setValues(hex, rgb, cmy, hsv, hsl);
	}

	inputRadioLetter() {
		const hex = this.getTextHEX();
		this.setTextHEX(hex);
	}

	inputRangeRGB() {
		const rgb = this.getRangeRGB();
		const hex = this.convRGBtoHEX(rgb);
		const cmy = this.convRGBtoCMY(rgb);
		const hsv = this.convRGBtoHSV(rgb);
		const hsl = this.convRGBtoHSL(rgb);
		this.setValues(hex, rgb, cmy, hsv, hsl);
	}

	inputRangeCMY() {
		const cmy = this.getRangeCMY();
		const rgb = this.convCMYtoRGB(cmy);
		const hex = this.convRGBtoHEX(rgb);
		const hsv = this.convRGBtoHSV(rgb);
		const hsl = this.convRGBtoHSL(rgb);
		this.setValues(hex, rgb, cmy, hsv, hsl);
	}

	inputRangeHSV() {
		const hsv = this.getRangeHSV();
		const rgb = this.convHSVtoRGB(hsv);
		const hex = this.convRGBtoHEX(rgb);
		const cmy = this.convRGBtoCMY(rgb);
		const hsl = this.convRGBtoHSL(rgb);
		if (hsv[0] !== hsl[0]) hsl[0] = hsv[0];
		if (hsv[2] === 0) hsl[1] = hsv[1];
		this.setValues(hex, rgb, cmy, hsv, hsl);
	}

	inputRangeHSL() {
		const hsl = this.getRangeHSL();
		const rgb = this.convHSLtoRGB(hsl);
		const hex = this.convRGBtoHEX(rgb);
		const cmy = this.convRGBtoCMY(rgb);
		const hsv = this.convRGBtoHSV(rgb);
		if (hsl[0] !== hsv[0]) hsv[0] = hsl[0];
		if (hsl[2] === 0 || hsl[2] === 100) hsv[1] = hsl[1];
		this.setValues(hex, rgb, cmy, hsv, hsl);
	}

	inputNumberRGB() {
		const rgb = this.getNumberRGB();
		const hex = this.convRGBtoHEX(rgb);
		const cmy = this.convRGBtoCMY(rgb);
		const hsv = this.convRGBtoHSV(rgb);
		const hsl = this.convRGBtoHSL(rgb);
		this.setValues(hex, rgb, cmy, hsv, hsl);
	}

	inputNumberCMY() {
		const cmy = this.getNumberCMY();
		const rgb = this.convCMYtoRGB(cmy);
		const hex = this.convRGBtoHEX(rgb);
		const hsv = this.convRGBtoHSV(rgb);
		const hsl = this.convRGBtoHSL(rgb);
		this.setValues(hex, rgb, cmy, hsv, hsl);
	}

	inputNumberHSV() {
		const hsv = this.getNumberHSV();
		const rgb = this.convHSVtoRGB(hsv);
		const hex = this.convRGBtoHEX(rgb);
		const cmy = this.convRGBtoCMY(rgb);
		const hsl = this.convRGBtoHSL(rgb);
		if (hsv[0] !== hsl[0]) hsl[0] = hsv[0];
		if (hsv[2] === 0) hsl[1] = hsv[1];
		this.setValues(hex, rgb, cmy, hsv, hsl);
	}

	inputNumberHSL() {
		const hsl = this.getNumberHSL();
		const rgb = this.convHSLtoRGB(hsl);
		const hex = this.convRGBtoHEX(rgb);
		const cmy = this.convRGBtoCMY(rgb);
		const hsv = this.convRGBtoHSV(rgb);
		if (hsl[0] !== hsv[0]) hsv[0] = hsl[0];
		if (hsl[2] === 0 || hsl[2] === 100) hsv[1] = hsl[1];
		this.setValues(hex, rgb, cmy, hsv, hsl);
	}

	getColor() {
		return this.$form.color.value;
	}

	getTextHEX() {
		const value = this.$form.textHEX.value;
		return this.isHEX(value) ? value : null;
	}

	getRangeRGB() {
		const rgb = [];
		rgb[0] = Number(this.$form.rangeRGB_R.value);
		rgb[1] = Number(this.$form.rangeRGB_G.value);
		rgb[2] = Number(this.$form.rangeRGB_B.value);
		return rgb;
	}

	getRangeCMY() {
		const cmy = [];
		cmy[0] = Number(this.$form.rangeCMY_C.value);
		cmy[1] = Number(this.$form.rangeCMY_M.value);
		cmy[2] = Number(this.$form.rangeCMY_Y.value);
		return cmy;
	}

	getRangeHSV() {
		const hsv = [];
		hsv[0] = Number(this.$form.rangeHSV_H.value);
		hsv[1] = Number(this.$form.rangeHSV_S.value);
		hsv[2] = Number(this.$form.rangeHSV_V.value);
		return hsv;
	}

	getRangeHSL() {
		const hsl = [];
		hsl[0] = Number(this.$form.rangeHSL_H.value);
		hsl[1] = Number(this.$form.rangeHSL_S.value);
		hsl[2] = Number(this.$form.rangeHSL_L.value);
		return hsl;
	}

	getNumberRGB() {
		const rgb = [];
		rgb[0] = Number(this.$form.numberRGB_R.value);
		rgb[1] = Number(this.$form.numberRGB_G.value);
		rgb[2] = Number(this.$form.numberRGB_B.value);
		return rgb;
	}

	getNumberCMY() {
		const cmy = [];
		cmy[0] = Number(this.$form.numberCMY_C.value);
		cmy[1] = Number(this.$form.numberCMY_M.value);
		cmy[2] = Number(this.$form.numberCMY_Y.value);
		return cmy;
	}

	getNumberHSV() {
		const hsv = [];
		hsv[0] = Number(this.$form.numberHSV_H.value);
		hsv[1] = Number(this.$form.numberHSV_S.value);
		hsv[2] = Number(this.$form.numberHSV_V.value);
		return hsv;
	}

	getNumberHSL() {
		const hsl = [];
		hsl[0] = Number(this.$form.numberHSL_H.value);
		hsl[1] = Number(this.$form.numberHSL_S.value);
		hsl[2] = Number(this.$form.numberHSL_L.value);
		return hsl;
	}

	setValues(hex, rgb, cmy, hsv, hsl) {
		this.setColor(hex);
		this.setTextHEX(hex);
		this.setRangeRGB(rgb);
		this.setRangeCMY(cmy);
		this.setRangeHSV(hsv);
		this.setRangeHSL(hsl);
		this.setNumberRGB(rgb);
		this.setNumberCMY(cmy);
		this.setNumberHSV(hsv);
		this.setNumberHSL(hsl);
	}

	setColor(hex) {
		this.$form.color.value = hex;
	}

	setTextHEX(hex) {
		const checked = this.$form.radioLetter[0].checked;
		this.$form.textHEX.value = checked ? hex.toUpperCase() : hex.toLowerCase();
	}

	setRangeRGB(rgb) {
		this.$form.rangeRGB_R.value = rgb[0];
		this.$form.rangeRGB_G.value = rgb[1];
		this.$form.rangeRGB_B.value = rgb[2];
	}

	setRangeCMY(cmy) {
		this.$form.rangeCMY_C.value = cmy[0];
		this.$form.rangeCMY_M.value = cmy[1];
		this.$form.rangeCMY_Y.value = cmy[2];
	}

	setRangeHSV(hsv) {
		this.$form.rangeHSV_H.value = hsv[0];
		this.$form.rangeHSV_S.value = hsv[1];
		this.$form.rangeHSV_V.value = hsv[2];
	}

	setRangeHSL(hsl) {
		this.$form.rangeHSL_H.value = hsl[0];
		this.$form.rangeHSL_S.value = hsl[1];
		this.$form.rangeHSL_L.value = hsl[2];
	}

	setNumberRGB(rgb) {
		this.$form.numberRGB_R.value = rgb[0];
		this.$form.numberRGB_G.value = rgb[1];
		this.$form.numberRGB_B.value = rgb[2];
	}

	setNumberCMY(cmy) {
		this.$form.numberCMY_C.value = cmy[0];
		this.$form.numberCMY_M.value = cmy[1];
		this.$form.numberCMY_Y.value = cmy[2];
	}

	setNumberHSV(hsv) {
		this.$form.numberHSV_H.value = hsv[0];
		this.$form.numberHSV_S.value = hsv[1];
		this.$form.numberHSV_V.value = hsv[2];
	}

	setNumberHSL(hsl) {
		this.$form.numberHSL_H.value = hsl[0];
		this.$form.numberHSL_S.value = hsl[1];
		this.$form.numberHSL_L.value = hsl[2];
	}

	isHEX(value) {
		return /^#[0-9a-fA-F]{6}$/.test(value);
	}

	convHEXtoRGB(value) {
		const rgb = [];
		rgb[0] = parseInt(value.substr(1, 2), 16);
		rgb[1] = parseInt(value.substr(3, 2), 16);
		rgb[2] = parseInt(value.substr(5, 2), 16);
		return rgb;
	}

	convRGBtoHEX(rgb) {
		const r = rgb[0].toString(16).padStart(2, "0");
		const g = rgb[1].toString(16).padStart(2, "0");
		const b = rgb[2].toString(16).padStart(2, "0");
		return `#${r}${g}${b}`;
	}

	convRGBtoCMY(rgb) {
		const cmy = [];
		cmy[0] = Math.round((255 - rgb[0]) / 2.55);
		cmy[1] = Math.round((255 - rgb[1]) / 2.55);
		cmy[2] = Math.round((255 - rgb[2]) / 2.55);
		return cmy;
	}

	convRGBtoHSV(rgb) {
		const max = Math.max(...rgb);
		const min = Math.min(...rgb);
		const hsv = [];
		hsv[0] = this.calcRGBtoHSV_H(max, min, rgb);
		hsv[1] = this.calcRGBtoHSV_S(max, min);
		hsv[2] = this.calcRGBtoHSV_V(max);
		return hsv;
	}

	convRGBtoHSL(rgb) {
		const max = Math.max(...rgb);
		const min = Math.min(...rgb);
		const hsl = [];
		hsl[0] = this.calcRGBtoHSL_H(max, min, rgb);
		hsl[1] = this.calcRGBtoHSL_S(max, min);
		hsl[2] = this.calcRGBtoHSL_L(max, min);
		return hsl;
	}

	convCMYtoRGB(cmy) {
		const rgb = [];
		rgb[0] = Math.round((100 - cmy[0]) * 2.55);
		rgb[1] = Math.round((100 - cmy[1]) * 2.55);
		rgb[2] = Math.round((100 - cmy[2]) * 2.55);
		return rgb;
	}

	convHSVtoRGB(hsv) {
		const max = this.calcHSVtoMax(hsv);
		const min = this.calcHSVtoMin(hsv);
		const rgb = [];
		rgb[0] = this.calcHSVtoRGB_R(max, min, hsv);
		rgb[1] = this.calcHSVtoRGB_G(max, min, hsv);
		rgb[2] = this.calcHSVtoRGB_B(max, min, hsv);
		return rgb;
	}

	convHSLtoRGB(hsl) {
		const max = this.calcHSLtoMax(hsl);
		const min = this.calcHSLtoMin(hsl);
		const rgb = [];
		rgb[0] = this.calcHSLtoRGB_R(max, min, hsl);
		rgb[1] = this.calcHSLtoRGB_G(max, min, hsl);
		rgb[2] = this.calcHSLtoRGB_B(max, min, hsl);
		return rgb;
	}

	calcRGBtoHSV_H(max, min, rgb) {
		if (max === min) {
			return 0;
		}
		if (max === rgb[0]) {
			const a = Math.round((rgb[1] - rgb[2]) / (max - min) * 60);
			return a < 0 ? a + 360 : a;
		}
		if (max === rgb[1]) {
			const a = Math.round((rgb[2] - rgb[0]) / (max - min) * 60) + 120;
			return a < 0 ? a + 360 : a;
		}
		if (max === rgb[2]) {
			const a = Math.round((rgb[0] - rgb[1]) / (max - min) * 60) + 240;
			return a < 0 ? a + 360 : a;
		}
	}

	calcRGBtoHSV_S(max, min) {
		return max === min ? 0 : Math.round((max - min) / max * 100);
	}

	calcRGBtoHSV_V(max) {
		return Math.round(max / 2.55);
	}

	calcRGBtoHSL_H(max, min, rgb) {
		return this.calcRGBtoHSV_H(max, min, rgb);
	}

	calcRGBtoHSL_S(max, min) {
		if (max === min) {
			return 0;
		}
		if ((max + min) / 2 < 128) {
			return Math.round((max - min) / (max + min) * 100);
		}
		else {
			return Math.round((max - min) / (510 - (max + min)) * 100);
		}
	}

	calcRGBtoHSL_L(max, min) {
		return Math.round((max + min) / 2 / 2.55);
	}

	calcHSVtoMax(hsv) {
		return Math.round(hsv[2] * 2.55);
	}

	calcHSVtoMin(hsv) {
		const s = hsv[1] * 2.55;
		const v = hsv[2] * 2.55;
		return Math.round(v - s / 255 * v);
	}

	calcHSVtoRGB_R(max, min, hsv) {
		const h = hsv[0];
		if (h <= 60) return max;
		if (h <= 120) return Math.round(((120 - h) / 60) * (max - min) + min);
		if (h <= 240) return min;
		if (h <= 300) return Math.round(((h - 240) / 60) * (max - min) + min);
		if (h <= 360) return max;
		return null;
	}

	calcHSVtoRGB_G(max, min, hsv) {
		const h = hsv[0];
		if (h <= 60) return Math.round((h / 60) * (max - min) + min);
		if (h <= 180) return max;
		if (h <= 240) return Math.round(((240 - h) / 60) * (max - min) + min);
		if (h <= 360) return min;
		return null;
	}

	calcHSVtoRGB_B(max, min, hsv) {
		const h = hsv[0];
		if (h <= 120) return min;
		if (h <= 180) return Math.round(((h - 120) / 60) * (max - min) + min);
		if (h <= 300) return max;
		if (h <= 360) return Math.round(((360 - h) / 60) * (max - min) + min);
		return null;
	}

	calcHSLtoMax(hsl) {
		const s = hsl[1];
		const l = hsl[2];
		const a = l < 50 ? l : 100 - l;
		return Math.round((l + a * (s / 100)) * 2.55);
	}

	calcHSLtoMin(hsl) {
		const s = hsl[1];
		const l = hsl[2];
		const a = l < 50 ? l : 100 - l;
		return Math.round((l - a * (s / 100)) * 2.55);
	}

	calcHSLtoRGB_R(max, min, hsl) {
		return this.calcHSVtoRGB_R(max, min, hsl);
	}

	calcHSLtoRGB_G(max, min, hsl) {
		return this.calcHSVtoRGB_G(max, min, hsl);
	}

	calcHSLtoRGB_B(max, min, hsl) {
		return this.calcHSVtoRGB_B(max, min, hsl);
	}

}

window.addEventListener("DOMContentLoaded", () => {
	"use strict";
	const app = new ColorConverter();
	app.init();
});
