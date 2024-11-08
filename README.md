# Bytes Formatter

A simple JavaScript/TypeScript module for formatting byte values, supporting both binary (IEC) and decimal (SI) units. This module helps you work with byte values by converting them to readable formats and switching between binary and decimal units.

## Installation

Install using npm:

```bash
npm install @shie1/bytes
```

## Usage

### Importing the module

```javascript
import { Bytes, fromKibiBytes, fromMegaBytes } from '@shie1/bytes';
```

### Creating a `Bytes` Object

The `Bytes` class represents a quantity of bytes. You can create an instance using a specified byte value and an optional unit format (binary or decimal).

```javascript
// Creating a Bytes object with 1024 bytes
const bytes = new Bytes(1024);

// Creating a Bytes object with a preferred unit format
const binaryBytes = new Bytes(1024, 'binary');
```

### Available Properties

Access different representations of byte values in various units directly from the `Bytes` instance.

```javascript
console.log(bytes.kibiBytes);  // Outputs: 1 (KiB)
console.log(bytes.mebiBytes);  // Outputs: 0.0009765625 (MiB)
console.log(bytes.kiloBytes);  // Outputs: 1.024 (KB)
```

### Methods

- **`toString(unit: Unit)`**: Returns a string representation of the byte value, automatically converting it to the appropriate unit (binary or decimal).
  ```javascript
  console.log(bytes.toString());  // Outputs: "1 KiB" for binary, "1.02 KB" for decimal
  ```

### Static Factory Methods

The `Bytes` class offers factory methods to create `Bytes` objects directly from specific units.

```javascript
const fromMiB = Bytes.fromMebiBytes(1);  // Creates a Bytes object with 1 MiB (1048576 bytes)
const fromMB = Bytes.fromMegaBytes(1);   // Creates a Bytes object with 1 MB (1000000 bytes)
```

### Examples

#### Formatting Bytes to Readable String

```javascript
const bytes = new Bytes(1048576, 'binary');
console.log(bytes.toString());  // Outputs: "1 MiB"

const decimalBytes = new Bytes(1000000, 'decimal');
console.log(decimalBytes.toString());  // Outputs: "1 MB"
```

#### Converting Between Units

```javascript
const bytes = new Bytes(1048576);
console.log(bytes.kibiBytes);  // Outputs: 1024
console.log(bytes.mebiBytes);  // Outputs: 1
console.log(bytes.kiloBytes);  // Outputs: 1048.576
```

## API

### `Bytes` Properties

- **`kibiBytes`**: Bytes in KiB (binary, 1024 bytes).
- **`mebiBytes`**: Bytes in MiB (1024 KiB).
- **`gibiBytes`**: Bytes in GiB (1024 MiB).
- **`tebiBytes`**: Bytes in TiB (1024 GiB).
- **`kiloBytes`**: Bytes in KB (decimal, 1000 bytes).
- **`megaBytes`**: Bytes in MB (1000 KB).
- **`gigaBytes`**: Bytes in GB (1000 MB).
- **`teraBytes`**: Bytes in TB (1000 GB).

### `Bytes` Methods

- **`toString(unit: Unit)`**: Converts the byte value to a readable string in the specified unit (default: preferred unit).

### Factory Methods

These methods allow creating a `Bytes` instance directly from values in specific units:

- **`fromKibiBytes(kibiBytes: number)`**
- **`fromMegaBytes(megaBytes: number)`**
- **`fromGigaBytes(gigaBytes: number)`**
- *(And other similar methods for each binary and decimal unit)*

## License

This module is open-sourced under the MIT License.