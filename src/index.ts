const numberFormatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    maximumFractionDigits: 2
});

const names: Record<"decimal" | "binary", string[]> = {
    decimal: [
        "B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"
    ],
    binary: [
        "B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"
    ]
}

type Unit = keyof typeof names;

const conversionFactor: Record<"decimal" | "binary", number> = {
    decimal: 1000,
    binary: 1024
}

/**
 * Class representing a number of bytes
 * @param {number} bytes - The number of bytes
 * @param {Unit} preferredUnit - The preferred unit to use (binary [eg. KiB = 1024 bytes] or decimal [eg. KB = 1000 bytes])
 * @example <caption>Creating a Bytes object</caption>
 * const bytes = new Bytes(1024);
 * @example <caption>Creating a Bytes object with a preferred unit</caption>
 * const bytes = new Bytes(1024, "binary");
 */
class Bytes {
    /**
     * Create a Bytes object
     * @param bytes - The number of bytes
     * @param preferredUnit - The preferred unit to use (binary [eg. KiB = 1024 bytes] or decimal [eg. KB = 1000 bytes])
     */
    constructor(
        public bytes: number,
        private preferredUnit: Unit = "binary"
    ) { }

    valueOf() {
        return this.bytes;
    }

    /**
     * Get the number of bytes in kibibytes (KiB) [1024 bytes]
     */
    get kibiBytes() {
        return this.bytes / conversionFactor.binary ** 1;
    }

    /**
     * Get the number of bytes in mebibytes (MiB) [1024 KiB]
     */
    get mebiBytes() {
        return this.bytes / conversionFactor.binary ** 2;
    }

    /**
     * Get the number of bytes in gibibytes (GiB) [1024 MiB]
     */
    get gibiBytes() {
        return this.bytes / conversionFactor.binary ** 3;
    }

    /**
     * Get the number of bytes in tebibytes (TiB) [1024 GiB]
     */
    get tebiBytes() {
        return this.bytes / conversionFactor.binary ** 4;
    }

    /**
     * Get the number of bytes in pebibytes (PiB) [1024 TiB]
     */
    get pebiBytes() {
        return this.bytes / conversionFactor.binary ** 5;
    }

    /**
     * Get the number of bytes in exbibytes (EiB) [1024 PiB]
     */
    get exbiBytes() {
        return this.bytes / conversionFactor.binary ** 6;
    }

    /**
     * Get the number of bytes in zebibytes (ZiB) [1024 EiB]
     */
    get zebiBytes() {
        return this.bytes / conversionFactor.binary ** 7;
    }

    /**
     * Get the number of bytes in yobibytes (YiB) [1024 ZiB]
     */
    get yobiBytes() {
        return this.bytes / conversionFactor.binary ** 8;
    }

    /**
     * Get the number of bytes in kilobytes (KB) [1000 bytes]
     */
    get kiloBytes() {
        return this.bytes / conversionFactor.decimal ** 1;
    }

    /**
     * Get the number of bytes in megabytes (MB) [1000 KB]
     */
    get megaBytes() {
        return this.bytes / conversionFactor.decimal ** 2;
    }

    /**
     * Get the number of bytes in gigabytes (GB) [1000 MB]
     */
    get gigaBytes() {
        return this.bytes / conversionFactor.decimal ** 3;
    }

    /**
     * Get the number of bytes in terabytes (TB) [1000 GB]
     */
    get teraBytes() {
        return this.bytes / conversionFactor.decimal ** 4;
    }

    /**
     * Get the number of bytes in petabytes (PB) [1000 TB]
     */
    get petaBytes() {
        return this.bytes / conversionFactor.decimal ** 5;
    }

    /**
     * Get the number of bytes in exabytes (EB) [1000 PB]
     */
    get exaBytes() {
        return this.bytes / conversionFactor.decimal ** 6;
    }

    /**
     * Get the number of bytes in zettabytes (ZB) [1000 EB]
     */
    get zettaBytes() {
        return this.bytes / conversionFactor.decimal ** 7;
    }

    /**
     * Get the number of bytes in yottabytes (YB) [1000 ZB]
     */
    get yottaBytes() {
        return this.bytes / conversionFactor.decimal ** 8;
    }

    /**
     * Convert the Bytes object to a string
     * @param unit Unit to use (binary [eg. KiB = 1024 bytes] or decimal [eg. KB = 1000 bytes])
     * @returns String representation of the Bytes object
     */
    toString(unit: Unit = this.preferredUnit) {
        let i = 0;
        let bytes = this.bytes;
        while (bytes >= conversionFactor[unit]) {
            bytes /= conversionFactor[unit];
            i++;
        }
        return `${numberFormatter.format(bytes)} ${names[unit][i]}`;
    }

    /**
     * Create a Bytes object from a number of kibibytes (KiB) [1024 bytes]
     * @param kibiBytes Number of kibibytes
     * @returns Bytes object
     */
    static fromKibiBytes(kibiBytes: number) {
        return new Bytes(kibiBytes * conversionFactor.binary ** 1, "binary");
    }

