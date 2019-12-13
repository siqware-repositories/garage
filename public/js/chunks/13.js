(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/@xkeshi/vue-barcode/dist/vue-barcode.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@xkeshi/vue-barcode/dist/vue-barcode.esm.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * vue-barcode v1.0.0
 * https://xkeshi.github.io/vue-barcode
 *
 * Copyright 2017-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2018-06-20T05:51:52.635Z
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Barcode = function Barcode(data, options) {
	classCallCheck(this, Barcode);

	this.data = data;
	this.text = options.text || data;
	this.options = options;
};

// Encoding documentation:

var CODE39 = function (_Barcode) {
	inherits(CODE39, _Barcode);

	function CODE39(data, options) {
		classCallCheck(this, CODE39);

		data = data.toUpperCase();

		// Calculate mod43 checksum if enabled
		if (options.mod43) {
			data += getCharacter(mod43checksum(data));
		}

		return possibleConstructorReturn(this, (CODE39.__proto__ || Object.getPrototypeOf(CODE39)).call(this, data, options));
	}

	createClass(CODE39, [{
		key: "encode",
		value: function encode() {
			// First character is always a *
			var result = getEncoding("*");

			// Take every character and add the binary representation to the result
			for (var i = 0; i < this.data.length; i++) {
				result += getEncoding(this.data[i]) + "0";
			}

			// Last character is always a *
			result += getEncoding("*");

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/) !== -1;
		}
	}]);
	return CODE39;
}(Barcode);

// All characters. The position in the array is the (checksum) value


var characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", ".", " ", "$", "/", "+", "%", "*"];

// The decimal representation of the characters, is converted to the
// corresponding binary with the getEncoding function
var encodings = [20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645, 29975, 23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301, 30023, 23879, 30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385, 29015, 18263, 29141, 17879, 29045, 18293, 17783, 29021, 18269, 17477, 17489, 17681, 20753, 35770];

// Get the binary representation of a character by converting the encodings
// from decimal to binary
function getEncoding(character) {
	return getBinary(characterValue(character));
}

function getBinary(characterValue) {
	return encodings[characterValue].toString(2);
}

function getCharacter(characterValue) {
	return characters[characterValue];
}

function characterValue(character) {
	return characters.indexOf(character);
}

function mod43checksum(data) {
	var checksum = 0;
	for (var i = 0; i < data.length; i++) {
		checksum += characterValue(data[i]);
	}

	checksum = checksum % 43;
	return checksum;
}

var _SET_BY_CODE;

// constants for internal usage
var SET_A = 0;
var SET_B = 1;
var SET_C = 2;

// Special characters
var SHIFT = 98;
var START_A = 103;
var START_B = 104;
var START_C = 105;
var MODULO = 103;
var STOP = 106;
var FNC1 = 207;

// Get set by start code
var SET_BY_CODE = (_SET_BY_CODE = {}, defineProperty(_SET_BY_CODE, START_A, SET_A), defineProperty(_SET_BY_CODE, START_B, SET_B), defineProperty(_SET_BY_CODE, START_C, SET_C), _SET_BY_CODE);

// Get next set by code
var SWAP = {
	101: SET_A,
	100: SET_B,
	99: SET_C
};

var A_START_CHAR = String.fromCharCode(208); // START_A + 105
var B_START_CHAR = String.fromCharCode(209); // START_B + 105
var C_START_CHAR = String.fromCharCode(210); // START_C + 105

// 128A (Code Set A)
// ASCII characters 00 to 95 (0–9, A–Z and control codes), special characters, and FNC 1–4
var A_CHARS = "[\x00-\x5F\xC8-\xCF]";

// 128B (Code Set B)
// ASCII characters 32 to 127 (0–9, A–Z, a–z), special characters, and FNC 1–4
var B_CHARS = "[\x20-\x7F\xC8-\xCF]";

// 128C (Code Set C)
// 00–99 (encodes two digits with a single code point) and FNC1
var C_CHARS = "(\xCF*[0-9]{2}\xCF*)";

// CODE128 includes 107 symbols:
// 103 data symbols, 3 start symbols (A, B and C), and 1 stop symbol (the last one)
// Each symbol consist of three black bars (1) and three white spaces (0).
var BARS = [11011001100, 11001101100, 11001100110, 10010011000, 10010001100, 10001001100, 10011001000, 10011000100, 10001100100, 11001001000, 11001000100, 11000100100, 10110011100, 10011011100, 10011001110, 10111001100, 10011101100, 10011100110, 11001110010, 11001011100, 11001001110, 11011100100, 11001110100, 11101101110, 11101001100, 11100101100, 11100100110, 11101100100, 11100110100, 11100110010, 11011011000, 11011000110, 11000110110, 10100011000, 10001011000, 10001000110, 10110001000, 10001101000, 10001100010, 11010001000, 11000101000, 11000100010, 10110111000, 10110001110, 10001101110, 10111011000, 10111000110, 10001110110, 11101110110, 11010001110, 11000101110, 11011101000, 11011100010, 11011101110, 11101011000, 11101000110, 11100010110, 11101101000, 11101100010, 11100011010, 11101111010, 11001000010, 11110001010, 10100110000, 10100001100, 10010110000, 10010000110, 10000101100, 10000100110, 10110010000, 10110000100, 10011010000, 10011000010, 10000110100, 10000110010, 11000010010, 11001010000, 11110111010, 11000010100, 10001111010, 10100111100, 10010111100, 10010011110, 10111100100, 10011110100, 10011110010, 11110100100, 11110010100, 11110010010, 11011011110, 11011110110, 11110110110, 10101111000, 10100011110, 10001011110, 10111101000, 10111100010, 11110101000, 11110100010, 10111011110, 10111101110, 11101011110, 11110101110, 11010000100, 11010010000, 11010011100, 1100011101011];

// This is the master class,
// it does require the start code to be included in the string

var CODE128 = function (_Barcode) {
	inherits(CODE128, _Barcode);

	function CODE128(data, options) {
		classCallCheck(this, CODE128);

		// Get array of ascii codes from data
		var _this = possibleConstructorReturn(this, (CODE128.__proto__ || Object.getPrototypeOf(CODE128)).call(this, data.substring(1), options));

		_this.bytes = data.split('').map(function (char) {
			return char.charCodeAt(0);
		});
		return _this;
	}

	createClass(CODE128, [{
		key: 'valid',
		value: function valid() {
			// ASCII value ranges 0-127, 200-211
			return (/^[\x00-\x7F\xC8-\xD3]+$/.test(this.data)
			);
		}

		// The public encoding function

	}, {
		key: 'encode',
		value: function encode() {
			var bytes = this.bytes;
			// Remove the start code from the bytes and set its index
			var startIndex = bytes.shift() - 105;
			// Get start set by index
			var startSet = SET_BY_CODE[startIndex];

			if (startSet === undefined) {
				throw new RangeError('The encoding does not start with a start character.');
			}

			if (this.shouldEncodeAsEan128() === true) {
				bytes.unshift(FNC1);
			}

			// Start encode with the right type
			var encodingResult = CODE128.next(bytes, 1, startSet);

			return {
				text: this.text === this.data ? this.text.replace(/[^\x20-\x7E]/g, '') : this.text,
				data:
				// Add the start bits
				CODE128.getBar(startIndex) +
				// Add the encoded bits
				encodingResult.result +
				// Add the checksum
				CODE128.getBar((encodingResult.checksum + startIndex) % MODULO) +
				// Add the end bits
				CODE128.getBar(STOP)
			};
		}

		// GS1-128/EAN-128

	}, {
		key: 'shouldEncodeAsEan128',
		value: function shouldEncodeAsEan128() {
			var isEAN128 = this.options.ean128 || false;
			if (typeof isEAN128 === 'string') {
				isEAN128 = isEAN128.toLowerCase() === 'true';
			}
			return isEAN128;
		}

		// Get a bar symbol by index

	}], [{
		key: 'getBar',
		value: function getBar(index) {
			return BARS[index] ? BARS[index].toString() : '';
		}

		// Correct an index by a set and shift it from the bytes array

	}, {
		key: 'correctIndex',
		value: function correctIndex(bytes, set$$1) {
			if (set$$1 === SET_A) {
				var charCode = bytes.shift();
				return charCode < 32 ? charCode + 64 : charCode - 32;
			} else if (set$$1 === SET_B) {
				return bytes.shift() - 32;
			} else {
				return (bytes.shift() - 48) * 10 + bytes.shift() - 48;
			}
		}
	}, {
		key: 'next',
		value: function next(bytes, pos, set$$1) {
			if (!bytes.length) {
				return { result: '', checksum: 0 };
			}

			var nextCode = void 0,
			    index = void 0;

			// Special characters
			if (bytes[0] >= 200) {
				index = bytes.shift() - 105;
				var nextSet = SWAP[index];

				// Swap to other set
				if (nextSet !== undefined) {
					nextCode = CODE128.next(bytes, pos + 1, nextSet);
				}
				// Continue on current set but encode a special character
				else {
						// Shift
						if ((set$$1 === SET_A || set$$1 === SET_B) && index === SHIFT) {
							// Convert the next character so that is encoded correctly
							bytes[0] = set$$1 === SET_A ? bytes[0] > 95 ? bytes[0] - 96 : bytes[0] : bytes[0] < 32 ? bytes[0] + 96 : bytes[0];
						}
						nextCode = CODE128.next(bytes, pos + 1, set$$1);
					}
			}
			// Continue encoding
			else {
					index = CODE128.correctIndex(bytes, set$$1);
					nextCode = CODE128.next(bytes, pos + 1, set$$1);
				}

			// Get the correct binary encoding and calculate the weight
			var enc = CODE128.getBar(index);
			var weight = index * pos;

			return {
				result: enc + nextCode.result,
				checksum: weight + nextCode.checksum
			};
		}
	}]);
	return CODE128;
}(Barcode);

// Match Set functions
var matchSetALength = function matchSetALength(string) {
	return string.match(new RegExp('^' + A_CHARS + '*'))[0].length;
};
var matchSetBLength = function matchSetBLength(string) {
	return string.match(new RegExp('^' + B_CHARS + '*'))[0].length;
};
var matchSetC = function matchSetC(string) {
	return string.match(new RegExp('^' + C_CHARS + '*'))[0];
};

// CODE128A or CODE128B
function autoSelectFromAB(string, isA) {
	var ranges = isA ? A_CHARS : B_CHARS;
	var untilC = string.match(new RegExp('^(' + ranges + '+?)(([0-9]{2}){2,})([^0-9]|$)'));

	if (untilC) {
		return untilC[1] + String.fromCharCode(204) + autoSelectFromC(string.substring(untilC[1].length));
	}

	var chars = string.match(new RegExp('^' + ranges + '+'))[0];

	if (chars.length === string.length) {
		return string;
	}

	return chars + String.fromCharCode(isA ? 205 : 206) + autoSelectFromAB(string.substring(chars.length), !isA);
}

// CODE128C
function autoSelectFromC(string) {
	var cMatch = matchSetC(string);
	var length = cMatch.length;

	if (length === string.length) {
		return string;
	}

	string = string.substring(length);

	// Select A/B depending on the longest match
	var isA = matchSetALength(string) >= matchSetBLength(string);
	return cMatch + String.fromCharCode(isA ? 206 : 205) + autoSelectFromAB(string, isA);
}

// Detect Code Set (A, B or C) and format the string
var autoSelectModes = (function (string) {
	var newString = void 0;
	var cLength = matchSetC(string).length;

	// Select 128C if the string start with enough digits
	if (cLength >= 2) {
		newString = C_START_CHAR + autoSelectFromC(string);
	} else {
		// Select A/B depending on the longest match
		var isA = matchSetALength(string) > matchSetBLength(string);
		newString = (isA ? A_START_CHAR : B_START_CHAR) + autoSelectFromAB(string, isA);
	}

	return newString.replace(/[\xCD\xCE]([^])[\xCD\xCE]/, // Any sequence between 205 and 206 characters
	function (match, char) {
		return String.fromCharCode(203) + char;
	});
});

var CODE128AUTO = function (_CODE) {
	inherits(CODE128AUTO, _CODE);

	function CODE128AUTO(data, options) {
		classCallCheck(this, CODE128AUTO);

		// ASCII value ranges 0-127, 200-211
		if (/^[\x00-\x7F\xC8-\xD3]+$/.test(data)) {
			var _this = possibleConstructorReturn(this, (CODE128AUTO.__proto__ || Object.getPrototypeOf(CODE128AUTO)).call(this, autoSelectModes(data), options));
		} else {
			var _this = possibleConstructorReturn(this, (CODE128AUTO.__proto__ || Object.getPrototypeOf(CODE128AUTO)).call(this, data, options));
		}
		return possibleConstructorReturn(_this);
	}

	return CODE128AUTO;
}(CODE128);

