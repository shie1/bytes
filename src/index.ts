const numberFormatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    maximumFractionDigits: 2
});

export class Bytes {
    constructor(public bytes: number) { }

    static fromBytess(bytes: number): Bytes {
        return new Bytes(bytes);
    }

    static fromKilobytes(kilobytes: number): Bytes {
        return new Bytes(kilobytes * 1024);
    }

    static fromMegabytes(megabytes: number): Bytes {
        // * 1024 squared
        return new Bytes(Math.pow(1024, 2) * megabytes);
    }

    static fromGigabytes(gigabytes: number): Bytes {
        // * 1024 cubed
        return new Bytes(Math.pow(1024, 3) * gigabytes);
    }

    static fromTerabytes(terabytes: number): Bytes {
        // * 1024 to the power of 4
        return new Bytes(Math.pow(1024, 4) * terabytes);
    }

    static fromPetabytes(petabytes: number): Bytes {
        // * 1024 to the power of 5
        return new Bytes(Math.pow(1024, 5) * petabytes);
    }

    static fromExabytes(exabytes: number): Bytes {
        // * 1024 to the power of 6
        return new Bytes(Math.pow(1024, 6) * exabytes);
    }

    static fromZettabytes(zettabytes: number): Bytes {
        // * 1024 to the power of 7
        return new Bytes(Math.pow(1024, 7) * zettabytes);
    }

    static fromYottabytes(yottabytes: number): Bytes {
        // * 1024 to the power of 8
        return new Bytes(Math.pow(1024, 8) * yottabytes);
    }

    static fromBrontobytes(brontobytes: number): Bytes {
        // * 1024 to the power of 9
        return new Bytes(Math.pow(1024, 9) * brontobytes);
    }

    get kilobytes(): number {
        return this.bytes / 1024;
    }

    get megabytes(): number {
        return this.kilobytes / 1024;
    }

    get gigabytes(): number {
        return this.megabytes / 1024;
    }

    get terabytes(): number {
        return this.gigabytes / 1024;
    }

    get petabytes(): number {
        return this.terabytes / 1024;
    }

    get exabytes(): number {
        return this.petabytes / 1024;
    }

    get zettabytes(): number {
        return this.exabytes / 1024;
    }

    get yottabytes(): number {
        return this.zettabytes / 1024;
    }

    get brontobytes(): number {
        return this.yottabytes / 1024;
    }

    toString(): string {
        return `${this.bytes} bytes`;
    }

    toFormattedString(): string {
        const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB', 'BB'];
        let size = this.bytes;
        let i = 0;
        while (size >= 1024) {
            size /= 1024;
            i++;
        }
        return `${numberFormatter.format(size)} ${units[i]}`;
    }
}