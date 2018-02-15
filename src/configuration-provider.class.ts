import {Inject, Injectable} from "@angular/core";
import {DataConnectorConfig} from "octopus-connect";

@Injectable()
export class ConfigurationProvider {

    constructor(
        @Inject("configuration") public configuration:DataConnectorConfig
    ) {}
    
}