var CODE128A = function (_CODE) {
	inherits(CODE128A, _CODE);

	function CODE128A(string, options) {
		classCallCheck(this, CODE128A);
		return possibleConstructorReturn(this, (CODE128A.__proto__ || Object.getPrototypeOf(CODE128A)).call(this, A_START_CHAR + string, options));
	}

	createClass(CODE128A, [{
		key: 'valid',
		value: function valid() {
			return new RegExp('^' + A_CHARS + '+$').test(this.data);
		}
	}]);
	return CODE128A;
}(CODE128);

var CODE128B = function (_CODE) {
	inherits(CODE128B, _CODE);

	function CODE128B(string, options) {
		classCallCheck(this, CODE128B);
		return possibleConstructorReturn(this, (CODE128B.__proto__ || Object.getPrototypeOf(CODE128B)).call(this, B_START_CHAR + string, options));
	}

	createClass(CODE128B, [{
		key: 'valid',
		value: function valid() {
			return new RegExp('^' + B_CHARS + '+$').test(this.data);
		}
	}]);
	return CODE128B;
}(CODE128);

var CODE128C = function (_CODE) {
	inherits(CODE128C, _CODE);

	function CODE128C(string, options) {
		classCallCheck(this, CODE128C);
		return possibleConstructorReturn(this, (CODE128C.__proto__ || Object.getPrototypeOf(CODE128C)).call(this, C_START_CHAR + string, options));
	}

	createClass(CODE128C, [{
		key: 'valid',
		value: function valid() {
			return new RegExp('^' + C_CHARS + '+$').test(this.data);
		}
	}]);
	return CODE128C;
}(CODE128);

// Standard start end and middle bits
var SIDE_BIN = '101';
var MIDDLE_BIN = '01010';

var BINARIES = {
	'L': [// The L (left) type of encoding
	'0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'],
	'G': [// The G type of encoding
	'0100111', '0110011', '0011011', '0100001', '0011101', '0111001', '0000101', '0010001', '0001001', '0010111'],
	'R': [// The R (right) type of encoding
	'1110010', '1100110', '1101100', '1000010', '1011100', '1001110', '1010000', '1000100', '1001000', '1110100'],
	'O': [// The O (odd) encoding for UPC-E
	'0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'],
	'E': [// The E (even) encoding for UPC-E
	'0100111', '0110011', '0011011', '0100001', '0011101', '0111001', '0000101', '0010001', '0001001', '0010111']
};

// Define the EAN-2 structure
var EAN2_STRUCTURE = ['LL', 'LG', 'GL', 'GG'];

// Define the EAN-5 structure
var EAN5_STRUCTURE = ['GGLLL', 'GLGLL', 'GLLGL', 'GLLLG', 'LGGLL', 'LLGGL', 'LLLGG', 'LGLGL', 'LGLLG', 'LLGLG'];

// Define the EAN-13 structure
var EAN13_STRUCTURE = ['LLLLLL', 'LLGLGG', 'LLGGLG', 'LLGGGL', 'LGLLGG', 'LGGLLG', 'LGGGLL', 'LGLGLG', 'LGLGGL', 'LGGLGL'];

// Encode data string
var encode = function encode(data, structure, separator) {
	var encoded = data.split('').map(function (val, idx) {
		return BINARIES[structure[idx]];
	}).map(function (val, idx) {
		return val ? val[data[idx]] : '';
	});

	if (separator) {
		var last = data.length - 1;
		encoded = encoded.map(function (val, idx) {
			return idx < last ? val + separator : val;
		});
	}

	return encoded.join('');
};

// Base class for EAN8 & EAN13

var EAN = function (_Barcode) {
	inherits(EAN, _Barcode);

	function EAN(data, options) {
		classCallCheck(this, EAN);

		// Make sure the font is not bigger than the space between the guard bars
		var _this = possibleConstructorReturn(this, (EAN.__proto__ || Object.getPrototypeOf(EAN)).call(this, data, options));

		_this.fontSize = !options.flat && options.fontSize > options.width * 10 ? options.width * 10 : options.fontSize;

		// Make the guard bars go down half the way of the text
		_this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
		return _this;
	}

	createClass(EAN, [{
		key: 'encode',
		value: function encode$$1() {
			return this.options.flat ? this.encodeFlat() : this.encodeGuarded();
		}
	}, {
		key: 'leftText',
		value: function leftText(from, to) {
			return this.text.substr(from, to);
		}
	}, {
		key: 'leftEncode',
		value: function leftEncode(data, structure) {
			return encode(data, structure);
		}
	}, {
		key: 'rightText',
		value: function rightText(from, to) {
			return this.text.substr(from, to);
		}
	}, {
		key: 'rightEncode',
		value: function rightEncode(data, structure) {
			return encode(data, structure);
		}
	}, {
		key: 'encodeGuarded',
		value: function encodeGuarded() {
			var textOptions = { fontSize: this.fontSize };
			var guardOptions = { height: this.guardHeight };

			return [{ data: SIDE_BIN, options: guardOptions }, { data: this.leftEncode(), text: this.leftText(), options: textOptions }, { data: MIDDLE_BIN, options: guardOptions }, { data: this.rightEncode(), text: this.rightText(), options: textOptions }, { data: SIDE_BIN, options: guardOptions }];
		}
	}, {
		key: 'encodeFlat',
		value: function encodeFlat() {
			var data = [SIDE_BIN, this.leftEncode(), MIDDLE_BIN, this.rightEncode(), SIDE_BIN];

			return {
				data: data.join(''),
				text: this.text
			};
		}
	}]);
	return EAN;
}(Barcode);

// Encoding documentation:

// Calculate the checksum digit
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Calculation_of_checksum_digit
var checksum = function checksum(number) {
	var res = number.substr(0, 12).split('').map(function (n) {
		return +n;
	}).reduce(function (sum, a, idx) {
		return idx % 2 ? sum + a * 3 : sum + a;
	}, 0);

	return (10 - res % 10) % 10;
};

var EAN13 = function (_EAN) {
	inherits(EAN13, _EAN);

	function EAN13(data, options) {
		classCallCheck(this, EAN13);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{12}$/) !== -1) {
			data += checksum(data);
		}

		// Adds a last character to the end of the barcode
		var _this = possibleConstructorReturn(this, (EAN13.__proto__ || Object.getPrototypeOf(EAN13)).call(this, data, options));

		_this.lastChar = options.lastChar;
		return _this;
	}

	createClass(EAN13, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{13}$/) !== -1 && +this.data[12] === checksum(this.data);
		}
	}, {
		key: 'leftText',
		value: function leftText() {
			return get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'leftText', this).call(this, 1, 6);
		}
	}, {
		key: 'leftEncode',
		value: function leftEncode() {
			var data = this.data.substr(1, 6);
			var structure = EAN13_STRUCTURE[this.data[0]];
			return get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'leftEncode', this).call(this, data, structure);
		}
	}, {
		key: 'rightText',
		value: function rightText() {
			return get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'rightText', this).call(this, 7, 6);
		}
	}, {
		key: 'rightEncode',
		value: function rightEncode() {
			var data = this.data.substr(7, 6);
			return get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'rightEncode', this).call(this, data, 'RRRRRR');
		}

		// The "standard" way of printing EAN13 barcodes with guard bars

	}, {
		key: 'encodeGuarded',
		value: function encodeGuarded() {
			var data = get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'encodeGuarded', this).call(this);

			// Extend data with left digit & last character
			if (this.options.displayValue) {
				data.unshift({
					data: '000000000000',
					text: this.text.substr(0, 1),
					options: { textAlign: 'left', fontSize: this.fontSize }
				});

				if (this.options.lastChar) {
					data.push({
						data: '00'
					});
					data.push({
						data: '00000',
						text: this.options.lastChar,
						options: { fontSize: this.fontSize }
					});
				}
			}

			return data;
		}
	}]);
	return EAN13;
}(EAN);

// Encoding documentation:

// Calculate the checksum digit
var checksum$1 = function checksum(number) {
	var res = number.substr(0, 7).split('').map(function (n) {
		return +n;
	}).reduce(function (sum, a, idx) {
		return idx % 2 ? sum + a : sum + a * 3;
	}, 0);

	return (10 - res % 10) % 10;
};

var EAN8 = function (_EAN) {
	inherits(EAN8, _EAN);

	function EAN8(data, options) {
		classCallCheck(this, EAN8);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{7}$/) !== -1) {
			data += checksum$1(data);
		}

		return possibleConstructorReturn(this, (EAN8.__proto__ || Object.getPrototypeOf(EAN8)).call(this, data, options));
	}

	createClass(EAN8, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{8}$/) !== -1 && +this.data[7] === checksum$1(this.data);
		}
	}, {
		key: 'leftText',
		value: function leftText() {
			return get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'leftText', this).call(this, 0, 4);
		}
	}, {
		key: 'leftEncode',
		value: function leftEncode() {
			var data = this.data.substr(0, 4);
			return get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'leftEncode', this).call(this, data, 'LLLL');
		}
	}, {
		key: 'rightText',
		value: function rightText() {
			return get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'rightText', this).call(this, 4, 4);
		}
	}, {
		key: 'rightEncode',
		value: function rightEncode() {
			var data = this.data.substr(4, 4);
			return get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'rightEncode', this).call(this, data, 'RRRR');
		}
	}]);
	return EAN8;
}(EAN);

// Encoding documentation:

var checksum$2 = function checksum(data) {
	var result = data.split('').map(function (n) {
		return +n;
	}).reduce(function (sum, a, idx) {
		return idx % 2 ? sum + a * 9 : sum + a * 3;
	}, 0);
	return result % 10;
};

var EAN5 = function (_Barcode) {
	inherits(EAN5, _Barcode);

	function EAN5(data, options) {
		classCallCheck(this, EAN5);
		return possibleConstructorReturn(this, (EAN5.__proto__ || Object.getPrototypeOf(EAN5)).call(this, data, options));
	}

	createClass(EAN5, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{5}$/) !== -1;
		}
	}, {
		key: 'encode',
		value: function encode$$1() {
			var structure = EAN5_STRUCTURE[checksum$2(this.data)];
			return {
				data: '1011' + encode(this.data, structure, '01'),
				text: this.text
			};
		}
	}]);
	return EAN5;
}(Barcode);

// Encoding documentation:

var EAN2 = function (_Barcode) {
	inherits(EAN2, _Barcode);

	function EAN2(data, options) {
		classCallCheck(this, EAN2);
		return possibleConstructorReturn(this, (EAN2.__proto__ || Object.getPrototypeOf(EAN2)).call(this, data, options));
	}

	createClass(EAN2, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{2}$/) !== -1;
		}
	}, {
		key: 'encode',
		value: function encode$$1() {
			// Choose the structure based on the number mod 4
			var structure = EAN2_STRUCTURE[parseInt(this.data) % 4];
			return {
				// Start bits + Encode the two digits with 01 in between
				data: '1011' + encode(this.data, structure, '01'),
				text: this.text
			};
		}
	}]);
	return EAN2;
}(Barcode);

// Encoding documentation:

var UPC = function (_Barcode) {
	inherits(UPC, _Barcode);

	function UPC(data, options) {
		classCallCheck(this, UPC);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{11}$/) !== -1) {
			data += checksum$3(data);
		}

		var _this = possibleConstructorReturn(this, (UPC.__proto__ || Object.getPrototypeOf(UPC)).call(this, data, options));

		_this.displayValue = options.displayValue;

		// Make sure the font is not bigger than the space between the guard bars
		if (options.fontSize > options.width * 10) {
			_this.fontSize = options.width * 10;
		} else {
			_this.fontSize = options.fontSize;
		}

		// Make the guard bars go down half the way of the text
		_this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
		return _this;
	}

	createClass(UPC, [{
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9]{12}$/) !== -1 && this.data[11] == checksum$3(this.data);
		}
	}, {
		key: "encode",
		value: function encode$$1() {
			if (this.options.flat) {
				return this.flatEncoding();
			} else {
				return this.guardedEncoding();
			}
		}
	}, {
		key: "flatEncoding",
		value: function flatEncoding() {
			var result = "";

			result += "101";
			result += encode(this.data.substr(0, 6), "LLLLLL");
			result += "01010";
			result += encode(this.data.substr(6, 6), "RRRRRR");
			result += "101";

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: "guardedEncoding",
		value: function guardedEncoding() {
			var result = [];

			// Add the first digit
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text.substr(0, 1),
					options: { textAlign: "left", fontSize: this.fontSize }
				});
			}

			// Add the guard bars
			result.push({
				data: "101" + encode(this.data[0], "L"),
				options: { height: this.guardHeight }
			});

			// Add the left side
			result.push({
				data: encode(this.data.substr(1, 5), "LLLLL"),
				text: this.text.substr(1, 5),
				options: { fontSize: this.fontSize }
			});

			// Add the middle bits
			result.push({
				data: "01010",
				options: { height: this.guardHeight }
			});

			// Add the right side
			result.push({
				data: encode(this.data.substr(6, 5), "RRRRR"),
				text: this.text.substr(6, 5),
				options: { fontSize: this.fontSize }
			});

			// Add the end bits
			result.push({
				data: encode(this.data[11], "R") + "101",
				options: { height: this.guardHeight }
			});

			// Add the last digit
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text.substr(11, 1),
					options: { textAlign: "right", fontSize: this.fontSize }
				});
			}

			return result;
		}
	}]);
	return UPC;
}(Barcode);

