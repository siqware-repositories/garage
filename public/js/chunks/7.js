(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

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

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/flatpickr/dist/flatpickr.min.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/postcss-loader/src??ref--7-2!./node_modules/flatpickr/dist/flatpickr.min.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flatpickr-calendar{\n  opacity:0;\n  display:none;\n  visibility:hidden;\n  font-size:14px;\n  line-height:24px;\n  position:absolute;\n  width:307.875px;\n  -webkit-box-sizing:border-box;\n  box-sizing:border-box;\n  -ms-touch-action:manipulation;\n  touch-action:manipulation;\n}[dir] .flatpickr-calendar{\n  background:transparent;\n  text-align:center;\n  padding:0;\n  border:0;\n  border-radius:5px;\n  background:#fff;\n}[dir=ltr] .flatpickr-calendar{\n  -webkit-animation:none;\n  animation:none;\n  direction:ltr;\n  -webkit-box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,0.08);\n  box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,0.08);\n}[dir=rtl] .flatpickr-calendar{\n  -webkit-animation:none;\n  animation:none;\n  direction:rtl;\n  -webkit-box-shadow:-1px 0 0 #e6e6e6,1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,0.08);\n  box-shadow:-1px 0 0 #e6e6e6,1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,0.08);\n}\n\n.flatpickr-calendar.open,.flatpickr-calendar.inline{\n  opacity:1;\n  max-height:640px;\n  visibility:visible\n}\n\n.flatpickr-calendar.open{\n  display:inline-block;\n  z-index:99999\n}\n\n[dir=ltr] .flatpickr-calendar.animate.open{\n  -webkit-animation:fpFadeInDown 300ms cubic-bezier(.23,1,.32,1);\n  animation:fpFadeInDown 300ms cubic-bezier(.23,1,.32,1)\n}\n\n[dir=rtl] .flatpickr-calendar.animate.open{\n  -webkit-animation:fpFadeInDown 300ms cubic-bezier(.23,1,.32,1);\n  animation:fpFadeInDown 300ms cubic-bezier(.23,1,.32,1)\n}\n\n.flatpickr-calendar.inline{\n  display:block;\n  position:relative;\n  top:2px\n}\n\n.flatpickr-calendar.static{\n  position:absolute;\n  top:calc(100% + 2px);\n}\n\n.flatpickr-calendar.static.open{\n  z-index:999;\n  display:block\n}\n\n.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7){\n  -webkit-box-shadow:none !important\n}\n\n[dir] .flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7){\n  -webkit-box-shadow:none !important;\n          box-shadow:none !important\n}\n\n[dir=ltr] .flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1){\n  -webkit-box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6;\n  box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6\n}\n\n[dir=rtl] .flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1){\n  -webkit-box-shadow:2px 0 0 #e6e6e6,-5px 0 0 #e6e6e6;\n  box-shadow:2px 0 0 #e6e6e6,-5px 0 0 #e6e6e6\n}\n\n[dir] .flatpickr-calendar .hasWeeks .dayContainer, [dir] .flatpickr-calendar .hasTime .dayContainer{\n  border-bottom:0\n}\n\n[dir=ltr] .flatpickr-calendar .hasWeeks .dayContainer, [dir=ltr] .flatpickr-calendar .hasTime .dayContainer{\n  border-bottom-right-radius:0;\n  border-bottom-left-radius:0\n}\n\n[dir=rtl] .flatpickr-calendar .hasWeeks .dayContainer, [dir=rtl] .flatpickr-calendar .hasTime .dayContainer{\n  border-bottom-left-radius:0;\n  border-bottom-right-radius:0\n}\n\n[dir=ltr] .flatpickr-calendar .hasWeeks .dayContainer{\n  border-left:0\n}\n\n[dir=rtl] .flatpickr-calendar .hasWeeks .dayContainer{\n  border-right:0\n}\n\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time{\n  height:40px\n}\n\n[dir] .flatpickr-calendar.showTimeInput.hasTime .flatpickr-time{\n  border-top:1px solid #e6e6e6\n}\n\n.flatpickr-calendar.noCalendar.hasTime .flatpickr-time{\n  height:auto\n}\n\n.flatpickr-calendar:before,.flatpickr-calendar:after{\n  position:absolute;\n  display:block;\n  pointer-events:none;\n  content:'';\n  height:0;\n  width:0\n}\n\n[dir] .flatpickr-calendar:before, [dir] .flatpickr-calendar:after{\n  border:solid transparent\n}\n\n[dir=ltr] .flatpickr-calendar:before, [dir=ltr] .flatpickr-calendar:after{\n  left:22px\n}\n\n[dir=rtl] .flatpickr-calendar:before, [dir=rtl] .flatpickr-calendar:after{\n  right:22px\n}\n\n[dir=ltr] .flatpickr-calendar.rightMost:before, [dir=ltr] .flatpickr-calendar.rightMost:after{\n  left:auto;\n  right:22px\n}\n\n[dir=rtl] .flatpickr-calendar.rightMost:before, [dir=rtl] .flatpickr-calendar.rightMost:after{\n  right:auto;\n  left:22px\n}\n\n[dir] .flatpickr-calendar:before{\n  border-width:5px;\n  margin:0 -5px\n}\n\n[dir] .flatpickr-calendar:after{\n  border-width:4px;\n  margin:0 -4px\n}\n\n.flatpickr-calendar.arrowTop:before,.flatpickr-calendar.arrowTop:after{\n  bottom:100%\n}\n\n[dir] .flatpickr-calendar.arrowTop:before{\n  border-bottom-color:#e6e6e6\n}\n\n[dir] .flatpickr-calendar.arrowTop:after{\n  border-bottom-color:#fff\n}\n\n.flatpickr-calendar.arrowBottom:before,.flatpickr-calendar.arrowBottom:after{\n  top:100%\n}\n\n[dir] .flatpickr-calendar.arrowBottom:before{\n  border-top-color:#e6e6e6\n}\n\n[dir] .flatpickr-calendar.arrowBottom:after{\n  border-top-color:#fff\n}\n\n.flatpickr-calendar:focus{\n  outline:0\n}\n\n.flatpickr-wrapper{\n  position:relative;\n  display:inline-block\n}\n\n.flatpickr-months{\n  display:-webkit-box;\n  display:-webkit-flex;\n  display:-ms-flexbox;\n  display:flex;\n}\n\n.flatpickr-months .flatpickr-month{\n  color:rgba(0,0,0,0.9);\n  fill:rgba(0,0,0,0.9);\n  height:34px;\n  line-height:1;\n  position:relative;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none;\n  overflow:hidden;\n  -webkit-box-flex:1;\n  -webkit-flex:1;\n  -ms-flex:1;\n  flex:1\n}\n\n[dir] .flatpickr-months .flatpickr-month{\n  background:transparent;\n  text-align:center\n}\n\n.flatpickr-months .flatpickr-prev-month,.flatpickr-months .flatpickr-next-month{\n  text-decoration:none;\n  position:absolute;\n  top:0;\n  height:34px;\n  z-index:3;\n  color:rgba(0,0,0,0.9);\n  fill:rgba(0,0,0,0.9);\n}\n\n[dir] .flatpickr-months .flatpickr-prev-month, [dir] .flatpickr-months .flatpickr-next-month{\n  cursor:pointer;\n  padding:10px;\n}\n\n.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,.flatpickr-months .flatpickr-next-month.flatpickr-disabled{\n  display:none\n}\n\n.flatpickr-months .flatpickr-prev-month i,.flatpickr-months .flatpickr-next-month i{\n  position:relative\n}\n\n.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,.flatpickr-months .flatpickr-next-month.flatpickr-prev-month{\n  /*\n      /*rtl:begin:ignore*/\n  /*\n      /*rtl:end:ignore*/\n}\n\n[dir=ltr] .flatpickr-months .flatpickr-prev-month.flatpickr-prev-month, [dir=ltr] .flatpickr-months .flatpickr-next-month.flatpickr-prev-month{\n  left:0;\n}\n\n[dir=rtl] .flatpickr-months .flatpickr-prev-month.flatpickr-prev-month, [dir=rtl] .flatpickr-months .flatpickr-next-month.flatpickr-prev-month{\n  right:0;\n}\n\n/*\n      /*rtl:begin:ignore*/\n\n/*\n      /*rtl:end:ignore*/\n\n.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,.flatpickr-months .flatpickr-next-month.flatpickr-next-month{\n  /*\n      /*rtl:begin:ignore*/\n  /*\n      /*rtl:end:ignore*/\n}\n\n[dir=ltr] .flatpickr-months .flatpickr-prev-month.flatpickr-next-month, [dir=ltr] .flatpickr-months .flatpickr-next-month.flatpickr-next-month{\n  right:0;\n}\n\n[dir=rtl] .flatpickr-months .flatpickr-prev-month.flatpickr-next-month, [dir=rtl] .flatpickr-months .flatpickr-next-month.flatpickr-next-month{\n  left:0;\n}\n\n/*\n      /*rtl:begin:ignore*/\n\n/*\n      /*rtl:end:ignore*/\n\n.flatpickr-months .flatpickr-prev-month:hover,.flatpickr-months .flatpickr-next-month:hover{\n  color:#959ea9;\n}\n\n.flatpickr-months .flatpickr-prev-month:hover svg,.flatpickr-months .flatpickr-next-month:hover svg{\n  fill:#f64747\n}\n\n.flatpickr-months .flatpickr-prev-month svg,.flatpickr-months .flatpickr-next-month svg{\n  width:14px;\n  height:14px;\n}\n\n.flatpickr-months .flatpickr-prev-month svg path,.flatpickr-months .flatpickr-next-month svg path{\n  -webkit-transition:fill .1s;\n  transition:fill .1s;\n  fill:inherit\n}\n\n[dir] .flatpickr-months .flatpickr-prev-month svg path, [dir] .flatpickr-months .flatpickr-next-month svg path{\n  -webkit-transition:fill .1s\n}\n\n.numInputWrapper{\n  position:relative;\n  height:auto;\n}\n\n.numInputWrapper input,.numInputWrapper span{\n  display:inline-block\n}\n\n.numInputWrapper input{\n  width:100%;\n}\n\n.numInputWrapper input::-ms-clear{\n  display:none\n}\n\n.numInputWrapper input::-webkit-outer-spin-button,.numInputWrapper input::-webkit-inner-spin-button{\n  -webkit-appearance:none\n}\n\n[dir] .numInputWrapper input::-webkit-outer-spin-button, [dir] .numInputWrapper input::-webkit-inner-spin-button{\n  margin:0\n}\n\n.numInputWrapper span{\n  position:absolute;\n  width:14px;\n  height:50%;\n  line-height:50%;\n  opacity:0;\n  -webkit-box-sizing:border-box;\n  box-sizing:border-box;\n}\n\n[dir] .numInputWrapper span{\n  cursor:pointer;\n  border:1px solid rgba(57,57,57,0.15);\n}\n\n[dir=ltr] .numInputWrapper span{\n  right:0;\n  padding:0 4px 0 2px;\n}\n\n[dir=rtl] .numInputWrapper span{\n  left:0;\n  padding:0 2px 0 4px;\n}\n\n[dir] .numInputWrapper span:hover{\n  background:rgba(0,0,0,0.1)\n}\n\n[dir] .numInputWrapper span:active{\n  background:rgba(0,0,0,0.2)\n}\n\n.numInputWrapper span:after{\n  display:block;\n  content:\"\";\n  position:absolute\n}\n\n.numInputWrapper span.arrowUp{\n  top:0;\n}\n\n[dir] .numInputWrapper span.arrowUp{\n  border-bottom:0;\n}\n\n.numInputWrapper span.arrowUp:after{\n  top:26%\n}\n\n[dir] .numInputWrapper span.arrowUp:after{\n  border-bottom:4px solid rgba(57,57,57,0.6)\n}\n\n[dir=ltr] .numInputWrapper span.arrowUp:after{\n  border-left:4px solid transparent;\n  border-right:4px solid transparent\n}\n\n[dir=rtl] .numInputWrapper span.arrowUp:after{\n  border-right:4px solid transparent;\n  border-left:4px solid transparent\n}\n\n.numInputWrapper span.arrowDown{\n  top:50%;\n}\n\n.numInputWrapper span.arrowDown:after{\n  top:40%\n}\n\n[dir] .numInputWrapper span.arrowDown:after{\n  border-top:4px solid rgba(57,57,57,0.6)\n}\n\n[dir=ltr] .numInputWrapper span.arrowDown:after{\n  border-left:4px solid transparent;\n  border-right:4px solid transparent\n}\n\n[dir=rtl] .numInputWrapper span.arrowDown:after{\n  border-right:4px solid transparent;\n  border-left:4px solid transparent\n}\n\n.numInputWrapper span svg{\n  width:inherit;\n  height:auto;\n}\n\n.numInputWrapper span svg path{\n  fill:rgba(0,0,0,0.5)\n}\n\n[dir] .numInputWrapper:hover{\n  background:rgba(0,0,0,0.05);\n}\n\n.numInputWrapper:hover span{\n  opacity:1\n}\n\n.flatpickr-current-month{\n  font-size:135%;\n  line-height:inherit;\n  font-weight:300;\n  color:inherit;\n  position:absolute;\n  width:75%;\n  line-height:1;\n  height:34px;\n  display:inline-block;\n  -webkit-transform:translate3d(0,0,0);\n}\n\n[dir] .flatpickr-current-month{\n  padding:7.48px 0 0 0;\n  text-align:center;\n  -webkit-transform:translate3d(0,0,0);\n          transform:translate3d(0,0,0);\n}\n\n[dir=ltr] .flatpickr-current-month{\n  left:12.5%;\n}\n\n[dir=rtl] .flatpickr-current-month{\n  right:12.5%;\n}\n\n.flatpickr-current-month span.cur-month{\n  font-family:inherit;\n  font-weight:700;\n  color:inherit;\n  display:inline-block;\n}\n\n[dir] .flatpickr-current-month span.cur-month{\n  padding:0;\n}\n\n[dir=ltr] .flatpickr-current-month span.cur-month{\n  margin-left:.5ch;\n}\n\n[dir=rtl] .flatpickr-current-month span.cur-month{\n  margin-right:.5ch;\n}\n\n[dir] .flatpickr-current-month span.cur-month:hover{\n  background:rgba(0,0,0,0.05)\n}\n\n.flatpickr-current-month .numInputWrapper{\n  width:6ch;\n  width:7ch\\0;\n  display:inline-block;\n}\n\n[dir] .flatpickr-current-month .numInputWrapper span.arrowUp:after{\n  border-bottom-color:rgba(0,0,0,0.9)\n}\n\n[dir] .flatpickr-current-month .numInputWrapper span.arrowDown:after{\n  border-top-color:rgba(0,0,0,0.9)\n}\n\n.flatpickr-current-month input.cur-year{\n  -webkit-box-sizing:border-box;\n  box-sizing:border-box;\n  color:inherit;\n  display:inline-block;\n  font-size:inherit;\n  font-family:inherit;\n  font-weight:300;\n  line-height:inherit;\n  height:auto;\n  vertical-align:initial;\n  -webkit-appearance:textfield;\n  -moz-appearance:textfield;\n  appearance:textfield;\n}\n\n[dir] .flatpickr-current-month input.cur-year{\n  background:transparent;\n  cursor:text;\n  margin:0;\n  border:0;\n  border-radius:0;\n}\n\n[dir=ltr] .flatpickr-current-month input.cur-year{\n  padding:0 0 0 .5ch;\n}\n\n[dir=rtl] .flatpickr-current-month input.cur-year{\n  padding:0 .5ch 0 0;\n}\n\n.flatpickr-current-month input.cur-year:focus{\n  outline:0\n}\n\n.flatpickr-current-month input.cur-year[disabled],.flatpickr-current-month input.cur-year[disabled]:hover{\n  font-size:100%;\n  color:rgba(0,0,0,0.5);\n  pointer-events:none\n}\n\n[dir] .flatpickr-current-month input.cur-year[disabled], [dir] .flatpickr-current-month input.cur-year[disabled]:hover{\n  background:transparent\n}\n\n.flatpickr-current-month .flatpickr-monthDropdown-months{\n  appearance:menulist;\n  box-sizing:border-box;\n  color:inherit;\n  font-size:inherit;\n  font-family:inherit;\n  font-weight:300;\n  height:auto;\n  line-height:inherit;\n  outline:none;\n  position:relative;\n  vertical-align:initial;\n  -webkit-box-sizing:border-box;\n  -webkit-appearance:menulist;\n  -moz-appearance:menulist;\n  width:auto;\n}\n\n[dir] .flatpickr-current-month .flatpickr-monthDropdown-months{\n  background:transparent;\n  border:none;\n  border-radius:0;\n  cursor:pointer;\n  margin:-1px 0 0 0;\n}\n\n[dir=ltr] .flatpickr-current-month .flatpickr-monthDropdown-months{\n  padding:0 0 0 .5ch;\n}\n\n[dir=rtl] .flatpickr-current-month .flatpickr-monthDropdown-months{\n  padding:0 .5ch 0 0;\n}\n\n.flatpickr-current-month .flatpickr-monthDropdown-months:focus,.flatpickr-current-month .flatpickr-monthDropdown-months:active{\n  outline:none\n}\n\n[dir] .flatpickr-current-month .flatpickr-monthDropdown-months:hover{\n  background:rgba(0,0,0,0.05)\n}\n\n.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month{\n  outline:none\n}\n\n[dir] .flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month{\n  background-color:transparent;\n  padding:0\n}\n\n.flatpickr-weekdays{\n  overflow:hidden;\n  width:100%;\n  display:-webkit-box;\n  display:-webkit-flex;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-align:center;\n  -webkit-align-items:center;\n  -ms-flex-align:center;\n  align-items:center;\n  height:28px;\n}\n\n[dir] .flatpickr-weekdays{\n  background:transparent;\n  text-align:center;\n}\n\n.flatpickr-weekdays .flatpickr-weekdaycontainer{\n  display:-webkit-box;\n  display:-webkit-flex;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-flex:1;\n  -webkit-flex:1;\n  -ms-flex:1;\n  flex:1\n}\n\nspan.flatpickr-weekday{\n  font-size:90%;\n  color:rgba(0,0,0,0.54);\n  line-height:1;\n  display:block;\n  -webkit-box-flex:1;\n  -webkit-flex:1;\n  -ms-flex:1;\n  flex:1;\n  font-weight:bolder\n}\n\n[dir] span.flatpickr-weekday{\n  cursor:default;\n  background:transparent;\n  margin:0;\n  text-align:center\n}\n\n[dir] .dayContainer, [dir] .flatpickr-weeks{\n  padding:1px 0 0 0\n}\n\n.flatpickr-days{\n  position:relative;\n  overflow:hidden;\n  display:-webkit-box;\n  display:-webkit-flex;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-align:start;\n  -webkit-align-items:flex-start;\n  -ms-flex-align:start;\n  align-items:flex-start;\n  width:307.875px;\n}\n\n.flatpickr-days:focus{\n  outline:0\n}\n\n.dayContainer{\n  outline:0;\n  width:307.875px;\n  min-width:307.875px;\n  max-width:307.875px;\n  -webkit-box-sizing:border-box;\n  box-sizing:border-box;\n  display:inline-block;\n  display:-ms-flexbox;\n  display:-webkit-box;\n  display:-webkit-flex;\n  display:flex;\n  -webkit-flex-wrap:wrap;\n  flex-wrap:wrap;\n  -ms-flex-wrap:wrap;\n  -ms-flex-pack:justify;\n  -webkit-justify-content:space-around;\n  justify-content:space-around;\n  -webkit-transform:translate3d(0,0,0);\n  opacity:1;\n}\n\n[dir] .dayContainer{\n  padding:0;\n  -webkit-transform:translate3d(0,0,0);\n          transform:translate3d(0,0,0);\n}\n\n[dir=ltr] .dayContainer{\n  text-align:left;\n}\n\n[dir=rtl] .dayContainer{\n  text-align:right;\n}\n\n[dir=ltr] .dayContainer + .dayContainer{\n  -webkit-box-shadow:-1px 0 0 #e6e6e6;\n  box-shadow:-1px 0 0 #e6e6e6\n}\n\n[dir=rtl] .dayContainer + .dayContainer{\n  -webkit-box-shadow:1px 0 0 #e6e6e6;\n  box-shadow:1px 0 0 #e6e6e6\n}\n\n.flatpickr-day{\n  -webkit-box-sizing:border-box;\n  box-sizing:border-box;\n  color:#393939;\n  font-weight:400;\n  width:14.2857143%;\n  -webkit-flex-basis:14.2857143%;\n  -ms-flex-preferred-size:14.2857143%;\n  flex-basis:14.2857143%;\n  max-width:39px;\n  height:39px;\n  line-height:39px;\n  display:inline-block;\n  position:relative;\n  -webkit-box-pack:center;\n  -webkit-justify-content:center;\n  -ms-flex-pack:center;\n  justify-content:center;\n}\n\n[dir] .flatpickr-day{\n  background:none;\n  border:1px solid transparent;\n  border-radius:150px;\n  cursor:pointer;\n  margin:0;\n  text-align:center;\n}\n\n.flatpickr-day.inRange,.flatpickr-day.prevMonthDay.inRange,.flatpickr-day.nextMonthDay.inRange,.flatpickr-day.today.inRange,.flatpickr-day.prevMonthDay.today.inRange,.flatpickr-day.nextMonthDay.today.inRange,.flatpickr-day:hover,.flatpickr-day.prevMonthDay:hover,.flatpickr-day.nextMonthDay:hover,.flatpickr-day:focus,.flatpickr-day.prevMonthDay:focus,.flatpickr-day.nextMonthDay:focus{\n  outline:0\n}\n\n[dir] .flatpickr-day.inRange, [dir] .flatpickr-day.prevMonthDay.inRange, [dir] .flatpickr-day.nextMonthDay.inRange, [dir] .flatpickr-day.today.inRange, [dir] .flatpickr-day.prevMonthDay.today.inRange, [dir] .flatpickr-day.nextMonthDay.today.inRange, [dir] .flatpickr-day:hover, [dir] .flatpickr-day.prevMonthDay:hover, [dir] .flatpickr-day.nextMonthDay:hover, [dir] .flatpickr-day:focus, [dir] .flatpickr-day.prevMonthDay:focus, [dir] .flatpickr-day.nextMonthDay:focus{\n  cursor:pointer;\n  background:#e6e6e6;\n  border-color:#e6e6e6\n}\n\n[dir] .flatpickr-day.today{\n  border-color:#959ea9;\n}\n\n.flatpickr-day.today:hover,.flatpickr-day.today:focus{\n  color:#fff\n}\n\n[dir] .flatpickr-day.today:hover, [dir] .flatpickr-day.today:focus{\n  border-color:#959ea9;\n  background:#959ea9\n}\n\n.flatpickr-day.selected,.flatpickr-day.startRange,.flatpickr-day.endRange,.flatpickr-day.selected.inRange,.flatpickr-day.startRange.inRange,.flatpickr-day.endRange.inRange,.flatpickr-day.selected:focus,.flatpickr-day.startRange:focus,.flatpickr-day.endRange:focus,.flatpickr-day.selected:hover,.flatpickr-day.startRange:hover,.flatpickr-day.endRange:hover,.flatpickr-day.selected.prevMonthDay,.flatpickr-day.startRange.prevMonthDay,.flatpickr-day.endRange.prevMonthDay,.flatpickr-day.selected.nextMonthDay,.flatpickr-day.startRange.nextMonthDay,.flatpickr-day.endRange.nextMonthDay{\n  -webkit-box-shadow:none;\n  color:#fff\n}\n\n[dir] .flatpickr-day.selected, [dir] .flatpickr-day.startRange, [dir] .flatpickr-day.endRange, [dir] .flatpickr-day.selected.inRange, [dir] .flatpickr-day.startRange.inRange, [dir] .flatpickr-day.endRange.inRange, [dir] .flatpickr-day.selected:focus, [dir] .flatpickr-day.startRange:focus, [dir] .flatpickr-day.endRange:focus, [dir] .flatpickr-day.selected:hover, [dir] .flatpickr-day.startRange:hover, [dir] .flatpickr-day.endRange:hover, [dir] .flatpickr-day.selected.prevMonthDay, [dir] .flatpickr-day.startRange.prevMonthDay, [dir] .flatpickr-day.endRange.prevMonthDay, [dir] .flatpickr-day.selected.nextMonthDay, [dir] .flatpickr-day.startRange.nextMonthDay, [dir] .flatpickr-day.endRange.nextMonthDay{\n  background:#569ff7;\n  -webkit-box-shadow:none;\n          box-shadow:none;\n  border-color:#569ff7\n}\n\n[dir=ltr] .flatpickr-day.selected.startRange, [dir=ltr] .flatpickr-day.startRange.startRange, [dir=ltr] .flatpickr-day.endRange.startRange{\n  border-radius:50px 0 0 50px\n}\n\n[dir=rtl] .flatpickr-day.selected.startRange, [dir=rtl] .flatpickr-day.startRange.startRange, [dir=rtl] .flatpickr-day.endRange.startRange{\n  border-radius:0 50px 50px 0\n}\n\n[dir=ltr] .flatpickr-day.selected.endRange, [dir=ltr] .flatpickr-day.startRange.endRange, [dir=ltr] .flatpickr-day.endRange.endRange{\n  border-radius:0 50px 50px 0\n}\n\n[dir=rtl] .flatpickr-day.selected.endRange, [dir=rtl] .flatpickr-day.startRange.endRange, [dir=rtl] .flatpickr-day.endRange.endRange{\n  border-radius:50px 0 0 50px\n}\n\n[dir=ltr] .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), [dir=ltr] .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), [dir=ltr] .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)){\n  -webkit-box-shadow:-10px 0 0 #569ff7;\n  box-shadow:-10px 0 0 #569ff7\n}\n\n[dir=rtl] .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), [dir=rtl] .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), [dir=rtl] .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)){\n  -webkit-box-shadow:10px 0 0 #569ff7;\n  box-shadow:10px 0 0 #569ff7\n}\n\n[dir] .flatpickr-day.selected.startRange.endRange, [dir] .flatpickr-day.startRange.startRange.endRange, [dir] .flatpickr-day.endRange.startRange.endRange{\n  border-radius:50px\n}\n\n[dir] .flatpickr-day.inRange{\n  border-radius:0\n}\n\n[dir=ltr] .flatpickr-day.inRange{\n  -webkit-box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6;\n  box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6\n}\n\n[dir=rtl] .flatpickr-day.inRange{\n  -webkit-box-shadow:5px 0 0 #e6e6e6,-5px 0 0 #e6e6e6;\n  box-shadow:5px 0 0 #e6e6e6,-5px 0 0 #e6e6e6\n}\n\n.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover,.flatpickr-day.prevMonthDay,.flatpickr-day.nextMonthDay,.flatpickr-day.notAllowed,.flatpickr-day.notAllowed.prevMonthDay,.flatpickr-day.notAllowed.nextMonthDay{\n  color:rgba(57,57,57,0.3)\n}\n\n[dir] .flatpickr-day.flatpickr-disabled, [dir] .flatpickr-day.flatpickr-disabled:hover, [dir] .flatpickr-day.prevMonthDay, [dir] .flatpickr-day.nextMonthDay, [dir] .flatpickr-day.notAllowed, [dir] .flatpickr-day.notAllowed.prevMonthDay, [dir] .flatpickr-day.notAllowed.nextMonthDay{\n  background:transparent;\n  border-color:transparent;\n  cursor:default\n}\n\n.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover{\n  color:rgba(57,57,57,0.1)\n}\n\n[dir] .flatpickr-day.flatpickr-disabled, [dir] .flatpickr-day.flatpickr-disabled:hover{\n  cursor:not-allowed\n}\n\n[dir] .flatpickr-day.week.selected{\n  border-radius:0\n}\n\n[dir=ltr] .flatpickr-day.week.selected{\n  -webkit-box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7;\n  box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7\n}\n\n[dir=rtl] .flatpickr-day.week.selected{\n  -webkit-box-shadow:5px 0 0 #569ff7,-5px 0 0 #569ff7;\n  box-shadow:5px 0 0 #569ff7,-5px 0 0 #569ff7\n}\n\n.flatpickr-day.hidden{\n  visibility:hidden\n}\n\n[dir] .rangeMode .flatpickr-day{\n  margin-top:1px\n}\n\n[dir=ltr] .flatpickr-weekwrapper{\n  float:left;\n}\n\n[dir=rtl] .flatpickr-weekwrapper{\n  float:right;\n}\n\n[dir] .flatpickr-weekwrapper .flatpickr-weeks{\n  padding:0 12px\n}\n\n[dir=ltr] .flatpickr-weekwrapper .flatpickr-weeks{\n  -webkit-box-shadow:1px 0 0 #e6e6e6;\n  box-shadow:1px 0 0 #e6e6e6\n}\n\n[dir=rtl] .flatpickr-weekwrapper .flatpickr-weeks{\n  -webkit-box-shadow:-1px 0 0 #e6e6e6;\n  box-shadow:-1px 0 0 #e6e6e6\n}\n\n.flatpickr-weekwrapper .flatpickr-weekday{\n  width:100%;\n  line-height:28px\n}\n\n[dir] .flatpickr-weekwrapper .flatpickr-weekday{\n  float:none\n}\n\n.flatpickr-weekwrapper span.flatpickr-day,.flatpickr-weekwrapper span.flatpickr-day:hover{\n  display:block;\n  width:100%;\n  max-width:none;\n  color:rgba(57,57,57,0.3)\n}\n\n[dir] .flatpickr-weekwrapper span.flatpickr-day, [dir] .flatpickr-weekwrapper span.flatpickr-day:hover{\n  background:transparent;\n  cursor:default;\n  border:none\n}\n\n.flatpickr-innerContainer{\n  display:block;\n  display:-webkit-box;\n  display:-webkit-flex;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-sizing:border-box;\n  box-sizing:border-box;\n  overflow:hidden;\n}\n\n.flatpickr-rContainer{\n  display:inline-block;\n  -webkit-box-sizing:border-box;\n  box-sizing:border-box\n}\n\n[dir] .flatpickr-rContainer{\n  padding:0\n}\n\n.flatpickr-time{\n  outline:0;\n  display:block;\n  height:0;\n  line-height:40px;\n  max-height:40px;\n  -webkit-box-sizing:border-box;\n  box-sizing:border-box;\n  overflow:hidden;\n  display:-webkit-box;\n  display:-webkit-flex;\n  display:-ms-flexbox;\n  display:flex;\n}\n\n[dir] .flatpickr-time{\n  text-align:center;\n}\n\n.flatpickr-time:after{\n  content:\"\";\n  display:table\n}\n\n[dir] .flatpickr-time:after{\n  clear:both\n}\n\n.flatpickr-time .numInputWrapper{\n  -webkit-box-flex:1;\n  -webkit-flex:1;\n  -ms-flex:1;\n  flex:1;\n  width:40%;\n  height:40px;\n}\n\n[dir=ltr] .flatpickr-time .numInputWrapper{\n  float:left;\n}\n\n[dir=rtl] .flatpickr-time .numInputWrapper{\n  float:right;\n}\n\n[dir] .flatpickr-time .numInputWrapper span.arrowUp:after{\n  border-bottom-color:#393939\n}\n\n[dir] .flatpickr-time .numInputWrapper span.arrowDown:after{\n  border-top-color:#393939\n}\n\n.flatpickr-time.hasSeconds .numInputWrapper{\n  width:26%\n}\n\n.flatpickr-time.time24hr .numInputWrapper{\n  width:49%\n}\n\n.flatpickr-time input{\n  -webkit-box-shadow:none;\n  height:inherit;\n  line-height:inherit;\n  color:#393939;\n  font-size:14px;\n  position:relative;\n  -webkit-box-sizing:border-box;\n  box-sizing:border-box;\n  -webkit-appearance:textfield;\n  -moz-appearance:textfield;\n  appearance:textfield;\n}\n\n[dir] .flatpickr-time input{\n  background:transparent;\n  -webkit-box-shadow:none;\n          box-shadow:none;\n  border:0;\n  border-radius:0;\n  text-align:center;\n  margin:0;\n  padding:0;\n}\n\n.flatpickr-time input.flatpickr-hour{\n  font-weight:bold\n}\n\n.flatpickr-time input.flatpickr-minute,.flatpickr-time input.flatpickr-second{\n  font-weight:400\n}\n\n.flatpickr-time input:focus{\n  outline:0\n}\n\n[dir] .flatpickr-time input:focus{\n  border:0\n}\n\n.flatpickr-time .flatpickr-time-separator,.flatpickr-time .flatpickr-am-pm{\n  height:inherit;\n  line-height:inherit;\n  color:#393939;\n  font-weight:bold;\n  width:2%;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none;\n  -webkit-align-self:center;\n  -ms-flex-item-align:center;\n  align-self:center\n}\n\n[dir=ltr] .flatpickr-time .flatpickr-time-separator, [dir=ltr] .flatpickr-time .flatpickr-am-pm{\n  float:left\n}\n\n[dir=rtl] .flatpickr-time .flatpickr-time-separator, [dir=rtl] .flatpickr-time .flatpickr-am-pm{\n  float:right\n}\n\n.flatpickr-time .flatpickr-am-pm{\n  outline:0;\n  width:18%;\n  font-weight:400\n}\n\n[dir] .flatpickr-time .flatpickr-am-pm{\n  cursor:pointer;\n  text-align:center\n}\n\n[dir] .flatpickr-time input:hover, [dir] .flatpickr-time .flatpickr-am-pm:hover, [dir] .flatpickr-time input:focus, [dir] .flatpickr-time .flatpickr-am-pm:focus{\n  background:#eee\n}\n\n[dir] .flatpickr-input[readonly]{\n  cursor:pointer\n}\n\n@-webkit-keyframes fpFadeInDown{\n  from{\n    opacity:0;\n    -webkit-transform:translate3d(0,-20px,0);\n    transform:translate3d(0,-20px,0)\n  }\n\n  to{\n    opacity:1;\n    -webkit-transform:translate3d(0,0,0);\n    transform:translate3d(0,0,0)\n  }\n}\n\n@keyframes fpFadeInDown{\n  from{\n    opacity:0;\n    -webkit-transform:translate3d(0,-20px,0);\n    transform:translate3d(0,-20px,0)\n  }\n\n  to{\n    opacity:1;\n    -webkit-transform:translate3d(0,0,0);\n    transform:translate3d(0,0,0)\n  }\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/flatpickr/dist/flatpickr.js":
/*!**************************************************!*\
  !*** ./node_modules/flatpickr/dist/flatpickr.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* flatpickr v4.6.3, @license MIT */
(function (global, factory) {
     true ? module.exports = factory() :
    undefined;
}(this, function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    var HOOKS = [
        "onChange",
        "onClose",
        "onDayCreate",
        "onDestroy",
        "onKeyDown",
        "onMonthChange",
        "onOpen",
        "onParseConfig",
        "onReady",
        "onValueUpdate",
        "onYearChange",
        "onPreCalendarPosition",
    ];
    var defaults = {
        _disable: [],
        _enable: [],
        allowInput: false,
        altFormat: "F j, Y",
        altInput: false,
        altInputClass: "form-control input",
        animate: typeof window === "object" &&
            window.navigator.userAgent.indexOf("MSIE") === -1,
        ariaDateFormat: "F j, Y",
        clickOpens: true,
        closeOnSelect: true,
        conjunction: ", ",
        dateFormat: "Y-m-d",
        defaultHour: 12,
        defaultMinute: 0,
        defaultSeconds: 0,
        disable: [],
        disableMobile: false,
        enable: [],
        enableSeconds: false,
        enableTime: false,
        errorHandler: function (err) {
            return typeof console !== "undefined" && console.warn(err);
        },
        getWeek: function (givenDate) {
            var date = new Date(givenDate.getTime());
            date.setHours(0, 0, 0, 0);
            // Thursday in current week decides the year.
            date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
            // January 4 is always in week 1.
            var week1 = new Date(date.getFullYear(), 0, 4);
            // Adjust to Thursday in week 1 and count number of weeks from date to week1.
            return (1 +
                Math.round(((date.getTime() - week1.getTime()) / 86400000 -
                    3 +
                    ((week1.getDay() + 6) % 7)) /
                    7));
        },
        hourIncrement: 1,
        ignoredFocusElements: [],
        inline: false,
        locale: "default",
        minuteIncrement: 5,
        mode: "single",
        monthSelectorType: "dropdown",
        nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
        noCalendar: false,
        now: new Date(),
        onChange: [],
        onClose: [],
        onDayCreate: [],
        onDestroy: [],
        onKeyDown: [],
        onMonthChange: [],
        onOpen: [],
        onParseConfig: [],
        onReady: [],
        onValueUpdate: [],
        onYearChange: [],
        onPreCalendarPosition: [],
        plugins: [],
        position: "auto",
        positionElement: undefined,
        prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
        shorthandCurrentMonth: false,
        showMonths: 1,
        static: false,
        time_24hr: false,
        weekNumbers: false,
        wrap: false
    };

    var english = {
        weekdays: {
            shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            longhand: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ]
        },
        months: {
            shorthand: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            longhand: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ]
        },
        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        firstDayOfWeek: 0,
        ordinal: function (nth) {
            var s = nth % 100;
            if (s > 3 && s < 21)
                return "th";
            switch (s % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th";
            }
        },
        rangeSeparator: " to ",
        weekAbbreviation: "Wk",
        scrollTitle: "Scroll to increment",
        toggleTitle: "Click to toggle",
        amPM: ["AM", "PM"],
        yearAriaLabel: "Year",
        hourAriaLabel: "Hour",
        minuteAriaLabel: "Minute",
        time_24hr: false
    };

    var pad = function (number) { return ("0" + number).slice(-2); };
    var int = function (bool) { return (bool === true ? 1 : 0); };
    /* istanbul ignore next */
    function debounce(func, wait, immediate) {
        if (immediate === void 0) { immediate = false; }
        var timeout;
        return function () {
            var context = this, args = arguments;
            timeout !== null && clearTimeout(timeout);
            timeout = window.setTimeout(function () {
                timeout = null;
                if (!immediate)
                    func.apply(context, args);
            }, wait);
            if (immediate && !timeout)
                func.apply(context, args);
        };
    }
    var arrayify = function (obj) {
        return obj instanceof Array ? obj : [obj];
    };

    function toggleClass(elem, className, bool) {
        if (bool === true)
            return elem.classList.add(className);
        elem.classList.remove(className);
    }
    function createElement(tag, className, content) {
        var e = window.document.createElement(tag);
        className = className || "";
        content = content || "";
        e.className = className;
        if (content !== undefined)
            e.textContent = content;
        return e;
    }
    function clearNode(node) {
        while (node.firstChild)
            node.removeChild(node.firstChild);
    }
    function findParent(node, condition) {
        if (condition(node))
            return node;
        else if (node.parentNode)
            return findParent(node.parentNode, condition);
        return undefined; // nothing found
    }
    function createNumberInput(inputClassName, opts) {
        var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
        if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
            numInput.type = "number";
        }
        else {
            numInput.type = "text";
            numInput.pattern = "\\d*";
        }
        if (opts !== undefined)
            for (var key in opts)
                numInput.setAttribute(key, opts[key]);
        wrapper.appendChild(numInput);
        wrapper.appendChild(arrowUp);
        wrapper.appendChild(arrowDown);
        return wrapper;
    }
    function getEventTarget(event) {
        if (typeof event.composedPath === "function") {
            var path = event.composedPath();
            return path[0];
        }
        return event.target;
    }

    var doNothing = function () { return undefined; };
    var monthToStr = function (monthNumber, shorthand, locale) { return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber]; };
    var revFormat = {
        D: doNothing,
        F: function (dateObj, monthName, locale) {
            dateObj.setMonth(locale.months.longhand.indexOf(monthName));
        },
        G: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
        },
        H: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
        },
        J: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        K: function (dateObj, amPM, locale) {
            dateObj.setHours((dateObj.getHours() % 12) +
                12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
        },
        M: function (dateObj, shortMonth, locale) {
            dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
        },
        S: function (dateObj, seconds) {
            dateObj.setSeconds(parseFloat(seconds));
        },
        U: function (_, unixSeconds) { return new Date(parseFloat(unixSeconds) * 1000); },
        W: function (dateObj, weekNum, locale) {
            var weekNumber = parseInt(weekNum);
            var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
            date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
            return date;
        },
        Y: function (dateObj, year) {
            dateObj.setFullYear(parseFloat(year));
        },
        Z: function (_, ISODate) { return new Date(ISODate); },
        d: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        h: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
        },
        i: function (dateObj, minutes) {
            dateObj.setMinutes(parseFloat(minutes));
        },
        j: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        l: doNothing,
        m: function (dateObj, month) {
            dateObj.setMonth(parseFloat(month) - 1);
        },
        n: function (dateObj, month) {
            dateObj.setMonth(parseFloat(month) - 1);
        },
        s: function (dateObj, seconds) {
            dateObj.setSeconds(parseFloat(seconds));
        },
        u: function (_, unixMillSeconds) {
            return new Date(parseFloat(unixMillSeconds));
        },
        w: doNothing,
        y: function (dateObj, year) {
            dateObj.setFullYear(2000 + parseFloat(year));
        }
    };
    var tokenRegex = {
        D: "(\\w+)",
        F: "(\\w+)",
        G: "(\\d\\d|\\d)",
        H: "(\\d\\d|\\d)",
        J: "(\\d\\d|\\d)\\w+",
        K: "",
        M: "(\\w+)",
        S: "(\\d\\d|\\d)",
        U: "(.+)",
        W: "(\\d\\d|\\d)",
        Y: "(\\d{4})",
        Z: "(.+)",
        d: "(\\d\\d|\\d)",
        h: "(\\d\\d|\\d)",
        i: "(\\d\\d|\\d)",
        j: "(\\d\\d|\\d)",
        l: "(\\w+)",
        m: "(\\d\\d|\\d)",
        n: "(\\d\\d|\\d)",
        s: "(\\d\\d|\\d)",
        u: "(.+)",
        w: "(\\d\\d|\\d)",
        y: "(\\d{2})"
    };
    var formats = {
        // get the date in UTC
        Z: function (date) { return date.toISOString(); },
        // weekday name, short, e.g. Thu
        D: function (date, locale, options) {
            return locale.weekdays.shorthand[formats.w(date, locale, options)];
        },
        // full month name e.g. January
        F: function (date, locale, options) {
            return monthToStr(formats.n(date, locale, options) - 1, false, locale);
        },
        // padded hour 1-12
        G: function (date, locale, options) {
            return pad(formats.h(date, locale, options));
        },
        // hours with leading zero e.g. 03
        H: function (date) { return pad(date.getHours()); },
        // day (1-30) with ordinal suffix e.g. 1st, 2nd
        J: function (date, locale) {
            return locale.ordinal !== undefined
                ? date.getDate() + locale.ordinal(date.getDate())
                : date.getDate();
        },
        // AM/PM
        K: function (date, locale) { return locale.amPM[int(date.getHours() > 11)]; },
        // shorthand month e.g. Jan, Sep, Oct, etc
        M: function (date, locale) {
            return monthToStr(date.getMonth(), true, locale);
        },
        // seconds 00-59
        S: function (date) { return pad(date.getSeconds()); },
        // unix timestamp
        U: function (date) { return date.getTime() / 1000; },
        W: function (date, _, options) {
            return options.getWeek(date);
        },
        // full year e.g. 2016
        Y: function (date) { return date.getFullYear(); },
        // day in month, padded (01-30)
        d: function (date) { return pad(date.getDate()); },
        // hour from 1-12 (am/pm)
        h: function (date) { return (date.getHours() % 12 ? date.getHours() % 12 : 12); },
        // minutes, padded with leading zero e.g. 09
        i: function (date) { return pad(date.getMinutes()); },
        // day in month (1-30)
        j: function (date) { return date.getDate(); },
        // weekday name, full, e.g. Thursday
        l: function (date, locale) {
            return locale.weekdays.longhand[date.getDay()];
        },
        // padded month number (01-12)
        m: function (date) { return pad(date.getMonth() + 1); },
        // the month number (1-12)
        n: function (date) { return date.getMonth() + 1; },
        // seconds 0-59
        s: function (date) { return date.getSeconds(); },
        // Unix Milliseconds
        u: function (date) { return date.getTime(); },
        // number of the day of the week
        w: function (date) { return date.getDay(); },
        // last two digits of year e.g. 16 for 2016
        y: function (date) { return String(date.getFullYear()).substring(2); }
    };

    var createDateFormatter = function (_a) {
        var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
        return function (dateObj, frmt, overrideLocale) {
            var locale = overrideLocale || l10n;
            if (config.formatDate !== undefined) {
                return config.formatDate(dateObj, frmt, locale);
            }
            return frmt
                .split("")
                .map(function (c, i, arr) {
                return formats[c] && arr[i - 1] !== "\\"
                    ? formats[c](dateObj, locale, config)
                    : c !== "\\"
                        ? c
                        : "";
            })
                .join("");
        };
    };
    var createDateParser = function (_a) {
        var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
        return function (date, givenFormat, timeless, customLocale) {
            if (date !== 0 && !date)
                return undefined;
            var locale = customLocale || l10n;
            var parsedDate;
            var dateOrig = date;
            if (date instanceof Date)
                parsedDate = new Date(date.getTime());
            else if (typeof date !== "string" &&
                date.toFixed !== undefined // timestamp
            )
                // create a copy
                parsedDate = new Date(date);
            else if (typeof date === "string") {
                // date string
                var format = givenFormat || (config || defaults).dateFormat;
                var datestr = String(date).trim();
                if (datestr === "today") {
                    parsedDate = new Date();
                    timeless = true;
                }
                else if (/Z$/.test(datestr) ||
                    /GMT$/.test(datestr) // datestrings w/ timezone
                )
                    parsedDate = new Date(date);
                else if (config && config.parseDate)
                    parsedDate = config.parseDate(date, format);
                else {
                    parsedDate =
                        !config || !config.noCalendar
                            ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
                            : new Date(new Date().setHours(0, 0, 0, 0));
                    var matched = void 0, ops = [];
                    for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                        var token_1 = format[i];
                        var isBackSlash = token_1 === "\\";
                        var escaped = format[i - 1] === "\\" || isBackSlash;
                        if (tokenRegex[token_1] && !escaped) {
                            regexStr += tokenRegex[token_1];
                            var match = new RegExp(regexStr).exec(date);
                            if (match && (matched = true)) {
                                ops[token_1 !== "Y" ? "push" : "unshift"]({
                                    fn: revFormat[token_1],
                                    val: match[++matchIndex]
                                });
                            }
                        }
                        else if (!isBackSlash)
                            regexStr += "."; // don't really care
                        ops.forEach(function (_a) {
                            var fn = _a.fn, val = _a.val;
                            return (parsedDate = fn(parsedDate, val, locale) || parsedDate);
                        });
                    }
                    parsedDate = matched ? parsedDate : undefined;
                }
            }
            /* istanbul ignore next */
            if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
                config.errorHandler(new Error("Invalid date provided: " + dateOrig));
                return undefined;
            }
            if (timeless === true)
                parsedDate.setHours(0, 0, 0, 0);
            return parsedDate;
        };
    };
    /**
     * Compute the difference in dates, measured in ms
     */
    function compareDates(date1, date2, timeless) {
        if (timeless === void 0) { timeless = true; }
        if (timeless !== false) {
            return (new Date(date1.getTime()).setHours(0, 0, 0, 0) -
                new Date(date2.getTime()).setHours(0, 0, 0, 0));
        }
        return date1.getTime() - date2.getTime();
    }
    var isBetween = function (ts, ts1, ts2) {
        return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
    };
    var duration = {
        DAY: 86400000
    };

    if (typeof Object.assign !== "function") {
        Object.assign = function (target) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (!target) {
                throw TypeError("Cannot convert undefined or null to object");
            }
            var _loop_1 = function (source) {
                if (source) {
                    Object.keys(source).forEach(function (key) { return (target[key] = source[key]); });
                }
            };
            for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
                var source = args_1[_a];
                _loop_1(source);
            }
            return target;
        };
    }

    var DEBOUNCED_CHANGE_MS = 300;
    function FlatpickrInstance(element, instanceConfig) {
        var self = {
            config: __assign({}, defaults, flatpickr.defaultConfig),
            l10n: english
        };
        self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
        self._handlers = [];
        self.pluginElements = [];
        self.loadedPlugins = [];
        self._bind = bind;
        self._setHoursFromDate = setHoursFromDate;
        self._positionCalendar = positionCalendar;
        self.changeMonth = changeMonth;
        self.changeYear = changeYear;
        self.clear = clear;
        self.close = close;
        self._createElement = createElement;
        self.destroy = destroy;
        self.isEnabled = isEnabled;
        self.jumpToDate = jumpToDate;
        self.open = open;
        self.redraw = redraw;
        self.set = set;
        self.setDate = setDate;
        self.toggle = toggle;
        function setupHelperFunctions() {
            self.utils = {
                getDaysInMonth: function (month, yr) {
                    if (month === void 0) { month = self.currentMonth; }
                    if (yr === void 0) { yr = self.currentYear; }
                    if (month === 1 && ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0))
                        return 29;
                    return self.l10n.daysInMonth[month];
                }
            };
        }
        function init() {
            self.element = self.input = element;
            self.isOpen = false;
            parseConfig();
            setupLocale();
            setupInputs();
            setupDates();
            setupHelperFunctions();
            if (!self.isMobile)
                build();
            bindEvents();
            if (self.selectedDates.length || self.config.noCalendar) {
                if (self.config.enableTime) {
                    setHoursFromDate(self.config.noCalendar
                        ? self.latestSelectedDateObj || self.config.minDate
                        : undefined);
                }
                updateValue(false);
            }
            setCalendarWidth();
            self.showTimeInput =
                self.selectedDates.length > 0 || self.config.noCalendar;
            var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            /* TODO: investigate this further
        
              Currently, there is weird positioning behavior in safari causing pages
              to scroll up. https://github.com/chmln/flatpickr/issues/563
        
              However, most browsers are not Safari and positioning is expensive when used
              in scale. https://github.com/chmln/flatpickr/issues/1096
            */
            if (!self.isMobile && isSafari) {
                positionCalendar();
            }
            triggerEvent("onReady");
        }
        function bindToInstance(fn) {
            return fn.bind(self);
        }
        function setCalendarWidth() {
            var config = self.config;
            if (config.weekNumbers === false && config.showMonths === 1)
                return;
            else if (config.noCalendar !== true) {
                window.requestAnimationFrame(function () {
                    if (self.calendarContainer !== undefined) {
                        self.calendarContainer.style.visibility = "hidden";
                        self.calendarContainer.style.display = "block";
                    }
                    if (self.daysContainer !== undefined) {
                        var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
                        self.daysContainer.style.width = daysWidth + "px";
                        self.calendarContainer.style.width =
                            daysWidth +
                                (self.weekWrapper !== undefined
                                    ? self.weekWrapper.offsetWidth
                                    : 0) +
                                "px";
                        self.calendarContainer.style.removeProperty("visibility");
                        self.calendarContainer.style.removeProperty("display");
                    }
                });
            }
        }
        /**
         * The handler for all events targeting the time inputs
         */
        function updateTime(e) {
            if (self.selectedDates.length === 0) {
                setDefaultTime();
            }
            if (e !== undefined && e.type !== "blur") {
                timeWrapper(e);
            }
            var prevValue = self._input.value;
            setHoursFromInputs();
            updateValue();
            if (self._input.value !== prevValue) {
                self._debouncedChange();
            }
        }
        function ampm2military(hour, amPM) {
            return (hour % 12) + 12 * int(amPM === self.l10n.amPM[1]);
        }
        function military2ampm(hour) {
            switch (hour % 24) {
                case 0:
                case 12:
                    return 12;
                default:
                    return hour % 12;
            }
        }
        /**
         * Syncs the selected date object time with user's time input
         */
        function setHoursFromInputs() {
            if (self.hourElement === undefined || self.minuteElement === undefined)
                return;
            var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== undefined
                ? (parseInt(self.secondElement.value, 10) || 0) % 60
                : 0;
            if (self.amPM !== undefined) {
                hours = ampm2military(hours, self.amPM.textContent);
            }
            var limitMinHours = self.config.minTime !== undefined ||
                (self.config.minDate &&
                    self.minDateHasTime &&
                    self.latestSelectedDateObj &&
                    compareDates(self.latestSelectedDateObj, self.config.minDate, true) ===
                        0);
            var limitMaxHours = self.config.maxTime !== undefined ||
                (self.config.maxDate &&
                    self.maxDateHasTime &&
                    self.latestSelectedDateObj &&
                    compareDates(self.latestSelectedDateObj, self.config.maxDate, true) ===
                        0);
            if (limitMaxHours) {
                var maxTime = self.config.maxTime !== undefined
                    ? self.config.maxTime
                    : self.config.maxDate;
                hours = Math.min(hours, maxTime.getHours());
                if (hours === maxTime.getHours())
                    minutes = Math.min(minutes, maxTime.getMinutes());
                if (minutes === maxTime.getMinutes())
                    seconds = Math.min(seconds, maxTime.getSeconds());
            }
            if (limitMinHours) {
                var minTime = self.config.minTime !== undefined
                    ? self.config.minTime
                    : self.config.minDate;
                hours = Math.max(hours, minTime.getHours());
                if (hours === minTime.getHours())
                    minutes = Math.max(minutes, minTime.getMinutes());
                if (minutes === minTime.getMinutes())
                    seconds = Math.max(seconds, minTime.getSeconds());
            }
            setHours(hours, minutes, seconds);
        }
        /**
         * Syncs time input values with a date
         */
        function setHoursFromDate(dateObj) {
            var date = dateObj || self.latestSelectedDateObj;
            if (date)
                setHours(date.getHours(), date.getMinutes(), date.getSeconds());
        }
        function setDefaultHours() {
            var hours = self.config.defaultHour;
            var minutes = self.config.defaultMinute;
            var seconds = self.config.defaultSeconds;
            if (self.config.minDate !== undefined) {
                var minHr = self.config.minDate.getHours();
                var minMinutes = self.config.minDate.getMinutes();
                hours = Math.max(hours, minHr);
                if (hours === minHr)
                    minutes = Math.max(minMinutes, minutes);
                if (hours === minHr && minutes === minMinutes)
                    seconds = self.config.minDate.getSeconds();
            }
            if (self.config.maxDate !== undefined) {
                var maxHr = self.config.maxDate.getHours();
                var maxMinutes = self.config.maxDate.getMinutes();
                hours = Math.min(hours, maxHr);
                if (hours === maxHr)
                    minutes = Math.min(maxMinutes, minutes);
                if (hours === maxHr && minutes === maxMinutes)
                    seconds = self.config.maxDate.getSeconds();
            }
            setHours(hours, minutes, seconds);
        }
        /**
         * Sets the hours, minutes, and optionally seconds
         * of the latest selected date object and the
         * corresponding time inputs
         * @param {Number} hours the hour. whether its military
         *                 or am-pm gets inferred from config
         * @param {Number} minutes the minutes
         * @param {Number} seconds the seconds (optional)
         */
        function setHours(hours, minutes, seconds) {
            if (self.latestSelectedDateObj !== undefined) {
                self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
            }
            if (!self.hourElement || !self.minuteElement || self.isMobile)
                return;
            self.hourElement.value = pad(!self.config.time_24hr
                ? ((12 + hours) % 12) + 12 * int(hours % 12 === 0)
                : hours);
            self.minuteElement.value = pad(minutes);
            if (self.amPM !== undefined)
                self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
            if (self.secondElement !== undefined)
                self.secondElement.value = pad(seconds);
        }
        /**
         * Handles the year input and incrementing events
         * @param {Event} event the keyup or increment event
         */
        function onYearInput(event) {
            var year = parseInt(event.target.value) + (event.delta || 0);
            if (year / 1000 > 1 ||
                (event.key === "Enter" && !/[^\d]/.test(year.toString()))) {
                changeYear(year);
            }
        }
        /**
         * Essentially addEventListener + tracking
         * @param {Element} element the element to addEventListener to
         * @param {String} event the event name
         * @param {Function} handler the event handler
         */
        function bind(element, event, handler, options) {
            if (event instanceof Array)
                return event.forEach(function (ev) { return bind(element, ev, handler, options); });
            if (element instanceof Array)
                return element.forEach(function (el) { return bind(el, event, handler, options); });
            element.addEventListener(event, handler, options);
            self._handlers.push({
                element: element,
                event: event,
                handler: handler,
                options: options
            });
        }
        /**
         * A mousedown handler which mimics click.
         * Minimizes latency, since we don't need to wait for mouseup in most cases.
         * Also, avoids handling right clicks.
         *
         * @param {Function} handler the event handler
         */
        function onClick(handler) {
            return function (evt) {
                evt.which === 1 && handler(evt);
            };
        }
        function triggerChange() {
            triggerEvent("onChange");
        }
        /**
         * Adds all the necessary event listeners
         */
        function bindEvents() {
            if (self.config.wrap) {
                ["open", "close", "toggle", "clear"].forEach(function (evt) {
                    Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
                        return bind(el, "click", self[evt]);
                    });
                });
            }
            if (self.isMobile) {
                setupMobile();
                return;
            }
            var debouncedResize = debounce(onResize, 50);
            self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
            if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
                bind(self.daysContainer, "mouseover", function (e) {
                    if (self.config.mode === "range")
                        onMouseOver(e.target);
                });
            bind(window.document.body, "keydown", onKeyDown);
            if (!self.config.inline && !self.config.static)
                bind(window, "resize", debouncedResize);
            if (window.ontouchstart !== undefined)
                bind(window.document, "touchstart", documentClick);
            else
                bind(window.document, "mousedown", onClick(documentClick));
            bind(window.document, "focus", documentClick, { capture: true });
            if (self.config.clickOpens === true) {
                bind(self._input, "focus", self.open);
                bind(self._input, "mousedown", onClick(self.open));
            }
            if (self.daysContainer !== undefined) {
                bind(self.monthNav, "mousedown", onClick(onMonthNavClick));
                bind(self.monthNav, ["keyup", "increment"], onYearInput);
                bind(self.daysContainer, "mousedown", onClick(selectDate));
            }
            if (self.timeContainer !== undefined &&
                self.minuteElement !== undefined &&
                self.hourElement !== undefined) {
                var selText = function (e) {
                    return e.target.select();
                };
                bind(self.timeContainer, ["increment"], updateTime);
                bind(self.timeContainer, "blur", updateTime, { capture: true });
                bind(self.timeContainer, "mousedown", onClick(timeIncrement));
                bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
                if (self.secondElement !== undefined)
                    bind(self.secondElement, "focus", function () { return self.secondElement && self.secondElement.select(); });
                if (self.amPM !== undefined) {
                    bind(self.amPM, "mousedown", onClick(function (e) {
                        updateTime(e);
                        triggerChange();
                    }));
                }
            }
        }
        /**
         * Set the calendar view to a particular date.
         * @param {Date} jumpDate the date to set the view to
         * @param {boolean} triggerChange if change events should be triggered
         */
        function jumpToDate(jumpDate, triggerChange) {
            var jumpTo = jumpDate !== undefined
                ? self.parseDate(jumpDate)
                : self.latestSelectedDateObj ||
                    (self.config.minDate && self.config.minDate > self.now
                        ? self.config.minDate
                        : self.config.maxDate && self.config.maxDate < self.now
                            ? self.config.maxDate
                            : self.now);
            var oldYear = self.currentYear;
            var oldMonth = self.currentMonth;
            try {
                if (jumpTo !== undefined) {
                    self.currentYear = jumpTo.getFullYear();
                    self.currentMonth = jumpTo.getMonth();
                }
            }
            catch (e) {
                /* istanbul ignore next */
                e.message = "Invalid date supplied: " + jumpTo;
                self.config.errorHandler(e);
            }
            if (triggerChange && self.currentYear !== oldYear) {
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            if (triggerChange &&
                (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
                triggerEvent("onMonthChange");
            }
            self.redraw();
        }
        /**
         * The up/down arrow handler for time inputs
         * @param {Event} e the click event
         */
        function timeIncrement(e) {
            if (~e.target.className.indexOf("arrow"))
                incrementNumInput(e, e.target.classList.contains("arrowUp") ? 1 : -1);
        }
        /**
         * Increments/decrements the value of input associ-
         * ated with the up/down arrow by dispatching an
         * "increment" event on the input.
         *
         * @param {Event} e the click event
         * @param {Number} delta the diff (usually 1 or -1)
         * @param {Element} inputElem the input element
         */
        function incrementNumInput(e, delta, inputElem) {
            var target = e && e.target;
            var input = inputElem ||
                (target && target.parentNode && target.parentNode.firstChild);
            var event = createEvent("increment");
            event.delta = delta;
            input && input.dispatchEvent(event);
        }
        function build() {
            var fragment = window.document.createDocumentFragment();
            self.calendarContainer = createElement("div", "flatpickr-calendar");
            self.calendarContainer.tabIndex = -1;
            if (!self.config.noCalendar) {
                fragment.appendChild(buildMonthNav());
                self.innerContainer = createElement("div", "flatpickr-innerContainer");
                if (self.config.weekNumbers) {
                    var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
                    self.innerContainer.appendChild(weekWrapper);
                    self.weekNumbers = weekNumbers;
                    self.weekWrapper = weekWrapper;
                }
                self.rContainer = createElement("div", "flatpickr-rContainer");
                self.rContainer.appendChild(buildWeekdays());
                if (!self.daysContainer) {
                    self.daysContainer = createElement("div", "flatpickr-days");
                    self.daysContainer.tabIndex = -1;
                }
                buildDays();
                self.rContainer.appendChild(self.daysContainer);
                self.innerContainer.appendChild(self.rContainer);
                fragment.appendChild(self.innerContainer);
            }
            if (self.config.enableTime) {
                fragment.appendChild(buildTime());
            }
            toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
            toggleClass(self.calendarContainer, "animate", self.config.animate === true);
            toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
            self.calendarContainer.appendChild(fragment);
            var customAppend = self.config.appendTo !== undefined &&
                self.config.appendTo.nodeType !== undefined;
            if (self.config.inline || self.config.static) {
                self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
                if (self.config.inline) {
                    if (!customAppend && self.element.parentNode)
                        self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
                    else if (self.config.appendTo !== undefined)
                        self.config.appendTo.appendChild(self.calendarContainer);
                }
                if (self.config.static) {
                    var wrapper = createElement("div", "flatpickr-wrapper");
                    if (self.element.parentNode)
                        self.element.parentNode.insertBefore(wrapper, self.element);
                    wrapper.appendChild(self.element);
                    if (self.altInput)
                        wrapper.appendChild(self.altInput);
                    wrapper.appendChild(self.calendarContainer);
                }
            }
            if (!self.config.static && !self.config.inline)
                (self.config.appendTo !== undefined
                    ? self.config.appendTo
                    : window.document.body).appendChild(self.calendarContainer);
        }
        function createDay(className, date, dayNumber, i) {
            var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
            dayElement.dateObj = date;
            dayElement.$i = i;
            dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
            if (className.indexOf("hidden") === -1 &&
                compareDates(date, self.now) === 0) {
                self.todayDateElem = dayElement;
                dayElement.classList.add("today");
                dayElement.setAttribute("aria-current", "date");
            }
            if (dateIsEnabled) {
                dayElement.tabIndex = -1;
                if (isDateSelected(date)) {
                    dayElement.classList.add("selected");
                    self.selectedDateElem = dayElement;
                    if (self.config.mode === "range") {
                        toggleClass(dayElement, "startRange", self.selectedDates[0] &&
                            compareDates(date, self.selectedDates[0], true) === 0);
                        toggleClass(dayElement, "endRange", self.selectedDates[1] &&
                            compareDates(date, self.selectedDates[1], true) === 0);
                        if (className === "nextMonthDay")
                            dayElement.classList.add("inRange");
                    }
                }
            }
            else {
                dayElement.classList.add("flatpickr-disabled");
            }
            if (self.config.mode === "range") {
                if (isDateInRange(date) && !isDateSelected(date))
                    dayElement.classList.add("inRange");
            }
            if (self.weekNumbers &&
                self.config.showMonths === 1 &&
                className !== "prevMonthDay" &&
                dayNumber % 7 === 1) {
                self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
            }
            triggerEvent("onDayCreate", dayElement);
            return dayElement;
        }
        function focusOnDayElem(targetNode) {
            targetNode.focus();
            if (self.config.mode === "range")
                onMouseOver(targetNode);
        }
        function getFirstAvailableDay(delta) {
            var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
            var endMonth = delta > 0 ? self.config.showMonths : -1;
            for (var m = startMonth; m != endMonth; m += delta) {
                var month = self.daysContainer.children[m];
                var startIndex = delta > 0 ? 0 : month.children.length - 1;
                var endIndex = delta > 0 ? month.children.length : -1;
                for (var i = startIndex; i != endIndex; i += delta) {
                    var c = month.children[i];
                    if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
                        return c;
                }
            }
            return undefined;
        }
        function getNextAvailableDay(current, delta) {
            var givenMonth = current.className.indexOf("Month") === -1
                ? current.dateObj.getMonth()
                : self.currentMonth;
            var endMonth = delta > 0 ? self.config.showMonths : -1;
            var loopDelta = delta > 0 ? 1 : -1;
            for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
                var month = self.daysContainer.children[m];
                var startIndex = givenMonth - self.currentMonth === m
                    ? current.$i + delta
                    : delta < 0
                        ? month.children.length - 1
                        : 0;
                var numMonthDays = month.children.length;
                for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
                    var c = month.children[i];
                    if (c.className.indexOf("hidden") === -1 &&
                        isEnabled(c.dateObj) &&
                        Math.abs(current.$i - i) >= Math.abs(delta))
                        return focusOnDayElem(c);
                }
            }
            self.changeMonth(loopDelta);
            focusOnDay(getFirstAvailableDay(loopDelta), 0);
            return undefined;
        }
        function focusOnDay(current, offset) {
            var dayFocused = isInView(document.activeElement || document.body);
            var startElem = current !== undefined
                ? current
                : dayFocused
                    ? document.activeElement
                    : self.selectedDateElem !== undefined && isInView(self.selectedDateElem)
                        ? self.selectedDateElem
                        : self.todayDateElem !== undefined && isInView(self.todayDateElem)
                            ? self.todayDateElem
                            : getFirstAvailableDay(offset > 0 ? 1 : -1);
            if (startElem === undefined)
                return self._input.focus();
            if (!dayFocused)
                return focusOnDayElem(startElem);
            getNextAvailableDay(startElem, offset);
        }
        function buildMonthDays(year, month) {
            var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
            var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12);
            var daysInMonth = self.utils.getDaysInMonth(month), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
            var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
            // prepend days from the ending of previous month
            for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
                days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
            }
            // Start at 1 since there is no 0th day
            for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
                days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
            }
            // append days from the next month
            for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth &&
                (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
                days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
            }
            //updateNavigationCurrentMonth();
            var dayContainer = createElement("div", "dayContainer");
            dayContainer.appendChild(days);
            return dayContainer;
        }
        function buildDays() {
            if (self.daysContainer === undefined) {
                return;
            }
            clearNode(self.daysContainer);
            // TODO: week numbers for each month
            if (self.weekNumbers)
                clearNode(self.weekNumbers);
            var frag = document.createDocumentFragment();
            for (var i = 0; i < self.config.showMonths; i++) {
                var d = new Date(self.currentYear, self.currentMonth, 1);
                d.setMonth(self.currentMonth + i);
                frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
            }
            self.daysContainer.appendChild(frag);
            self.days = self.daysContainer.firstChild;
            if (self.config.mode === "range" && self.selectedDates.length === 1) {
                onMouseOver();
            }
        }
        function buildMonthSwitch() {
            if (self.config.showMonths > 1 ||
                self.config.monthSelectorType !== "dropdown")
                return;
            var shouldBuildMonth = function (month) {
                if (self.config.minDate !== undefined &&
                    self.currentYear === self.config.minDate.getFullYear() &&
                    month < self.config.minDate.getMonth()) {
                    return false;
                }
                return !(self.config.maxDate !== undefined &&
                    self.currentYear === self.config.maxDate.getFullYear() &&
                    month > self.config.maxDate.getMonth());
            };
            self.monthsDropdownContainer.tabIndex = -1;
            self.monthsDropdownContainer.innerHTML = "";
            for (var i = 0; i < 12; i++) {
                if (!shouldBuildMonth(i))
                    continue;
                var month = createElement("option", "flatpickr-monthDropdown-month");
                month.value = new Date(self.currentYear, i).getMonth().toString();
                month.textContent = monthToStr(i, self.config.shorthandCurrentMonth, self.l10n);
                month.tabIndex = -1;
                if (self.currentMonth === i) {
                    month.selected = true;
                }
                self.monthsDropdownContainer.appendChild(month);
            }
        }
        function buildMonth() {
            var container = createElement("div", "flatpickr-month");
            var monthNavFragment = window.document.createDocumentFragment();
            var monthElement;
            if (self.config.showMonths > 1 ||
                self.config.monthSelectorType === "static") {
                monthElement = createElement("span", "cur-month");
            }
            else {
                self.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
                bind(self.monthsDropdownContainer, "change", function (e) {
                    var target = e.target;
                    var selectedMonth = parseInt(target.value, 10);
                    self.changeMonth(selectedMonth - self.currentMonth);
                    triggerEvent("onMonthChange");
                });
                buildMonthSwitch();
                monthElement = self.monthsDropdownContainer;
            }
            var yearInput = createNumberInput("cur-year", { tabindex: "-1" });
            var yearElement = yearInput.getElementsByTagName("input")[0];
            yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
            if (self.config.minDate) {
                yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
            }
            if (self.config.maxDate) {
                yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
                yearElement.disabled =
                    !!self.config.minDate &&
                        self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
            }
            var currentMonth = createElement("div", "flatpickr-current-month");
            currentMonth.appendChild(monthElement);
            currentMonth.appendChild(yearInput);
            monthNavFragment.appendChild(currentMonth);
            container.appendChild(monthNavFragment);
            return {
                container: container,
                yearElement: yearElement,
                monthElement: monthElement
            };
        }
        function buildMonths() {
            clearNode(self.monthNav);
            self.monthNav.appendChild(self.prevMonthNav);
            if (self.config.showMonths) {
                self.yearElements = [];
                self.monthElements = [];
            }
            for (var m = self.config.showMonths; m--;) {
                var month = buildMonth();
                self.yearElements.push(month.yearElement);
                self.monthElements.push(month.monthElement);
                self.monthNav.appendChild(month.container);
            }
            self.monthNav.appendChild(self.nextMonthNav);
        }
        function buildMonthNav() {
            self.monthNav = createElement("div", "flatpickr-months");
            self.yearElements = [];
            self.monthElements = [];
            self.prevMonthNav = createElement("span", "flatpickr-prev-month");
            self.prevMonthNav.innerHTML = self.config.prevArrow;
            self.nextMonthNav = createElement("span", "flatpickr-next-month");
            self.nextMonthNav.innerHTML = self.config.nextArrow;
            buildMonths();
            Object.defineProperty(self, "_hidePrevMonthArrow", {
                get: function () { return self.__hidePrevMonthArrow; },
                set: function (bool) {
                    if (self.__hidePrevMonthArrow !== bool) {
                        toggleClass(self.prevMonthNav, "flatpickr-disabled", bool);
                        self.__hidePrevMonthArrow = bool;
                    }
                }
            });
            Object.defineProperty(self, "_hideNextMonthArrow", {
                get: function () { return self.__hideNextMonthArrow; },
                set: function (bool) {
                    if (self.__hideNextMonthArrow !== bool) {
                        toggleClass(self.nextMonthNav, "flatpickr-disabled", bool);
                        self.__hideNextMonthArrow = bool;
                    }
                }
            });
            self.currentYearElement = self.yearElements[0];
            updateNavigationCurrentMonth();
            return self.monthNav;
        }
        function buildTime() {
            self.calendarContainer.classList.add("hasTime");
            if (self.config.noCalendar)
                self.calendarContainer.classList.add("noCalendar");
            self.timeContainer = createElement("div", "flatpickr-time");
            self.timeContainer.tabIndex = -1;
            var separator = createElement("span", "flatpickr-time-separator", ":");
            var hourInput = createNumberInput("flatpickr-hour", {
                "aria-label": self.l10n.hourAriaLabel
            });
            self.hourElement = hourInput.getElementsByTagName("input")[0];
            var minuteInput = createNumberInput("flatpickr-minute", {
                "aria-label": self.l10n.minuteAriaLabel
            });
            self.minuteElement = minuteInput.getElementsByTagName("input")[0];
            self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
            self.hourElement.value = pad(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getHours()
                : self.config.time_24hr
                    ? self.config.defaultHour
                    : military2ampm(self.config.defaultHour));
            self.minuteElement.value = pad(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getMinutes()
                : self.config.defaultMinute);
            self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
            self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
            self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
            self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
            self.minuteElement.setAttribute("min", "0");
            self.minuteElement.setAttribute("max", "59");
            self.timeContainer.appendChild(hourInput);
            self.timeContainer.appendChild(separator);
            self.timeContainer.appendChild(minuteInput);
            if (self.config.time_24hr)
                self.timeContainer.classList.add("time24hr");
            if (self.config.enableSeconds) {
                self.timeContainer.classList.add("hasSeconds");
                var secondInput = createNumberInput("flatpickr-second");
                self.secondElement = secondInput.getElementsByTagName("input")[0];
                self.secondElement.value = pad(self.latestSelectedDateObj
                    ? self.latestSelectedDateObj.getSeconds()
                    : self.config.defaultSeconds);
                self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
                self.secondElement.setAttribute("min", "0");
                self.secondElement.setAttribute("max", "59");
                self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
                self.timeContainer.appendChild(secondInput);
            }
            if (!self.config.time_24hr) {
                // add self.amPM if appropriate
                self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj
                    ? self.hourElement.value
                    : self.config.defaultHour) > 11)]);
                self.amPM.title = self.l10n.toggleTitle;
                self.amPM.tabIndex = -1;
                self.timeContainer.appendChild(self.amPM);
            }
            return self.timeContainer;
        }
        function buildWeekdays() {
            if (!self.weekdayContainer)
                self.weekdayContainer = createElement("div", "flatpickr-weekdays");
            else
                clearNode(self.weekdayContainer);
            for (var i = self.config.showMonths; i--;) {
                var container = createElement("div", "flatpickr-weekdaycontainer");
                self.weekdayContainer.appendChild(container);
            }
            updateWeekdays();
            return self.weekdayContainer;
        }
        function updateWeekdays() {
            if (!self.weekdayContainer) {
                return;
            }
            var firstDayOfWeek = self.l10n.firstDayOfWeek;
            var weekdays = self.l10n.weekdays.shorthand.slice();
            if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
                weekdays = weekdays.splice(firstDayOfWeek, weekdays.length).concat(weekdays.splice(0, firstDayOfWeek));
            }
            for (var i = self.config.showMonths; i--;) {
                self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
            }
        }
        /* istanbul ignore next */
        function buildWeeks() {
            self.calendarContainer.classList.add("hasWeeks");
            var weekWrapper = createElement("div", "flatpickr-weekwrapper");
            weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
            var weekNumbers = createElement("div", "flatpickr-weeks");
            weekWrapper.appendChild(weekNumbers);
            return {
                weekWrapper: weekWrapper,
                weekNumbers: weekNumbers
            };
        }
        function changeMonth(value, isOffset) {
            if (isOffset === void 0) { isOffset = true; }
            var delta = isOffset ? value : value - self.currentMonth;
            if ((delta < 0 && self._hidePrevMonthArrow === true) ||
                (delta > 0 && self._hideNextMonthArrow === true))
                return;
            self.currentMonth += delta;
            if (self.currentMonth < 0 || self.currentMonth > 11) {
                self.currentYear += self.currentMonth > 11 ? 1 : -1;
                self.currentMonth = (self.currentMonth + 12) % 12;
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            buildDays();
            triggerEvent("onMonthChange");
            updateNavigationCurrentMonth();
        }
        function clear(triggerChangeEvent, toInitial) {
            if (triggerChangeEvent === void 0) { triggerChangeEvent = true; }
            if (toInitial === void 0) { toInitial = true; }
            self.input.value = "";
            if (self.altInput !== undefined)
                self.altInput.value = "";
            if (self.mobileInput !== undefined)
                self.mobileInput.value = "";
            self.selectedDates = [];
            self.latestSelectedDateObj = undefined;
            if (toInitial === true) {
                self.currentYear = self._initialDate.getFullYear();
                self.currentMonth = self._initialDate.getMonth();
            }
            self.showTimeInput = false;
            if (self.config.enableTime === true) {
                setDefaultHours();
            }
            self.redraw();
            if (triggerChangeEvent)
                // triggerChangeEvent is true (default) or an Event
                triggerEvent("onChange");
        }
        function close() {
            self.isOpen = false;
            if (!self.isMobile) {
                if (self.calendarContainer !== undefined) {
                    self.calendarContainer.classList.remove("open");
                }
                if (self._input !== undefined) {
                    self._input.classList.remove("active");
                }
            }
            triggerEvent("onClose");
        }
        function destroy() {
            if (self.config !== undefined)
                triggerEvent("onDestroy");
            for (var i = self._handlers.length; i--;) {
                var h = self._handlers[i];
                h.element.removeEventListener(h.event, h.handler, h.options);
            }
            self._handlers = [];
            if (self.mobileInput) {
                if (self.mobileInput.parentNode)
                    self.mobileInput.parentNode.removeChild(self.mobileInput);
                self.mobileInput = undefined;
            }
            else if (self.calendarContainer && self.calendarContainer.parentNode) {
                if (self.config.static && self.calendarContainer.parentNode) {
                    var wrapper = self.calendarContainer.parentNode;
                    wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
                    if (wrapper.parentNode) {
                        while (wrapper.firstChild)
                            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                        wrapper.parentNode.removeChild(wrapper);
                    }
                }
                else
                    self.calendarContainer.parentNode.removeChild(self.calendarContainer);
            }
            if (self.altInput) {
                self.input.type = "text";
                if (self.altInput.parentNode)
                    self.altInput.parentNode.removeChild(self.altInput);
                delete self.altInput;
            }
            if (self.input) {
                self.input.type = self.input._type;
                self.input.classList.remove("flatpickr-input");
                self.input.removeAttribute("readonly");
                self.input.value = "";
            }
            [
                "_showTimeInput",
                "latestSelectedDateObj",
                "_hideNextMonthArrow",
                "_hidePrevMonthArrow",
                "__hideNextMonthArrow",
                "__hidePrevMonthArrow",
                "isMobile",
                "isOpen",
                "selectedDateElem",
                "minDateHasTime",
                "maxDateHasTime",
                "days",
                "daysContainer",
                "_input",
                "_positionElement",
                "innerContainer",
                "rContainer",
                "monthNav",
                "todayDateElem",
                "calendarContainer",
                "weekdayContainer",
                "prevMonthNav",
                "nextMonthNav",
                "monthsDropdownContainer",
                "currentMonthElement",
                "currentYearElement",
                "navigationCurrentMonth",
                "selectedDateElem",
                "config",
            ].forEach(function (k) {
                try {
                    delete self[k];
                }
                catch (_) { }
            });
        }
        function isCalendarElem(elem) {
            if (self.config.appendTo && self.config.appendTo.contains(elem))
                return true;
            return self.calendarContainer.contains(elem);
        }
        function documentClick(e) {
            if (self.isOpen && !self.config.inline) {
                var eventTarget_1 = getEventTarget(e);
                var isCalendarElement = isCalendarElem(eventTarget_1);
                var isInput = eventTarget_1 === self.input ||
                    eventTarget_1 === self.altInput ||
                    self.element.contains(eventTarget_1) ||
                    // web components
                    // e.path is not present in all browsers. circumventing typechecks
                    (e.path &&
                        e.path.indexOf &&
                        (~e.path.indexOf(self.input) ||
                            ~e.path.indexOf(self.altInput)));
                var lostFocus = e.type === "blur"
                    ? isInput &&
                        e.relatedTarget &&
                        !isCalendarElem(e.relatedTarget)
                    : !isInput &&
                        !isCalendarElement &&
                        !isCalendarElem(e.relatedTarget);
                var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
                    return elem.contains(eventTarget_1);
                });
                if (lostFocus && isIgnored) {
                    if (self.timeContainer !== undefined &&
                        self.minuteElement !== undefined &&
                        self.hourElement !== undefined) {
                        updateTime();
                    }
                    self.close();
                    if (self.config.mode === "range" && self.selectedDates.length === 1) {
                        self.clear(false);
                        self.redraw();
                    }
                }
            }
        }
        function changeYear(newYear) {
            if (!newYear ||
                (self.config.minDate && newYear < self.config.minDate.getFullYear()) ||
                (self.config.maxDate && newYear > self.config.maxDate.getFullYear()))
                return;
            var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
            self.currentYear = newYearNum || self.currentYear;
            if (self.config.maxDate &&
                self.currentYear === self.config.maxDate.getFullYear()) {
                self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
            }
            else if (self.config.minDate &&
                self.currentYear === self.config.minDate.getFullYear()) {
                self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
            }
            if (isNewYear) {
                self.redraw();
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
        }
        function isEnabled(date, timeless) {
            if (timeless === void 0) { timeless = true; }
            var dateToCheck = self.parseDate(date, undefined, timeless); // timeless
            if ((self.config.minDate &&
                dateToCheck &&
                compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0) ||
                (self.config.maxDate &&
                    dateToCheck &&
                    compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0))
                return false;
            if (self.config.enable.length === 0 && self.config.disable.length === 0)
                return true;
            if (dateToCheck === undefined)
                return false;
            var bool = self.config.enable.length > 0, array = bool ? self.config.enable : self.config.disable;
            for (var i = 0, d = void 0; i < array.length; i++) {
                d = array[i];
                if (typeof d === "function" &&
                    d(dateToCheck) // disabled by function
                )
                    return bool;
                else if (d instanceof Date &&
                    dateToCheck !== undefined &&
                    d.getTime() === dateToCheck.getTime())
                    // disabled by date
                    return bool;
                else if (typeof d === "string" && dateToCheck !== undefined) {
                    // disabled by date string
                    var parsed = self.parseDate(d, undefined, true);
                    return parsed && parsed.getTime() === dateToCheck.getTime()
                        ? bool
                        : !bool;
                }
                else if (
                // disabled by range
                typeof d === "object" &&
                    dateToCheck !== undefined &&
                    d.from &&
                    d.to &&
                    dateToCheck.getTime() >= d.from.getTime() &&
                    dateToCheck.getTime() <= d.to.getTime())
                    return bool;
            }
            return !bool;
        }
        function isInView(elem) {
            if (self.daysContainer !== undefined)
                return (elem.className.indexOf("hidden") === -1 &&
                    self.daysContainer.contains(elem));
            return false;
        }
        function onKeyDown(e) {
            // e.key                      e.keyCode
            // "Backspace"                        8
            // "Tab"                              9
            // "Enter"                           13
            // "Escape"     (IE "Esc")           27
            // "ArrowLeft"  (IE "Left")          37
            // "ArrowUp"    (IE "Up")            38
            // "ArrowRight" (IE "Right")         39
            // "ArrowDown"  (IE "Down")          40
            // "Delete"     (IE "Del")           46
            var isInput = e.target === self._input;
            var allowInput = self.config.allowInput;
            var allowKeydown = self.isOpen && (!allowInput || !isInput);
            var allowInlineKeydown = self.config.inline && isInput && !allowInput;
            if (e.keyCode === 13 && isInput) {
                if (allowInput) {
                    self.setDate(self._input.value, true, e.target === self.altInput
                        ? self.config.altFormat
                        : self.config.dateFormat);
                    return e.target.blur();
                }
                else {
                    self.open();
                }
            }
            else if (isCalendarElem(e.target) ||
                allowKeydown ||
                allowInlineKeydown) {
                var isTimeObj = !!self.timeContainer &&
                    self.timeContainer.contains(e.target);
                switch (e.keyCode) {
                    case 13:
                        if (isTimeObj) {
                            e.preventDefault();
                            updateTime();
                            focusAndClose();
                        }
                        else
                            selectDate(e);
                        break;
                    case 27: // escape
                        e.preventDefault();
                        focusAndClose();
                        break;
                    case 8:
                    case 46:
                        if (isInput && !self.config.allowInput) {
                            e.preventDefault();
                            self.clear();
                        }
                        break;
                    case 37:
                    case 39:
                        if (!isTimeObj && !isInput) {
                            e.preventDefault();
                            if (self.daysContainer !== undefined &&
                                (allowInput === false ||
                                    (document.activeElement && isInView(document.activeElement)))) {
                                var delta_1 = e.keyCode === 39 ? 1 : -1;
                                if (!e.ctrlKey)
                                    focusOnDay(undefined, delta_1);
                                else {
                                    e.stopPropagation();
                                    changeMonth(delta_1);
                                    focusOnDay(getFirstAvailableDay(1), 0);
                                }
                            }
                        }
                        else if (self.hourElement)
                            self.hourElement.focus();
                        break;
                    case 38:
                    case 40:
                        e.preventDefault();
                        var delta = e.keyCode === 40 ? 1 : -1;
                        if ((self.daysContainer && e.target.$i !== undefined) ||
                            e.target === self.input ||
                            e.target === self.altInput) {
                            if (e.ctrlKey) {
                                e.stopPropagation();
                                changeYear(self.currentYear - delta);
                                focusOnDay(getFirstAvailableDay(1), 0);
                            }
                            else if (!isTimeObj)
                                focusOnDay(undefined, delta * 7);
                        }
                        else if (e.target === self.currentYearElement) {
                            changeYear(self.currentYear - delta);
                        }
                        else if (self.config.enableTime) {
                            if (!isTimeObj && self.hourElement)
                                self.hourElement.focus();
                            updateTime(e);
                            self._debouncedChange();
                        }
                        break;
                    case 9:
                        if (isTimeObj) {
                            var elems = [
                                self.hourElement,
                                self.minuteElement,
                                self.secondElement,
                                self.amPM,
                            ]
                                .concat(self.pluginElements)
                                .filter(function (x) { return x; });
                            var i = elems.indexOf(e.target);
                            if (i !== -1) {
                                var target = elems[i + (e.shiftKey ? -1 : 1)];
                                e.preventDefault();
                                (target || self._input).focus();
                            }
                        }
                        else if (!self.config.noCalendar &&
                            self.daysContainer &&
                            self.daysContainer.contains(e.target) &&
                            e.shiftKey) {
                            e.preventDefault();
                            self._input.focus();
                        }
                        break;
                    default:
                        break;
                }
            }
            if (self.amPM !== undefined && e.target === self.amPM) {
                switch (e.key) {
                    case self.l10n.amPM[0].charAt(0):
                    case self.l10n.amPM[0].charAt(0).toLowerCase():
                        self.amPM.textContent = self.l10n.amPM[0];
                        setHoursFromInputs();
                        updateValue();
                        break;
                    case self.l10n.amPM[1].charAt(0):
                    case self.l10n.amPM[1].charAt(0).toLowerCase():
                        self.amPM.textContent = self.l10n.amPM[1];
                        setHoursFromInputs();
                        updateValue();
                        break;
                }
            }
            if (isInput || isCalendarElem(e.target)) {
                triggerEvent("onKeyDown", e);
            }
        }
        function onMouseOver(elem) {
            if (self.selectedDates.length !== 1 ||
                (elem &&
                    (!elem.classList.contains("flatpickr-day") ||
                        elem.classList.contains("flatpickr-disabled"))))
                return;
            var hoverDate = elem
                ? elem.dateObj.getTime()
                : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
            var containsDisabled = false;
            var minRange = 0, maxRange = 0;
            for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
                if (!isEnabled(new Date(t), true)) {
                    containsDisabled =
                        containsDisabled || (t > rangeStartDate && t < rangeEndDate);
                    if (t < initialDate && (!minRange || t > minRange))
                        minRange = t;
                    else if (t > initialDate && (!maxRange || t < maxRange))
                        maxRange = t;
                }
            }
            for (var m = 0; m < self.config.showMonths; m++) {
                var month = self.daysContainer.children[m];
                var _loop_1 = function (i, l) {
                    var dayElem = month.children[i], date = dayElem.dateObj;
                    var timestamp = date.getTime();
                    var outOfRange = (minRange > 0 && timestamp < minRange) ||
                        (maxRange > 0 && timestamp > maxRange);
                    if (outOfRange) {
                        dayElem.classList.add("notAllowed");
                        ["inRange", "startRange", "endRange"].forEach(function (c) {
                            dayElem.classList.remove(c);
                        });
                        return "continue";
                    }
                    else if (containsDisabled && !outOfRange)
                        return "continue";
                    ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
                        dayElem.classList.remove(c);
                    });
                    if (elem !== undefined) {
                        elem.classList.add(hoverDate <= self.selectedDates[0].getTime()
                            ? "startRange"
                            : "endRange");
                        if (initialDate < hoverDate && timestamp === initialDate)
                            dayElem.classList.add("startRange");
                        else if (initialDate > hoverDate && timestamp === initialDate)
                            dayElem.classList.add("endRange");
                        if (timestamp >= minRange &&
                            (maxRange === 0 || timestamp <= maxRange) &&
                            isBetween(timestamp, initialDate, hoverDate))
                            dayElem.classList.add("inRange");
                    }
                };
                for (var i = 0, l = month.children.length; i < l; i++) {
                    _loop_1(i, l);
                }
            }
        }
        function onResize() {
            if (self.isOpen && !self.config.static && !self.config.inline)
                positionCalendar();
        }
        function setDefaultTime() {
            self.setDate(self.config.minDate !== undefined
                ? new Date(self.config.minDate.getTime())
                : new Date(), true);
            setDefaultHours();
            updateValue();
        }
        function open(e, positionElement) {
            if (positionElement === void 0) { positionElement = self._positionElement; }
            if (self.isMobile === true) {
                if (e) {
                    e.preventDefault();
                    e.target && e.target.blur();
                }
                if (self.mobileInput !== undefined) {
                    self.mobileInput.focus();
                    self.mobileInput.click();
                }
                triggerEvent("onOpen");
                return;
            }
            if (self._input.disabled || self.config.inline)
                return;
            var wasOpen = self.isOpen;
            self.isOpen = true;
            if (!wasOpen) {
                self.calendarContainer.classList.add("open");
                self._input.classList.add("active");
                triggerEvent("onOpen");
                positionCalendar(positionElement);
            }
            if (self.config.enableTime === true && self.config.noCalendar === true) {
                if (self.selectedDates.length === 0) {
                    setDefaultTime();
                }
                if (self.config.allowInput === false &&
                    (e === undefined ||
                        !self.timeContainer.contains(e.relatedTarget))) {
                    setTimeout(function () { return self.hourElement.select(); }, 50);
                }
            }
        }
        function minMaxDateSetter(type) {
            return function (date) {
                var dateObj = (self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat));
                var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
                if (dateObj !== undefined) {
                    self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] =
                        dateObj.getHours() > 0 ||
                            dateObj.getMinutes() > 0 ||
                            dateObj.getSeconds() > 0;
                }
                if (self.selectedDates) {
                    self.selectedDates = self.selectedDates.filter(function (d) { return isEnabled(d); });
                    if (!self.selectedDates.length && type === "min")
                        setHoursFromDate(dateObj);
                    updateValue();
                }
                if (self.daysContainer) {
                    redraw();
                    if (dateObj !== undefined)
                        self.currentYearElement[type] = dateObj.getFullYear().toString();
                    else
                        self.currentYearElement.removeAttribute(type);
                    self.currentYearElement.disabled =
                        !!inverseDateObj &&
                            dateObj !== undefined &&
                            inverseDateObj.getFullYear() === dateObj.getFullYear();
                }
            };
        }
        function parseConfig() {
            var boolOpts = [
                "wrap",
                "weekNumbers",
                "allowInput",
                "clickOpens",
                "time_24hr",
                "enableTime",
                "noCalendar",
                "altInput",
                "shorthandCurrentMonth",
                "inline",
                "static",
                "enableSeconds",
                "disableMobile",
            ];
            var userConfig = __assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));
            var formats = {};
            self.config.parseDate = userConfig.parseDate;
            self.config.formatDate = userConfig.formatDate;
            Object.defineProperty(self.config, "enable", {
                get: function () { return self.config._enable; },
                set: function (dates) {
                    self.config._enable = parseDateRules(dates);
                }
            });
            Object.defineProperty(self.config, "disable", {
                get: function () { return self.config._disable; },
                set: function (dates) {
                    self.config._disable = parseDateRules(dates);
                }
            });
            var timeMode = userConfig.mode === "time";
            if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
                var defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaults.dateFormat;
                formats.dateFormat =
                    userConfig.noCalendar || timeMode
                        ? "H:i" + (userConfig.enableSeconds ? ":S" : "")
                        : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
            }
            if (userConfig.altInput &&
                (userConfig.enableTime || timeMode) &&
                !userConfig.altFormat) {
                var defaultAltFormat = flatpickr.defaultConfig.altFormat || defaults.altFormat;
                formats.altFormat =
                    userConfig.noCalendar || timeMode
                        ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K")
                        : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
            }
            if (!userConfig.altInputClass) {
                self.config.altInputClass =
                    self.input.className + " " + self.config.altInputClass;
            }
            Object.defineProperty(self.config, "minDate", {
                get: function () { return self.config._minDate; },
                set: minMaxDateSetter("min")
            });
            Object.defineProperty(self.config, "maxDate", {
                get: function () { return self.config._maxDate; },
                set: minMaxDateSetter("max")
            });
            var minMaxTimeSetter = function (type) { return function (val) {
                self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
            }; };
            Object.defineProperty(self.config, "minTime", {
                get: function () { return self.config._minTime; },
                set: minMaxTimeSetter("min")
            });
            Object.defineProperty(self.config, "maxTime", {
                get: function () { return self.config._maxTime; },
                set: minMaxTimeSetter("max")
            });
            if (userConfig.mode === "time") {
                self.config.noCalendar = true;
                self.config.enableTime = true;
            }
            Object.assign(self.config, formats, userConfig);
            for (var i = 0; i < boolOpts.length; i++)
                self.config[boolOpts[i]] =
                    self.config[boolOpts[i]] === true ||
                        self.config[boolOpts[i]] === "true";
            HOOKS.filter(function (hook) { return self.config[hook] !== undefined; }).forEach(function (hook) {
                self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
            });
            self.isMobile =
                !self.config.disableMobile &&
                    !self.config.inline &&
                    self.config.mode === "single" &&
                    !self.config.disable.length &&
                    !self.config.enable.length &&
                    !self.config.weekNumbers &&
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            for (var i = 0; i < self.config.plugins.length; i++) {
                var pluginConf = self.config.plugins[i](self) || {};
                for (var key in pluginConf) {
                    if (HOOKS.indexOf(key) > -1) {
                        self.config[key] = arrayify(pluginConf[key])
                            .map(bindToInstance)
                            .concat(self.config[key]);
                    }
                    else if (typeof userConfig[key] === "undefined")
                        self.config[key] = pluginConf[key];
                }
            }
            triggerEvent("onParseConfig");
        }
        function setupLocale() {
            if (typeof self.config.locale !== "object" &&
                typeof flatpickr.l10ns[self.config.locale] === "undefined")
                self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
            self.l10n = __assign({}, flatpickr.l10ns["default"], (typeof self.config.locale === "object"
                ? self.config.locale
                : self.config.locale !== "default"
                    ? flatpickr.l10ns[self.config.locale]
                    : undefined));
            tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
            var userConfig = __assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));
            if (userConfig.time_24hr === undefined &&
                flatpickr.defaultConfig.time_24hr === undefined) {
                self.config.time_24hr = self.l10n.time_24hr;
            }
            self.formatDate = createDateFormatter(self);
            self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
        }
        function positionCalendar(customPositionElement) {
            if (self.calendarContainer === undefined)
                return;
            triggerEvent("onPreCalendarPosition");
            var positionElement = customPositionElement || self._positionElement;
            var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, (function (acc, child) { return acc + child.offsetHeight; }), 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" ||
                (configPosVertical !== "below" &&
                    distanceFromBottom < calendarHeight &&
                    inputBounds.top > calendarHeight);
            var top = window.pageYOffset +
                inputBounds.top +
                (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
            toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
            toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
            if (self.config.inline)
                return;
            var left = window.pageXOffset +
                inputBounds.left -
                (configPosHorizontal != null && configPosHorizontal === "center"
                    ? (calendarWidth - inputBounds.width) / 2
                    : 0);
            var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
            var rightMost = left + calendarWidth > window.document.body.offsetWidth;
            var centerMost = right + calendarWidth > window.document.body.offsetWidth;
            toggleClass(self.calendarContainer, "rightMost", rightMost);
            if (self.config.static)
                return;
            self.calendarContainer.style.top = top + "px";
            if (!rightMost) {
                self.calendarContainer.style.left = left + "px";
                self.calendarContainer.style.right = "auto";
            }
            else if (!centerMost) {
                self.calendarContainer.style.left = "auto";
                self.calendarContainer.style.right = right + "px";
            }
            else {
                var doc = document.styleSheets[0];
                // some testing environments don't have css support
                if (doc === undefined)
                    return;
                var bodyWidth = window.document.body.offsetWidth;
                var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
                var centerBefore = ".flatpickr-calendar.centerMost:before";
                var centerAfter = ".flatpickr-calendar.centerMost:after";
                var centerIndex = doc.cssRules.length;
                var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
                toggleClass(self.calendarContainer, "rightMost", false);
                toggleClass(self.calendarContainer, "centerMost", true);
                doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
                self.calendarContainer.style.left = centerLeft + "px";
                self.calendarContainer.style.right = "auto";
            }
        }
        function redraw() {
            if (self.config.noCalendar || self.isMobile)
                return;
            updateNavigationCurrentMonth();
            buildDays();
        }
        function focusAndClose() {
            self._input.focus();
            if (window.navigator.userAgent.indexOf("MSIE") !== -1 ||
                navigator.msMaxTouchPoints !== undefined) {
                // hack - bugs in the way IE handles focus keeps the calendar open
                setTimeout(self.close, 0);
            }
            else {
                self.close();
            }
        }
        function selectDate(e) {
            e.preventDefault();
            e.stopPropagation();
            var isSelectable = function (day) {
                return day.classList &&
                    day.classList.contains("flatpickr-day") &&
                    !day.classList.contains("flatpickr-disabled") &&
                    !day.classList.contains("notAllowed");
            };
            var t = findParent(e.target, isSelectable);
            if (t === undefined)
                return;
            var target = t;
            var selectedDate = (self.latestSelectedDateObj = new Date(target.dateObj.getTime()));
            var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth ||
                selectedDate.getMonth() >
                    self.currentMonth + self.config.showMonths - 1) &&
                self.config.mode !== "range";
            self.selectedDateElem = target;
            if (self.config.mode === "single")
                self.selectedDates = [selectedDate];
            else if (self.config.mode === "multiple") {
                var selectedIndex = isDateSelected(selectedDate);
                if (selectedIndex)
                    self.selectedDates.splice(parseInt(selectedIndex), 1);
                else
                    self.selectedDates.push(selectedDate);
            }
            else if (self.config.mode === "range") {
                if (self.selectedDates.length === 2) {
                    self.clear(false, false);
                }
                self.latestSelectedDateObj = selectedDate;
                self.selectedDates.push(selectedDate);
                // unless selecting same date twice, sort ascendingly
                if (compareDates(selectedDate, self.selectedDates[0], true) !== 0)
                    self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
            }
            setHoursFromInputs();
            if (shouldChangeMonth) {
                var isNewYear = self.currentYear !== selectedDate.getFullYear();
                self.currentYear = selectedDate.getFullYear();
                self.currentMonth = selectedDate.getMonth();
                if (isNewYear) {
                    triggerEvent("onYearChange");
                    buildMonthSwitch();
                }
                triggerEvent("onMonthChange");
            }
            updateNavigationCurrentMonth();
            buildDays();
            updateValue();
            if (self.config.enableTime)
                setTimeout(function () { return (self.showTimeInput = true); }, 50);
            // maintain focus
            if (!shouldChangeMonth &&
                self.config.mode !== "range" &&
                self.config.showMonths === 1)
                focusOnDayElem(target);
            else if (self.selectedDateElem !== undefined &&
                self.hourElement === undefined) {
                self.selectedDateElem && self.selectedDateElem.focus();
            }
            if (self.hourElement !== undefined)
                self.hourElement !== undefined && self.hourElement.focus();
            if (self.config.closeOnSelect) {
                var single = self.config.mode === "single" && !self.config.enableTime;
                var range = self.config.mode === "range" &&
                    self.selectedDates.length === 2 &&
                    !self.config.enableTime;
                if (single || range) {
                    focusAndClose();
                }
            }
            triggerChange();
        }
        var CALLBACKS = {
            locale: [setupLocale, updateWeekdays],
            showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
            minDate: [jumpToDate],
            maxDate: [jumpToDate]
        };
        function set(option, value) {
            if (option !== null && typeof option === "object") {
                Object.assign(self.config, option);
                for (var key in option) {
                    if (CALLBACKS[key] !== undefined)
                        CALLBACKS[key].forEach(function (x) { return x(); });
                }
            }
            else {
                self.config[option] = value;
                if (CALLBACKS[option] !== undefined)
                    CALLBACKS[option].forEach(function (x) { return x(); });
                else if (HOOKS.indexOf(option) > -1)
                    self.config[option] = arrayify(value);
            }
            self.redraw();
            updateValue(false);
        }
        function setSelectedDate(inputDate, format) {
            var dates = [];
            if (inputDate instanceof Array)
                dates = inputDate.map(function (d) { return self.parseDate(d, format); });
            else if (inputDate instanceof Date || typeof inputDate === "number")
                dates = [self.parseDate(inputDate, format)];
            else if (typeof inputDate === "string") {
                switch (self.config.mode) {
                    case "single":
                    case "time":
                        dates = [self.parseDate(inputDate, format)];
                        break;
                    case "multiple":
                        dates = inputDate
                            .split(self.config.conjunction)
                            .map(function (date) { return self.parseDate(date, format); });
                        break;
                    case "range":
                        dates = inputDate
                            .split(self.l10n.rangeSeparator)
                            .map(function (date) { return self.parseDate(date, format); });
                        break;
                    default:
                        break;
                }
            }
            else
                self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
            self.selectedDates = dates.filter(function (d) { return d instanceof Date && isEnabled(d, false); });
            if (self.config.mode === "range")
                self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
        }
        function setDate(date, triggerChange, format) {
            if (triggerChange === void 0) { triggerChange = false; }
            if (format === void 0) { format = self.config.dateFormat; }
            if ((date !== 0 && !date) || (date instanceof Array && date.length === 0))
                return self.clear(triggerChange);
            setSelectedDate(date, format);
            self.showTimeInput = self.selectedDates.length > 0;
            self.latestSelectedDateObj =
                self.selectedDates[self.selectedDates.length - 1];
            self.redraw();
            jumpToDate();
            setHoursFromDate();
            if (self.selectedDates.length === 0) {
                self.clear(false);
            }
            updateValue(triggerChange);
            if (triggerChange)
                triggerEvent("onChange");
        }
        function parseDateRules(arr) {
            return arr
                .slice()
                .map(function (rule) {
                if (typeof rule === "string" ||
                    typeof rule === "number" ||
                    rule instanceof Date) {
                    return self.parseDate(rule, undefined, true);
                }
                else if (rule &&
                    typeof rule === "object" &&
                    rule.from &&
                    rule.to)
                    return {
                        from: self.parseDate(rule.from, undefined),
                        to: self.parseDate(rule.to, undefined)
                    };
                return rule;
            })
                .filter(function (x) { return x; }); // remove falsy values
        }
        function setupDates() {
            self.selectedDates = [];
            self.now = self.parseDate(self.config.now) || new Date();
            // Workaround IE11 setting placeholder as the input's value
            var preloadedDate = self.config.defaultDate ||
                ((self.input.nodeName === "INPUT" ||
                    self.input.nodeName === "TEXTAREA") &&
                    self.input.placeholder &&
                    self.input.value === self.input.placeholder
                    ? null
                    : self.input.value);
            if (preloadedDate)
                setSelectedDate(preloadedDate, self.config.dateFormat);
            self._initialDate =
                self.selectedDates.length > 0
                    ? self.selectedDates[0]
                    : self.config.minDate &&
                        self.config.minDate.getTime() > self.now.getTime()
                        ? self.config.minDate
                        : self.config.maxDate &&
                            self.config.maxDate.getTime() < self.now.getTime()
                            ? self.config.maxDate
                            : self.now;
            self.currentYear = self._initialDate.getFullYear();
            self.currentMonth = self._initialDate.getMonth();
            if (self.selectedDates.length > 0)
                self.latestSelectedDateObj = self.selectedDates[0];
            if (self.config.minTime !== undefined)
                self.config.minTime = self.parseDate(self.config.minTime, "H:i");
            if (self.config.maxTime !== undefined)
                self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
            self.minDateHasTime =
                !!self.config.minDate &&
                    (self.config.minDate.getHours() > 0 ||
                        self.config.minDate.getMinutes() > 0 ||
                        self.config.minDate.getSeconds() > 0);
            self.maxDateHasTime =
                !!self.config.maxDate &&
                    (self.config.maxDate.getHours() > 0 ||
                        self.config.maxDate.getMinutes() > 0 ||
                        self.config.maxDate.getSeconds() > 0);
            Object.defineProperty(self, "showTimeInput", {
                get: function () { return self._showTimeInput; },
                set: function (bool) {
                    self._showTimeInput = bool;
                    if (self.calendarContainer)
                        toggleClass(self.calendarContainer, "showTimeInput", bool);
                    self.isOpen && positionCalendar();
                }
            });
        }
        function setupInputs() {
            self.input = self.config.wrap
                ? element.querySelector("[data-input]")
                : element;
            /* istanbul ignore next */
            if (!self.input) {
                self.config.errorHandler(new Error("Invalid input element specified"));
                return;
            }
            // hack: store previous type to restore it after destroy()
            self.input._type = self.input.type;
            self.input.type = "text";
            self.input.classList.add("flatpickr-input");
            self._input = self.input;
            if (self.config.altInput) {
                // replicate self.element
                self.altInput = createElement(self.input.nodeName, self.config.altInputClass);
                self._input = self.altInput;
                self.altInput.placeholder = self.input.placeholder;
                self.altInput.disabled = self.input.disabled;
                self.altInput.required = self.input.required;
                self.altInput.tabIndex = self.input.tabIndex;
                self.altInput.type = "text";
                self.input.setAttribute("type", "hidden");
                if (!self.config.static && self.input.parentNode)
                    self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
            }
            if (!self.config.allowInput)
                self._input.setAttribute("readonly", "readonly");
            self._positionElement = self.config.positionElement || self._input;
        }
        function setupMobile() {
            var inputType = self.config.enableTime
                ? self.config.noCalendar
                    ? "time"
                    : "datetime-local"
                : "date";
            self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
            self.mobileInput.step = self.input.getAttribute("step") || "any";
            self.mobileInput.tabIndex = 1;
            self.mobileInput.type = inputType;
            self.mobileInput.disabled = self.input.disabled;
            self.mobileInput.required = self.input.required;
            self.mobileInput.placeholder = self.input.placeholder;
            self.mobileFormatStr =
                inputType === "datetime-local"
                    ? "Y-m-d\\TH:i:S"
                    : inputType === "date"
                        ? "Y-m-d"
                        : "H:i:S";
            if (self.selectedDates.length > 0) {
                self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
            }
            if (self.config.minDate)
                self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
            if (self.config.maxDate)
                self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
            self.input.type = "hidden";
            if (self.altInput !== undefined)
                self.altInput.type = "hidden";
            try {
                if (self.input.parentNode)
                    self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
            }
            catch (_a) { }
            bind(self.mobileInput, "change", function (e) {
                self.setDate(e.target.value, false, self.mobileFormatStr);
                triggerEvent("onChange");
                triggerEvent("onClose");
            });
        }
        function toggle(e) {
            if (self.isOpen === true)
                return self.close();
            self.open(e);
        }
        function triggerEvent(event, data) {
            // If the instance has been destroyed already, all hooks have been removed
            if (self.config === undefined)
                return;
            var hooks = self.config[event];
            if (hooks !== undefined && hooks.length > 0) {
                for (var i = 0; hooks[i] && i < hooks.length; i++)
                    hooks[i](self.selectedDates, self.input.value, self, data);
            }
            if (event === "onChange") {
                self.input.dispatchEvent(createEvent("change"));
                // many front-end frameworks bind to the input event
                self.input.dispatchEvent(createEvent("input"));
            }
        }
        function createEvent(name) {
            var e = document.createEvent("Event");
            e.initEvent(name, true, true);
            return e;
        }
        function isDateSelected(date) {
            for (var i = 0; i < self.selectedDates.length; i++) {
                if (compareDates(self.selectedDates[i], date) === 0)
                    return "" + i;
            }
            return false;
        }
        function isDateInRange(date) {
            if (self.config.mode !== "range" || self.selectedDates.length < 2)
                return false;
            return (compareDates(date, self.selectedDates[0]) >= 0 &&
                compareDates(date, self.selectedDates[1]) <= 0);
        }
        function updateNavigationCurrentMonth() {
            if (self.config.noCalendar || self.isMobile || !self.monthNav)
                return;
            self.yearElements.forEach(function (yearElement, i) {
                var d = new Date(self.currentYear, self.currentMonth, 1);
                d.setMonth(self.currentMonth + i);
                if (self.config.showMonths > 1 ||
                    self.config.monthSelectorType === "static") {
                    self.monthElements[i].textContent =
                        monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
                }
                else {
                    self.monthsDropdownContainer.value = d.getMonth().toString();
                }
                yearElement.value = d.getFullYear().toString();
            });
            self._hidePrevMonthArrow =
                self.config.minDate !== undefined &&
                    (self.currentYear === self.config.minDate.getFullYear()
                        ? self.currentMonth <= self.config.minDate.getMonth()
                        : self.currentYear < self.config.minDate.getFullYear());
            self._hideNextMonthArrow =
                self.config.maxDate !== undefined &&
                    (self.currentYear === self.config.maxDate.getFullYear()
                        ? self.currentMonth + 1 > self.config.maxDate.getMonth()
                        : self.currentYear > self.config.maxDate.getFullYear());
        }
        function getDateStr(format) {
            return self.selectedDates
                .map(function (dObj) { return self.formatDate(dObj, format); })
                .filter(function (d, i, arr) {
                return self.config.mode !== "range" ||
                    self.config.enableTime ||
                    arr.indexOf(d) === i;
            })
                .join(self.config.mode !== "range"
                ? self.config.conjunction
                : self.l10n.rangeSeparator);
        }
        /**
         * Updates the values of inputs associated with the calendar
         */
        function updateValue(triggerChange) {
            if (triggerChange === void 0) { triggerChange = true; }
            if (self.mobileInput !== undefined && self.mobileFormatStr) {
                self.mobileInput.value =
                    self.latestSelectedDateObj !== undefined
                        ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr)
                        : "";
            }
            self.input.value = getDateStr(self.config.dateFormat);
            if (self.altInput !== undefined) {
                self.altInput.value = getDateStr(self.config.altFormat);
            }
            if (triggerChange !== false)
                triggerEvent("onValueUpdate");
        }
        function onMonthNavClick(e) {
            var isPrevMonth = self.prevMonthNav.contains(e.target);
            var isNextMonth = self.nextMonthNav.contains(e.target);
            if (isPrevMonth || isNextMonth) {
                changeMonth(isPrevMonth ? -1 : 1);
            }
            else if (self.yearElements.indexOf(e.target) >= 0) {
                e.target.select();
            }
            else if (e.target.classList.contains("arrowUp")) {
                self.changeYear(self.currentYear + 1);
            }
            else if (e.target.classList.contains("arrowDown")) {
                self.changeYear(self.currentYear - 1);
            }
        }
        function timeWrapper(e) {
            e.preventDefault();
            var isKeyDown = e.type === "keydown", input = e.target;
            if (self.amPM !== undefined && e.target === self.amPM) {
                self.amPM.textContent =
                    self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
            }
            var min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta ||
                (isKeyDown ? (e.which === 38 ? 1 : -1) : 0);
            var newValue = curValue + step * delta;
            if (typeof input.value !== "undefined" && input.value.length === 2) {
                var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
                if (newValue < min) {
                    newValue =
                        max +
                            newValue +
                            int(!isHourElem) +
                            (int(isHourElem) && int(!self.amPM));
                    if (isMinuteElem)
                        incrementNumInput(undefined, -1, self.hourElement);
                }
                else if (newValue > max) {
                    newValue =
                        input === self.hourElement ? newValue - max - int(!self.amPM) : min;
                    if (isMinuteElem)
                        incrementNumInput(undefined, 1, self.hourElement);
                }
                if (self.amPM &&
                    isHourElem &&
                    (step === 1
                        ? newValue + curValue === 23
                        : Math.abs(newValue - curValue) > step)) {
                    self.amPM.textContent =
                        self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
                }
                input.value = pad(newValue);
            }
        }
        init();
        return self;
    }
    /* istanbul ignore next */
    function _flatpickr(nodeList, config) {
        // static list
        var nodes = Array.prototype.slice
            .call(nodeList)
            .filter(function (x) { return x instanceof HTMLElement; });
        var instances = [];
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            try {
                if (node.getAttribute("data-fp-omit") !== null)
                    continue;
                if (node._flatpickr !== undefined) {
                    node._flatpickr.destroy();
                    node._flatpickr = undefined;
                }
                node._flatpickr = FlatpickrInstance(node, config || {});
                instances.push(node._flatpickr);
            }
            catch (e) {
                console.error(e);
            }
        }
        return instances.length === 1 ? instances[0] : instances;
    }
    /* istanbul ignore next */
    if (typeof HTMLElement !== "undefined" &&
        typeof HTMLCollection !== "undefined" &&
        typeof NodeList !== "undefined") {
        // browser env
        HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
            return _flatpickr(this, config);
        };
        HTMLElement.prototype.flatpickr = function (config) {
            return _flatpickr([this], config);
        };
    }
    /* istanbul ignore next */
    var flatpickr = function (selector, config) {
        if (typeof selector === "string") {
            return _flatpickr(window.document.querySelectorAll(selector), config);
        }
        else if (selector instanceof Node) {
            return _flatpickr([selector], config);
        }
        else {
            return _flatpickr(selector, config);
        }
    };
    /* istanbul ignore next */
    flatpickr.defaultConfig = {};
    flatpickr.l10ns = {
        en: __assign({}, english),
        "default": __assign({}, english)
    };
    flatpickr.localize = function (l10n) {
        flatpickr.l10ns["default"] = __assign({}, flatpickr.l10ns["default"], l10n);
    };
    flatpickr.setDefaults = function (config) {
        flatpickr.defaultConfig = __assign({}, flatpickr.defaultConfig, config);
    };
    flatpickr.parseDate = createDateParser({});
    flatpickr.formatDate = createDateFormatter({});
    flatpickr.compareDates = compareDates;
    /* istanbul ignore next */
    if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
        jQuery.fn.flatpickr = function (config) {
            return _flatpickr(this, config);
        };
    }
    // eslint-disable-next-line @typescript-eslint/camelcase
    Date.prototype.fp_incr = function (days) {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
    };
    if (typeof window !== "undefined") {
        window.flatpickr = flatpickr;
    }

    return flatpickr;

}));