    /**
     * Create a Bytes object from a number of mebibytes (MiB) [1024 KiB]
     * @param mebiBytes Number of mebibytes
     * @returns Bytes object
     */
    static fromMebiBytes(mebiBytes: number) {
        return new Bytes(mebiBytes * conversionFactor.binary ** 2, "binary");
    }

    /**
     * Create a Bytes object from a number of gibibytes (GiB) [1024 MiB]
     * @param gibiBytes Number of gibibytes
     * @returns Bytes object
     */
    static fromGibiBytes(gibiBytes: number) {
        return new Bytes(gibiBytes * conversionFactor.binary ** 3, "binary");
    }

    /**
     * Create a Bytes object from a number of tebibytes (TiB) [1024 GiB]
     * @param tebiBytes Number of tebibytes
     * @returns Bytes object
     */
    static fromTebiBytes(tebiBytes: number) {
        return new Bytes(tebiBytes * conversionFactor.binary ** 4, "binary");
    }

    /**
     * Create a Bytes object from a number of pebibytes (PiB) [1024 TiB]
     * @param pebiBytes Number of pebibytes
     * @returns Bytes object
     */
    static fromPebiBytes(pebiBytes: number) {
        return new Bytes(pebiBytes * conversionFactor.binary ** 5, "binary");
    }

    /**
     * Create a Bytes object from a number of exbibytes (EiB) [1024 PiB]
     * @param exbiBytes Number of exbibytes
     * @returns Bytes object
     */
    static fromExbiBytes(exbiBytes: number) {
        return new Bytes(exbiBytes * conversionFactor.binary ** 6, "binary");
    }

    /**
     * Create a Bytes object from a number of zebibytes (ZiB) [1024 EiB]
     * @param zebiBytes Number of zebibytes
     * @returns Bytes object
     */
    static fromZebiBytes(zebiBytes: number) {
        return new Bytes(zebiBytes * conversionFactor.binary ** 7, "binary");
    }

    /**
     * Create a Bytes object from a number of yobibytes (YiB) [1024 ZiB]
     * @param yobiBytes Number of yobibytes
     * @returns Bytes object
     */
    static fromYobiBytes(yobiBytes: number) {
        return new Bytes(yobiBytes * conversionFactor.binary ** 8, "binary");
    }

    /**
     * Create a Bytes object from a number of kilobytes (KB) [1000 bytes]
     * @param kiloBytes Number of kilobytes
     * @returns Bytes object
    */
    static fromKiloBytes(kiloBytes: number) {
        return new Bytes(kiloBytes * conversionFactor.decimal ** 1, "decimal");
    }

    /**
     * Create a Bytes object from a number of megabytes (MB) [1000 KB]
     * @param megaBytes Number of megabytes
     * @returns Bytes object
     */
    static fromMegaBytes(megaBytes: number) {
        return new Bytes(megaBytes * conversionFactor.decimal ** 2, "decimal");
    }

    /**
     * Create a Bytes object from a number of gigabytes (GB) [1000 MB]
     * @param gigaBytes Number of gigabytes
     * @returns Bytes object
     */
    static fromGigaBytes(gigaBytes: number) {
        return new Bytes(gigaBytes * conversionFactor.decimal ** 3, "decimal");
    }

    /**
     * Create a Bytes object from a number of terabytes (TB) [1000 GB]
     * @param teraBytes Number of terabytes
     * @returns Bytes object
     */
    static fromTeraBytes(teraBytes: number) {
        return new Bytes(teraBytes * conversionFactor.decimal ** 4, "decimal");
    }

    /**
     * Create a Bytes object from a number of petabytes (PB) [1000 TB]
     * @param petaBytes Number of petabytes
     * @returns Bytes object
     */
    static fromPetaBytes(petaBytes: number) {
        return new Bytes(petaBytes * conversionFactor.decimal ** 5, "decimal");
    }

    /**
     * Create a Bytes object from a number of exabytes (EB) [1000 PB]
     * @param exaBytes Number of exabytes
     * @returns Bytes object
     */
    static fromExaBytes(exaBytes: number) {
        return new Bytes(exaBytes * conversionFactor.decimal ** 6, "decimal");
    }

    /**
     * Create a Bytes object from a number of zettabytes (ZB) [1000 EB]
     * @param zettaBytes Number of zettabytes
     * @returns Bytes object
     */
    static fromZettaBytes(zettaBytes: number) {
        return new Bytes(zettaBytes * conversionFactor.decimal ** 7, "decimal");
    }

    /**
     * Create a Bytes object from a number of yottabytes (YB) [1000 ZB]
     * @param yottaBytes Number of yottabytes
     * @returns Bytes object
     */
    static fromYottaBytes(yottaBytes: number) {
        return new Bytes(yottaBytes * conversionFactor.decimal ** 8, "decimal");
    }

    /**
     * Create a Bytes object from a number of bytes
     * @param bytes Number of bytes
     * @param unit Unit to use (binary [eg. KiB = 1024 bytes] or decimal [eg. KB = 1000 bytes])
     * @returns Bytes object
     */
    static fromBytes(bytes: number, unit: Unit = "binary") {
        return new Bytes(bytes, unit);
    }
}