// Calulate the checksum digit
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Calculation_of_checksum_digit


function checksum$3(number) {
	var result = 0;

	var i;
	for (i = 1; i < 11; i += 2) {
		result += parseInt(number[i]);
	}
	for (i = 0; i < 11; i += 2) {
		result += parseInt(number[i]) * 3;
	}

	return (10 - result % 10) % 10;
}

// Encoding documentation:

var EXPANSIONS = ["XX00000XXX", "XX10000XXX", "XX20000XXX", "XXX00000XX", "XXXX00000X", "XXXXX00005", "XXXXX00006", "XXXXX00007", "XXXXX00008", "XXXXX00009"];

var PARITIES = [["EEEOOO", "OOOEEE"], ["EEOEOO", "OOEOEE"], ["EEOOEO", "OOEEOE"], ["EEOOOE", "OOEEEO"], ["EOEEOO", "OEOOEE"], ["EOOEEO", "OEEOOE"], ["EOOOEE", "OEEEOO"], ["EOEOEO", "OEOEOE"], ["EOEOOE", "OEOEEO"], ["EOOEOE", "OEEOEO"]];

var UPCE = function (_Barcode) {
	inherits(UPCE, _Barcode);

	function UPCE(data, options) {
		classCallCheck(this, UPCE);

		var _this = possibleConstructorReturn(this, (UPCE.__proto__ || Object.getPrototypeOf(UPCE)).call(this, data, options));
		// Code may be 6 or 8 digits;
		// A 7 digit code is ambiguous as to whether the extra digit
		// is a UPC-A check or number system digit.


		_this.isValid = false;
		if (data.search(/^[0-9]{6}$/) !== -1) {
			_this.middleDigits = data;
			_this.upcA = expandToUPCA(data, "0");
			_this.text = options.text || '' + _this.upcA[0] + data + _this.upcA[_this.upcA.length - 1];
			_this.isValid = true;
		} else if (data.search(/^[01][0-9]{7}$/) !== -1) {
			_this.middleDigits = data.substring(1, data.length - 1);
			_this.upcA = expandToUPCA(_this.middleDigits, data[0]);

			if (_this.upcA[_this.upcA.length - 1] === data[data.length - 1]) {
				_this.isValid = true;
			} else {
				// checksum mismatch
				return possibleConstructorReturn(_this);
			}
		} else {
			return possibleConstructorReturn(_this);
		}

		_this.displayValue = options.displayValue;

		// Make sure the font is not bigger than the space between the guard bars
		if (options.fontSize > options.width * 10) {
			_this.fontSize = options.width * 10;
		} else {
			_this.fontSize = options.fontSize;
		}

		// Make the guard bars go down half the way of the text
		_this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
		return _this;
	}

	createClass(UPCE, [{
		key: 'valid',
		value: function valid() {
			return this.isValid;
		}
	}, {
		key: 'encode',
		value: function encode$$1() {
			if (this.options.flat) {
				return this.flatEncoding();
			} else {
				return this.guardedEncoding();
			}
		}
	}, {
		key: 'flatEncoding',
		value: function flatEncoding() {
			var result = "";

			result += "101";
			result += this.encodeMiddleDigits();
			result += "010101";

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: 'guardedEncoding',
		value: function guardedEncoding() {
			var result = [];

			// Add the UPC-A number system digit beneath the quiet zone
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text[0],
					options: { textAlign: "left", fontSize: this.fontSize }
				});
			}

			// Add the guard bars
			result.push({
				data: "101",
				options: { height: this.guardHeight }
			});

			// Add the 6 UPC-E digits
			result.push({
				data: this.encodeMiddleDigits(),
				text: this.text.substring(1, 7),
				options: { fontSize: this.fontSize }
			});

			// Add the end bits
			result.push({
				data: "010101",
				options: { height: this.guardHeight }
			});

			// Add the UPC-A check digit beneath the quiet zone
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text[7],
					options: { textAlign: "right", fontSize: this.fontSize }
				});
			}

			return result;
		}
	}, {
		key: 'encodeMiddleDigits',
		value: function encodeMiddleDigits() {
			var numberSystem = this.upcA[0];
			var checkDigit = this.upcA[this.upcA.length - 1];
			var parity = PARITIES[parseInt(checkDigit)][parseInt(numberSystem)];
			return encode(this.middleDigits, parity);
		}
	}]);
	return UPCE;
}(Barcode);

function expandToUPCA(middleDigits, numberSystem) {
	var lastUpcE = parseInt(middleDigits[middleDigits.length - 1]);
	var expansion = EXPANSIONS[lastUpcE];

	var result = "";
	var digitIndex = 0;
	for (var i = 0; i < expansion.length; i++) {
		var c = expansion[i];
		if (c === 'X') {
			result += middleDigits[digitIndex++];
		} else {
			result += c;
		}
	}

	result = '' + numberSystem + result;
	return '' + result + checksum$3(result);
}

var ITF14 = function (_Barcode) {
	inherits(ITF14, _Barcode);

	function ITF14(data, options) {
		classCallCheck(this, ITF14);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{13}$/) !== -1) {
			data += checksum$4(data);
		}

		var _this = possibleConstructorReturn(this, (ITF14.__proto__ || Object.getPrototypeOf(ITF14)).call(this, data, options));

		_this.binaryRepresentation = {
			"0": "00110",
			"1": "10001",
			"2": "01001",
			"3": "11000",
			"4": "00101",
			"5": "10100",
			"6": "01100",
			"7": "00011",
			"8": "10010",
			"9": "01010"
		};
		return _this;
	}

	createClass(ITF14, [{
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9]{14}$/) !== -1 && this.data[13] == checksum$4(this.data);
		}
	}, {
		key: "encode",
		value: function encode() {
			var result = "1010";

			// Calculate all the digit pairs
			for (var i = 0; i < 14; i += 2) {
				result += this.calculatePair(this.data.substr(i, 2));
			}

			// Always add the same end bits
			result += "11101";

			return {
				data: result,
				text: this.text
			};
		}

		// Calculate the data of a number pair

	}, {
		key: "calculatePair",
		value: function calculatePair(numberPair) {
			var result = "";

			var number1Struct = this.binaryRepresentation[numberPair[0]];
			var number2Struct = this.binaryRepresentation[numberPair[1]];

			// Take every second bit and add to the result
			for (var i = 0; i < 5; i++) {
				result += number1Struct[i] == "1" ? "111" : "1";
				result += number2Struct[i] == "1" ? "000" : "0";
			}

			return result;
		}
	}]);
	return ITF14;
}(Barcode);

// Calulate the checksum digit


function checksum$4(data) {
	var result = 0;

	for (var i = 0; i < 13; i++) {
		result += parseInt(data[i]) * (3 - i % 2 * 2);
	}

	return Math.ceil(result / 10) * 10 - result;
}

var ITF = function (_Barcode) {
	inherits(ITF, _Barcode);

	function ITF(data, options) {
		classCallCheck(this, ITF);

		var _this = possibleConstructorReturn(this, (ITF.__proto__ || Object.getPrototypeOf(ITF)).call(this, data, options));

		_this.binaryRepresentation = {
			"0": "00110",
			"1": "10001",
			"2": "01001",
			"3": "11000",
			"4": "00101",
			"5": "10100",
			"6": "01100",
			"7": "00011",
			"8": "10010",
			"9": "01010"
		};
		return _this;
	}

	createClass(ITF, [{
		key: "valid",
		value: function valid() {
			return this.data.search(/^([0-9]{2})+$/) !== -1;
		}
	}, {
		key: "encode",
		value: function encode() {
			// Always add the same start bits
			var result = "1010";

			// Calculate all the digit pairs
			for (var i = 0; i < this.data.length; i += 2) {
				result += this.calculatePair(this.data.substr(i, 2));
			}

			// Always add the same end bits
			result += "11101";

			return {
				data: result,
				text: this.text
			};
		}

		// Calculate the data of a number pair

	}, {
		key: "calculatePair",
		value: function calculatePair(numberPair) {
			var result = "";

			var number1Struct = this.binaryRepresentation[numberPair[0]];
			var number2Struct = this.binaryRepresentation[numberPair[1]];

			// Take every second bit and add to the result
			for (var i = 0; i < 5; i++) {
				result += number1Struct[i] == "1" ? "111" : "1";
				result += number2Struct[i] == "1" ? "000" : "0";
			}

			return result;
		}
	}]);
	return ITF;
}(Barcode);

// Encoding documentation

var MSI = function (_Barcode) {
	inherits(MSI, _Barcode);

	function MSI(data, options) {
		classCallCheck(this, MSI);
		return possibleConstructorReturn(this, (MSI.__proto__ || Object.getPrototypeOf(MSI)).call(this, data, options));
	}

	createClass(MSI, [{
		key: "encode",
		value: function encode() {
			// Start bits
			var ret = "110";

			for (var i = 0; i < this.data.length; i++) {
				// Convert the character to binary (always 4 binary digits)
				var digit = parseInt(this.data[i]);
				var bin = digit.toString(2);
				bin = addZeroes(bin, 4 - bin.length);

				// Add 100 for every zero and 110 for every 1
				for (var b = 0; b < bin.length; b++) {
					ret += bin[b] == "0" ? "100" : "110";
				}
			}

			// End bits
			ret += "1001";

			return {
				data: ret,
				text: this.text
			};
		}
	}, {
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9]+$/) !== -1;
		}
	}]);
	return MSI;
}(Barcode);

function addZeroes(number, n) {
	for (var i = 0; i < n; i++) {
		number = "0" + number;
	}
	return number;
}

function mod10(number) {
	var sum = 0;
	for (var i = 0; i < number.length; i++) {
		var n = parseInt(number[i]);
		if ((i + number.length) % 2 === 0) {
			sum += n;
		} else {
			sum += n * 2 % 10 + Math.floor(n * 2 / 10);
		}
	}
	return (10 - sum % 10) % 10;
}

function mod11(number) {
	var sum = 0;
	var weights = [2, 3, 4, 5, 6, 7];
	for (var i = 0; i < number.length; i++) {
		var n = parseInt(number[number.length - 1 - i]);
		sum += weights[i % weights.length] * n;
	}
	return (11 - sum % 11) % 11;
}

var MSI10 = function (_MSI) {
	inherits(MSI10, _MSI);

	function MSI10(data, options) {
		classCallCheck(this, MSI10);
		return possibleConstructorReturn(this, (MSI10.__proto__ || Object.getPrototypeOf(MSI10)).call(this, data + mod10(data), options));
	}

	return MSI10;
}(MSI);

var MSI11 = function (_MSI) {
	inherits(MSI11, _MSI);

	function MSI11(data, options) {
		classCallCheck(this, MSI11);
		return possibleConstructorReturn(this, (MSI11.__proto__ || Object.getPrototypeOf(MSI11)).call(this, data + mod11(data), options));
	}

	return MSI11;
}(MSI);

var MSI1010 = function (_MSI) {
	inherits(MSI1010, _MSI);

	function MSI1010(data, options) {
		classCallCheck(this, MSI1010);

		data += mod10(data);
		data += mod10(data);
		return possibleConstructorReturn(this, (MSI1010.__proto__ || Object.getPrototypeOf(MSI1010)).call(this, data, options));
	}

	return MSI1010;
}(MSI);

var MSI1110 = function (_MSI) {
	inherits(MSI1110, _MSI);

	function MSI1110(data, options) {
		classCallCheck(this, MSI1110);

		data += mod11(data);
		data += mod10(data);
		return possibleConstructorReturn(this, (MSI1110.__proto__ || Object.getPrototypeOf(MSI1110)).call(this, data, options));
	}

	return MSI1110;
}(MSI);