/***/ }),

/***/ "./node_modules/flatpickr/dist/flatpickr.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/flatpickr/dist/flatpickr.min.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--7-1!../../postcss-loader/src??ref--7-2!./flatpickr.min.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/flatpickr/dist/flatpickr.min.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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

/***/ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js":
/*!************************************************************************!*\
  !*** ./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/flatpickr.js")):undefined}("undefined"!=typeof self?self:this,function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(e,n){e.exports=t},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=["onChange","onClose","onDestroy","onMonthChange","onOpen","onYearChange"];function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var a=function(t){return u({},t)},f=i.concat(["onValueUpdate","onDayCreate","onParseConfig","onReady","onPreCalendarPosition","onKeyDown"]),l=["locale","showMonths"],s={name:"flat-pickr",render:function(t){return t("input",{attrs:{type:"text","data-input":!0},props:{disabled:this.disabled},on:{input:this.onInput}})},props:{value:{default:null,required:!0,validator:function(t){return null===t||t instanceof Date||"string"==typeof t||t instanceof String||t instanceof Array||"number"==typeof t}},config:{type:Object,default:function(){return{wrap:!1,defaultDate:null}}},events:{type:Array,default:function(){return i}},disabled:{type:Boolean,default:!1}},data:function(){return{fp:null}},mounted:function(){var t=this;if(!this.fp){var e=a(this.config);this.events.forEach(function(n){var r,i=o.a.defaultConfig[n]||[];e[n]=(r=e[n]||[],r instanceof Array?r:[r]).concat(i,function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i;t.$emit.apply(t,[(i=n,i.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())].concat(r))})}),e.defaultDate=this.value||e.defaultDate,this.fp=new o.a(this.getElem(),e),this.fpInput().addEventListener("blur",this.onBlur),this.$watch("disabled",this.watchDisabled,{immediate:!0})}},methods:{getElem:function(){return this.config.wrap?this.$el.parentNode:this.$el},onInput:function(t){var e=this,n=t.target;this.$nextTick(function(){e.$emit("input",n.value)})},fpInput:function(){return this.fp.altInput||this.fp.input},onBlur:function(t){this.$emit("blur",t.target.value)},watchDisabled:function(t){t?this.fpInput().setAttribute("disabled",t):this.fpInput().removeAttribute("disabled")}},watch:{config:{deep:!0,handler:function(t){var e=this,n=a(t);f.forEach(function(t){delete n[t]}),this.fp.set(n),l.forEach(function(t){void 0!==n[t]&&e.fp.set(t,n[t])})}},value:function(t){t!==this.$el.value&&this.fp&&this.fp.setDate(t,!0)}},beforeDestroy:function(){this.fp&&(this.fpInput().removeEventListener("blur",this.onBlur),this.fp.destroy(),this.fp=null)}};n.d(e,"Plugin",function(){return c}),n.d(e,"Component",function(){return s});var c=function(t,e){var n="flat-pickr";"string"==typeof e&&(n=e),t.component(n,s)};s.install=c;e.default=s}]).default});

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