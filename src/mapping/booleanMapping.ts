import Mapping = require("./mapping");
import MappingBase = require("./mappingBase");
import MappingError = require("./mappingError");
import MappingFlags = require("./mappingFlags");
import Changes = require("./changes");

class BooleanMapping extends MappingBase {

    constructor() {
        super(MappingFlags.Boolean);
    }

    read(value: any, path: string, errors: MappingError[]): any {

        if(typeof value !== "boolean") {
            errors.push({ message: "Expected boolean.", path: path, value: value });
            return;
        }
        return value;
    }

    write(value: any, path: string, errors: MappingError[], visited: any[]): any {

        if(typeof value !== "boolean") {
            errors.push({ message: "Expected boolean.", path: path, value: value });
            return;
        }
        return value;
    }

    walk(value: any, path: string): void {

    }
}

export = BooleanMapping;