// Encoding documentation

var pharmacode = function (_Barcode) {
	inherits(pharmacode, _Barcode);

	function pharmacode(data, options) {
		classCallCheck(this, pharmacode);

		var _this = possibleConstructorReturn(this, (pharmacode.__proto__ || Object.getPrototypeOf(pharmacode)).call(this, data, options));

		_this.number = parseInt(data, 10);
		return _this;
	}

	createClass(pharmacode, [{
		key: "encode",
		value: function encode() {
			var z = this.number;
			var result = "";

			// http://i.imgur.com/RMm4UDJ.png
			// (source: http://www.gomaro.ch/ftproot/Laetus_PHARMA-CODE.pdf, page: 34)
			while (!isNaN(z) && z != 0) {
				if (z % 2 === 0) {
					// Even
					result = "11100" + result;
					z = (z - 2) / 2;
				} else {
					// Odd
					result = "100" + result;
					z = (z - 1) / 2;
				}
			}

			// Remove the two last zeroes
			result = result.slice(0, -2);

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: "valid",
		value: function valid() {
			return this.number >= 3 && this.number <= 131070;
		}
	}]);
	return pharmacode;
}(Barcode);

// Encoding specification:

var codabar = function (_Barcode) {
	inherits(codabar, _Barcode);

	function codabar(data, options) {
		classCallCheck(this, codabar);

		if (data.search(/^[0-9\-\$\:\.\+\/]+$/) === 0) {
			data = "A" + data + "A";
		}

		var _this = possibleConstructorReturn(this, (codabar.__proto__ || Object.getPrototypeOf(codabar)).call(this, data.toUpperCase(), options));

		_this.text = _this.options.text || _this.text.replace(/[A-D]/g, '');
		return _this;
	}

	createClass(codabar, [{
		key: "valid",
		value: function valid() {
			return this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/) !== -1;
		}
	}, {
		key: "encode",
		value: function encode() {
			var result = [];
			var encodings = this.getEncodings();
			for (var i = 0; i < this.data.length; i++) {
				result.push(encodings[this.data.charAt(i)]);
				// for all characters except the last, append a narrow-space ("0")
				if (i !== this.data.length - 1) {
					result.push("0");
				}
			}
			return {
				text: this.text,
				data: result.join('')
			};
		}
	}, {
		key: "getEncodings",
		value: function getEncodings() {
			return {
				"0": "101010011",
				"1": "101011001",
				"2": "101001011",
				"3": "110010101",
				"4": "101101001",
				"5": "110101001",
				"6": "100101011",
				"7": "100101101",
				"8": "100110101",
				"9": "110100101",
				"-": "101001101",
				"$": "101100101",
				":": "1101011011",
				"/": "1101101011",
				".": "1101101101",
				"+": "101100110011",
				"A": "1011001001",
				"B": "1001001011",
				"C": "1010010011",
				"D": "1010011001"
			};
		}
	}]);
	return codabar;
}(Barcode);

var GenericBarcode = function (_Barcode) {
	inherits(GenericBarcode, _Barcode);

	function GenericBarcode(data, options) {
		classCallCheck(this, GenericBarcode);
		return possibleConstructorReturn(this, (GenericBarcode.__proto__ || Object.getPrototypeOf(GenericBarcode)).call(this, data, options)); // Sets this.data and this.text
	}

	// Return the corresponding binary numbers for the data provided


	createClass(GenericBarcode, [{
		key: "encode",
		value: function encode() {
			return {
				data: "10101010101010101010101010101010101010101",
				text: this.text
			};
		}

		// Resturn true/false if the string provided is valid for this encoder

	}, {
		key: "valid",
		value: function valid() {
			return true;
		}
	}]);
	return GenericBarcode;
}(Barcode);

var barcodes = {
	CODE39: CODE39,
	CODE128: CODE128AUTO, CODE128A: CODE128A, CODE128B: CODE128B, CODE128C: CODE128C,
	EAN13: EAN13, EAN8: EAN8, EAN5: EAN5, EAN2: EAN2, UPC: UPC, UPCE: UPCE,
	ITF14: ITF14,
	ITF: ITF,
	MSI: MSI, MSI10: MSI10, MSI11: MSI11, MSI1010: MSI1010, MSI1110: MSI1110,
	pharmacode: pharmacode,
	codabar: codabar,
	GenericBarcode: GenericBarcode
};

var merge = (function (old, replaceObj) {
  return _extends({}, old, replaceObj);
});

// Encodings can be nestled like [[1-1, 1-2], 2, [3-1, 3-2]
// Convert to [1-1, 1-2, 2, 3-1, 3-2]
function linearizeEncodings(encodings) {
	var linearEncodings = [];
	function nextLevel(encoded) {
		if (Array.isArray(encoded)) {
			for (var i = 0; i < encoded.length; i++) {
				nextLevel(encoded[i]);
			}
		} else {
			encoded.text = encoded.text || "";
			encoded.data = encoded.data || "";
			linearEncodings.push(encoded);
		}
	}
	nextLevel(encodings);

	return linearEncodings;
}

function fixOptions(options) {
	// Fix the margins
	options.marginTop = options.marginTop || options.margin;
	options.marginBottom = options.marginBottom || options.margin;
	options.marginRight = options.marginRight || options.margin;
	options.marginLeft = options.marginLeft || options.margin;

	return options;
}

// Convert string to integers/booleans where it should be
function optionsFromStrings(options) {
	var intOptions = ["width", "height", "textMargin", "fontSize", "margin", "marginTop", "marginBottom", "marginLeft", "marginRight"];

	for (var intOption in intOptions) {
		if (intOptions.hasOwnProperty(intOption)) {
			intOption = intOptions[intOption];
			if (typeof options[intOption] === "string") {
				options[intOption] = parseInt(options[intOption], 10);
			}
		}
	}

	if (typeof options["displayValue"] === "string") {
		options["displayValue"] = options["displayValue"] != "false";
	}

	return options;
}

var defaults$1 = {
	width: 2,
	height: 100,
	format: "auto",
	displayValue: true,
	fontOptions: "",
	font: "monospace",
	text: undefined,
	textAlign: "center",
	textPosition: "bottom",
	textMargin: 2,
	fontSize: 20,
	background: "#ffffff",
	lineColor: "#000000",
	margin: 10,
	marginTop: undefined,
	marginBottom: undefined,
	marginLeft: undefined,
	marginRight: undefined,
	valid: function valid() {}
};

function getOptionsFromElement(element) {
	var options = {};
	for (var property in defaults$1) {
		if (defaults$1.hasOwnProperty(property)) {
			// jsbarcode-*
			if (element.hasAttribute("jsbarcode-" + property.toLowerCase())) {
				options[property] = element.getAttribute("jsbarcode-" + property.toLowerCase());
			}

			// data-*
			if (element.hasAttribute("data-" + property.toLowerCase())) {
				options[property] = element.getAttribute("data-" + property.toLowerCase());
			}
		}
	}

	options["value"] = element.getAttribute("jsbarcode-value") || element.getAttribute("data-value");

	// Since all atributes are string they need to be converted to integers
	options = optionsFromStrings(options);

	return options;
}

function getEncodingHeight(encoding, options) {
	return options.height + (options.displayValue && encoding.text.length > 0 ? options.fontSize + options.textMargin : 0) + options.marginTop + options.marginBottom;
}

function getBarcodePadding(textWidth, barcodeWidth, options) {
	if (options.displayValue && barcodeWidth < textWidth) {
		if (options.textAlign == "center") {
			return Math.floor((textWidth - barcodeWidth) / 2);
		} else if (options.textAlign == "left") {
			return 0;
		} else if (options.textAlign == "right") {
			return Math.floor(textWidth - barcodeWidth);
		}
	}
	return 0;
}

function calculateEncodingAttributes(encodings, barcodeOptions, context) {
	for (var i = 0; i < encodings.length; i++) {
		var encoding = encodings[i];
		var options = merge(barcodeOptions, encoding.options);

		// Calculate the width of the encoding
		var textWidth;
		if (options.displayValue) {
			textWidth = messureText(encoding.text, options, context);
		} else {
			textWidth = 0;
		}

		var barcodeWidth = encoding.data.length * options.width;
		encoding.width = Math.ceil(Math.max(textWidth, barcodeWidth));

		encoding.height = getEncodingHeight(encoding, options);

		encoding.barcodePadding = getBarcodePadding(textWidth, barcodeWidth, options);
	}
}

function getTotalWidthOfEncodings(encodings) {
	var totalWidth = 0;
	for (var i = 0; i < encodings.length; i++) {
		totalWidth += encodings[i].width;
	}
	return totalWidth;
}

function getMaximumHeightOfEncodings(encodings) {
	var maxHeight = 0;
	for (var i = 0; i < encodings.length; i++) {
		if (encodings[i].height > maxHeight) {
			maxHeight = encodings[i].height;
		}
	}
	return maxHeight;
}

function messureText(string, options, context) {
	var ctx;

	if (context) {
		ctx = context;
	} else if (typeof document !== "undefined") {
		ctx = document.createElement("canvas").getContext("2d");
	} else {
		// If the text cannot be messured we will return 0.
		// This will make some barcode with big text render incorrectly
		return 0;
	}
	ctx.font = options.fontOptions + " " + options.fontSize + "px " + options.font;

	// Calculate the width of the encoding
	var size = ctx.measureText(string).width;

	return size;
}

var CanvasRenderer = function () {
	function CanvasRenderer(canvas, encodings, options) {
		classCallCheck(this, CanvasRenderer);

		this.canvas = canvas;
		this.encodings = encodings;
		this.options = options;
	}

	createClass(CanvasRenderer, [{
		key: "render",
		value: function render() {
			// Abort if the browser does not support HTML5 canvas
			if (!this.canvas.getContext) {
				throw new Error('The browser does not support canvas.');
			}

			this.prepareCanvas();
			for (var i = 0; i < this.encodings.length; i++) {
				var encodingOptions = merge(this.options, this.encodings[i].options);

				this.drawCanvasBarcode(encodingOptions, this.encodings[i]);
				this.drawCanvasText(encodingOptions, this.encodings[i]);

				this.moveCanvasDrawing(this.encodings[i]);
			}

			this.restoreCanvas();
		}
	}, {
		key: "prepareCanvas",
		value: function prepareCanvas() {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			ctx.save();

			calculateEncodingAttributes(this.encodings, this.options, ctx);
			var totalWidth = getTotalWidthOfEncodings(this.encodings);
			var maxHeight = getMaximumHeightOfEncodings(this.encodings);

			this.canvas.width = totalWidth + this.options.marginLeft + this.options.marginRight;

			this.canvas.height = maxHeight;

			// Paint the canvas
			ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			if (this.options.background) {
				ctx.fillStyle = this.options.background;
				ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
			}

			ctx.translate(this.options.marginLeft, 0);
		}
	}, {
		key: "drawCanvasBarcode",
		value: function drawCanvasBarcode(options, encoding) {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			var binary = encoding.data;

			// Creates the barcode out of the encoded binary
			var yFrom;
			if (options.textPosition == "top") {
				yFrom = options.marginTop + options.fontSize + options.textMargin;
			} else {
				yFrom = options.marginTop;
			}

			ctx.fillStyle = options.lineColor;

			for (var b = 0; b < binary.length; b++) {
				var x = b * options.width + encoding.barcodePadding;

				if (binary[b] === "1") {
					ctx.fillRect(x, yFrom, options.width, options.height);
				} else if (binary[b]) {
					ctx.fillRect(x, yFrom, options.width, options.height * binary[b]);
				}
			}
		}
	}, {
		key: "drawCanvasText",
		value: function drawCanvasText(options, encoding) {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			var font = options.fontOptions + " " + options.fontSize + "px " + options.font;

			// Draw the text if displayValue is set
			if (options.displayValue) {
				var x, y;

				if (options.textPosition == "top") {
					y = options.marginTop + options.fontSize - options.textMargin;
				} else {
					y = options.height + options.textMargin + options.marginTop + options.fontSize;
				}

				ctx.font = font;

				// Draw the text in the correct X depending on the textAlign option
				if (options.textAlign == "left" || encoding.barcodePadding > 0) {
					x = 0;
					ctx.textAlign = 'left';
				} else if (options.textAlign == "right") {
					x = encoding.width - 1;
					ctx.textAlign = 'right';
				}
				// In all other cases, center the text
				else {
						x = encoding.width / 2;
						ctx.textAlign = 'center';
					}

				ctx.fillText(encoding.text, x, y);
			}
		}
	}, {
		key: "moveCanvasDrawing",
		value: function moveCanvasDrawing(encoding) {
			var ctx = this.canvas.getContext("2d");

			ctx.translate(encoding.width, 0);
		}
	}, {
		key: "restoreCanvas",
		value: function restoreCanvas() {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			ctx.restore();
		}
	}]);
	return CanvasRenderer;
}();