/**
 * Create a Bytes object from a number of bytes
 * @param bytes Number of bytes
 * @param unit Unit to use (binary [eg. KiB = 1024 bytes] or decimal [eg. KB = 1000 bytes])
 */
const fromBytes = Bytes.fromBytes;

/**
 * Create a Bytes object from a number of kibibytes (KiB) [1024 bytes]
 * @param kibiBytes Number of kibibytes
 * @returns Bytes object
 */
const fromKibiBytes = Bytes.fromKibiBytes;

/**
 * Create a Bytes object from a number of mebibytes (MiB) [1024 KiB]
 * @param mebiBytes Number of mebibytes
 * @returns Bytes object
 */
const fromMebiBytes = Bytes.fromMebiBytes;

/**
 * Create a Bytes object from a number of gibibytes (GiB) [1024 MiB]
 * @param gibiBytes Number of gibibytes
 * @returns Bytes object
 */
const fromGibiBytes = Bytes.fromGibiBytes;

/**
 * Create a Bytes object from a number of tebibytes (TiB) [1024 GiB]
 * @param tebiBytes Number of tebibytes
 * @returns Bytes object
 */
const fromTebiBytes = Bytes.fromTebiBytes;

/**
 * Create a Bytes object from a number of pebibytes (PiB) [1024 TiB]
 * @param pebiBytes Number of pebibytes
 * @returns Bytes object
 */
const fromPebiBytes = Bytes.fromPebiBytes;

/**
 * Create a Bytes object from a number of exbibytes (EiB) [1024 PiB]
 * @param exbiBytes Number of exbibytes
 * @returns Bytes object
 */
const fromExbiBytes = Bytes.fromExbiBytes;

/**
 * Create a Bytes object from a number of zebibytes (ZiB) [1024 EiB]
 * @param zebiBytes Number of zebibytes
 * @returns Bytes object
 */
const fromZebiBytes = Bytes.fromZebiBytes;

/**
 * Create a Bytes object from a number of yobibytes (YiB) [1024 ZiB]
 * @param yobiBytes Number of yobibytes
 * @returns Bytes object
 */
const fromYobiBytes = Bytes.fromYobiBytes;

/**
 * Create a Bytes object from a number of kilobytes (KB) [1000 bytes]
 * @param kiloBytes Number of kilobytes
 * @returns Bytes object
 */
const fromKiloBytes = Bytes.fromKiloBytes;

/**
 * Create a Bytes object from a number of megabytes (MB) [1000 KB]
 * @param megaBytes Number of megabytes
 * @returns Bytes object
 */
const fromMegaBytes = Bytes.fromMegaBytes;

/**
 * Create a Bytes object from a number of gigabytes (GB) [1000 MB]
 * @param gigaBytes Number of gigabytes
 * @returns Bytes object
 */
const fromGigaBytes = Bytes.fromGigaBytes;

/**
 * Create a Bytes object from a number of terabytes (TB) [1000 GB]
 * @param teraBytes Number of terabytes
 * @returns Bytes object
 */
const fromTeraBytes = Bytes.fromTeraBytes;

/**
 * Create a Bytes object from a number of petabytes (PB) [1000 TB]
 * @param petaBytes Number of petabytes
 * @returns Bytes object
 */
const fromPetaBytes = Bytes.fromPetaBytes;

/**
 * Create a Bytes object from a number of exabytes (EB) [1000 PB]
 * @param exaBytes Number of exabytes
 * @returns Bytes object
 */
const fromExaBytes = Bytes.fromExaBytes;

/**
 * Create a Bytes object from a number of zettabytes (ZB) [1000 EB]
 * @param zettaBytes Number of zettabytes
 * @returns Bytes object
 */
const fromZettaBytes = Bytes.fromZettaBytes;

/**
 * Create a Bytes object from a number of yottabytes (YB) [1000 ZB]
 * @param yottaBytes Number of yottabytes
 * @returns Bytes object
 */
const fromYottaBytes = Bytes.fromYottaBytes;

const exports = {
    Bytes,
    fromBytes,
    fromKibiBytes,
    fromMebiBytes,
    fromGibiBytes,
    fromTebiBytes,
    fromPebiBytes,
    fromExbiBytes,
    fromZebiBytes,
    fromYobiBytes,
    fromKiloBytes,
    fromMegaBytes,
    fromGigaBytes,
    fromTeraBytes,
    fromPetaBytes,
    fromExaBytes,
    fromZettaBytes,
    fromYottaBytes
};

export {
    Bytes,
    fromBytes,
    fromKibiBytes,
    fromMebiBytes,
    fromGibiBytes,
    fromTebiBytes,
    fromPebiBytes,
    fromExbiBytes,
    fromZebiBytes,
    fromYobiBytes,
    fromKiloBytes,
    fromMegaBytes,
    fromGigaBytes,
    fromTeraBytes,
    fromPetaBytes,
    fromExaBytes,
    fromZettaBytes,
    fromYottaBytes
}

export default exports;