var svgns = "http://www.w3.org/2000/svg";

var SVGRenderer = function () {
	function SVGRenderer(svg, encodings, options) {
		classCallCheck(this, SVGRenderer);

		this.svg = svg;
		this.encodings = encodings;
		this.options = options;
		this.document = options.xmlDocument || document;
	}

	createClass(SVGRenderer, [{
		key: "render",
		value: function render() {
			var currentX = this.options.marginLeft;

			this.prepareSVG();
			for (var i = 0; i < this.encodings.length; i++) {
				var encoding = this.encodings[i];
				var encodingOptions = merge(this.options, encoding.options);

				var group = this.createGroup(currentX, encodingOptions.marginTop, this.svg);

				this.setGroupOptions(group, encodingOptions);

				this.drawSvgBarcode(group, encodingOptions, encoding);
				this.drawSVGText(group, encodingOptions, encoding);

				currentX += encoding.width;
			}
		}
	}, {
		key: "prepareSVG",
		value: function prepareSVG() {
			// Clear the SVG
			while (this.svg.firstChild) {
				this.svg.removeChild(this.svg.firstChild);
			}

			calculateEncodingAttributes(this.encodings, this.options);
			var totalWidth = getTotalWidthOfEncodings(this.encodings);
			var maxHeight = getMaximumHeightOfEncodings(this.encodings);

			var width = totalWidth + this.options.marginLeft + this.options.marginRight;
			this.setSvgAttributes(width, maxHeight);

			if (this.options.background) {
				this.drawRect(0, 0, width, maxHeight, this.svg).setAttribute("style", "fill:" + this.options.background + ";");
			}
		}
	}, {
		key: "drawSvgBarcode",
		value: function drawSvgBarcode(parent, options, encoding) {
			var binary = encoding.data;

			// Creates the barcode out of the encoded binary
			var yFrom;
			if (options.textPosition == "top") {
				yFrom = options.fontSize + options.textMargin;
			} else {
				yFrom = 0;
			}

			var barWidth = 0;
			var x = 0;
			for (var b = 0; b < binary.length; b++) {
				x = b * options.width + encoding.barcodePadding;

				if (binary[b] === "1") {
					barWidth++;
				} else if (barWidth > 0) {
					this.drawRect(x - options.width * barWidth, yFrom, options.width * barWidth, options.height, parent);
					barWidth = 0;
				}
			}

			// Last draw is needed since the barcode ends with 1
			if (barWidth > 0) {
				this.drawRect(x - options.width * (barWidth - 1), yFrom, options.width * barWidth, options.height, parent);
			}
		}
	}, {
		key: "drawSVGText",
		value: function drawSVGText(parent, options, encoding) {
			var textElem = this.document.createElementNS(svgns, 'text');

			// Draw the text if displayValue is set
			if (options.displayValue) {
				var x, y;

				textElem.setAttribute("style", "font:" + options.fontOptions + " " + options.fontSize + "px " + options.font);

				if (options.textPosition == "top") {
					y = options.fontSize - options.textMargin;
				} else {
					y = options.height + options.textMargin + options.fontSize;
				}

				// Draw the text in the correct X depending on the textAlign option
				if (options.textAlign == "left" || encoding.barcodePadding > 0) {
					x = 0;
					textElem.setAttribute("text-anchor", "start");
				} else if (options.textAlign == "right") {
					x = encoding.width - 1;
					textElem.setAttribute("text-anchor", "end");
				}
				// In all other cases, center the text
				else {
						x = encoding.width / 2;
						textElem.setAttribute("text-anchor", "middle");
					}

				textElem.setAttribute("x", x);
				textElem.setAttribute("y", y);

				textElem.appendChild(this.document.createTextNode(encoding.text));

				parent.appendChild(textElem);
			}
		}
	}, {
		key: "setSvgAttributes",
		value: function setSvgAttributes(width, height) {
			var svg = this.svg;
			svg.setAttribute("width", width + "px");
			svg.setAttribute("height", height + "px");
			svg.setAttribute("x", "0px");
			svg.setAttribute("y", "0px");
			svg.setAttribute("viewBox", "0 0 " + width + " " + height);

			svg.setAttribute("xmlns", svgns);
			svg.setAttribute("version", "1.1");

			svg.setAttribute("style", "transform: translate(0,0)");
		}
	}, {
		key: "createGroup",
		value: function createGroup(x, y, parent) {
			var group = this.document.createElementNS(svgns, 'g');
			group.setAttribute("transform", "translate(" + x + ", " + y + ")");

			parent.appendChild(group);

			return group;
		}
	}, {
		key: "setGroupOptions",
		value: function setGroupOptions(group, options) {
			group.setAttribute("style", "fill:" + options.lineColor + ";");
		}
	}, {
		key: "drawRect",
		value: function drawRect(x, y, width, height, parent) {
			var rect = this.document.createElementNS(svgns, 'rect');

			rect.setAttribute("x", x);
			rect.setAttribute("y", y);
			rect.setAttribute("width", width);
			rect.setAttribute("height", height);

			parent.appendChild(rect);

			return rect;
		}
	}]);
	return SVGRenderer;
}();

var ObjectRenderer = function () {
	function ObjectRenderer(object, encodings, options) {
		classCallCheck(this, ObjectRenderer);

		this.object = object;
		this.encodings = encodings;
		this.options = options;
	}

	createClass(ObjectRenderer, [{
		key: "render",
		value: function render() {
			this.object.encodings = this.encodings;
		}
	}]);
	return ObjectRenderer;
}();

var renderers = { CanvasRenderer: CanvasRenderer, SVGRenderer: SVGRenderer, ObjectRenderer: ObjectRenderer };

var InvalidInputException = function (_Error) {
	inherits(InvalidInputException, _Error);

	function InvalidInputException(symbology, input) {
		classCallCheck(this, InvalidInputException);

		var _this = possibleConstructorReturn(this, (InvalidInputException.__proto__ || Object.getPrototypeOf(InvalidInputException)).call(this));

		_this.name = "InvalidInputException";

		_this.symbology = symbology;
		_this.input = input;

		_this.message = '"' + _this.input + '" is not a valid input for ' + _this.symbology;
		return _this;
	}

	return InvalidInputException;
}(Error);

var InvalidElementException = function (_Error2) {
	inherits(InvalidElementException, _Error2);

	function InvalidElementException() {
		classCallCheck(this, InvalidElementException);

		var _this2 = possibleConstructorReturn(this, (InvalidElementException.__proto__ || Object.getPrototypeOf(InvalidElementException)).call(this));

		_this2.name = "InvalidElementException";
		_this2.message = "Not supported type to render on";
		return _this2;
	}

	return InvalidElementException;
}(Error);

var NoElementException = function (_Error3) {
	inherits(NoElementException, _Error3);

	function NoElementException() {
		classCallCheck(this, NoElementException);

		var _this3 = possibleConstructorReturn(this, (NoElementException.__proto__ || Object.getPrototypeOf(NoElementException)).call(this));

		_this3.name = "NoElementException";
		_this3.message = "No element to render on.";
		return _this3;
	}

	return NoElementException;
}(Error);

/* global HTMLImageElement */

// Takes an element and returns an object with information about how
// it should be rendered
// This could also return an array with these objects
// {
//   element: The element that the renderer should draw on
//   renderer: The name of the renderer
//   afterRender (optional): If something has to done after the renderer
//     completed, calls afterRender (function)
//   options (optional): Options that can be defined in the element
// }

function getRenderProperties(element) {
	// If the element is a string, query select call again
	if (typeof element === "string") {
		return querySelectedRenderProperties(element);
	}
	// If element is array. Recursivly call with every object in the array
	else if (Array.isArray(element)) {
			var returnArray = [];
			for (var i = 0; i < element.length; i++) {
				returnArray.push(getRenderProperties(element[i]));
			}
			return returnArray;
		}
		// If element, render on canvas and set the uri as src
		else if (typeof HTMLCanvasElement !== 'undefined' && element instanceof HTMLImageElement) {
				return newCanvasRenderProperties(element);
			}
			// If SVG
			else if (element && element.nodeName === 'svg' || typeof SVGElement !== 'undefined' && element instanceof SVGElement) {
					return {
						element: element,
						options: getOptionsFromElement(element),
						renderer: renderers.SVGRenderer
					};
				}
				// If canvas (in browser)
				else if (typeof HTMLCanvasElement !== 'undefined' && element instanceof HTMLCanvasElement) {
						return {
							element: element,
							options: getOptionsFromElement(element),
							renderer: renderers.CanvasRenderer
						};
					}
					// If canvas (in node)
					else if (element && element.getContext) {
							return {
								element: element,
								renderer: renderers.CanvasRenderer
							};
						} else if (element && (typeof element === "undefined" ? "undefined" : _typeof(element)) === 'object' && !element.nodeName) {
							return {
								element: element,
								renderer: renderers.ObjectRenderer
							};
						} else {
							throw new InvalidElementException();
						}
}

function querySelectedRenderProperties(string) {
	var selector = document.querySelectorAll(string);
	if (selector.length === 0) {
		return undefined;
	} else {
		var returnArray = [];
		for (var i = 0; i < selector.length; i++) {
			returnArray.push(getRenderProperties(selector[i]));
		}
		return returnArray;
	}
}

function newCanvasRenderProperties(imgElement) {
	var canvas = document.createElement('canvas');
	return {
		element: canvas,
		options: getOptionsFromElement(imgElement),
		renderer: renderers.CanvasRenderer,
		afterRender: function afterRender() {
			imgElement.setAttribute("src", canvas.toDataURL());
		}
	};
}

/*eslint no-console: 0 */

var ErrorHandler = function () {
	function ErrorHandler(api) {
		classCallCheck(this, ErrorHandler);

		this.api = api;
	}

	createClass(ErrorHandler, [{
		key: "handleCatch",
		value: function handleCatch(e) {
			// If babel supported extending of Error in a correct way instanceof would be used here
			if (e.name === "InvalidInputException") {
				if (this.api._options.valid !== this.api._defaults.valid) {
					this.api._options.valid(false);
				} else {
					throw e.message;
				}
			} else {
				throw e;
			}

			this.api.render = function () {};
		}
	}, {
		key: "wrapBarcodeCall",
		value: function wrapBarcodeCall(func) {
			try {
				var result = func.apply(undefined, arguments);
				this.api._options.valid(true);
				return result;
			} catch (e) {
				this.handleCatch(e);

				return this.api;
			}
		}
	}]);
	return ErrorHandler;
}();

// Import all the barcodes

// The protype of the object returned from the JsBarcode() call
var API = function API() {};

// The first call of the library API
// Will return an object with all barcodes calls and the data that is used
// by the renderers
var JsBarcode = function JsBarcode(element, text, options) {
	var api = new API();

	if (typeof element === "undefined") {
		throw Error("No element to render on was provided.");
	}

	// Variables that will be pased through the API calls
	api._renderProperties = getRenderProperties(element);
	api._encodings = [];
	api._options = defaults$1;
	api._errorHandler = new ErrorHandler(api);

	// If text is set, use the simple syntax (render the barcode directly)
	if (typeof text !== "undefined") {
		options = options || {};

		if (!options.format) {
			options.format = autoSelectBarcode();
		}

		api.options(options)[options.format](text, options).render();
	}

	return api;
};

// To make tests work TODO: remove
JsBarcode.getModule = function (name) {
	return barcodes[name];
};

// Register all barcodes
for (var name in barcodes) {
	if (barcodes.hasOwnProperty(name)) {
		// Security check if the propery is a prototype property
		registerBarcode(barcodes, name);
	}
}
function registerBarcode(barcodes$$1, name) {
	API.prototype[name] = API.prototype[name.toUpperCase()] = API.prototype[name.toLowerCase()] = function (text, options) {
		var api = this;
		return api._errorHandler.wrapBarcodeCall(function () {
			// Ensure text is options.text
			options.text = typeof options.text === 'undefined' ? undefined : '' + options.text;

			var newOptions = merge(api._options, options);
			newOptions = optionsFromStrings(newOptions);
			var Encoder = barcodes$$1[name];
			var encoded = encode$1(text, Encoder, newOptions);
			api._encodings.push(encoded);

			return api;
		});
	};
}

// encode() handles the Encoder call and builds the binary string to be rendered
function encode$1(text, Encoder, options) {
	// Ensure that text is a string
	text = "" + text;

	var encoder = new Encoder(text, options);

	// If the input is not valid for the encoder, throw error.
	// If the valid callback option is set, call it instead of throwing error
	if (!encoder.valid()) {
		throw new InvalidInputException(encoder.constructor.name, text);
	}

	// Make a request for the binary data (and other infromation) that should be rendered
	var encoded = encoder.encode();

	// Encodings can be nestled like [[1-1, 1-2], 2, [3-1, 3-2]
	// Convert to [1-1, 1-2, 2, 3-1, 3-2]
	encoded = linearizeEncodings(encoded);

	// Merge
	for (var i = 0; i < encoded.length; i++) {
		encoded[i].options = merge(options, encoded[i].options);
	}

	return encoded;
}

function autoSelectBarcode() {
	// If CODE128 exists. Use it
	if (barcodes["CODE128"]) {
		return "CODE128";
	}

	// Else, take the first (probably only) barcode
	return Object.keys(barcodes)[0];
}

// Sets global encoder options
// Added to the api by the JsBarcode function
API.prototype.options = function (options) {
	this._options = merge(this._options, options);
	return this;
};

// Will create a blank space (usually in between barcodes)
API.prototype.blank = function (size) {
	var zeroes = new Array(size + 1).join("0");
	this._encodings.push({ data: zeroes });
	return this;
};

// Initialize JsBarcode on all HTML elements defined.
API.prototype.init = function () {
	// Should do nothing if no elements where found
	if (!this._renderProperties) {
		return;
	}

	// Make sure renderProperies is an array
	if (!Array.isArray(this._renderProperties)) {
		this._renderProperties = [this._renderProperties];
	}

	var renderProperty;
	for (var i in this._renderProperties) {
		renderProperty = this._renderProperties[i];
		var options = merge(this._options, renderProperty.options);

		if (options.format == "auto") {
			options.format = autoSelectBarcode();
		}

		this._errorHandler.wrapBarcodeCall(function () {
			var text = options.value;
			var Encoder = barcodes[options.format.toUpperCase()];
			var encoded = encode$1(text, Encoder, options);

			render(renderProperty, encoded, options);
		});
	}
};

// The render API call. Calls the real render function.
API.prototype.render = function () {
	if (!this._renderProperties) {
		throw new NoElementException();
	}

	if (Array.isArray(this._renderProperties)) {
		for (var i = 0; i < this._renderProperties.length; i++) {
			render(this._renderProperties[i], this._encodings, this._options);
		}
	} else {
		render(this._renderProperties, this._encodings, this._options);
	}

	return this;
};

API.prototype._defaults = defaults$1;

// Prepares the encodings and calls the renderer
function render(renderProperties, encodings, options) {
	encodings = linearizeEncodings(encodings);

	for (var i = 0; i < encodings.length; i++) {
		encodings[i].options = merge(options, encodings[i].options);
		fixOptions(encodings[i].options);
	}

	fixOptions(options);

	var Renderer = renderProperties.renderer;
	var renderer = new Renderer(renderProperties.element, encodings, options);
	renderer.render();

	if (renderProperties.afterRender) {
		renderProperties.afterRender();
	}
}

// Export to browser
if (typeof window !== "undefined") {
	window.JsBarcode = JsBarcode;
}

// Export to jQuery
/*global jQuery */
if (typeof jQuery !== 'undefined') {
	jQuery.fn.JsBarcode = function (content, options) {
		var elementArray = [];
		jQuery(this).each(function () {
			elementArray.push(this);
		});
		return JsBarcode(elementArray, content, options);
	};
}

var index = {
  name: 'barcode',

  props: {
    /**
     * The options for the bar code generator.
     * {@link https://github.com/lindell/JsBarcode#options}
     */
    options: Object,

    /**
     * The tag of the component root element.
     */
    tag: {
      type: String,
      default: 'canvas'
    },

    /**
     * The value of the bar code.
     */
    value: {
      type: null,
      default: ''
    }
  },

  render: function render(createElement) {
    return createElement(this.tag, this.$slots.default);
  },


  watch: {
    /**
     * Update bar code when value change.
     */
    value: function value() {
      this.generate();
    },


    /**
     * Update bar code when options change.
     */
    options: function options() {
      this.generate();
    }
  },

  methods: {
    /**
     * Generate bar code.
     */
    generate: function generate() {
      if (this.$el) {
        JsBarcode(this.$el, String(this.value), this.options);
      }
    }
  },

  mounted: function mounted() {
    this.generate();
  }
};

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/print-js/dist/print.js":
/*!*********************************************!*\
  !*** ./node_modules/print-js/dist/print.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n__webpack_require__(/*! ./sass/index.scss */ \"./src/sass/index.scss\");\n\nvar _init = __webpack_require__(/*! ./js/init */ \"./src/js/init.js\");\n\nvar _init2 = _interopRequireDefault(_init);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar printJS = _init2.default.init;\n\nif (typeof window !== 'undefined') {\n  window.printJS = printJS;\n}\n\nexports.default = printJS;\n\n//# sourceURL=webpack://printJS/./src/index.js?");

/***/ }),

/***/ "./src/js/browser.js":
/*!***************************!*\
  !*** ./src/js/browser.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar Browser = {\n  // Firefox 1.0+\n  isFirefox: function isFirefox() {\n    return typeof InstallTrigger !== 'undefined';\n  },\n  // Internet Explorer 6-11\n  isIE: function isIE() {\n    return navigator.userAgent.indexOf('MSIE') !== -1 || !!document.documentMode;\n  },\n  // Edge 20+\n  isEdge: function isEdge() {\n    return !Browser.isIE() && !!window.StyleMedia;\n  },\n  // Chrome 1+\n  isChrome: function isChrome() {\n    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;\n\n    return !!context.chrome;\n  },\n  // At least Safari 3+: \"[object HTMLElementConstructor]\"\n  isSafari: function isSafari() {\n    return Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || navigator.userAgent.toLowerCase().indexOf('safari') !== -1;\n  },\n  // IOS Chrome\n  isIOSChrome: function isIOSChrome() {\n    return navigator.userAgent.toLowerCase().indexOf('crios') !== -1;\n  }\n};\n\nexports.default = Browser;\n\n//# sourceURL=webpack://printJS/./src/js/browser.js?");

/***/ }),

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nexports.addWrapper = addWrapper;\nexports.capitalizePrint = capitalizePrint;\nexports.collectStyles = collectStyles;\nexports.addHeader = addHeader;\nexports.cleanUp = cleanUp;\nexports.isRawHTML = isRawHTML;\n\nvar _modal = __webpack_require__(/*! ./modal */ \"./src/js/modal.js\");\n\nvar _modal2 = _interopRequireDefault(_modal);\n\nvar _browser = __webpack_require__(/*! ./browser */ \"./src/js/browser.js\");\n\nvar _browser2 = _interopRequireDefault(_browser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction addWrapper(htmlData, params) {\n  var bodyStyle = 'font-family:' + params.font + ' !important; font-size: ' + params.font_size + ' !important; width:100%;';\n  return '<div style=\"' + bodyStyle + '\">' + htmlData + '</div>';\n}\n\nfunction capitalizePrint(obj) {\n  return obj.charAt(0).toUpperCase() + obj.slice(1);\n}\n\nfunction collectStyles(element, params) {\n  var win = document.defaultView || window;\n\n  // String variable to hold styling for each element\n  var elementStyle = '';\n\n  // Loop over computed styles\n  var styles = win.getComputedStyle(element, '');\n\n  Object.keys(styles).map(function (key) {\n    // Check if style should be processed\n    if (params.targetStyles.indexOf('*') !== -1 || params.targetStyle.indexOf(styles[key]) !== -1 || targetStylesMatch(params.targetStyles, styles[key])) {\n      if (styles.getPropertyValue(styles[key])) elementStyle += styles[key] + ':' + styles.getPropertyValue(styles[key]) + ';';\n    }\n  });\n\n  // Print friendly defaults (deprecated)\n  elementStyle += 'max-width: ' + params.maxWidth + 'px !important;' + params.font_size + ' !important;';\n\n  return elementStyle;\n}\n\nfunction targetStylesMatch(styles, value) {\n  for (var i = 0; i < styles.length; i++) {\n    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.indexOf(styles[i]) !== -1) return true;\n  }\n  return false;\n}\n\nfunction addHeader(printElement, params) {\n  // Create the header container div\n  var headerContainer = document.createElement('div');\n\n  // Check if the header is text or raw html\n  if (isRawHTML(params.header)) {\n    headerContainer.innerHTML = params.header;\n  } else {\n    // Create header element\n    var headerElement = document.createElement('h1');\n\n    // Create header text node\n    var headerNode = document.createTextNode(params.header);\n\n    // Build and style\n    headerElement.appendChild(headerNode);\n    headerElement.setAttribute('style', params.headerStyle);\n    headerContainer.appendChild(headerElement);\n  }\n\n  printElement.insertBefore(headerContainer, printElement.childNodes[0]);\n}\n\nfunction cleanUp(params) {\n  // If we are showing a feedback message to user, remove it\n  if (params.showModal) _modal2.default.close();\n\n  // Check for a finished loading hook function\n  if (params.onLoadingEnd) params.onLoadingEnd();\n\n  // If preloading pdf files, clean blob url\n  if (params.showModal || params.onLoadingStart) window.URL.revokeObjectURL(params.printable);\n\n  // If a onPrintDialogClose callback is given, execute it\n  if (params.onPrintDialogClose) {\n    var event = 'mouseover';\n\n    if (_browser2.default.isChrome() || _browser2.default.isFirefox()) {\n      // Ps.: Firefox will require an extra click in the document to fire the focus event.\n      event = 'focus';\n    }\n    var handler = function handler() {\n      // Make sure the event only happens once.\n      window.removeEventListener(event, handler);\n\n      params.onPrintDialogClose();\n    };\n\n    window.addEventListener(event, handler);\n  }\n}\n\nfunction isRawHTML(raw) {\n  var regexHtml = new RegExp('<([A-Za-z][A-Za-z0-9]*)\\\\b[^>]*>(.*?)</\\\\1>');\n  return regexHtml.test(raw);\n}\n\n//# sourceURL=webpack://printJS/./src/js/functions.js?");

/***/ }),

/***/ "./src/js/html.js":
/*!************************!*\
  !*** ./src/js/html.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _functions = __webpack_require__(/*! ./functions */ \"./src/js/functions.js\");\n\nvar _print = __webpack_require__(/*! ./print */ \"./src/js/print.js\");\n\nvar _print2 = _interopRequireDefault(_print);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  print: function print(params, printFrame) {\n    // Get the DOM printable element\n    var printElement = document.getElementById(params.printable);\n\n    // Check if the element exists\n    if (!printElement) {\n      window.console.error('Invalid HTML element id: ' + params.printable);\n      return;\n    }\n\n    // Clone the target element including its children (if available)\n    params.printableElement = cloneElement(printElement, params);\n\n    // Add header\n    if (params.header) {\n      (0, _functions.addHeader)(params.printableElement, params);\n    }\n\n    // Print html element contents\n    _print2.default.send(params, printFrame);\n  }\n};\n\n\nfunction cloneElement(element, params) {\n  // Clone the main node (if not already inside the recursion process)\n  var clone = element.cloneNode();\n\n  // Loop over and process the children elements / nodes (including text nodes)\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = element.childNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var child = _step.value;\n\n      // Check if we are skiping the current element\n      if (params.ignoreElements.indexOf(child.id) !== -1) {\n        continue;\n      }\n\n      // Clone the child element\n      var clonedChild = cloneElement(child, params);\n\n      // Attach the cloned child to the cloned parent node\n      clone.appendChild(clonedChild);\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  console.log(element.nodeType);\n  // Get all styling for print element (for nodes of type element only)\n  if (params.scanStyles && element.nodeType === 1) {\n    clone.setAttribute('style', (0, _functions.collectStyles)(element, params));\n  }\n\n  // Check if the element needs any state processing (copy user input data)\n  switch (element.tagName) {\n    case 'SELECT':\n      // Copy the current selection value to its clone\n      clone.value = element.value;\n      break;\n    case 'CANVAS':\n      // Copy the canvas content to its clone\n      clone.getContext('2d').drawImage(element, 0, 0);\n      break;\n  }\n\n  return clone;\n}\n\n//# sourceURL=webpack://printJS/./src/js/html.js?");

/***/ }),

/***/ "./src/js/image.js":
/*!*************************!*\
  !*** ./src/js/image.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _functions = __webpack_require__(/*! ./functions */ \"./src/js/functions.js\");\n\nvar _print = __webpack_require__(/*! ./print */ \"./src/js/print.js\");\n\nvar _print2 = _interopRequireDefault(_print);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  print: function print(params, printFrame) {\n    // Check if we are printing one image or multiple images\n    if (params.printable.constructor !== Array) {\n      // Create array with one image\n      params.printable = [params.printable];\n    }\n\n    // Create printable element (container)\n    params.printableElement = document.createElement('div');\n\n    // Create all image elements and append them to the printable container\n    params.printable.forEach(function (src) {\n      // Create the image element\n      var img = document.createElement('img');\n      img.setAttribute('style', params.imageStyle);\n\n      // Set image src with the file url\n      img.src = src;\n\n      // Create the image wrapper\n      var imageWrapper = document.createElement('div');\n\n      // Append image to the wrapper element\n      imageWrapper.appendChild(img);\n\n      // Append wrapper to the printable element\n      params.printableElement.appendChild(imageWrapper);\n    });\n\n    // Check if we are adding a print header\n    if (params.header) (0, _functions.addHeader)(params.printableElement, params);\n\n    // Print image\n    _print2.default.send(params, printFrame);\n  }\n};\n\n//# sourceURL=webpack://printJS/./src/js/image.js?");

/***/ }),

/***/ "./src/js/init.js":
/*!************************!*\
  !*** ./src/js/init.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _browser = __webpack_require__(/*! ./browser */ \"./src/js/browser.js\");\n\nvar _browser2 = _interopRequireDefault(_browser);\n\nvar _modal = __webpack_require__(/*! ./modal */ \"./src/js/modal.js\");\n\nvar _modal2 = _interopRequireDefault(_modal);\n\nvar _pdf = __webpack_require__(/*! ./pdf */ \"./src/js/pdf.js\");\n\nvar _pdf2 = _interopRequireDefault(_pdf);\n\nvar _html = __webpack_require__(/*! ./html */ \"./src/js/html.js\");\n\nvar _html2 = _interopRequireDefault(_html);\n\nvar _rawHtml = __webpack_require__(/*! ./raw-html */ \"./src/js/raw-html.js\");\n\nvar _rawHtml2 = _interopRequireDefault(_rawHtml);\n\nvar _image = __webpack_require__(/*! ./image */ \"./src/js/image.js\");\n\nvar _image2 = _interopRequireDefault(_image);\n\nvar _json = __webpack_require__(/*! ./json */ \"./src/js/json.js\");\n\nvar _json2 = _interopRequireDefault(_json);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar printTypes = ['pdf', 'html', 'image', 'json', 'raw-html'];\n\nexports.default = {\n  init: function init() {\n    var params = {\n      printable: null,\n      fallbackPrintable: null,\n      type: 'pdf',\n      header: null,\n      headerStyle: 'font-weight: 300;',\n      maxWidth: 800,\n      font: 'TimesNewRoman',\n      font_size: '12pt',\n      honorMarginPadding: true,\n      honorColor: false,\n      properties: null,\n      gridHeaderStyle: 'font-weight: bold; padding: 5px; border: 1px solid #dddddd;',\n      gridStyle: 'border: 1px solid lightgray; margin-bottom: -1px;',\n      showModal: false,\n      onError: function onError(error) {\n        throw error;\n      },\n      onLoadingStart: null,\n      onLoadingEnd: null,\n      onPrintDialogClose: null,\n      onPdfOpen: null,\n      onBrowserIncompatible: function onBrowserIncompatible() {\n        return true;\n      },\n      modalMessage: 'Retrieving Document...',\n      frameId: 'printJS',\n      printableElement: null,\n      documentTitle: 'Document',\n      targetStyle: ['clear', 'display', 'width', 'min-width', 'height', 'min-height', 'max-height'],\n      targetStyles: ['border', 'box', 'break', 'text-decoration'],\n      ignoreElements: [],\n      imageStyle: 'max-width: 100%;',\n      repeatTableHeader: true,\n      css: null,\n      style: null,\n      scanStyles: true,\n      base64: false\n\n      // Check if a printable document or object was supplied\n    };var args = arguments[0];\n    if (args === undefined) throw new Error('printJS expects at least 1 attribute.');\n\n    // Process parameters\n    switch (typeof args === 'undefined' ? 'undefined' : _typeof(args)) {\n      case 'string':\n        params.printable = encodeURI(args);\n        params.fallbackPrintable = params.printable;\n        params.type = arguments[1] || params.type;\n        break;\n      case 'object':\n        params.printable = args.printable;\n        params.base64 = typeof args.base64 !== 'undefined';\n        params.fallbackPrintable = typeof args.fallbackPrintable !== 'undefined' ? args.fallbackPrintable : params.printable;\n        params.fallbackPrintable = params.base64 ? 'data:application/pdf;base64,' + params.fallbackPrintable : params.fallbackPrintable;\n        for (var k in params) {\n          if (k === 'printable' || k === 'fallbackPrintable' || k === 'base64') continue;\n\n          params[k] = typeof args[k] !== 'undefined' ? args[k] : params[k];\n        }\n        break;\n      default:\n        throw new Error('Unexpected argument type! Expected \"string\" or \"object\", got ' + (typeof args === 'undefined' ? 'undefined' : _typeof(args)));\n    }\n\n    // Validate printable\n    if (!params.printable) throw new Error('Missing printable information.');\n\n    // Validate type\n    if (!params.type || typeof params.type !== 'string' || printTypes.indexOf(params.type.toLowerCase()) === -1) {\n      throw new Error('Invalid print type. Available types are: pdf, html, image and json.');\n    }\n\n    // Check if we are showing a feedback message to the user (useful for large files)\n    if (params.showModal) _modal2.default.show(params);\n\n    // Check for a print start hook function\n    if (params.onLoadingStart) params.onLoadingStart();\n\n    // To prevent duplication and issues, remove any used printFrame from the DOM\n    var usedFrame = document.getElementById(params.frameId);\n\n    if (usedFrame) usedFrame.parentNode.removeChild(usedFrame);\n\n    // Create a new iframe or embed element (IE prints blank pdf's if we use iframe)\n    var printFrame = void 0;\n\n    // Create iframe element\n    printFrame = document.createElement('iframe');\n\n    // Hide iframe\n    printFrame.setAttribute('style', 'visibility: hidden; height: 0; width: 0; position: absolute;');\n\n    // Set iframe element id\n    printFrame.setAttribute('id', params.frameId);\n\n    // For non pdf printing, pass an html document string to srcdoc (force onload callback)\n    if (params.type !== 'pdf') {\n      printFrame.srcdoc = '<html><head><title>' + params.documentTitle + '</title>';\n\n      // Attach css files\n      if (params.css) {\n        // Add support for single file\n        if (!Array.isArray(params.css)) params.css = [params.css];\n\n        // Create link tags for each css file\n        params.css.forEach(function (file) {\n          printFrame.srcdoc += '<link rel=\"stylesheet\" href=\"' + file + '\">';\n        });\n      }\n\n      printFrame.srcdoc += '</head><body></body></html>';\n    }\n\n    // Check printable type\n    switch (params.type) {\n      case 'pdf':\n        // Check browser support for pdf and if not supported we will just open the pdf file instead\n        if (_browser2.default.isFirefox() || _browser2.default.isEdge() || _browser2.default.isIE()) {\n          try {\n            console.info('PrintJS currently doesn\\'t support PDF printing in Firefox, Internet Explorer and Edge.');\n            if (params.onBrowserIncompatible() === true) {\n              var win = window.open(params.fallbackPrintable, '_blank');\n              win.focus();\n              if (params.onPdfOpen) params.onPdfOpen();\n            }\n          } catch (e) {\n            params.onError(e);\n          } finally {\n            // Make sure there is no loading modal opened\n            if (params.showModal) _modal2.default.close();\n            if (params.onLoadingEnd) params.onLoadingEnd();\n          }\n        } else {\n          _pdf2.default.print(params, printFrame);\n        }\n        break;\n      case 'image':\n        _image2.default.print(params, printFrame);\n        break;\n      case 'html':\n        _html2.default.print(params, printFrame);\n        break;\n      case 'raw-html':\n        _rawHtml2.default.print(params, printFrame);\n        break;\n      case 'json':\n        _json2.default.print(params, printFrame);\n        break;\n    }\n  }\n};\n\n//# sourceURL=webpack://printJS/./src/js/init.js?");

/***/ }),

/***/ "./src/js/json.js":
/*!************************!*\
  !*** ./src/js/json.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _functions = __webpack_require__(/*! ./functions */ \"./src/js/functions.js\");\n\nvar _print = __webpack_require__(/*! ./print */ \"./src/js/print.js\");\n\nvar _print2 = _interopRequireDefault(_print);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  print: function print(params, printFrame) {\n    // Check if we received proper data\n    if (_typeof(params.printable) !== 'object') {\n      throw new Error('Invalid javascript data object (JSON).');\n    }\n\n    // Validate repeatTableHeader\n    if (typeof params.repeatTableHeader !== 'boolean') {\n      throw new Error('Invalid value for repeatTableHeader attribute (JSON).');\n    }\n\n    // Validate properties\n    if (!params.properties || !Array.isArray(params.properties)) {\n      throw new Error('Invalid properties array for your JSON data.');\n    }\n\n    // We will format the property objects to keep the JSON api compatible with older releases\n    params.properties = params.properties.map(function (property) {\n      return {\n        field: (typeof property === 'undefined' ? 'undefined' : _typeof(property)) === 'object' ? property.field : property,\n        displayName: (typeof property === 'undefined' ? 'undefined' : _typeof(property)) === 'object' ? property.displayName : property,\n        columnSize: (typeof property === 'undefined' ? 'undefined' : _typeof(property)) === 'object' && property.columnSize ? property.columnSize + ';' : 100 / params.properties.length + '%;'\n      };\n    });\n\n    // Create a print container element\n    params.printableElement = document.createElement('div');\n\n    // Check if we are adding a print header\n    if (params.header) {\n      (0, _functions.addHeader)(params.printableElement, params);\n    }\n\n    // Build the printable html data\n    params.printableElement.innerHTML += jsonToHTML(params);\n\n    // Print the json data\n    _print2.default.send(params, printFrame);\n  }\n};\n\n\nfunction jsonToHTML(params) {\n  // Get the row and column data\n  var data = params.printable;\n  var properties = params.properties;\n\n  // Create a html table\n  var htmlData = '<table style=\"border-collapse: collapse; width: 100%;\">';\n\n  // Check if the header should be repeated\n  if (params.repeatTableHeader) {\n    htmlData += '<thead>';\n  }\n\n  // Add the table header row\n  htmlData += '<tr>';\n\n  // Add the table header columns\n  for (var a = 0; a < properties.length; a++) {\n    htmlData += '<th style=\"width:' + properties[a].columnSize + ';' + params.gridHeaderStyle + '\">' + (0, _functions.capitalizePrint)(properties[a].displayName) + '</th>';\n  }\n\n  // Add the closing tag for the table header row\n  htmlData += '</tr>';\n\n  // If the table header is marked as repeated, add the closing tag\n  if (params.repeatTableHeader) {\n    htmlData += '</thead>';\n  }\n\n  // Create the table body\n  htmlData += '<tbody>';\n\n  // Add the table data rows\n  for (var i = 0; i < data.length; i++) {\n    // Add the row starting tag\n    htmlData += '<tr>';\n\n    // Print selected properties only\n    for (var n = 0; n < properties.length; n++) {\n      var stringData = data[i];\n\n      // Support nested objects\n      var property = properties[n].field.split('.');\n      if (property.length > 1) {\n        for (var p = 0; p < property.length; p++) {\n          stringData = stringData[property[p]];\n        }\n      } else {\n        stringData = stringData[properties[n].field];\n      }\n\n      // Add the row contents and styles\n      htmlData += '<td style=\"width:' + properties[n].columnSize + params.gridStyle + '\">' + stringData + '</td>';\n    }\n\n    // Add the row closing tag\n    htmlData += '</tr>';\n  }\n\n  // Add the table and body closing tags\n  htmlData += '</tbody></table>';\n\n  return htmlData;\n}\n\n//# sourceURL=webpack://printJS/./src/js/json.js?");

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar Modal = {\n  show: function show(params) {\n    // Build modal\n    var modalStyle = 'font-family:sans-serif; ' + 'display:table; ' + 'text-align:center; ' + 'font-weight:300; ' + 'font-size:30px; ' + 'left:0; top:0;' + 'position:fixed; ' + 'z-index: 9990;' + 'color: #0460B5; ' + 'width: 100%; ' + 'height: 100%; ' + 'background-color:rgba(255,255,255,.9);' + 'transition: opacity .3s ease;';\n\n    // Create wrapper\n    var printModal = document.createElement('div');\n    printModal.setAttribute('style', modalStyle);\n    printModal.setAttribute('id', 'printJS-Modal');\n\n    // Create content div\n    var contentDiv = document.createElement('div');\n    contentDiv.setAttribute('style', 'display:table-cell; vertical-align:middle; padding-bottom:100px;');\n\n    // Add close button (requires print.css)\n    var closeButton = document.createElement('div');\n    closeButton.setAttribute('class', 'printClose');\n    closeButton.setAttribute('id', 'printClose');\n    contentDiv.appendChild(closeButton);\n\n    // Add spinner (requires print.css)\n    var spinner = document.createElement('span');\n    spinner.setAttribute('class', 'printSpinner');\n    contentDiv.appendChild(spinner);\n\n    // Add message\n    var messageNode = document.createTextNode(params.modalMessage);\n    contentDiv.appendChild(messageNode);\n\n    // Add contentDiv to printModal\n    printModal.appendChild(contentDiv);\n\n    // Append print modal element to document body\n    document.getElementsByTagName('body')[0].appendChild(printModal);\n\n    // Add event listener to close button\n    document.getElementById('printClose').addEventListener('click', function () {\n      Modal.close();\n    });\n  },\n  close: function close() {\n    var printFrame = document.getElementById('printJS-Modal');\n\n    printFrame.parentNode.removeChild(printFrame);\n  }\n};\n\nexports.default = Modal;\n\n//# sourceURL=webpack://printJS/./src/js/modal.js?");

/***/ }),

/***/ "./src/js/pdf.js":
/*!***********************!*\
  !*** ./src/js/pdf.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _print = __webpack_require__(/*! ./print */ \"./src/js/print.js\");\n\nvar _print2 = _interopRequireDefault(_print);\n\nvar _functions = __webpack_require__(/*! ./functions */ \"./src/js/functions.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  print: function print(params, printFrame) {\n    // Check if we have base64 data\n    if (params.base64) {\n      var bytesArray = Uint8Array.from(atob(params.printable), function (c) {\n        return c.charCodeAt(0);\n      });\n      createBlobAndPrint(params, printFrame, bytesArray);\n      return;\n    }\n\n    // Format pdf url\n    params.printable = /^(blob|http)/i.test(params.printable) ? params.printable : window.location.origin + (params.printable.charAt(0) !== '/' ? '/' + params.printable : params.printable);\n\n    // Get the file through a http request (Preload)\n    var req = new window.XMLHttpRequest();\n    req.responseType = 'arraybuffer';\n\n    req.addEventListener('load', function () {\n      // Check for errors\n      if ([200, 201].indexOf(req.status) === -1) {\n        (0, _functions.cleanUp)(params);\n        params.onError(req.statusText);\n\n        // Since we don't have a pdf document available, we will stop the print job\n        return;\n      }\n\n      // Print requested document\n      createBlobAndPrint(params, printFrame, req.response);\n    });\n\n    req.open('GET', params.printable, true);\n    req.send();\n  }\n};\n\n\nfunction createBlobAndPrint(params, printFrame, data) {\n  // Pass response or base64 data to a blob and create a local object url\n  var localPdf = new window.Blob([data], { type: 'application/pdf' });\n  localPdf = window.URL.createObjectURL(localPdf);\n\n  // Set iframe src with pdf document url\n  printFrame.setAttribute('src', localPdf);\n\n  _print2.default.send(params, printFrame);\n}\n\n//# sourceURL=webpack://printJS/./src/js/pdf.js?");

/***/ }),

/***/ "./src/js/print.js":
/*!*************************!*\
  !*** ./src/js/print.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _browser = __webpack_require__(/*! ./browser */ \"./src/js/browser.js\");\n\nvar _browser2 = _interopRequireDefault(_browser);\n\nvar _functions = __webpack_require__(/*! ./functions */ \"./src/js/functions.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Print = {\n  send: function send(params, printFrame) {\n    // Append iframe element to document body\n    document.getElementsByTagName('body')[0].appendChild(printFrame);\n\n    // Get iframe element\n    var iframeElement = document.getElementById(params.frameId);\n\n    // Wait for iframe to load all content\n    iframeElement.onload = function () {\n      if (params.type === 'pdf') {\n        performPrint(iframeElement, params);\n        return;\n      }\n\n      // Get iframe element document\n      var printDocument = iframeElement.contentWindow || iframeElement.contentDocument;\n      if (printDocument.document) printDocument = printDocument.document;\n\n      // Append printable element to the iframe body\n      printDocument.body.appendChild(params.printableElement);\n\n      // Add custom style\n      if (params.type !== 'pdf' && params.style) {\n        // Create style element\n        var style = document.createElement('style');\n        style.innerHTML = params.style;\n\n        // Append style element to iframe's head\n        printDocument.head.appendChild(style);\n      }\n\n      // If printing images, wait for them to load inside the iframe\n      var images = printDocument.getElementsByTagName('img');\n\n      if (images.length > 0) {\n        loadIframeImages(images).then(function () {\n          return performPrint(iframeElement, params);\n        });\n      } else {\n        performPrint(iframeElement, params);\n      }\n    };\n  }\n};\n\nfunction performPrint(iframeElement, params) {\n  try {\n    iframeElement.focus();\n\n    // If Edge or IE, try catch with execCommand\n    if (_browser2.default.isEdge() || _browser2.default.isIE()) {\n      try {\n        iframeElement.contentWindow.document.execCommand('print', false, null);\n      } catch (e) {\n        iframeElement.contentWindow.print();\n      }\n    } else {\n      // Other browsers\n      iframeElement.contentWindow.print();\n    }\n  } catch (error) {\n    params.onError(error);\n  } finally {\n    (0, _functions.cleanUp)(params);\n  }\n}\n\nfunction loadIframeImages(images) {\n  var promises = [];\n\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var image = _step.value;\n\n      promises.push(loadIframeImage(image));\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  return Promise.all(promises);\n}\n\nfunction loadIframeImage(image) {\n  return new Promise(function (resolve) {\n    var pollImage = function pollImage() {\n      !image || typeof image.naturalWidth === 'undefined' || image.naturalWidth === 0 || !image.complete ? setTimeout(pollImage, 500) : resolve();\n    };\n    pollImage();\n  });\n}\n\nexports.default = Print;\n\n//# sourceURL=webpack://printJS/./src/js/print.js?");

/***/ }),

/***/ "./src/js/raw-html.js":
/*!****************************!*\
  !*** ./src/js/raw-html.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _print = __webpack_require__(/*! ./print */ \"./src/js/print.js\");\n\nvar _print2 = _interopRequireDefault(_print);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  print: function print(params, printFrame) {\n    // Create printable element (container)\n    params.printableElement = document.createElement('div');\n    params.printableElement.setAttribute('style', 'width:100%');\n\n    // Set our raw html as the printable element inner html content\n    params.printableElement.innerHTML = params.printable;\n\n    // Print html contents\n    _print2.default.send(params, printFrame);\n  }\n};\n\n//# sourceURL=webpack://printJS/./src/js/raw-html.js?");

/***/ }),

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://printJS/./src/sass/index.scss?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack://printJS/multi_./src/index.js?");

/***/ })

/******/ })["default"];
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-money-format/src/components/MoneyFormat.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-money-format/src/components/MoneyFormat.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    value: Number,
    locale: {
      type: String,
      default: 'en'
    },
    currencyCode: {
      type: String,
      default: 'USD'
    },
    supplementalPrecision: {
      type: Number,
      default: 0
    },
    subunitsValue: {
      type: Boolean,
      default: false
    },
    subunitsToUnit: {
      type: Number,
      default: 1
    },
    hideSubunits: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    /////////////////////////////////////////////////////////////////////
    // Format money based on integer or floating input
    // ===============================================
    // Possible inputs are:
    // value:                 Numerical input (required)
    // locale:                Language and country information, such as 'en' or 'en-US'
    // currencyCode:          3-character cdde from ISO 4217
    // subunitsValue:         Value is denominated in subunits, such as cents
    // subunitsToUnits:       Overrides the minor unit value from ISO 4217. The "subunitsValue"
    //                        option is redundant if you enter a value for this
    // hideSubunits:          Set this to true if you don't want to display the subunits
    // supplementalPrecision: Allows you to display partial subunits . This is ignored if
    //                        you specify "hideSubunits=true"
    /////////////////////////////////////////////////////////////////////
    formatMoney: function(value, 
                          locale, 
                          currencyCode, 
                          subunitsValue, 
                          subunitsToUnit,
                          hideSubunits, 
                          supplementalPrecision) {
      let ret = 0;
      if (Number.isFinite(value)) {
        try {
          let numFormat = new Intl.NumberFormat(locale, { style: 'currency', currency: currencyCode });
          let options = numFormat.resolvedOptions();
          let fraction_digits = options.minimumFractionDigits;
          if (subunitsToUnit > 1) {
            value = value/subunitsToUnit;
          }
          else if (subunitsValue == true) {
            value = value/10 ** options.minimumFractionDigits;
          }
          if (hideSubunits == true) {
            numFormat = new Intl.NumberFormat(locale, { style: 'currency', currency: currencyCode, minimumFractionDigits: 0 , maximumFractionDigits: 0 });
          }
          else if (supplementalPrecision > 0) {
            numFormat = new Intl.NumberFormat(locale, { style: 'currency', 
              currency: currencyCode, 
              minimumFractionDigits: options.minimumFractionDigits + supplementalPrecision , 
              maximumFractionDigits: options.maximumFractionDigits + supplementalPrecision });
          }
          ret = numFormat.format(value);
        }
        catch (err) {
          ret = err.message;
        }
      }
      else {
        ret = '#NaN!';
      }
      return ret;
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-money-format/src/components/MoneyFormat.vue?vue&type=template&id=82a851d4&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-money-format/src/components/MoneyFormat.vue?vue&type=template&id=82a851d4& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "money_format" }, [
    _vm._v(
      "\n  " +
        _vm._s(
          _vm.formatMoney(
            _vm.value,
            _vm.locale,
            _vm.currencyCode,
            _vm.subunitsValue,
            _vm.subunitsToUnit,
            _vm.hideSubunits,
            _vm.supplementalPrecision
          )
        ) +
        "\n"
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-money-format/src/components/MoneyFormat.vue":
/*!**********************************************************************!*\
  !*** ./node_modules/vue-money-format/src/components/MoneyFormat.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MoneyFormat_vue_vue_type_template_id_82a851d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MoneyFormat.vue?vue&type=template&id=82a851d4& */ "./node_modules/vue-money-format/src/components/MoneyFormat.vue?vue&type=template&id=82a851d4&");
/* harmony import */ var _MoneyFormat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MoneyFormat.vue?vue&type=script&lang=js& */ "./node_modules/vue-money-format/src/components/MoneyFormat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MoneyFormat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MoneyFormat_vue_vue_type_template_id_82a851d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MoneyFormat_vue_vue_type_template_id_82a851d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-money-format/src/components/MoneyFormat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-money-format/src/components/MoneyFormat.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./node_modules/vue-money-format/src/components/MoneyFormat.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_MoneyFormat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib??vue-loader-options!./MoneyFormat.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-money-format/src/components/MoneyFormat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_MoneyFormat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-money-format/src/components/MoneyFormat.vue?vue&type=template&id=82a851d4&":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/vue-money-format/src/components/MoneyFormat.vue?vue&type=template&id=82a851d4& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_MoneyFormat_vue_vue_type_template_id_82a851d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../vue-loader/lib??vue-loader-options!./MoneyFormat.vue?vue&type=template&id=82a851d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-money-format/src/components/MoneyFormat.vue?vue&type=template&id=82a851d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_MoneyFormat_vue_vue_type_template_id_82a851d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_MoneyFormat_vue_vue_type_template_id_82a851d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/vue-money-format/src/main.js":
/*!***************************************************!*\
  !*** ./node_modules/vue-money-format/src/main.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_MoneyFormat_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/MoneyFormat.vue */ "./node_modules/vue-money-format/src/components/MoneyFormat.vue");


/* harmony default export */ __webpack_exports__["default"] = (_components_MoneyFormat_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

}]);